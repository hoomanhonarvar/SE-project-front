import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Admin_login.css'


const Admin_login=()=>{
    return(
<section className="vh-100" style={{backgroundColor: "#ffffff"}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card shadow-2-strong" style={{borderRadius: '1rem'}}>
          <div className="card-body p-5 text-center">
            <h3 className="mb-5">Admin login</h3>
            <div className="form-outline mb-4">
              <input type="tel" id="phoneNumber" className="form-control form-control-lg" />
              <label className="form-label" for="tel">Phone number</label>
            </div>

            <div className="form-outline mb-4">
              <input type="password" id="typePasswordX-2" className="form-control form-control-lg" />
              <label className="form-label" for="typePasswordX-2">Password</label>
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