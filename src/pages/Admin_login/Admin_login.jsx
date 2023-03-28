import React from "react";
import Button from '../../Component/Button/Button'
import IMAGE from './IMAGE.jpeg'



const Admin_login=()=>{
    return(

        <div>
            <img
            className="img"
      alt="picture"   
      src={IMAGE}
    />
    <div>
    <form>
    <input type="tel" placeholder="enter your phone number" className="in_1"/>
    
    </form>
    </div>
    <div>
        <p></p>
    <form>
        <input type="password" placeholder="enter your password" className="in_2"/>
    </form>
    </div>
    <Button>

        kir khar
    </Button>

                        
        </div>



    );


};
export default Admin_login