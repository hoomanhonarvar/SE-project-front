import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoSearch } from "react-icons/io5";
import img2 from "../notification.png";
import image3 from "../user.png";
import datkMode from "../../../../Component/Button/dark&brightMode.png";
import "./edit-order.css";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";

const Edit_order = () => {
  document.body.style.backgroundColor = "#0e1225";
  return (
    <div className="row" style={{ padding: "20px" }}>
      <div style={{ direction: "rtl" }} className="col-md-10">
        <div className="input-group">
          <input
            type="text"
            className=""
            style={{
              backgroundColor: "#0e1225",
              borderRadius: "20px",
              marginRight: "20%",
              color: "white",
              direction:"rtl"
            }}
            placeholder="جستجو کنید"
          />
          <IoSearch style={{ fontSize: "35px", color: "white" }} />
          <button style={{ background: "none", marginRight: "35%" }}>
            <img src={img2} alt="image" />
          </button>
        </div>
        <div className="tabs">
          <Link to="details">
            <button style={{ padding: "15px" }} className="tab1">
              جزئیات محصول
            </button>
          </Link>
          <Link to="details">
            <button style={{ padding: "15px" }} className="tab1">
              ویرایش محصول
            </button>
          </Link>
          <Link to="edit_order">
            <button style={{ padding: "15px" }} className="tab1">
              ویرایش سفارش
            </button>
          </Link>
        </div>
        <br />
        <div className="main">
          <div class="input-icon-wrap">
            <button>
              <IoSearchOutline />
            </button>
            <input
              type="text"
              class="input-with-icon"
              id="form-name"
              style={{direction:'rtl'}}
              placeholder="جستجو بر اساس شماره محصول،دسته بندی و...."
            />
          </div>
          <br />
          <div className="total">
            <div className="forms col-md-7 container">
              <label
                for="name"
                style={{ marginRight: "5px", color: "#ddd", fontSize: "16px" }}
              >
                نام محصول
              </label>
              <input
                type={"text"}
                name={"name"}
                style={{ width: "60%", borderRadius: "10px", height: "40px" }}
              ></input>
              <label for="category" style={{ marginRight: "5px", color: "#ddd", fontSize: "16px" }}>دسته بندی</label>
              <select
                name={"category"}
                style={{ width: "60%", borderRadius: "10px", height: "40px" }}
              >
                <option value={""}></option>
                <option value={"salon"}>سالن</option>
                <option value={"women"}>زنانه</option>
                <option value={"men"}>مردانه</option>
                <option value={"children"}>استوک</option>
              </select>
              <label for="gender" style={{ marginRight: "5px", color: "#ddd", fontSize: "16px" }}>جنسیت</label>
              <select
                name={"gender"}
                style={{ width: "60%", borderRadius: "10px", height: "40px" }}
              >
                <option value={""}></option>
                <option value={"female"}>زنانه</option>
                <option value={"male"}>مردانه</option>
              </select>
              <label for="brand" style={{ marginRight: "5px", color: "#ddd", fontSize: "16px" }}>برند</label>
              <select
                name={"brand"}
                style={{ width: "60%", borderRadius: "10px", height: "40px" }}
              >
                <option value={""}></option>
                <option value={"nike"}>نایکی</option>
                <option value={"adidas"}>آدیداس</option>
                <option value={"puma"}>پوما</option>
                <option value={"salomon"}>سالومون</option>
                <option value={"vetto"}>ویتو</option>
              </select>
              <label
                for="desc"
                style={{ marginRight: "5px", color: "#ddd", fontSize: "16px" }}
              >
                توضیحات
              </label>
              <input
                type={"text"}
                name={"desc"}
                style={{ width: "60%", borderRadius: "10px", height: "100px" }}
              ></input>
              <br />
            </div>
            <div className="left-side">
              <label
                for="url1"
                style={{ marginRight: "5px", color: "#ddd", fontSize: "16px" }}
              >
                لینک عکس اول
              </label>
              <input
                type={"text"}
                name={"url1"}
                style={{ width: "200%", borderRadius: "10px", height: "40px" }}
              ></input>
              <label
                for="url2"
                style={{ marginRight: "5px", color: "#ddd", fontSize: "16px" }}
              >
                لینک عکس دوم
              </label>
              <input
                type={"text"}
                name={"url2"}
                style={{ width: "200%", borderRadius: "10px", height: "40px" }}
              ></input>
              <label
                for="url3"
                style={{ marginRight: "5px", color: "#ddd", fontSize: "16px" }}
              >
                لینک عکس سوم
              </label>
              <input
                type={"text"}
                name={"url3"}
                style={{ width: "200%", borderRadius: "10px", height: "40px" }}
              ></input>
              <label
                for="url4"
                style={{ marginRight: "5px", color: "#ddd", fontSize: "16px" }}
              >
                لینک عکس چهارم
              </label>
              <input
                type={"text"}
                name={"url4"}
                style={{ width: "200%", borderRadius: "10px", height: "40px" }}
              ></input>
              <br />
              <label
                for="size"
                style={{ marginRight: "5px", color: "#ddd", fontSize: "16px" }}
              >سایز</label>
              <div className="container2">
              <select
                name={"size"}
                style={{ width: "60%", borderRadius: "10px", height: "40px" }}
              >
                <option value={""}></option>
                <option value={"38"}>38</option>
                <option value={"39"}>39</option>
                <option value={"40"}>38</option>
                <option value={"41"}>41</option>
                <option value={"42"}>42</option>
                <option value={"43"}>43</option>
                <option value={"44"}>44</option>
                <option value={"45"}>45</option>
              </select>
              <button className="bt-submit" type="Submit">افزودن محصول</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-md-2"
        style={{ direction: "rtl", borderLeft: "inset" }}
      >
        <div className="container">
          <div className="container">
            <button style={{ background: "none" }}>
              <img
                style={{ width: "65%", marginBottom: "5%", paddingTop: "20%" }}
                src={image3}
                alt="image"
              />
              <br />
              <h5
                style={{ color: "white", fontSize: "32px", margin: "10px 0px" }}
              >
                ادمین
              </h5>
            </button>
            <button
              type="button"
              style={{
                padding: "10px !important",
                display: "block",
                color: "white",
                fontSize: "20px",
                backgroundColor: "#363946",
              }}
              cxlass="btn btn-outline-dark bt"
            >
              ویرایش
            </button>
          </div>
        </div>
        <br />
        <br />
        <br />

        <div className="buttons-list">
          <Link to="/Admin_dashboard">
            <button
              type="button"
              class="btn btn-secondary  btn-block BT"
              style={{ backgroundColor: "#363946", width: "100%" }}
            >
              داشبورد
            </button>
          </Link>
          <Link to="/Activities">
            <button
              type="button"
              class="btn btn-secondary  btn-block BT"
              style={{ backgroundColor: "#363946", width: "100%" }}
            >
              فعالیت ها
            </button>
          </Link>
          <Link to="/Admin_dashboard">
            <button
              type="button"
              class="btn btn-secondary  btn-block BT"
              style={{ backgroundColor: "#363946", width: "100%" }}
            >
              برنامه ها
            </button>
          </Link>
          <Link to="/Admin_dashboard">
            <button
              type="button"
              class="btn btn-secondary  btn-block BT"
              style={{ backgroundColor: "#363946", width: "100%" }}
            >
              تنظیمات
            </button>
          </Link>
        </div>

        <div style={{ textAlign: "center" }}>
          <img src={datkMode} style={{ width: "35%" }} />
        </div>
      </div>
    </div>
  );
};
export default Edit_order;
