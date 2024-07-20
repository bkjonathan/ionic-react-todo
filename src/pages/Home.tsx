import {
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonPage,
} from "@ionic/react";
import { FC } from "react";
import { add } from "ionicons/icons";
import { useTodo } from "../contexts/TodoContext";
import AddModal from "../components/AddModal";
import Header from "../components/Header";
import TodoLists from "../components/TodoLists";

const Home: FC = () => {
  const { setOpen } = useTodo();
  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <AddModal />
        <TodoLists />
        <IonFab horizontal="end" vertical="bottom" slot="fixed">
          <IonFabButton onClick={() => setOpen(true)}>
            <IonIcon icon={add}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Home;
