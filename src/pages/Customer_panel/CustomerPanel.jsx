import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoSearch } from "react-icons/io5";
import Image01 from "./Cart.png";
import img2 from "./notification.png";
import image3 from "./user.png";
import datkMode from "../../Component/Button/dark&brightMode.png";
import {Link} from 'react-router-dom'
import "./CustomerPanel.css"
import TrackingOrder from "./TrackingOrder";
const Coutomrtpanel=()=>{
    document.body.style.backgroundColor = "#0e1225";
    return(
      <dvi className="row-0" style={{padding:'20px'}}>
        <div style={{direction:'rtl'}} className="col-md-10">

            <div className="input-group">   
                <input type="text" className="" style={{backgroundColor:'#0e1225',borderRadius:'20px',color:'white',marginRight:'20%'}} placeholder="جستجو کنید" />
                <IoSearch style={{fontSize:'35px',color:'whitesmoke'}}/>
                <button style={{background:"none",marginRight:"35%"}} >
                       <img src={img2} alt="image" />
                </button>
                <Link to ='/cart'>
                <button style={{background:"none",marginRight:"2%"}} >
                    <img src={Image01} alt="image" />
                </button>   
                </Link>
            </div>


            <TrackingOrder />


        </div>
        <div className="col-md-2" style={{direction:'rtl',borderLeft:'inset'}}>
            <div className="container-1">
                <div className="container-1">
            <button style={{background:"none"}} >
            <img style={{width:'35%',marginBottom:'5%',paddingTop:'20%'}} src={image3} alt="image" />
            <br />
            <h5 style={{color:'white',fontSize:'32px',margin:'10px 0px'}}>مشتری</h5>
            </button>
            <Link to ="/SignUpDetails">
            <button type="button" style={{ display:'block',color:'white',fontSize:'20px',backgroundColor:'#363946',  padding:'5px 0px',width:'120%' , borderRadius:'15px'}} cxlass="btn btn-outline-dark bt">ویرایش</button>
            </Link>
            </div>
            </div>
     
            <div className="buttons-list">
            <button type="button" class="btn btn-secondary  btn-block BT" style={{backgroundColor:'#363946',width:'80%'}}>
            داشبورد
            </button>
      
            <button type="button" class="btn btn-secondary  btn-block BT" style={{backgroundColor:'#363946',width:'80%'}}>
            سفارش ها 
            </button>
           
            <Link to ="/SignUpDetails">
            <button type="button" class="btn btn-secondary  btn-block BT" style={{backgroundColor:'#363946',width:'80%'}}>
             تکمیل اطلاعات فردی
            </button>
            </Link>
            
            <button type="button" class="btn btn-secondary  btn-block BT" style={{backgroundColor:'#363946',width:'80%'}}>
            تنظیمات
            </button>
            </div>
         

            <div style={{textAlign:'center'}} >
            <img src={datkMode} style={{width:'35%'}} />
            </div> 



        </div>   
        
       
      </dvi>
    );


};
export default Coutomrtpanel