import React from 'react';
import './App.css';
import Button from './../Button/Button'
import Admin_login from './../../pages/Admin_login/Admin_login'
import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom'
import Navbar from './../NavBar/NavBar'
import Customersignin from '../../pages/Admin_login/Customer_signin/Customer_signin';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar />

        <Switch>
          <Route exact path='/'>
          </Route>
          <Route path='/Admin-login'>
            <Admin_login />

          </Route>
          <Route path="/Customer_signin"> 
              <Customersignin />
          </Route>
        </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
