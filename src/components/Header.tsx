import { FC } from "react";
import { IonHeader, IonSearchbar, IonTitle, IonToolbar } from "@ionic/react";

const Header: FC = () => {
  return (
    <IonHeader style={{ boxShadow: "none" }}>
      <IonToolbar>
        <IonTitle>Todo List</IonTitle>
      </IonToolbar>
      <IonToolbar>
        <IonSearchbar></IonSearchbar>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
