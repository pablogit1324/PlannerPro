import React from "react";
import Header from "./header";
import Media from "./media";
import Premium from "./premium";
import UserFeedback from "./feedback";
import Footer from "./footer";

function HomePage() {
    return (
        <>
            <Header/>
            <Media/>
            <Premium/>
            <UserFeedback/>
            <Footer/>
        </>
    )
}

export default HomePage