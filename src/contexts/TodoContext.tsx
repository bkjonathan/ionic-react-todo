import { createContext, ReactNode, useContext, useState } from "react";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoContextPropsType {
  todos: Todo[];
  addTodo: (title: string) => void;
  updateTodo: (id: number, title: string) => void;
  deleteTodo: (id: number) => void;
  completeTodo: (id: number) => void;
}

export const TodoContext = createContext<TodoContextPropsType>({
  todos: [],
  addTodo: () => {},
  updateTodo: () => {},
  deleteTodo: () => {},
  completeTodo: () => {},
});

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

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
      value={{ todos, addTodo, updateTodo, deleteTodo, completeTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  return useContext(TodoContext);
};
