import React from 'react';
import './App.css';
import Button from './../Button/Button'
import Admin_login from './../../pages/Admin_login/Admin_login';
import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home_page from '../../pages/Home_page/Home_page';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import Navbar from './../NavBar/NavBar';
import Customersignin from '../../pages/Customer_signin/Customer_signin';
import Admindashboard from "./../../pages/Admin-dashboard/Admin-dashboard"
import SignUp_Details from '../../pages/SignUpDetails/SignUpDetails';
import NotFound from '../../pages/404/NotFound';
import Contating from '../../pages/ContactUss/contact';
import { sweet } from '../../pages/Pardakht movafagh/Secssufully_pay';
import { sweet2 } from '../../pages/Pardakht_namofagh/pardakh_namof';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar />

        <Switch>
          <Route exact path='/'>
            <Home_page />
          </Route>
          
          <Route exact path='/contactUss'>
            <Contating/>
          </Route>
          <Route exact path='/pardakht_movafagh'>
            <sweet/>
          </Route>
          <Route exact path='/pardakht_namovafagh'>
            <sweet2/>
          </Route>
          <Route path='/SignUpDetails'>
              <SignUp_Details />
          </Route>
          <Route path='/Admin-login'>
            <Admin_login />

          </Route>
          <Route path="/Customer_signin"> 
              <Customersignin />
          </Route>
          <Route path="/Admin_dashboard">
              <Admindashboard />
          </Route>
          <Route exact path='/*'>
            <NotFound />
          </Route>
        </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
