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
                  <h3 className="mb-5">ورود ادمین</h3>
                  <div className="form-outline mb-4">
                  <label className="form-label" for="tel">شماره تماس</label>

                    {PhonenumberFrom()}
                  </div>
                  <div className="form-outline mb-4">
                    <div className="input-group">
                    <label className="form-label" for="password">رمز عبور</label>

                    <input type="password" name="" id="" className="inp" />
                    {/* <button className="btn btn-outline-primary" onClick={ShowAndHidePassword}></button> */}
                    </div>
                  </div>
                  <button className="btn btn-primary btn-lg btn-block loginbtn" type="submit">ورود</button>
                  <div>
                      <p></p>
                      <button type="submit" id="forgetPassword" className="forgetPassword">
فراموشی رمز عبور  </button>
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