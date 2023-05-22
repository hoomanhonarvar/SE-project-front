import React from 'react';
import './App.css';
import Button from './../Button/Button'
import Admin_login from './../../pages/Admin_login/Admin_login'
import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home_page from '../../pages/Home_page/Home_page';
import NotFound from '../../pages/404/NotFound';
import Contating from '../../pages/contactUss/contact';
import ForgetPasswors from '../../pages/ForgetPassword/ForgetPass';
import ForgetPasswors2 from '../../pages/ForgetPassword/FrogetPassword2';
import Customer_panel from '../../pages/Customer_panel/Admin-dashboard';

import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom'
import Navbar from './../NavBar/NavBar'
import Customersignin from '../../pages/Customer_signin/Customer_signin';
import Admindashboard2 from '../../pages/Customer_panel/Admin-dashboard';
import Confriming from '../../pages/ForgetPassword/Confrimcode';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar />

        <Switch>
          <Route exact path='/'>
            <Home_page />
          </Route>
          <Route path='/Admin-login'>
            <Admin_login />
          </Route>
          <Route path='/ForgetPassword'>
            <ForgetPasswors />
          </Route>
          <Route path='/Comfirm'>
            <Confriming />
          </Route>
          <Route path='/ForgetPassword2'>
            <ForgetPasswors2 />
          </Route>
          <Route path="/Customer_signin"> 
              <Customersignin />
          </Route>
          <Route path="/contactUss"> 
              <Contating />
          </Route>
          <Route path="/Customer_panel"> 
              <Admindashboard2 />
          </Route>
          <Route path="*">
              <NotFound />
          </Route>
        </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
