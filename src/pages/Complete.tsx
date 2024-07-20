import { IonContent, IonPage } from "@ionic/react";
import Header from "../components/Header";
import TodoLists from "../components/TodoLists";

const Complete: React.FC = () => {
  return (
    <IonPage>
      <Header title="Completed List" />
      <IonContent fullscreen>
        <TodoLists completed={true} />
      </IonContent>
    </IonPage>
  );
};

export default Complete;
