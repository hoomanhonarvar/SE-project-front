import React from "react";
import tarsh from './button/icons8-trash-30.png';
import heart from './button/icons8-heart-30.png';



import 'bootstrap/dist/css/bootstrap.min.css';
import { Sidebar } from "@coreui/coreui";
import { IoPhonePortrait } from "react-icons/io5";
const Cart=()=>{
  return(
    <div style={{backgroundColor:'white',paddingTop:'10px',paddingBottom:'10px'}}>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/1.4.6/tailwind.min.css" />
    <style dangerouslySetInnerHTML={{__html: "\n      #summary {\n        background-color: #f6f6f6;\n      }\n    " }} />
    <div className="container mx-auto mt-10" >
      <div className="shadow-md my-10" >
        <div className="row">
         
          <div className="col-md-4 col-xs-12 col-sm-2" style={{direction:"rtl"}}>
          <div id="summary" className="w-4/4 px-8 py-10" style={{backgroundColor:'#FBFBFF'}}>
          <h5 className="font-semibold text-1xl border-b pb-8">شیوه ارسال</h5>

          <br />
        <div>
          <input type="radio" className="btn-check" name="options" id="option1" autoComplete="off" defaultChecked />
          <label className="btn btn-secondary" htmlFor="option1" style={{fontSize:'16px',marginBottom:'10px'}}>پست پیشتاز</label>
          <input type="radio" className="btn-check" name="options" id="option2" autoComplete="off" />
          <label className="btn btn-secondary" htmlFor="option2" style={{marginright:'10px',fontSize:'16px',marginBottom:'10px'}}>تیپاکس</label>
        </div>
       <br />
            <hr />

  
          <div className=" flex justify-between mt-3 ">
            
          <div className="input-group mb-3" style={{direction:'ltr'}}>
            <div className="input-group-prepend">
              <button className="btn btn-outline-secondary" type="button" style={{backgroundColor:'#4F8F84',color:'white',borderRadius:'20px'}}>اعمال</button>
            </div>
            <input type="text" className="form-control" placeholder aria-label aria-describedby="basic-addon1" style={{borderRadius:'20px'}} />
            
          </div>
          
          </div>
          <div>تخفیف اعمال شد</div>
          
          <div  className="mt-3 " >
          <hr />
          <br />
          <div className="row">
            <div className="col-md-6">
              جمع سفارشات
              <br />
              مالیات
              <br />
              هزینه ارسال
               </div>
            <div className="col-md-6">150.000 تومان
            <br />
            0 تومان
            <br />
            30.000 تومان
            </div>
          </div>
            
           
          </div>
          <br />
          <hr />
          <div className="py-2">
            <div className="row">
              <div className="col-md-6">
              <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">مبلغ قابل پرداخت</label>
              </div>
              <div className="col-md-6">
              1.530.000 تومان  
              </div>
              <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full" style={{marginBottom:'10px',borderRadius:'15px',backgroundColor:'#4F8F84'}}>ثبت سفارش وپرداخت</button>
          
          <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full" style={{borderRadius:'15px',backgroundColor:'rgb(140 140 140)'}}>ادامه خرید</button>
       
            </div>
             </div>
       
        </div>
          </div>




          <div className="col-md-8 col-xs-12 col-sm-10"  style={{direction:"rtl",backgroundColor:'#FBFBFF'}} >
          <div className="w-4/4 px-10 py-10" style={{backgroundColor:'#FBFBFF'}}>
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">سبد خرید</h1>
           
          </div>
         <hr />
          {/* <div className="flex mt-10 mb-5">
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
          </div> */}
          <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5" style={{backgroundColor:'#FBFBFF'}}>
            
            <div className="flex w-2/5"> {/* product */}
           
              <div className="w-20">
                <img className="h-24" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvTiABYZA7YABr9un0dxRTcDT1FyMJacNI0A&usqp=CAU" alt />
              
              </div>
              
              <div className="flex flex-col justify-between ml-4 flex-grow">
                <span className="font-bold text-sm">کفش ورزشی نایک</span>
               
                {/* <span className="text-red-500 text-xs">Apple</span>
                <a href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a> */}
              </div>
            </div>
            <div className="flex justify-center w-1/5" style={{marginBottom:"-3rem",paddingRight:'-2rem'}}>
              {/* <input type="image" id="pluse" src={plus} /> */}
              <button   id="counering">   <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
              </svg></button>
            
              <input className="mx-2 border text-center w-8" type="text" defaultValue={1} />
              <button id="countermiuns">
              <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
              </svg>
              </button>
              
            </div>
            <p style={{marginBottom:"-3rem",paddingRight:'3rem',color:'#4F8F84',fontSize:"16px"}}  >حذف</p>
            <input type="image" src={tarsh} style={{marginBottom:"-3rem",paddingRight:'0.3rem'}} />
            {/* <span className="text-center w-1/5 font-semibold text-sm"></span> */}
            <p style={{marginBottom:"-3rem",paddingRight:'1.0rem'}}>|</p>
              <p style={{marginBottom:"-3rem",paddingRight:'1.5rem',color:'#4F8F84',fontSize:"16px"}}   >ذخیره  </p>
            <input type="image" src={heart} style={{marginBottom:"-3rem",paddingRight:'0.3rem'}} />
           
            <div style={{marginTop:"-3rem"}}>500 تومان</div>
          </div>
          <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
            
            <div className="flex w-2/5"> {/* product */}
           
              <div className="w-20">
              <img className="h-24" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvTiABYZA7YABr9un0dxRTcDT1FyMJacNI0A&usqp=CAU" alt />
              
              </div>
              
              <div className="flex flex-col justify-between ml-4 flex-grow">
                <span className="font-bold text-sm">کفش ورزشی نایک</span>
               
                {/* <span className="text-red-500 text-xs">Apple</span>
                <a href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a> */}
              </div>
            </div>
            <div className="flex justify-center w-1/5" style={{marginBottom:"-3rem",paddingRight:'-2rem'}}>
              {/* <input type="image" id="pluse" src={plus} /> */}
              <button   id="counering">   <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
              </svg></button>
            
              <input className="mx-2 border text-center w-8" type="text" defaultValue={1} />
              <button id="countermiuns">
              <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
              </svg>
              </button>
              
            </div>
            <p style={{marginBottom:"-3rem",paddingRight:'3rem',color:'#4F8F84',fontSize:"16px"}}  >حذف</p>
            <input type="image" src={tarsh} style={{marginBottom:"-3rem",paddingRight:'0.3rem'}} />
            {/* <span className="text-center w-1/5 font-semibold text-sm"></span> */}
            <p style={{marginBottom:"-3rem",paddingRight:'1.0rem'}}>|</p>
              <p style={{marginBottom:"-3rem",paddingRight:'1.5rem',color:'#4F8F84',fontSize:"16px"}}   >ذخیره  </p>
            <input type="image" src={heart} style={{marginBottom:"-3rem",paddingRight:'0.3rem'}} />
           
            <div style={{marginTop:"-3rem"}}>500 تومان</div>
          </div>
          <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
            
            <div className="flex w-2/5"> {/* product */}
           
              <div className="w-20">
              <img className="h-24" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvTiABYZA7YABr9un0dxRTcDT1FyMJacNI0A&usqp=CAU" alt />
              
              </div>
              
              <div className="flex flex-col justify-between ml-4 flex-grow">
                <span className="font-bold text-sm">کفش ورزشی نایک</span>
               
                {/* <span className="text-red-500 text-xs">Apple</span>
                <a href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a> */}
              </div>
            </div>
            <div className="flex justify-center w-1/5" style={{marginBottom:"-3rem",paddingRight:'-2rem'}}>
              {/* <input type="image" id="pluse" src={plus} /> */}
              <button   id="counering">   <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
              </svg></button>
            
              <input className="mx-2 border text-center w-8" type="text" defaultValue={1} />
              <button id="countermiuns">
              <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
              </svg>
              </button>
              
            </div>
            <p style={{marginBottom:"-3rem",paddingRight:'3rem',color:'#4F8F84',fontSize:"16px"}}  >حذف</p>
            <input type="image" src={tarsh} style={{marginBottom:"-3rem",paddingRight:'0.3rem'}} />
            {/* <span className="text-center w-1/5 font-semibold text-sm"></span> */}
            <p style={{marginBottom:"-3rem",paddingRight:'1.0rem'}}>|</p>
              <p style={{marginBottom:"-3rem",paddingRight:'1.5rem',color:'#4F8F84',fontSize:"16px"}}   >ذخیره  </p>
            <input type="image" src={heart} style={{marginBottom:"-3rem",paddingRight:'0.3rem'}} />
           
            <div style={{marginTop:"-3rem"}}>500 تومان</div>
          </div>
        
         
        </div>
          </div>
        </div>
        
    
      </div>
    </div>
  
  </div>
  
  

  );


};
export default Cart 


