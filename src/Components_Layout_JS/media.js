import * as React from "react";
import "../Components_Layout_SCSS/main.scss"
import "../Components_Layout_SCSS/media.scss";
import instagram from "../img/Group 1.png"


function Media() {
    return (
        <div id="header_text_section_media">

            <h2 className="media_heading_text">
                Publish your events on social media
            </h2>

            <p className="media_heading_description">
                Effortlessly Publish and Share Your Events on Facebook and Instagram. Spread the Excitement!
            </p>
            <div className="media_heading_image">
                <img className="media_heading_img" src={instagram} alt="social media instagram"/>
            </div>
        </div>
    )
}

export default Media
