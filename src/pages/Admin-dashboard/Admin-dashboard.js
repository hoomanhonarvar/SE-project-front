import React from "react";
import ColumnChart from "./Column Chart";
import "./Admin-dashboard.css";
import inbox from "./inbox.png";
import empty from "./empty.png";
import { IoSearch } from "react-icons/io5";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { IoEllipseSharp } from "react-icons/io5";
import { TbRectangleFilled } from "react-icons/tb";
import { BsPersonCircle } from "react-icons/bs";
import Button from "../../Component/Button/Button";
import datkMode from "../../Component/Button/dark&brightMode.png";

const Admindashboard = () => {
  return (
    <div className="total">
      <div className="headers">
        <IoSearch className="searchIcon" />
        <input className="searchForm" placeholder="جستجو کنید" type="text" />
        <MdOutlineNotificationsActive className="notifications" />
        <IoEllipseSharp className="ellipse" />
      </div>
      <ColumnChart />
      <img src={inbox} className="inbox" />
      <img src={empty} className="empty" />
      <TbRectangleFilled className="rectangle" />
      <div className="sidebar">
        <BsPersonCircle className="person" />
        <h3 className="name">ادمین</h3>
        <button className="edit">ویرایش</button>
        <div className="buttonList">
          <Button>داشبورد</Button>
          <Button className="btn2">فعالیت ها</Button>
          <Button className="btn3">برنامه ها</Button>
          <Button className="btn4">تنظیمات</Button>
          <img src={datkMode} className="darkmode" />
        </div>
      </div>
    </div>
  );
};

export default Admindashboard;
