import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoSearch } from "react-icons/io5";
import Image01 from "./Cart.png";
import img2 from "./notification.png";
import image3 from "./user.png";

const Coutomrtpanel=()=>{
    return(
      <dvi className="row" style={{padding:'20px'}}>
        <div style={{direction:'rtl',marginRight:'10px'}} className="col-md-9">
            <div className="input-group">   
                <input type="text" className="" style={{backgroundColor:'#0e1225',borderRadius:'20px'}} placeholder="جستوجو کنید" />
                <IoSearch style={{fontSize:'35px'}}/>
                <button style={{background:"none",marginRight:"30%"}} >
                       <img src={img2} alt="image" />
                </button>
                <button style={{background:"none",marginRight:"5%"}} >
                    <img src={Image01} alt="image" />
                </button>   
            </div>
        </div>
        <div className="col-md-2" style={{direction:'rtl',borderLeft:'inset'}}>
            <div>
            <button style={{background:"none",marginRight:"5%"}} >
            <img style={{width:'65%',marginBottom:'18px',paddingTop:'60%'}} src={image3} alt="image" />
            <br />
            <h5 style={{color:'white'}}>مشتری</h5>
            </button>
            <button type="button" style={{display:'block',marginRight:'20%',color:'white',marginTop:'10px',fontSize:'65%'}} class="btn btn-outline-dark">ویرایش</button>
            </div>
            <br />
            <br />
            <br />
            <br />
            <button type="button" class="btn btn-secondary  btn-block">
                داشبورد
            </button>
            <br />
            <button type="button" class="btn btn-secondary  btn-block">
                فعالیت ها
            </button>
            <br />
            <button type="button" class="btn btn-secondary  btn-block">
               برنامه ها
            </button>
            <br />
            <button type="button" class="btn btn-secondary  btn-block">
                تنظیمات
            </button>




        </div>   
        
       
      </dvi>
    );


};
export default Coutomrtpanel