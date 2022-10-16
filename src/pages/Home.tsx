import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonAvatar,
  IonImg,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import { useState, useEffect } from "react";
import "./Home.css";

const Home: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const url = "https://randomuser.me/api/?page=1&results=50&seed=abc";
      const data = await fetch(url);
      const json = await data.json();
      setData(json.results);
    };
    loadData();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {data.map((item: any, index) => (
            <IonItem key={index} routerLink={`details/${item.email}`}>
              <IonAvatar slot='start'>
                <IonImg src={item.picture.thumbnail} />
              </IonAvatar>
              <IonLabel>
                {item.name.first} {item.name.last}
                <p>{item.email}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
