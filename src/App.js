import Header from './Components_Layout_JS/header.js';
import Premium from "./Components_Layout_JS/premium";
import Media from "./Components_Layout_JS/media";
import UserFeedback from "./Components_Layout_JS/feedback";
import Footer from "./Components_Layout_JS/footer";
import "./Components_Layout_SCSS/main.scss";
import Login from "./Components_Application_JS/login";
import * as React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import SignIn from "./Auth_firebase/SignIn";
import SignUp from "./Auth_firebase/SignUp";
import Calendar from "./Components_Application_JS/calendar";


const MyComponent = () => {
    return (
        <Router>
            <Routes>
                <Route path="/">
                    <Route element={<Header/>}></Route>
                    <Route element={<Media/>}></Route>
                    <Route element={<Premium/>}></Route>
                    <Route element={<UserFeedback/>}></Route>
                    <Route element={<Footer/>}></Route>

                </Route>
                <Route path={"/Login"} element={<Login/>}>
                    <Route path={"/SignIn"} element={<SignIn/>}></Route>
                    <Route path={"/SignUp"} element={<SignUp/>}></Route>
                </Route>
                <Route path={"/App"} element={<Calendar/>}>

                </Route>
            </Routes>
        </Router>
    );
}

export default MyComponent;
