import {signInWithEmailAndPassword} from "firebase/auth"
import React, {useState} from "react";
import {auth} from '../firebase'
import '../Components_Application_SCSS/SignIn.scss'
import Swal from "sweetalert2";
import Calendar from "../Components_Application_JS/calendar";

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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

                return (
                    <div>
                     <Calendar />
                    </div>
                );

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
                <br />
                <input
                    className={'css-input'}
                    type='password'
                    placeholder='Enter your password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <button type='submit' className={'btn_log_in'}>
                    Log in
                </button>
            </form>
        </div>
    );
};

export default SignIn;