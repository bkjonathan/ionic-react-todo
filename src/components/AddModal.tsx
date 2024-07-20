import { FC, FormEvent, useState } from "react";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonModal,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useTodo } from "../contexts/TodoContext";

const AddModal: FC = () => {
  const { isOpen, setOpen, addTodo } = useTodo();
  const [title, setTitle] = useState<string>("");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTodo(title);
    setTitle("");
    setOpen(false);
  };
  return (
    <IonModal isOpen={isOpen}>
      <IonHeader>
        <IonToolbar color="secondary">
          <IonTitle>Add Todo</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => setOpen(false)}>Close</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <form onSubmit={handleSubmit}>
          <IonItem>
            <IonLabel>Title</IonLabel>
            <IonInput
              value={title}
              onIonChange={(e) =>
                e.detail.value ? setTitle(e.detail.value) : setTitle("")
              }
            ></IonInput>
          </IonItem>
          <IonButton
            expand="block"
            type="submit"
            color="light"
            className="ion-margin-top"
          >
            Add Todo
          </IonButton>
        </form>
      </IonContent>
    </IonModal>
  );
};

export default AddModal;
