import React from "react";
import "../Components_SCSS/function_users.scss"

export default function Feedback({description, image, name, rank}) {
    return (

        <div className="feedback container">
            <div className="feedback_box_text">
                <p>{description}</p>
            </div>
            <div className="feedback_box_user">
                <img src={image} alt=""/>
                <div className="feedback_box_user_info">
                    <div className="feedback_box_user_info_name">{name}</div>
                    <div className="feedback_box_user_info_rank">{rank}</div>
                </div>
            </div>
        </div>

    );
}