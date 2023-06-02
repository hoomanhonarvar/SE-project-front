import React from "react";
import styles from "./SignUpDetails.css"
import "../../Component/App/App.css"
function SignUp_Details(){

return(<>
<div className="panel">

<div className="Formbox">
  <div className="boxformation">
  
<form className="signupdet">
<div className="LOGOFORFORM"></div>
<div className="mb-3">
  <label htmlFor="Name&FamilyName">نام و نام خانوادگی</label>
  <input id="Name&FamilyName" className="Formcontrol" type="text" />
</div>

<div className="mb-3">
  <label htmlFor="ID">کد ملی</label>
  <input id="ID" className="Formcontrol" type="text" />
</div>

<div className="mb-3">
  <label htmlFor="Email">پست الکترونیک</label>
  <input id="Email" className="Formcontrol" type="text" />
</div>
<div className="mb-3">
  <label htmlFor="ZIPcode">کد پستی</label>
  <input id="ZIPcode" className="Formcontrol" type="text" />
</div>


<div className="mb-3">
  <label htmlFor="BirthDate">تاریخ تولد</label>
  <input id="BithDate" className="Formcontrol" type="date" />
</div>

<div style={{backgroundColor: "white"}}>


<button type="button" class="btn btn-primary">ثبت اطلاعات</button>

</div>
</form>
</div>
</div>

<div className="Colorbox"></div>
</div>
</>)

}

export default SignUp_Details;