import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Admin_login.css'
import PhonenumberFrom from "../../Component/Forms/phoneNumber";
import ShowAndHidePassword from "../../Component/Button/Show_password";


const Admin_login=()=>{
    return(
      <section className="vh-100" style={{background: "#ffffff"}}>
        <div className="containerpy-5h-100"  >
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card shadow-2-strong" style={{borderRadius: '1rem'}}>
                <div className="card-body p-5 text-center">
                  <h3 className="mb-5">Admin login</h3>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    );


};
export default Admin_login