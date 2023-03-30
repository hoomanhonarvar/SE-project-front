import React from "react";
import './Navbar.css'
import {Link} from 'react-router-dom'
import Button from './../Button/Button'
import Customersignin from "../../pages/Admin_login/Customer_signin/Customer_signin";
const Navbar =()=>
(
    <ul className="Navbar">
        <li>
            <Link to="/Admin-login">
                <button>
                    Admin-login
                </button>
            </Link>
            
        </li>
        <li>
            <Link to="/Customer_signin">
                <button>
                    Customer sign in
                </button>
            </Link>
        </li>
        <li>
            <Link to="/">
                home
            </Link>
        </li>

    </ul>
)
export default Navbar
