import React from "react";
import  { useState } from 'react';
// import * as ReactDOM from'react-dom/';
import * as ReactDOM from 'react-dom';


 function Submit (){
    var element1 = document.getElementById('ID3').value;

        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        // const [error, setError] = useState<string | null>(null);
        var error =''
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!emailRegex.test(element1)) {
            error='Please enter a valid email address';
            
            } else {
                error=''
            }


    var element3 = document.getElementById('ID1').value;
    var element2 = document.getElementById('ID2').value;
    const json=
    {
        "phone number ": element2,
        "password":element3,
        "email" : element1


    }
    
    console.log(error)
    
         
}

export default Submit

