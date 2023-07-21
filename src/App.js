import "./Components_Layout_SCSS/main.scss";
import Login from "./Components_Application_JS/login";
import * as React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import SignIn from "./Auth_firebase/SignIn";
import SignUp from "./Auth_firebase/SignUp";
import Calendar from "./Components_Application_JS/calendar";
import HomePage from "./Components_Layout_JS/HomePage";

const MyComponent = () => {
    return (
        <Router>

            <Routes>
                <Route path="/" element={<HomePage/>}>

                </Route>
                <Route path="/login" element={<Login/>}>
                    <Route path="/signIn" element={<SignIn/>}></Route>
                    <Route path="/signUp" element={<SignUp/>}></Route>
                </Route>
                <Route path="/app" element={<Calendar/>}>

                </Route>
            </Routes>
        </Router>

    )
}

export default MyComponent

