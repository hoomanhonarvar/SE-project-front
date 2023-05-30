import React from "react";
import styles from "./Customer_signin.css"
import logo from "./Full-logo.jpg"
import PhonenumberFrom from "../../Component/Forms/phoneNumber"
function CustomerSignin(){

return(<>
<div style={{backgroundColor: "white"}}>

<div className="Formbox">

  
  <div className="boxformation">
  
<form className="signupdet">
<div className="LOGOFORFORM">
  <img src={logo} style={{width: "370px", borderRadius: "10px", height: "170px"}}/>
</div>
<div className="mb-3">
<label htmlFor="ID">شماره تلفن همراه</label>
<br></br>
  {PhonenumberFrom()}
</div>

<div className="mb-3">
  <label htmlFor="ID">رمز عبور</label>
  <br></br>
  <input id="ID" className="Formcontrol" type="password" />
</div>

<div style={{backgroundColor: "white"}}>


<button type="button" class="btn btn-primary">ورود</button>

</div>
</form>
</div>
</div>

<div className="Colorbox"></div>
</div>
</>)

}

export default CustomerSignin;