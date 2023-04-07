import app from "./app.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import CCarousel from '@coreui/react/src/components/carousel/CCarousel'
import '@coreui/coreui/dist/css/coreui.min.css'



function App(){ 
  const list = ['فروشگاه ','استوک','مردانه'];
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


<div className="NAVBAR">
  <div id="NAV1" >

  <div>
  <FontAwesomeIcon icon="fa-light fa-user"/>
  </div>

  </div>
  <div className="NAV2">
  <ul>
  {list.map((item,index)=> <li key={index}>{item}</li>)}
  </ul>
  </div>

</div>

<CCarousel controls indicators>
  <CCarouselItem>
    <CImage className="d-block w-100" src={ReactImg} alt="slide 1" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src={VueImg} alt="slide 2" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src={AngularImg} alt="slide 3" />
  </CCarouselItem>
</CCarousel>

<div className="Product-box" id="New Arivalls">
 <div className="heading"> 
 <button type="button" id="btn-1">مشاهده همه</button>
  <span id="NEW">تازه ترین ها</span>

  </div>
  
  {bestsellers.map((items,index)=><div className="product-card">
  <div className="productimg">
   {items}
  </div>
  <div className="productdetails">
    <span className="Name">کفش نایکی<br></br></span>
    <span className="brand">کفش نایکی</span>

    <button className="shopping-button">C</button>
  </div>
  </div> 
)}
</div>

<div className="Product-box" id="Best sellers">
<div className="heading"> 
 <button type="button" id="btn-1">مشاهده همه</button>
  <span id="BEST"> پر فروش ترین ها</span>
  </div>
  {bestsellers.map((items,index)=>
  <div className="product-card">
  <div className="productimg">
   
   {items}
  </div>
  <div className="productdetails">

    <span className="Name">کفش نایکی<br></br></span>
    <span className="brand">کفش نایکی</span>

    <button className="shopping-button">C</button>
  </div>


  </div> 
)}

</div>


<div className="FOOTER">


</div>
    </>
    
    

    );




}


 


export default App;