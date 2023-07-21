import {createUserWithEmailAndPassword} from "firebase/auth"
import React, {useState} from "react";
import {auth} from '../firebase'
import '../Components_Application_SCSS/SignUp.scss'
import PasswordStrengthBar from 'react-password-strength-bar';
import Swal from 'sweetalert2'


const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Account successfully created!',
                    showConfirmButton: false,
                    timer: 1500
                })

            })
            .catch(() => {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Log in error!',
                    showConfirmButton: false,
                    timer: 1500
                })
            });

    }
    return (
        <>
            <div className='sign_up_container'>
                <form onSubmit={signUp} className='sign_up_box'>
                    <h1 className='sign_up_heading_text'>Create Account</h1>
                    <input
                        className={'css-input'}
                        type="email"
                        placeholder='Enter your email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                    <br/>
                    <input
                        className={'css-input'}
                        type="password"
                        placeholder='Enter your password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                    <div className="password">
                        <PasswordStrengthBar password={password}/>
                    </div>
                    <br/>
                    <button type="submit" className={'btn_log_up'}>Create</button>

                </form>
            </div>
        </>)
}

export default SignUp