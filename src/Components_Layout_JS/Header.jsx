import * as React from 'react';
import '../Components_Layout_SCSS/function_card.scss'

export default function MediaCard({headingText, description, image}) {
    return (
        <div className="card">
            <div className="border_card">

                    <img src={image} alt="" className="image_card"/>

            </div>
            <div className="text_card">
                    <h2 className="heading_text">{headingText}</h2>
                    <p className="heading_description">{description}</p>
            </div>
        </div>
    );
}