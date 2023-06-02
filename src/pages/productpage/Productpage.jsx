import React from "react";
import NAVBAR from "../Home_page/NAVBAR";
import FOOTER from "../../Component/Footer/FOOTER";
import './Productpage.css'
import '../../Component/App/App.css'
import PurchaseFrame from "../../Component/PurchaseFrame/PurchaseFrame";
import Staring from "../../Component/StarRating/StarRating";
import MyGallery from "../../Component/ProductGallery/ProductGallery"
function Productpage(){


return(<>

<NAVBAR/>

<div className="main">
<div className="frame-1">



<div className="Info">
<div className="product-gallery">

<MyGallery/>
</div>


<div className="ProductIdCard">
<div className="name">
  <label htmlFor="Name"> {} name</label>
  </div>
  <div className="Price">
  <label htmlFor="Price">  {} price</label>
  </div>
  <div className="rating">
  <label htmlFor="rating">  {} rate </label>
  </div>
</div>
  
</div>
<div className="Purch">
<PurchaseFrame/>
</div>

</div>



<div className="Second-Section">
  
  <div className="DetailsOfP">
  <label htmlFor="Details" id="Lb">توضیحات</label>
  <p className="joziat">{}
Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptas nam doloremque magni maxime iste fugit itaque ipsum nemo nulla ab animi quisquam enim repudiandae, omnis eos vitae, perferendis eaque exercitationem! Reprehenderit, mollitia. Labore, ab quisquam, molestiae ut sed mollitia veritatis non fugit rerum placeat atque sequi perspiciatis corrupti voluptatum quam iure dolore ad inventore omnis? Error veritatis omnis nemo voluptatum earum, commodi dicta porro accusantium assumenda necessitatibus sint odio harum, aspernatur ex dolor eum rerum placeat iure! Cumque praesentium aliquam libero veniam consequuntur autem sit! Consequatur est, vero, doloribus quae sit at quaerat sed iste ex eum neque quos praesentium ut! Veniam quibusdam laudantium fugiat placeat dolorum debitis? Voluptatibus saepe vitae aliquid accusantium architecto dolorum, temporibus reprehenderit. Libero optio fuga aliquam quibusdam dolores, quaerat rem suscipit dolor facilis obcaecati iusto nesciunt excepturi officiis voluptas pariatur eaque voluptates voluptate, sint distinctio minus sapiente? Alias, repellendus labore temporibus magni doloremque eos ullam placeat vel corrupti odit blanditiis harum perspiciatis aperiam exercitationem dolorum, porro officiis qui error incidunt, tenetur repudiandae quam ad sunt maiores. Optio, corporis autem quo consectetur non esse voluptatum repellendus officia consequatur omnis sint soluta sunt odio alias? Earum inventore in quibusdam ex commodi blanditiis doloremque praesentium odit sequi.
  </p>
  </div>
  
  </div>

  <div className=" Second-Section coment-box">
  <div className="str">
  <label htmlFor="Details">به این محصول امتیاز دهید</label>

    <Staring /></div>
  <div className="comentSection">
  <label htmlFor="Details" id="Lb">نظرات مشتریان</label>
 <div className="textbox">
  <textarea name="Coment" id="coment" cols="30" rows="10" placeholder="نظر خود را درج کنید"></textarea>
  <button type="submit" style={{padding:'5px 20px'}}> ثبت</button>
 </div>
  </div>

  </div>


</div>



<FOOTER/>
</>);

}

export default Productpage;
