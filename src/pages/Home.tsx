import {
  IonButton,
  IonButtons,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonModal,
  IonPage,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { FC, useState } from "react";
import { add } from "ionicons/icons";

const Home: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <IonPage>
      <IonHeader style={{ boxShadow: "none" }}>
        <IonToolbar>
          <IonTitle>Todo List</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonSearchbar></IonSearchbar>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonModal isOpen={isOpen}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Modal</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => setIsOpen(false)}>Close</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              illum quidem recusandae ducimus quos reprehenderit. Veniam,
              molestias quos, dolorum consequuntur nisi deserunt omnis id illo
              sit cum qui. Eaque, dicta.
            </p>
          </IonContent>
        </IonModal>
        <IonFab horizontal="end" vertical="bottom" slot="fixed">
          <IonFabButton onClick={() => setIsOpen(true)}>
            <IonIcon icon={add}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Home;
