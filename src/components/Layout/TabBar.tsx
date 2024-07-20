import { FC } from "react";
import { IonIcon, IonLabel, IonTabBar, IonTabButton } from "@ionic/react";
import { checkmarkDone, list, settings } from "ionicons/icons";

const TabBar: FC = () => {
  return (
    <IonTabBar slot="bottom">
      <IonTabButton tab="home" href="/home">
        <IonIcon aria-hidden="true" icon={list} />
        <IonLabel>List</IonLabel>
      </IonTabButton>
      <IonTabButton tab="complete" href="/complete">
        <IonIcon aria-hidden="true" icon={checkmarkDone} />
        <IonLabel>Completed</IonLabel>
      </IonTabButton>
      <IonTabButton tab="settings" href="/settings">
        <IonIcon aria-hidden="true" icon={settings} />
        <IonLabel>Settings</IonLabel>
      </IonTabButton>
    </IonTabBar>
  );
};

export default TabBar;
