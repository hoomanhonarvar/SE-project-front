import React from 'react';
import "./notfound.css";
import { Link } from 'react-router-dom';
class NotFound extends React.Component{
    render(){
        return <div className='body404'>
            {/* <img src={PageNotFound}  /> */}
            <p style={{textAlign:"center"}}>
            <h1 className='h404'>404</h1>
            <h3 className='h3404'>صفحه مورد نظر یافت نشد</h3>
            </p>
          </div>;
    }
}
export default NotFound;