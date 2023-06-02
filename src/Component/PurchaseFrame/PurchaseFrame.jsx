import React from "react";
import "./PurchaseFrame.css"
import SetQuantity from "../SetQuantity/SetQauntity";
import { NavLink } from "react-bootstrap";
import { useState } from "react";
import { FaTrashAlt } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';

function PurchaseFrame(product){

  const{id,colors,stock}=product;
  const [total, setTotal] = useState(0.0);

  // const[color,SetColor]= useState(colors[0]);
  var[amount,SetAmount]=useState(1);

  const setDecrease =()=>{
    amount > 1 ? SetAmount(amount--):SetAmount(1);

  };

  const setIncrease =()=>{
    amount < stock ? SetAmount(amount++):SetAmount(stock);

  };
return(<>
<div className="Frame">
<div className="SetQuantity">
<SetQuantity
amount={amount}
setDecrease={setDecrease}
setIncrease={setIncrease}/>
  <NavLink>
{/* to cart */}
  </NavLink>

  
</div>
<div className="details-write">
  <label htmlFor="">
    توضیحات
  </label>
 
  <textarea name="details" cols="30" rows="5" placeholder="اینجا تایپ کنید"></textarea>


</div>

<div className="checkoutbtn">

  <button id="Checkout" className="btn">تسویه حساب</button>
  <button id="AddtoCart" className="btn">افزودن به سبد خرید</button>


</div>


<div className="supportbtn">
  <button type="submit" className="BTN" id="Garbage">  <span className="labling"> حذف </span>    <FaTrashAlt /></button>
  <button type="submit" className="BTN" id="Wishlist"><span className="labling"> افزودن به لیست آرزو ها </span> <FaRegHeart /></button>

</div>


</div>

</>)

}

export default PurchaseFrame;