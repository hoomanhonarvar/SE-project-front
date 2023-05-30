import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoSearch } from "react-icons/io5";
import Image01 from "./Cart.png";
import img2 from "./notification.png";
import image3 from "./user.png";
import datkMode from "../../Component/Button/dark&brightMode.png";

const Coutomrtpanel=()=>{
    return(
      <dvi className="row" style={{padding:'20px'}}>
        <div style={{direction:'rtl'}} className="col-md-10">
            <div className="input-group">   
                <input type="text" className="" style={{backgroundColor:'#0e1225',borderRadius:'20px',marginRight:'20%'}} placeholder="جستوجو کنید" />
                <IoSearch style={{fontSize:'35px',color:'whitesmoke'}}/>
                <button style={{background:"none",marginRight:"35%"}} >
                       <img src={img2} alt="image" />
                </button>
                <button style={{background:"none",marginRight:"2%"}} >
                    <img src={Image01} alt="image" />
                </button>   
            </div>
        </div>
        <div className="col-md-2" style={{direction:'rtl',borderLeft:'inset'}}>
            <div className="container">
                <div className="container">
            <button style={{background:"none",marginRight:"5%"}} >
            <img style={{width:'65%',marginBottom:'5%',paddingTop:'20%'}} src={image3} alt="image" />
            <br />
            <h5 style={{color:'white'}}>مشتری</h5>
            </button>
            <button type="button" style={{display:'block',marginRight:'25%',color:'white',marginTop:'10px',fontSize:'65%'}} class="btn btn-outline-dark">ویرایش</button>
            </div>
            </div>
            <br />
            <br />
            <br />
     
            <button type="button" class="btn btn-secondary  btn-block" style={{backgroundColor:'#363946',width:'100%',marginBottom:'5%'}}>
                داشبورد
            </button>
            <br />
            <button type="button" class="btn btn-secondary  btn-block" style={{backgroundColor:'#363946',width:'100%',marginBottom:'5%'}}>
                فعالیت ها
            </button>
            <br />

            <button type="button" class="btn btn-secondary  btn-block" style={{backgroundColor:'#363946',width:'100%',marginBottom:'5%'}}>
                تکمیل اطلاعات شخصی
            </button>
            <br />
            <button type="button" class="btn btn-secondary  btn-block" style={{backgroundColor:'#363946',width:'100%'}}>
                تنظیمات
            </button>
            <br />
            <br />

            <div style={{textAlign:'center'}} >
            <img src={datkMode} style={{width:'35%'}} />
            </div> 



        </div>   
        
       
      </dvi>
    );


};
export default Coutomrtpanel