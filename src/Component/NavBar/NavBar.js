import React from "react";
import './Navbar.css'
import {Link} from 'react-router-dom'
import Customersignin from "../../pages/Customer_signin/Customer_signin";
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
                <button>
                home
                </button>
            </Link>
        </li>
        <li>
            <Link to="/Customer_panel">
            <button>
                Customer_page
            </button>
            </Link>
        </li>


    </ul>
)
export default Navbar
