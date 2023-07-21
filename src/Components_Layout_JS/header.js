import React from 'react';
import '../Components_Layout_SCSS/header.scss';
import '../Components_Layout_SCSS/main.scss';
import MediaCard from "./Header";
import calendar from "../img/Calendar.png"
import exam from "../img/exam 1.png"
import image from "../img/image.png"
import {Link} from 'react-scroll'


function Header({onToggleComponents}) {
    return (
        <>
            <div id="header">
                <div className="sticky">
                    <div className="navi container">
                        <div className="header_navi_logo">
                            Planner<span className="header_navi_logo_pro">PRO</span>
                        </div>
                        <div className="header_navi_menu">
                            <Link to="header" spy={true} smooth={true} offset={50} duration={500}>Home</Link>
                            <Link to="feedback_box" spy={true} smooth={true} offset={50} duration={500}>About us</Link>
                            <Link to="footer_box" spy={true} smooth={true} offset={50} duration={500}>Contact</Link>
                            <button className='btn_app' onClick={onToggleComponents}>App</button>

                        </div>
                    </div>
                </div>
                <div className="header_content">
                    <div className="header_content_box">
                        <h2 className="header_content_box_title">
                            The <span className="header_content_box_keyword">Smart</span>{" "}
                            Companion For Time Management
                        </h2>
                        <p className="header_content_box_text">
                            With our app, you can easily save and organize various events,
                            plan trips, vacations and much more. Our calendar provides
                            convenient time management tools to help you make the most of
                            every moment.
                        </p>
                    </div>

                    <div className="header_content_box_bg"></div>
                </div>
                <div className="header_function_app container">

                    <MediaCard
                        image={calendar}
                        headingText={"Orgaznize your time"}
                        description={"Master Your Schedule, Achieve More, and Experience the Power of Effective Time Management."}/>
                    <MediaCard
                        image={exam}
                        headingText={"Save your events"}
                        description={"Capture Life's Highlights: Effortlessly Save, Organize, and Remember Your Precious Events with Ease."}/>
                    <MediaCard
                        image={image}
                        headingText={"Add memories of events"}
                        description={"Effortlessly Capture, Preserve, and Relive Event Memories Anytime, Anywhere. Unleash Nostalgia!"}/>

                </div>


            </div>
        </>
    );
}


export default Header