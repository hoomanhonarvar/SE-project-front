import React, { useState } from "react";
import  "./forget.css"
import "../Components/app.css"
import validator from 'validator'


function Forgetpass(){
  const [emailError, setEmailError] = useState('')
  const validateEmail = (e) => {
    var email = e.target.value
  
    if (validator.isEmail(email)) {
      setEmailError('')
    } else {
      setEmailError(' پست الکترونیک نامعتبر ')
    }
  }
  

return(<>

<div className="Formbox">

  
  <div className="boxformation">
  
<form action ="" method="post"  className="signupdet">
<div className="LOGOFORFORM">

</div>


<div className="Details">لطفا جهت بازیابی رمز عبور، پست الکترونیک خود را وارد کنید</div>
<div className="mb-4">

  <label htmlFor="Email">پست الکترونیک</label>
  
  <input type="text" id="userEmail" required className="Formcontrol"
        onChange={(e) => validateEmail(e)}></input>

<div style={{
          color: 'red',
        }}>{emailError}</div>
</div>

<button type="submit" class="btn btn-primary">ثبت</button>

</form>
</div>
</div>


<div className="Colorbox"></div>

</>)

}

export default Forgetpass;