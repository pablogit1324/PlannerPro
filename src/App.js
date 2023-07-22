import "./Components_Layout_SCSS/main.scss";
import Login from "./Components_Application_JS/login";
import * as React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import SignIn from "./Auth_firebase/SignIn";
import SignUp from "./Auth_firebase/SignUp";
import Calendar from "./Components_Application_JS/calendar";
import HomePage from "./Components_Layout_JS/HomePage";
import AuthContextProvider from "./Auth_firebase/AuthContext";
import RequireAuth from "./Auth_firebase/RequireAuth";

const MyComponent = () => {


    return (
        <AuthContextProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/login" element={<Login/>}>
                        <Route path="signin" element={<SignIn/>}/>
                        <Route path="signup" element={<SignUp/>}/>
                    </Route>
                    <Route path="/app" element={<RequireAuth/>}>
                        <Route index element={<Calendar/>}/>
                    </Route>
                </Routes>
            </Router>
        </AuthContextProvider>

    )
}

export default MyComponent

