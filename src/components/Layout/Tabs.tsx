import { FC } from "react";
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { Redirect, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Complete from "../../pages/Complete";
import Settings from "../../pages/Settings";
import { checkmarkDone, list, settings } from "ionicons/icons";

const Tabs: FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/complete">
          <Complete />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>
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
    </IonTabs>
  );
};

export default Tabs;
