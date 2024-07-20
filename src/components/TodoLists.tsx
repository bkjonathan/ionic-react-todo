import { FC, useEffect, useState } from "react";
import { Todo, useTodo } from "../contexts/TodoContext";
import {
  IonCheckbox,
  IonIcon,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
} from "@ionic/react";
import { pencil, trash } from "ionicons/icons";
import "./TodoLists.css";
import EditModal from "./EditModal";

interface TodoListsProps {
  completed: boolean;
}
const TodoLists: FC<TodoListsProps> = ({ completed }) => {
  const { todos, completeTodo, deleteTodo, updateTodo } = useTodo();
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

  useEffect(() => {
    setFilteredTodos(todos.filter((todo) => todo.completed === completed));
  }, [todos, completed]);

  const promptEdit = (todo: Todo) => {
    setSelectedTodo(todo);
    setEditModalOpen(true);
  };
  return (
    <>
      <IonList>
        {filteredTodos.map((todo) => (
          <IonItemSliding key={todo.id}>
            <IonItem>
              <IonCheckbox
                slot="start"
                checked={todo.completed}
                onIonChange={() => completeTodo(todo.id)}
              />
              <IonLabel className={todo.completed ? "todo-completed" : ""}>
                {todo.title}
              </IonLabel>
            </IonItem>
            <IonItemOptions>
              <IonItemOption
                color="danger"
                onClick={() => deleteTodo(todo.id)}
                expandable
              >
                <IonIcon icon={trash} />
              </IonItemOption>
            </IonItemOptions>
            <IonItemOptions side="start">
              <IonItemOption
                color="warning"
                onClick={() => promptEdit(todo)}
                expandable
              >
                <IonIcon icon={pencil} />
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
        ))}
      </IonList>
      {selectedTodo && (
        <EditModal
          isOpen={editModalOpen}
          todo={selectedTodo}
          onClose={() => setEditModalOpen(false)}
          onSave={(id, newTitle) => {
            updateTodo(id, newTitle);
            setEditModalOpen(false);
          }}
        />
      )}
    </>
  );
};

export default TodoLists;
