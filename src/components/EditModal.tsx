import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonModal,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { FC, FormEvent, useEffect, useState } from "react";

interface EditModalProps {
  isOpen: boolean;
  todo: { id: number; title: string };
  onClose: () => void;
  onSave: (id: number, newTitle: string) => void;
}

const EditModal: FC<EditModalProps> = ({ isOpen, todo, onClose, onSave }) => {
  const [newTitle, setNewTitle] = useState(todo.title);

  useEffect(() => {
    setNewTitle(todo.title);
  }, [todo]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSave(todo.id, newTitle);
    onClose();
  };

  return (
    <IonModal isOpen={isOpen} onDidDismiss={onClose}>
      <IonHeader>
        <IonToolbar color="secondary">
          <IonTitle>Edit Todo</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => onClose()}>Close</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <form onSubmit={handleSubmit}>
          <IonInput
            value={newTitle}
            onIonChange={(e) => setNewTitle(e.detail.value!)}
          />
          <IonButton
            expand="block"
            type="submit"
            color="light"
            className="ion-margin-top"
          >
            Edit Todo
          </IonButton>
        </form>
      </IonContent>
    </IonModal>
  );
};

export default EditModal;
