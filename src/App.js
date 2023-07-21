import React, {useState} from 'react';
import Header from './Components_Layout_JS/header.js';
import Premium from "./Components_Layout_JS/premium";
import Media from "./Components_Layout_JS/media";
import UserFeedback from "./Components_Layout_JS/feedback";
import Footer from "./Components_Layout_JS/footer";
import "./Components_Layout_SCSS/main.scss";
import Login from "./Components_Application_JS/login";


const MyComponent = () => {
    const [isLayoutVisible, setIsLayoutVisible] = useState(true);

    function toggleComponents() {
        setIsLayoutVisible((prevState) => !prevState);
    }

    return (
        <div>
            {isLayoutVisible ? (
                <div id="layout">
                    <Header onToggleComponents={toggleComponents}/>
                    <Media/>
                    <Premium/>
                    <UserFeedback/>
                    <Footer/>
                </div>
            ) : (
                <>
                    <div id="application">
                        <Login onToggleComponents={toggleComponents}/>
                    </div>
                </>
            )}

        </div>
    );
};
export default MyComponent;
