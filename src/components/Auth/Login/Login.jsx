import React, {useEffect} from 'react'
import { googleLogout,GoogleLogin,useGoogleLogin } from '@react-oauth/google';

import "./login.scss";


const Login = () => {

    useEffect(()=>{
        googleLogout()
    },[])


    const googleLogin = useGoogleLogin({
        onSuccess: tokenResponse => console.log("SUCCESSS",tokenResponse),
        onError: errorResponse => console.log("ERROR",errorResponse),
    });
    return (
        <>
            <section id="login">

                <div className="login_blk">
                    <h2 onClick={googleLogin}>Sign In</h2>

                    {/*<GoogleLogin*/}
                    {/*    auto_select*/}
                    {/*    onSuccess={credentialResponse => {*/}
                    {/*        console.log(credentialResponse);*/}
                    {/*    }}*/}
                    {/*    onError={() => {*/}
                    {/*        console.log('Login Failed');*/}
                    {/*    }}*/}
                    {/*/>*/}


                </div>


            </section>
        </>
    )
}

export default Login
