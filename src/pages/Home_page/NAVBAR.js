
import App from "./../../Component/App/App.css"
import { FaShoppingCart,FaUser,FaSearch  } from "react-icons/fa";
import {Link} from 'react-router-dom'
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
      <Link to="/Customer_signin">
        <FaUser/>
      </Link>
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