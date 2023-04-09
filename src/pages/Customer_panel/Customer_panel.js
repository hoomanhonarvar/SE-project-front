import './Customer_panel.css';
import Header from './Header';
import Menu from './Menu/Menu';
import Dashboard from './Dashboard/Dashboard';
import Footer from './Footer';
import Information from './information';

import reportWebVitals from './reportWevVirals'

const Customer_panel=()=> {
  // const name = "mahdi"
  // const temp = `my name is ${name}`
  return (
  <div  className="wrapper"  >
    {/* <img src={Logo} /> */}
    <Header/>
      <Menu/>
      <Dashboard/>
     {/* {name} */}
     <Information/>
     <button type="button" class="btn btn-primary">Primary</button>
    
     <div class="spinner-border" role="status">
  <span class="sr-only">Loading...</span>
</div>
      <Footer/>
  </div>
  
  );
  

}
reportWebVitals();
export default Customer_panel;