import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoContextPropsType {
  todos: Todo[];
  isOpen: boolean;
  addTodo: (title: string) => void;
  updateTodo: (id: number, title: string) => void;
  deleteTodo: (id: number) => void;
  completeTodo: (id: number) => void;
  setOpen: (isOpen: boolean) => void;
}
const defaultTodos: Todo[] = [
  { id: 1, title: "Complete project setup", completed: false },
  { id: 2, title: "Review pull requests", completed: false },
  { id: 3, title: "Plan the next sprint", completed: false },
];

export const TodoContext = createContext<TodoContextPropsType>({
  todos: [],
  isOpen: false,
  addTodo: () => {},
  updateTodo: () => {},
  deleteTodo: () => {},
  completeTodo: () => {},
  setOpen: () => {},
});

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const localData = localStorage.getItem("todos");
    return localData ? JSON.parse(localData) : defaultTodos;
  });
  const [isOpen, setOpen] = useState<boolean>(false);

  // Use useEffect to store todos in localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title: string) => {
    const newTodo = { id: Date.now(), title, completed: false };
    setTodos([newTodo, ...todos]);
  };
  const updateTodo = (id: number, title: string) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, title } : todo)));
  };
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const completeTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };
  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        updateTodo,
        deleteTodo,
        completeTodo,
        setOpen,
        isOpen,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  return useContext(TodoContext);
};
