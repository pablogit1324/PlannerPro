import React, {useState} from "react";
import '../Auth_firebase/SignIn'
import '../Components_Application_SCSS/login.scss'
import SignIn from "../Auth_firebase/SignIn";
import SignUp from "../Auth_firebase/SignUp";


function Login({onToggleComponents}) {
    const [showLogin, setShowLogin] = useState(true);

    const handleSwitchSection = () => {
        setShowLogin(!showLogin);
    };
    return (
        <>
            <div className="application">
                <div className='application_bg'>
                    <div id='Box_SignIn'>


                        <div className='SignIn_bg'>
                        </div>
                        <div className='SignIn'>
                            <button className='btn_landing' onClick={onToggleComponents}>Landing Page</button>


                            <div>
                                {showLogin ? (
                                    <div>
                                        {<SignIn/>}
                                        <p className='sign_in_create_text'>Don't have an account yet?
                                            <span onClick={handleSwitchSection}
                                                  className='btn_create'>&nbsp;Create Account</span>
                                        </p>
                                    </div>
                                ) : (

                                    <div>
                                        {<SignUp/>}
                                        <button className='btn_back_log_in' onClick={handleSwitchSection}>Back to Login</button>
                                    </div>

                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Login