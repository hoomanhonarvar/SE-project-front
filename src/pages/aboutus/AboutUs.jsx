import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import imageing from './Rectangle 1.png';
const Aboutus=()=>{
    return(
      <div className="row" style={{direction:'rtl' ,backgroundColor:'white'}}>
        <div  className="col-md-4" style={{textAlign:'center',marginTop:'8%',paddingRight:'7%'}} >
        <h4 style={{marginBottom:'12%'}}>درباره ما</h4>
        <p>
          فروشگاه انلاین شاپینگ عرضه کننده انواع دسته بندی محصولات است .
          شما از طریق این فروشگاه میتواند محصولات ارائه دهنده را مشاهده و تهیه نمایید.
          فروشگاه انلاین شاپینگ در صفحات محصول خود توضیحات جامعی درباره محصولات خود در اختیار شما قرار میدهد
          و این امکان را فراهم میسازد که آگاهانه انتخاب نمایید و در صورت تمایل به صورت انلاین از طریق درگاه های بانکی محصولات را سفارش
          و خریداری نمایید.
          <br />
          فرشگاه آنلاین شاپینگ  از ارسال پستی به عرضه  انواع محصولات ارائه دهنده  میپردازد و از اینکه در این 
          بسایت به صورت کاملا تخصصی به حوزه محصولات میپردازیم.
          برای برقراری ارتباط با ما از طریق بخش تماس با ما سایت با کارشناسان فروش تماس حاصل فرمایید
        
     
        
        </p>
        </div>
        <div  className="col-md-8" >
        <img src={imageing} alt="" />
        </div>
      </div>
    );

    
};
export default Aboutus