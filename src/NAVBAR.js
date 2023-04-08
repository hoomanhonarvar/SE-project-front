
import app from "./app.css"
import { FaShoppingCart,FaUser,FaSearch  } from "react-icons/fa";
function NAVBAR(){
  const list = ['فروشگاه ','استوک','مردانه'];
  
  return(
    <>

<div className="NAVBAR">
  <div id="NAV1-icons" >
    <div className="ICONS">
    <FaShoppingCart/>
    </div>
    <div className="ICONS">
    <FaSearch/>
    </div>
    <div className="ICONS">
    <FaUser/>
    </div>

  <div>
  </div>

  </div>
  <div className="NAV2">
  <ul>
  {list.map((item,index)=> <li key={index}>{item}</li>)}
  </ul>
  </div>

</div>
    </>
  )
}

export default NAVBAR;