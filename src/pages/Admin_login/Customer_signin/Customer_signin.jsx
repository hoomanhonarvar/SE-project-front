import React from "react";
import  ReactDOM  from "react";
import './Customer_signin.css'

import './../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import GoogleLoginComponent from './../../../Component/google_login/googel_login.'
const Customersignin =()=>{

    return(
            <div class="container">
                <div class="split left">
                    <div class="centered">
                    </div>
                </div>

            <div class="split right">
                <div class="centered">
                    <section className="vh-100" style={{background: "#ffffff"}}>

                        {/* image */}

                        <div className="form-outline mb-4">
                            <input type="tel" id="phoneNumber" className="form-control form-control-lg" />
                             <label className="form-label" for="tel">Phone number</label>
                        </div>
                        <div className="form-outline mb-4">
                             <input type="password" id="typePasswordX-2" className="form-control form-control-lg" />
                             <label className="form-label" for="typePasswordX-2">Password</label>
                        </div>
                       < button className="btn btn-primary btn-lg btn-block loginbtn" type="submit">Login</button>
                        <div>
                            <p></p>
                            <button type="submit" id="forgetPassword" className="forgetPassword">
                                Forget password?
                            </button>
                        </div>
                        <div>
                            <GoogleLoginComponent />
                        </div>
                    </section>

                </div>
            </div> 
            </div>
    );
};

export default Customersignin