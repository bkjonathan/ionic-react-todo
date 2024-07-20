import { FC } from "react";
import { useTodo } from "../contexts/TodoContext";
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

const TodoLists: FC = () => {
  const { todos, completeTodo } = useTodo(); // Assuming useTodo returns an object with a todos array

  const toggleTodoComplete = (id: number) => {
    // Assuming you have a function to toggle the todo complete status
    completeTodo(id);
  };
  return (
    <IonList>
      {todos.map((todo) => (
        <IonItemSliding key={todo.id}>
          <IonItem>
            <IonCheckbox
              slot="start"
              checked={todo.completed}
              onIonChange={() => toggleTodoComplete(todo.id)}
            />
            <IonLabel className={todo.completed ? "todo-completed" : ""}>
              {todo.title} {todo.completed}
            </IonLabel>
          </IonItem>
          <IonItemOptions>
            <IonItemOption color="danger">
              <IonIcon icon={trash} />
            </IonItemOption>
          </IonItemOptions>
          <IonItemOptions side="start">
            <IonItemOption>
              <IonIcon icon={pencil} />
            </IonItemOption>
          </IonItemOptions>
        </IonItemSliding>
      ))}
    </IonList>
  );
};

export default TodoLists;
