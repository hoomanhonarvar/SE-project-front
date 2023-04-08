
import './App.css';
import Header from './Header';
import Menu from './Components/Dashboard/Menu/Menu';
import Dashboard from './Components/Dashboard/Dashboard';
import Footer from './Footer';
import Information from './Information';



function App() {
  // const name = "mahdi"
  // const temp = `my name is ${name}`
  return (
  <div  className="wrapper"  >
    {/* <img src={Logo} /> */}
    <Header/>
      <Menu/>
      <Dashboard/>
     {/* {name} */}
     {/* <Information/>*/}
     {/* <button type="button" class="btn btn-primary">Primary</button>
     */}
     {/* <div class="spinner-border" role="status">
  <span class="sr-only">Loading...</span>
</div> */}
      <Footer/>
  </div>
  );
}

export default App;
