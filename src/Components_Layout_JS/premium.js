import React from "react";
import "../Components_Layout_SCSS/premium.scss"
import PremiumInfo from "./Premium";
import bell from "../img/bell.png"
import element from "../img/jigsaw 1.png"
import background from "../img/OBJECTS.png"


export default function Premium() {
    return (
        <div id="premium">
            <div className="pre container">
                <div className="premium_box_image">
                    <img src={background} alt="" className="premium_image"/>
                </div>
                <div className="premium_box">
                    <div className="premium_box_text">
                        <h3 className="premium_heading_text">
                            <p>
                                <span className="heading_orange">Premium &nbsp;</span>version</p>of the
                            &nbsp;<span
                            className="heading_orange">application</span>
                        </h3>
                    </div>
                    <div className="premium_text">

                        <div className="premium_info">
                            <PremiumInfo
                                image={bell}
                                heading={"Pre-event notifications"}
                                text={"Stay Ahead with Pre-Event Reminders and Updates."}/>
                            <PremiumInfo
                                image={element}
                                heading={"Company planning"}
                                text={"Ability to plan team events, assign tasks and track progress."}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}