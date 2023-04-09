import React, { Component } from "react";
import notification from "./../../assets/images/notification.png";
import cartshop from "./../../assets/images/carte-de-shopping.png";


export default class Header extends Component {
  render() {
    return (
      <div>
        <nav
          className="main-header navbar navbar-expand navbar-white navbar-light"
          style={{ display: "flex", flexDirection:"row-reverse" ,paddingLeft:"1.5rem",backgroundColor:"#0d1225"}}
        >
         
         
          {/* Left navbar links */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" data-widget="pushmenu" href="#" style={{color:"white"}}>
                <i className="fas fa-bars" />
              </a>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
              <a href="index3.html" className="nav-link" style={{color:"white"}}>
                خانه
              </a>
            </li>
            <i class="bi bi-bell"></i>
            <i class="bi bi-cart"></i>
            <li>
           
            </li>
          </ul>
          <div className="input-group" style={{direction:"ltr"}}>
          <img src={notification} style={{marginRight:"1rem"}}/>
          <img src={cartshop} style={{marginRight:"1rem"}}/>
  <div className="form-outline">
    <input type="search" id="form1" className="form-control" placeholder="جستوجو" />
  </div>
  <button type="button" className="btn btn-primary">
    <i className="fas fa-search" />
  </button>
</div>

          {/* Right navbar links */}
          <ul className="navbar-nav ml-auto">
            {/* Messages Dropdown Menu */}
            {/* Notifications Dropdown Menu */}
          </ul>
        </nav>
      </div>
    );
  }
}
