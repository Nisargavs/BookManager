// import { Redirect, Route } from 'react-router-dom';
// import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
// import { IonReactRouter } from '@ionic/react-router';
// import Home from './pages/Home';

// /* Core CSS required for Ionic components to work properly */
// import '@ionic/react/css/core.css';

// /* Basic CSS for apps built with Ionic */
// import '@ionic/react/css/normalize.css';
// import '@ionic/react/css/structure.css';
// import '@ionic/react/css/typography.css';

// /* Optional CSS utils that can be commented out */
// import '@ionic/react/css/padding.css';
// import '@ionic/react/css/float-elements.css';
// import '@ionic/react/css/text-alignment.css';
// import '@ionic/react/css/text-transformation.css';
// import '@ionic/react/css/flex-utils.css';
// import '@ionic/react/css/display.css';

// /* Theme variables */
// import './theme/variables.css';

// setupIonicReact();

// const App: React.FC = () => (
//   <IonApp>
//     <IonReactRouter>

//       <IonRouterOutlet>
//         <Route exact path="/home">
//           <Home />
//         </Route>
//         <Route exact path="/">
//           <Redirect to="/home" />
//         </Route>
//       </IonRouterOutlet>
//     </IonReactRouter>
//   </IonApp>
// );

// export default App;


import { IonApp, IonCard, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Page from './pages/Page';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import List from './components/List';

import DefaultPage from './components/DefaultPage';
import { AddBook } from './components/AddBook';
import Villa from './components/Villa'
// import {Profile} from './components/profile';
// import { AddCustomer } from './components/AddCustomer';
// import {CardExamples} from './components/IonCard';
// import { CheckboxExamples } from './components/CheckBox';
// import {BadgeExample} from './components/Budge'
// import { ChipExamples } from './components/Chip';
// import {AlertExample} from './components/Alert'
// import { ActionSheetExample } from './components/ActionSheet';
// import InfiniteScrollExample from './components/InfiniteScroll';
// import { ProgressbarExample } from './components/Progressbar';
// import { SearchBarExamples } from './components/SearchBar';
// import { ToastExample } from './components/Toast';
// import { ModalExample } from './components/Model';
// import Customers from './components/Customers';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
          <Route path="/List" exact={true}>
            <List />
            </Route>
            <Route path="/Villa" exact={true}>
            <Villa />
          </Route>
          <Route path="/AddBook" exact={true}>
            <AddBook />
          </Route>
          <Route path="/EditBook/:recordId" exact={true}>
            <AddBook />
          </Route>
          
          <Route path="/page/:name" exact={true}>
            <DefaultPage />
          </Route>
          <Route path="/" exact={true}>
            <Redirect to="/page/Inbox" />
          </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;

