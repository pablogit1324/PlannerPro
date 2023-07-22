import {onAuthStateChanged, signOut} from 'firebase/auth'
import React, {useEffect} from "react";
import {auth} from "../firebase";
import useAuth from "./useAuth";

const AuthDetails = () => {

    const {authUser, setAuthUser} = useAuth()
    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log({s})
                setAuthUser(user)
            } else {
                setAuthUser(null)
            }
        });
        return () => {
            listen()
        }
    })
    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log('sign out successful')
        }).catch(error => console.log(error))
    }
    return (
        <div>{authUser ? <> <p>{`Signed In as ${authUser.email}`}</p>
            <button onClick={userSignOut}>Sign Out</button>
        </> : <p>Signed Out</p>}</div>
    )
}

export default AuthDetails