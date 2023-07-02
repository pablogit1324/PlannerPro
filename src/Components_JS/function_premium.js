import React from "react";
import "../Components_SCSS/function_premium.scss"

export default function PremiumInfo({heading, text, image}) {
    return (
        <div className={"info"}>
            <div className={"info_border"}>
                    <img src={image} alt="" className={"info_border_image"}/>
            </div>
            <div className={"info_text"}>
                <h4 className={"info_text_heading"}>{heading}</h4>
                <p className={"info_text_description"}>{text}</p>
            </div>
        </div>
    );
}