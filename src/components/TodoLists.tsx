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

interface TodoListsProps {
  completed: boolean;
}
const TodoLists: FC<TodoListsProps> = ({ completed }) => {
  const { todos, completeTodo, deleteTodo } = useTodo();
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>([]);

  useEffect(() => {
    setFilteredTodos(todos.filter((todo) => todo.completed === completed));
  }, [todos, completed]);

  return (
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
              {todo.title} {todo.completed}
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
            <IonItemOption color="warning" expandable>
              <IonIcon icon={pencil} />
            </IonItemOption>
          </IonItemOptions>
        </IonItemSliding>
      ))}
    </IonList>
  );
};

export default TodoLists;
