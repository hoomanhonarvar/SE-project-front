import React from "react";
import  ReactDOM  from "react";
import './Customer_signin.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import PhonenumberFrom from "../../Component/Forms/phoneNumber";
import ShowAndHidePassword from "../../Component/Button/Show_password";
import GoogleLoginComponent from "../../Component/google_login/googel_login"

const Customersignin=()=> {

  return (
    <section className="vh-100" style={{ background: "#ffffff" }}>
      <div className="containerpy-5h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
              <div className="card-body p-5 text-center">
                <h3 className="mb-5">Sign in</h3>
                <div className="form-outline mb-4">
                  {PhonenumberFrom()}
                  <label className="form-label" for="tel">Phone number</label>
                </div>

                <div className="form-outline mb-4">
                  <div className="input-group">
                    <input type='password' id="password" className="form-control form-control-lg" />
                    <button className="btn btn-outline-primary" onClick={ShowAndHidePassword}></button>
                  </div>
                  <label className="form-label" for="password">Password</label>
                </div>

                <button className="btn btn-primary btn-lg btn-block loginbtn" type="submit">Login</button>
                <div>
                  <p></p>
                  <button type="submit" id="forgetPassword" className="forgetPassword">
                    Forget password?
                  </button>
                  <p></p><div className="form-outline mb-4">
                  <GoogleLoginComponent />
                  </div>
                  {/* <img src={google} alt="Logo" /> */}
                  {/* <div> */}
                  {/* </div> */}
                  <p></p>
                  <button type="submit" id="forgetPassword" className="pure-button puree-button-secondary challenge-button">
                    Create an account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


// const Admin_login=()=>{



// };
export default Customersignin