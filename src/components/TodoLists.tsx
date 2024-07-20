import { FC } from "react";
import { useTodo } from "../contexts/TodoContext";
import { IonItem, IonLabel, IonList } from "@ionic/react";

const TodoLists: FC = () => {
  const { todos } = useTodo(); // Assuming useTodo returns an object with a todos array

  return (
    <IonList>
      {todos.map((todo) => (
        <IonItem key={todo.id}>
          <IonLabel>{todo.title}</IonLabel>
        </IonItem>
      ))}
    </IonList>
  );
};

export default TodoLists;
