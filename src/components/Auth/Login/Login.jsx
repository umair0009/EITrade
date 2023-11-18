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

        // dispatch(saveAccessToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAwNTA0NDE0LCJpYXQiOjE3MDAyNDUyMTQsImp0aSI6IjQ2MWIyNTU0YjA3ZDRiZjg5MWU5ZGRiYzMyYzMyMzE4IiwidXNlcl9pZCI6MX0.EZep-TBMHes9p0P4lgTMYhFxUBcDWWwhAKSCMDT_yAA"))
        setTimeout(()=>{
            // alert(accessToken)
        },1000)



        googleLogout()
    },[])



    const dummy = () =>{


        dispatch(saveAccessToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAwNTA0NDE0LCJpYXQiOjE3MDAyNDUyMTQsImp0aSI6IjQ2MWIyNTU0YjA3ZDRiZjg5MWU5ZGRiYzMyYzMyMzE4IiwidXNlcl9pZCI6MX0.EZep-TBMHes9p0P4lgTMYhFxUBcDWWwhAKSCMDT_yAA"))

    }


    const googleLogin = useGoogleLogin({
        onSuccess:  tokenResponse => {



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
                    <h2 onClick={dummy}>Sign In</h2>

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
