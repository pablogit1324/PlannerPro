import React from "react";
import "../Components_SCSS/function_footer.scss"

export default function FooterBox({headingText, link1, link2, link3, href1, href2, href3}) {
    return (
        <>
            <div className="box">
                <h5 className="box_heading_text">{headingText}</h5>
                <a href={href1} className="box_link">{link1}</a>
                <a href={href2} className="box_link">{link2}</a>
                <a href={href3} className="box_link">{link3}</a>
            </div>
        </>
    )
}
