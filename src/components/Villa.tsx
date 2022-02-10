

import { IonButton,IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar , IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonAvatar,IonIcon,IonFabButton,IonFab, IonSearchbar, IonThumbnail, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';
import { useState } from 'react';
import {getVillas,deleteVilla} from '../services/VillasRESTAPI'
import React from 'react';
import { useHistory } from 'react-router';
import {location} from 'ionicons/icons'

const Villa = () => {
  const history = useHistory();
  const [villaList,setVilla] = useState([]);
  const loadVillas = async () =>{
    let tempData = await getVillas();
    setVilla(tempData);
    console.log("tempData:",tempData);
  }
 
  React.useEffect(() => {
    let unlisten = history.listen((location, action) => {
        loadVillas();
      });
      loadVillas();
      return(unlisten);
  }, []);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Villas</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      
       <IonList>
        {villaList.map((data:any)=>{
          return(
            <IonItem key={data.id}>

        <IonCard>
          <img src={data.image} />
          <IonCardHeader>
            <IonCardSubtitle>{data.title}</IonCardSubtitle>
            {/* <IonCardTitle>{data.price}</IonCardTitle> */}
            <p>{data.price}</p>
          </IonCardHeader>
          <IonCardContent>
           <IonIcon icon={location}/>{data.Location} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <IonButton color="danger" size='small'  >More</IonButton>
            <IonButton size='small' color="danger" >Book Villa</IonButton>
           


          </IonCardContent>
        </IonCard>
               
          </IonItem>
          
          )
        })}
        </IonList>        
         
        </IonContent>
    </IonPage>
  );
};

export default Villa;
