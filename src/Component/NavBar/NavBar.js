import React from "react";
import './Navbar.css'
import {Link} from 'react-router-dom'
import Customersignin from "../../pages/Customer_signin/Customer_signin";
import Exp from "../request/Post/example";
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
            <Link to="/123">
                <button>
                    Exp
                </button>
            </Link>
            
        </li>
        <li>
            <Link to="/Shop">
                <button>
                    Shop
                </button>
            </Link>
            
        </li>
       
        <li>
            <Link to="/Cart">
                <button>
                    Cart
                </button>
            </Link>
            
        </li>
        <li>
            <Link exact path to='/pardakht_movafagh'>
                <button>
                Pardakhtmovafagh
                </button>
            </Link>
            
        </li>
        <li>
            <Link exact path to="/Pardakht_namovafagh">
                <button>
                Pardakhtnamovafagh
                </button>
            </Link>
            
        </li>
        <li>
            <Link to="/Customer_Panel">
                <button>
                    Customer_panel
                </button>
            </Link>
            
        </li>
        <li>
            <Link to="/">
                home
            </Link>
        </li>
        
        <li>
            <Link to="/Admin_dashboard">
                <button>
                    Admin-dashboard
                </button>
            </Link>
        </li>

    </ul>
)
export default Navbar
