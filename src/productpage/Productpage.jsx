import React from "react";
import NAVBAR from "../Components/NAVBAR";
import FOOTER from "../Components/FOOTER";
import './Productpage.css'
import '../Components/app.css'
import PurchaseFrame from "../Components/PurchaseFrame";
function Productpage(){


return(<>

<NAVBAR/>

<div className="Purch">
<PurchaseFrame/>
</div>




<FOOTER/>
</>);

}

export default Productpage;
