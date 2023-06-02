import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoSearch } from "react-icons/io5";
import img2 from "./notification.png";
import image3 from "./user.png";
import datkMode from "../../Component/Button/dark&brightMode.png";
import {Link} from 'react-router-dom'
import "./Admin-dashboard.css"
const Admindashboard=()=>{
    document.body.style.backgroundColor = "#0e1225";
    return(
      <div className="row" style={{padding:'20px'}}>
        <div style={{direction:'rtl'}} className="col-md-10">
            <div className="input-group">   
                <input type="text" className="" style={{backgroundColor:'#0e1225',borderRadius:'20px',marginRight:'20%'}} placeholder="جستجو کنید" />
                <IoSearch style={{fontSize:'35px',color:'whitesmoke'}}/>
                <button style={{background:"none",marginRight:"35%"}} >
                       <img src={img2} alt="image" />
                </button> 
            </div>
        </div>
        <div className="col-md-2" style={{direction:'rtl',borderLeft:'inset'}}>
            <div className="container">
                <div className="container">
            <button style={{background:"none"}} >
            <img style={{width:'65%',marginBottom:'5%',paddingTop:'20%'}} src={image3} alt="image" />
            <br />
            <h5 style={{color:'white',fontSize:'32px',margin:'10px 0px'}}>ادمین</h5>
            </button>
            <button type="button" style={{ padding:"10px !important",display:'block',color:'white',fontSize:'20px',backgroundColor:'#363946'}} cxlass="btn btn-outline-dark bt">ویرایش</button>
            </div>
            </div>
            <br />
            <br />
            <br />
     
            <div className="buttons-list">
            <Link to='/Admin_dashboard'>
            <button type="button" class="btn btn-secondary  btn-block BT" style={{backgroundColor:'#363946',width:'80%'}}>
                داشبورد
            </button>
            </Link>
            <Link to ="/Activities">
            <button type="button" class="btn btn-secondary  btn-block BT" style={{backgroundColor:'#363946',width:'80%'}}>
                فعالیت ها
            </button>
            </Link>
            <Link to='/Admin_dashboard'>
            <button type="button" class="btn btn-secondary  btn-block BT" style={{backgroundColor:'#363946',width:'80%'}}>
                برنامه ها
            </button>
            </Link>
            <Link to='/Admin_dashboard'>
            <button type="button" class="btn btn-secondary  btn-block BT" style={{backgroundColor:'#363946',width:'80%'}}>
                تنظیمات
            </button>
            </Link>
            </div>
         

            <div style={{textAlign:'center'}} >
            <img src={datkMode} style={{width:'35%'}} />
            </div> 



        </div>   
        
       
      </div>
    );


};
export default Admindashboard