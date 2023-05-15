import React from "react";
import NAVBAR from "./NAVBAR";
import FOOTER from "./FOOTER";
import HOME from "./Homepage";
import {sweet} from '../Pardakht movafagh/Secssefully_pay.jsx';
import {sweet2} from '../Pardakht_namofagh/pardakh_namof.jsx';
// import 'bootstrap/dist/css/bootstrap.min.css';



const Home_page=()=>{
  return(<>
  <div>
    <button id='forSweet' onClick={sweet}>
      پرداخت موفق
    </button>
    <button id='forSweet1' onClick={sweet2}>
      پرداحت ناموفق
    </button>

  </div>
  <NAVBAR/>
  <HOME/>
  <FOOTER/>
  </>);
}

export default Home_page;