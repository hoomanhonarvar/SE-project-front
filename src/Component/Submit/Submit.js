import React,{useState,useEffect} from "react";
const Submit=(e)=>{
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        fetch('http://127.0.0.1:8000/users/sign-up/')
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data);
            setPosts(data);
        })
        .catch((err)=>{
            console.log(err.message);
        });
    },[]);

    
}

export default Submit