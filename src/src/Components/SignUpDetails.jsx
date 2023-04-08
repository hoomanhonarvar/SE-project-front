import React from "react";
import app from "./app.css"
function SignUp_Details(){

//   handlesubmit=(e)=>{
// e.preventDefault();
// console.log("submitted");
//   }
return(<>

<div className="Formbox">
<form>
<div className="mb-3">
  <label htmlFor="Name&FamilyName">نام و نام خانوادگی</label>
  <br></br>
  <input id="Name&FamilyName" className="Formcontrol" type="text" />
</div>

<div className="mb-3">
  <label htmlFor="ID">کد ملی</label>
  <br></br>
  <input id="ID" className="Formcontrol" type="text" />
</div>

<div className="mb-3">
  <label htmlFor="Email">پست الکترونیک</label>
  <br></br>
  <input id="Email" className="Formcontrol" type="text" />
</div>
<div className="mb-3">
  <label htmlFor="ZIPcode">کد پستی</label>
  <br></br>
  <input id="ZIPcode" className="Formcontrol" type="text" />
</div>


<div className="mb-3">
  <label htmlFor="ZIPcode">کد پستی</label>
  <br></br>
  <input id="ZIPcode" className="Formcontrol" type="text" />
</div>

<button type="button" class="btn btn-primary">ثبت اطلاعات</button>

</form>
</div>


<div className="Colorbox"></div>

</>)

}

export default SignUp_Details;