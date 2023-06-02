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
import CustomerSignup from '../../pages/Customer_singup/Customer_signup';
import Contating from '../../pages/contactUss/contact';
import Admindashboard2 from './../../pages/Customer_panel/Admin-dashboard';
import Cart from '../../pages/Cart/Cart';
import NotFound from '../../pages/404/NotFound';
import { sweet } from '../../pages/Pardakht movafagh/Secssefully_pay';
import { sweet2 } from '../../pages/Pardakht_namofagh/pardakh_namof';
import Shop from '../../pages/Shop/Shop';
import Coutomrtpanel from '../../pages/Customer_panel/CustomerPanel';
import Forgetpass_code from '../../pages/Forget_password/Forget_password_codes';
import Forgetpass from '../../pages/Forget_password/Forget_password';
import Exp from '../request/Post/example';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar />

        <Switch>
          <Route exact path='/'>
            <Home_page />
          </Route>
          <Route exact path='/123'>
            <Exp/>
          </Route>
          <Route exact path='/Shop'>
            <Shop/>
          </Route>
          
          <Route exact path='/Cart'>
            <Cart/>
          </Route>
          <Route exact path='/Customer_Panel'>
            <Coutomrtpanel />
          </Route>
          <Route exact path='/ContactUss'>
            <Contating />
          </Route>
          <Route path='/SignUpDetails'>
              <SignUp_Details />
          </Route>
          <Route exact path='/pardakht_movafagh'>
            <sweet></sweet>
          </Route>
          <Route exact path="/Pardakht_namovafagh">
            <sweet2/>
          </Route>
          <Route path='/Admin-login'>
            <Admin_login />

          </Route>
          <Route path="/Customer_signin"> 
              <Customersignin />
              
          </Route>
          <Route exact path="/ForgetPass">
                <Forgetpass />
          </Route>
          <Route exact path="/ForgetPasscode">
                <Forgetpass_code />
          </Route>
          <Route path="/Customer_signup"> 
              <CustomerSignup/>
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
