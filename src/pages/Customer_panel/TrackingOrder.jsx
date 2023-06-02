import React from "react";
import "./TrackingOrder.css"
function TrackingOrder(){

  return(
    <>
        <div className="maindiv">
          <div className="btnNav">
            <label htmlFor="TrachingOrders"> پیگیری سفارش ها</label>
          </div>
          <div className="otd">
            <input className="inputs" type="text" placeholder="کد رهگیری خود را وارد نمایید"/>
            <button type="submit" className="otdcd">پیگیری</button>
            </div>          
        </div>
    </>
  )
}

export default TrackingOrder;