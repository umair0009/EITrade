import React from 'react'
import { GoogleLogin } from 'react-google-login';

import "./login.scss";


const Login = () => {

    const responseGoogle = (response) => {
        console.log("USER_OBJECT",JSON.stringify(response));
        // Handle the Google login response here
      };
  return (
      <>
      <section id="login">
       
            <div className="login_blk">
                  <h2>Sign In</h2>
                  
                  <GoogleLogin
  clientId="714467943882-i9s27ktuediha04rdq47gn8spiar3d93.apps.googleusercontent.com"
  buttonText="Login with Google"
  onSuccess={responseGoogle}
  onFailure={responseGoogle}
  cookiePolicy={'single_host_origin'}
  uxMode='redirect'
/>


            </div>
        
      
      </section>
      </>
  )
}

export default Login