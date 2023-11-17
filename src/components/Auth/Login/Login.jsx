import React, {useEffect} from 'react'
import { googleLogout,GoogleLogin,useGoogleLogin } from '@react-oauth/google';
import axios from 'axios'
import "./login.scss";
import { useDispatch, useSelector } from 'react-redux';
import { socialLogin } from '../../../Redux/user/Operations';
import { saveAccessToken, saveUserInfo } from '../../../Redux/user/Reducers';
import { Navigate } from 'react-router-dom';


const Login = () => {

    const dispatch = useDispatch()
    const accessToken = useSelector(state => state.user.accessToken)
    

    useEffect(() => {
        
        googleLogout()
    },[])




    const googleLogin = useGoogleLogin({
        onSuccess: async tokenResponse => {

                console.log(tokenResponse);
                // fetching userinfo can be done on the client or the server
               


                const userInfo = await axios
                .get('https://www.googleapis.com/oauth2/v3/userinfo', {
                  headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
                })
                .then(res => res.data);
        
              console.log(userInfo);
              


            return

            let obj = {
                code : tokenResponse.access_token
            }
            dispatch(socialLogin(obj)).then((data) => {
                if (data) {
                    console.log(data)
                    dispatch(saveAccessToken(data.access_token))
                    dispatch(saveUserInfo(data))
                }
            }).catch(err => {
                   console.log(err)

            })

        },
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
