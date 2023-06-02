import React from "react";
import  { useState } from 'react';
// import * as ReactDOM from'react-dom/';
import * as ReactDOM from 'react-dom';
import Error from "./Error";

 function Submit (){
    var element1 = document.getElementById('ID3').value;
    var element3 = document.getElementById('ID1').value;
    var element2 = document.getElementById('ID2').value;
    var element4 = document.getElementById('ID4').value;
    const json=
    {
        "phone number ": element2,
        "password":element3,
        "email" : element1,
        "confrimpass":element4


    }
    
    console.log(json)
    

    
    
         
}

export default Submit



