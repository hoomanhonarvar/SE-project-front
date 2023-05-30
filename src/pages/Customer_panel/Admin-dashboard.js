import React from "react";
import ColumnChart from "./Column Chart";
import "./Admin-dashboard.css";
import inbox from "./inbox.png";
import empty from "./empty.png";
import { IoSearch } from "react-icons/io5";
import { MdBatteryChargingFull, MdOutlineNotificationsActive } from "react-icons/md";
import { IoEllipseSharp } from "react-icons/io5";
import { TbRectangleFilled } from "react-icons/tb";
import { BsPersonCircle } from "react-icons/bs";
import Button from "../../Component/Button/Button";
import datkMode from "../../Component/Button/dark&brightMode.png";
import Image01 from "./Cart.png";
import img2 from "./notification.png";
import linig from "./lin4.jpg";
import {Link} from 'react-router-dom'

const Admindashboard2 = () => {
  return (
    <div className="total">
      <div className="row">
        <div className="col-md-8">
        <div className="headers">
        <IoSearch className="searchIcon" />
        <input className="searchForm" placeholder="جستجو کنید" type="text" />
        <button style={{background:"none",marginRight:"20px"}} >
           <img src={img2} alt="image" />
        </button>
        <button style={{background:"none"}} >
           <img src={Image01} alt="image" />
        </button>
        <hr/>

         <div style={{textAlign:"end",display:"flex",marginTop:"3rem"}} className="row">
         <div className="col-6"> <p style={{color:"rgba(155, 160, 181, 0.8)"}}>سفارش ها</p></div>
          <div className="col-6"> <p style={{color:"rgba(155, 160, 181, 0.8)"}}>اطلاعات مشتری</p></div>
          
          </div>
      </div>
      <hr/>
      <img src={linig} style={{width:"79%",marginTop:"5rem",marginLeft:"0.5rem"}}  />
        </div>
        <div className="col-md-4">
       
      
      <div className="sidebar">
        <BsPersonCircle className="person" />
        <h3 className="name">مشتری</h3>
        <button className="edit">ویرایش</button>
        <div className="buttonList">
          <Link exact path to ="/">
          <Button className="btn1">خانه </Button>
          </Link>
          <Button className="btn2">داشبورد</Button>
          <Link to ="/SignUpDetails">
          
          <Button className="btn3">تکمیل اطلاعات</Button>
          </Link>
          <Button className="btn4">تنظیمات</Button>
          <img src={datkMode} className="darkmode" />
        </div>
      </div>

        </div>
      </div>
      
     
    </div>
  );
};

export default Admindashboard2;
