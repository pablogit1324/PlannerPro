import {signInWithEmailAndPassword} from "firebase/auth"
import React, {useState} from "react";
import {auth} from '../firebase'
import '../Components_Application_SCSS/SignIn.scss'
import Swal from "sweetalert2";
import {Link, useNavigate} from "react-router-dom";



const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((log) => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Log in successfully!',
                    showConfirmButton: false,
                    timer: 1500,
                });
                navigate("/app")

            })
            .catch(() => {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Log in error!',
                    showConfirmButton: false,
                    timer: 1500,
                });
            });
    };

    return (
        <div className='sign_in_container'>
            <form onSubmit={signIn} className='sign_in_box'>
                <h1 className='sign_in_heading_text'>Login</h1>
                <input
                    className={'css-input'}
                    type='email'
                    placeholder='Enter your email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br/>
                <input
                    className={'css-input'}
                    type='password'
                    placeholder='Enter your password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br/>
                <p className='sign_in_create_text'>Don't have an account yet?
                    <Link to={"/login/signup"} className='btn_create'>&nbsp;Create Account</Link>
                </p>
                <button type='submit' className={'btn_log_in'}>
                    Log in
                </button>
            </form>
        </div>
    );
};

export default SignIn;