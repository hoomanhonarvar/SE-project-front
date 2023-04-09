import App from "./../../Component/App/App.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
// import '@coreui/coreui/dist/css/coreui.min.css'
import { FaShoppingCart  } from "react-icons/fa";
// import Carousel from "./Carousel";
import UncontrolledExample from "./Carousel";
import CAT_BOX from "./Category-box";
import Carousel from 'react-bootstrap/Carousel';
 
function HOME(){ 
 
  let bestsellers=[1,2,3,4,5];
  let NewArivalls=[1,2,3,4,5];
  
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

return(<>


{/* <Carousel/> */}
<div           style={{height: 500 ,margin: "auto"}}>
<UncontrolledExample/>

</div>

<div className="Product-box" id="New Arivalls">
 <div className="heading"> 
 <button type="button" id="btn-1">مشاهده همه</button>
  <span id="NEW">تازه ترین ها</span>

  </div>
  
  {bestsellers.map((items,index)=><div className="product-card">
  <div className="productimg">
   {items}
   <img src={require('./img/2.png').default} />
  </div>
  <div className="productdetails">
  <button className="shopping-button"><FaShoppingCart/></button>
    <span className="Name">کفش نایکی<br></br><span className="brand">کفش نایکی</span>
</span> 
  </div>
  </div> 
)}
</div>

<div className="Product-box" id="Best sellers">
<div className="heading"> 
 <button type="button" id="btn-1">مشاهده همه</button>
  <span id="BEST"> پر فروش ترین ها</span>
  </div>
  {bestsellers.map((items,index)=><div className="product-card">
  <div className="productimg">
   {items}
   <img src={require('./img/2.png').default} />
  </div>
  <div className="productdetails">
  <button className="shopping-button"><FaShoppingCart/></button>
    <span className="Name">کفش نایکی<br></br><span className="brand">کفش نایکی</span>
</span> 
  </div>
  </div> 
)}




</div>

<CAT_BOX/>

    </>
    
    

    );




}


 


export default HOME;