import React, { useEffect } from "react";
import styles from "./Customer_signup.css"
import logo from "./Full-logo.jpg"
import PhonenumberFrom from "../../Component/Forms/phoneNumber"
import FormComponent from "../../Component/Forms/Email_validation"
import Submit from "../../Component/Submit/Submit_signup";
import {Link} from 'react-router-dom'
import { useState } from "react";
// import { Axios } from "axios";
function CustomerSignup(){
const[email,setEmail]=useState("");
const [password,setPassword]=useState("");
const[password_confirm,setConfirm_pass]=useState("");
const [message,setMessage]=useState("");

// let handleSubmit=async(e)=>{
//   e.preventDefault();
//   const requsetOptions={
//     method:'POST',
//     headers:{'Content-Type':'application/json'},
//     body:JSON.stringify({
//       "email":email,
//       "password":password,
//       "password_confirm":password_confirm,
//     })
//   }
//   try{
//     let res= await fetch("http://127.0.0.1:8000/users/sign-up/",requsetOptions);
    
//     let resJson =await res.json();
//     if (res.status===200){
//       setEmail("");
//       setPassword("");
//       setConfirm_pass("");
//       setMessage("User created succesfully");
//     }else{
//       setMessage("Some error occured");
//     }

//   }catch(err){
//     console.log(err);
//   }

// };

const [comment,setComment]=useState("");
const handleSubmit= async (e)=>{

  e.preventDefault();
  const response = await fetch("http://127.0.0.1:8000/users/sign-up/",{
    method:'POST',
    // mode:'no-cors',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({
      "email":email,
      "password":password,
      "password_confirm":password_confirm
    })
  });
  const result= await response.json()
  console.log(result)
  if (result.status===200){
    setMessage("User created succesfully");
    setComment(result.JSON)
  }
  else{
    setMessage("Some error occured");
  }
}


return(<>

<div style={{backgroundColor: "white"}}>

<div className="Formbox">

  
  <div className="boxformation">
  
<form className="signupdet" onSubmit={handleSubmit}>
<div className="LOGOFORFORM">
  <img src={logo} style={{width: "370px", borderRadius: "10px", height: "170px"}}/>
  <div className="mb-3">
  <label htmlFor="ID">email</label>
  <br></br>
  <input id="ID3" className="Formcontrol" type="email" onChange={(e)=>setEmail(e.target.value)}/>
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
  <input id="ID1" className="Formcontrol" type="password" onChange={(e)=>setPassword(e.target.value)}/>
</div>


<div className="mb-3">
  <label htmlFor="ID">تکرار رمز عبور</label>
  <br></br>
  <input id="ID1" className="Formcontrol" type="password" onChange={(e)=>setConfirm_pass(e.target.value)}/>
</div>


<div style={{backgroundColor: "white"}}>


<button type="Submit" class="btn btn-primary" >ثبت نام</button>
<br>
</br>

<br>
</br>
<Link to ="/Customer_signin">
  <button type="button" class="btn btn-primary" >ورود به اکانت</button>
</Link>
<br></br>
<br></br>
<div className="message">{message ? <p>{message}</p>:null}</div>
{/* <div className="message">{comment ? <p>{comment}</p>:null}</div> */}
{/* <div className="message">{result ? <p>{result}</p>:null}</div> */}

</div>
</form>

</div>
</div>
<div className="Colorbox"></div>
</div>
</>)

}

export default CustomerSignup;