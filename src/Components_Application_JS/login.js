import '../Auth_firebase/SignIn'
import '../Components_Application_SCSS/login.scss'
import { Outlet } from "react-router-dom"
import {Link} from "react-router-dom";

function Login() {

    return (
        <>
            <div className="application">
                <div className='application_bg'>
                    <div id='Box_SignIn'>


                        <div className='SignIn_bg'>
                        </div>
                        <div className='SignIn'>
                            <Link to={"/"} className='btn_landing' >Landing Page</Link>


                          <Outlet/>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}


export default Login