import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './contacting.css';
import PhonenumberFrom from "../../Component/Forms/phoneNumber";
import ShowAndHidePassword from "../../Component/Button/Show_password";


const Contating=()=>{
    return(
      <section className="vh-100" style={{background: "#0E1225"}}>
        <div className="containerpy-5h-100"  >
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div style={{margin:"30px"}} className="col-11 col-md-8 col-lg-6 col-xl-5" >
              <div className="card shadow-2-strong" style={{borderRadius: '1rem'}}>
                <div className="card-body p-5 text-center">
                  <h4 className="mb-5">تماس با ما</h4>
                  <div className="form-outline mb-4">
                
                  </div>

                  <div className="form-outline mb-4">

                  <div className="input-group">
                  <label htmlFor="" className="inplabel">نام و نام خانوادگی</label>        
                    <br />
                    <input type="text" id="Name"  className="form-control form-control" />

                    </div>
                    <div className="input-group"> 
                    <label htmlFor="" className="inplabel">شماره تماس</label>                 
                      <br />
                    <input type="text" id="Name"  className="form-control form-control" />
                  </div>
                  <div className="form-outline mb-4">
                    <div className="input-group">
                    <label htmlFor="" className="inplabel">پیام</label>
                      <br />
                    <textarea type='text' id="texteraia" rows={5}  className="form-control form-control" />


                    </div>                    
                    </div>
                  <button className="btn btn-primary btn-lg btn-block loginbtn" type="submit">ارسال</button>
                  <div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

    );


};
export default Contating