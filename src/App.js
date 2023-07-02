import React from 'react';
import Header from './Components_JS/header.js';
import Media from "./Components_JS/media";
import Premium from "./Components_JS/premium";
import UserFeedback from "./Components_JS/user_feedback";
import Footer from "./Components_JS/footer"
import "./Components_SCSS/main.scss";

function App() {
    return (
        <>
            <Header/>
            <Media/>
            <Premium/>
            <UserFeedback/>
            <Footer/>


        </>
    );
}

export default App;
