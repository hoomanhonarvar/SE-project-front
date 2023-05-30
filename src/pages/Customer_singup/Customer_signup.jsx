import React from "react";
import styles from "./Customer_signup.css"
import logo from "./Full-logo.jpg"
import PhonenumberFrom from "../../Component/Forms/phoneNumber"
import FormComponent from "../../Component/Forms/Email_validation"
import Submit from "../../Component/Submit/Submit_signup";
import {Link} from 'react-router-dom'

function CustomerSignup(){


return(<>

<div style={{backgroundColor: "white"}}>

<div className="Formbox">

  
  <div className="boxformation">
  
<form className="signupdet">
<div className="LOGOFORFORM">
  <img src={logo} style={{width: "370px", borderRadius: "10px", height: "170px"}}/>
  <div className="mb-3">
  <label htmlFor="ID">email</label>
  <br></br>
  <input id="ID3" className="Formcontrol" type="email" />
  <br></br><br></br>
</div>

</div>
<div className="mb-3">
<label htmlFor="ID">شماره تلفن همراه</label>
<br></br>
  {PhonenumberFrom()}
</div>


<div className="mb-3">
  <label htmlFor="ID">رمز عبور</label>
  <br></br>
  <input id="ID1" className="Formcontrol" type="password" />
</div>


<div className="mb-3">
  <label htmlFor="ID">تکرار رمز عبور</label>
  <br></br>
  <input id="ID1" className="Formcontrol" type="password" />
</div>


<div style={{backgroundColor: "white"}}>


<button type="Submit" class="btn btn-primary" onClick={Submit}>ثبت نام</button>
<br>
</br>
<br>
</br>
<Link to ="/Customer_signin">
  <button type="button" class="btn btn-primary" >ورود به اکانت</button>
</Link>


</div>
</form>
</div>
</div>

<div className="Colorbox"></div>
</div>
</>)

}

export default CustomerSignup;