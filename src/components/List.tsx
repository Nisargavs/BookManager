



import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar , IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonAvatar,IonIcon,IonFabButton,IonFab, IonSearchbar, IonThumbnail } from '@ionic/react';
import { add, pencil, pencilSharp, trash, trashBin,} from 'ionicons/icons';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import Header from './Header';
import { useState } from 'react';
import {getBooks,deleteBook} from '../services/BooksRESTAPI'
import avtar from '../assets/bandit.png'
import React from 'react';
import { useHistory } from 'react-router';

interface myProps {
    random: number;
 }

 interface SearchbarChangeEventDetail {
  value?: string;
}

interface SearchbarCustomEvent extends CustomEvent {
  detail: SearchbarChangeEventDetail;
  target: HTMLIonSearchbarElement;
}

 interface myCustomer {
    id: any;
    title: string;
    author: string;
    publisher: string;
    isbn: string;
    year: any;
    cover: string
 }
 

const List = () => {
  const [searchText, setSearchText] = useState('');
  const history = useHistory();
  const [bookList,setBooks] = useState([]);
  const loadBooks = async () =>{
    let tempData = await getBooks();
    setBooks(tempData);
    console.log("tempData:",tempData);
  }
  const doDelete = async (id:any)=>{
    await deleteBook(id);
    loadBooks();
  }
  React.useEffect(() => {
    let unlisten = history.listen((location, action) => {
        loadBooks();
      });
      loadBooks();
      return(unlisten);
  }, []);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Book Manager</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonSearchbar onIonChange={e => setSearchText(e.detail.value!)} showCancelButton="focus"></IonSearchbar>
      {/* <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} showCancelButton="focus"></IonSearchbar> */}

       <IonList>
        {bookList.map((data:any)=>{
          return(
            <IonItem key={data.id}>
            <IonThumbnail slot="start">
              <img src={data.cover} />
            </IonThumbnail>
            <IonLabel>
            <h2><b>{data.title}</b></h2>
            <h3>{data.author}</h3>
            <h3>{data.publisher}</h3>
            <h3>{data.isbn}</h3>
            <h4><b>{data.year}</b></h4>
            </IonLabel>
              <IonIcon size={'10'} onClick={()=>{history.push('/EditBook/'+data.id)}} icon={pencil} />
              <IonIcon size={'10'} onClick={()=>{doDelete(data.id)}} icon={trash} />      
          </IonItem>
          
          )
        })}
        </IonList>        
          <IonFab vertical="bottom" horizontal="end"slot="fixed">   
          <a href="/AddBook" >
          <IonFabButton>
              <IonIcon icon={add}/>
            </IonFabButton>
            </a>
          </IonFab>
        </IonContent>
    </IonPage>
  );
};

export default List;
function setSearchText(arg0: string): void {
  throw new Error('Function not implemented.');
  
}