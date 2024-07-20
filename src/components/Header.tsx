import { FC } from "react";
import { IonHeader, IonSearchbar, IonTitle, IonToolbar } from "@ionic/react";

interface HeaderProps {
  title: string;
}
const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <IonHeader style={{ boxShadow: "none" }}>
      <IonToolbar>
        <IonTitle>{title}</IonTitle>
      </IonToolbar>
      <IonToolbar>
        <IonSearchbar></IonSearchbar>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
