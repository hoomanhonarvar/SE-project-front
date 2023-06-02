import React, { useState } from "react";
import  "./forget.css"
import "../../Component/App/App.css"
import VerificationInput from "react-verification-input";
import {Link} from 'react-router-dom'


function Forgetpass_code(){

return(<>

<div className="Formbox">

  
  <div className="boxformation">
  
<form action ="" method="post"  className="signupdet">
<div className="LOGOFORFORM">

</div>


<div className="mb-4">

  <label htmlFor="Email">پست الکترونیک</label>
  
  <input type="text" id="userEmail" readOnly className="Formcontrol"></input>

</div>


<div className="mb-4">

  <label htmlFor="Password">کد تاییدیه</label>
  
  <VerificationInput
    classNames={{
      container: "container",
      character: "character",
      characterInactive: "character--inactive",
      characterSelected: "character--selected",
      
    }}
  />


</div>



<div className="mb-4">

  <label htmlFor="Password">رمز عبور </label>
  
  <input type="password" id="Password" required  className="Formcontrol"
        ></input>


</div>

<div className="mb-4">

  <label htmlFor="Password">تکرار رمز عبور </label>
  
  <input type="password" id="Password" required  className="Formcontrol"
        ></input>


</div>

<button type="submit" class="btn btn-primary">ثبت</button>

</form>
</div>
</div>


<div className="Colorbox"></div>

</>)

}

export default Forgetpass_code;