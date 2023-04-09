// import GoogleLogin from 'react-google-login';
// import React from 'react';




// const google = window.google


// ReactDOM.render(
//     <GoogleLogin
//       clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
//       buttonText="Login"
//       onSuccess={responseGoogle}
//       onFailure={responseGoogle}
//       cookiePolicy={'single_host_origin'}
//     />,
//     document.getElementById('googleButton')
//   );
//     ReactDOM.render(
//     <GoogleLogin
//       clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
//       render={renderProps => (
//         <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
//       )}
//       buttonText="Login"
//       onSuccess={responseGoogle}
//       onFailure={responseGoogle}
//       cookiePolicy={'single_host_origin'}
//     />,
//     document.getElementById('googleButton')
//   );

// const responseGoogle = (response) => {
//     console.log(response);
//   }
import React, { Component } from 'react';
import './google_login.css'
import GoogleButton from './GoogleButton';
class GoogleLoginComponent extends Component {
componentDidMount() {
this.googleSDK();
console.log('sfsfd');
}
prepareLoginButton = () => {
console.log(this.refs.googleLoginBtn);
this.auth2.attachClickHandler(this.refs.googleLoginBtn, {},
(googleUser) => {
let profile = googleUser.getBasicProfile();
console.log('Token || ' + googleUser.getAuthResponse().id_token);
console.log('ID: ' + profile.getId());
console.log('Name: ' + profile.getName());
console.log('Image URL: ' + profile.getImageUrl());
console.log('Email: ' + profile.getEmail());
//YOUR CODE HERE
}, (error) => {
alert(JSON.stringify(error, undefined, 2));
});
}
googleSDK = () => {
window['googleSDKLoaded'] = () => {
window['gapi'].load('auth2', () => {
this.auth2 = window['gapi'].auth2.init({
client_id: '1009282347618-0bi4cn6d4tgljr83gvcdi1e0ppp3sq3l.apps.googleusercontent.com',
cookiepolicy: 'single_host_origin',
scope: 'profile email'
});
this.prepareLoginButton();
});
}
(function(d, s, id){
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) {return;}
js = d.createElement(s); js.id = id;
js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'google-jssdk'));
}
render() {
return (
<div className="row mt-5">  
{/* <div className="col-md-12">
<div className="card mt-3">
<div className="card-body">
<div className="row mt-5 mb-5">
<div className="col-md-4 mt-2 m-auto ">

</div>    
</div>
</div>
</div>
</div> */}
<GoogleButton>
    kir
</GoogleButton>

</div>
);
}
}
export default GoogleLoginComponent