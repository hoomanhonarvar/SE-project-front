import React from "react";
import { FaPlus  } from "react-icons/fa";
import { FaMinus  } from "react-icons/fa";
import './SetQuantity.css'
function SetQuantity({amount,setDecrease,setIncrease}){
return(

  <>
<div className="frame">
<span>تعداد</span>
<div className="cart-button ">

  <div className="amount-toggle">
    <button onClick={()=> setDecrease()}> <FaMinus/> </button>
    <div className="amount-style">{amount}</div>  
    <button onClick={()=> setIncrease()}><FaPlus/></button>

  </div>
</div>
  </div>  
  


  </>
)

}

export default SetQuantity;