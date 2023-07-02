import React from "react";
import Feedback from "../Components_JS/function_users"
import "../Components_SCSS/user_feedback.scss"
import user1 from "../img/Ellipse 34.png"
import user2 from "../img/Ellipse 34(1).png"
import user3 from "../img/Ellipse 34(2).png"

export default function UserFeedback() {
    return (
        <>
            <section className={"feedback_box"}>
                <div className={"feedback_box_heading container"}>
                    <h4 className={"feedback_heading_text"}>User feedback</h4>
                    <p className={"feedback_heading_description"}>Discover What Users Have to Say about Our App's
                        Performance and Features.</p>
                </div>
                <div className={"feedback_user_box container"}>
                    <Feedback
                        description={`"PlannerPro is my new favourite way to organise my time. The time management functionality is amazing and the notifications before events are extremely helpful."`}
                        image={user1}
                        name={"Mark87"}
                        rank={"User"}
                    />
                    <Feedback
                        description={`"I am very impressed with the PlannerPro app! Not only is it a calendar, but it's also a great time management tool. The notifications are great! Big applause for this app!"`}
                        image={user2}
                        name={"Dannette P. Cervantes"}
                        rank={"User"}
                    />
                    <Feedback
                        description={`"PlannerPro is an app that makes my life easier! I can finally get the most out of the time management function and the notifications help me stay on track."`}
                        image={user3}
                        name={"Clara R. Altman"}
                        rank={"User"}
                    />
                </div>
            </section>
        </>
    );
}