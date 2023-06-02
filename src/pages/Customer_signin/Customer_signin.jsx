import React from "react";
import styles from "./Customer_signin.css"
import logo from "./Full-logo.jpg"
import PhonenumberFrom from "../../Component/Forms/phoneNumber"
import FormComponent from "../../Component/Forms/Email_validation"
import Submit from "../../Component/Submit/Submit_signin";
import {Link} from 'react-router-dom'
function CustomerSignin(){

return(<>
<div className="total">
<div  className="subtotal" style={{backgroundColor: "white"}}>
<div className="Formbox">

  <div className="boxformation">
  
<form className="signupdet">
<div className="LOGOFORFORM">
  <img src={logo} style={{width: "370px", borderRadius: "10px", height: "170px"}}/>
  <div className="mb-3">
  <label htmlFor="ID">پست الکترونیک</label>

  <input id="ID3" className="Formcontrol" type="email" />

</div>


</div>
<div className="mb-3">
<label htmlFor="ID">شماره تلفن همراه</label>

  {PhonenumberFrom()}
</div>


<div className="mb-3">
  <label htmlFor="ID">رمز عبور</label>

  <input id="ID1" className="Formcontrol" type="password" />
</div>



{/* 
<div>
  <div className="mb-3">
    <lable htmlFor="ID"></lable>
    <FormComponent />
  </div>

</div> */}



<div style={{backgroundColor: "white"}}>


<button type="Submit" class="btn btn-primary" onClick={Submit}>ورود</button>
<br></br><br></br>
</div>

<div style={{backgroundColor: "white"}}>

<Link to ="/Customer_signup">
<button type="button" class="btn btn-primary" >ساخت اکانت</button>
</Link>
<br></br><br></br>
</div>

<div style={{backgroundColor: "white"}}>

<Link to ="/ForgetPass">
<button type="button" class="btn btn-primary " >فراموشی رمز عبور</button>
</Link>
</div>

</form>
</div>
</div>


</div>

<div className="Colorbox"></div>
</div>

</>)

}

export default CustomerSignin;



