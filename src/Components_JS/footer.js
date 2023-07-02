import React from "react";
import FooterBox from "./function_footer"
import "../Components_SCSS/footer.scss"

export default function Footer() {
    return (
        <>
            <footer className={"footer_box"}>
                <div className={"footer_box_contain container"}>
                    <div className={"footer_contain_about "}>
                        <div className={"footer_nav"}>
                            <div className="footer_nav_logo">
                                Planner<span className="footer_nav_logo_pro">PRO</span>
                            </div>
                            <p className={"footer_nav_logo_description"}>With our app, saving your events becomes easy
                                and
                                intuitive. Whether you have a busy professional life or simply want to be organised in
                                your
                                personal life, our app is the perfect tool to collect and organise all your memorable
                                events.</p>

                        </div>
                        <div className={"footer_contain_nav1"}>
                            <FooterBox heading_text={"Home"} link1={"Home"} link2={"About App"} link3={"Contact us"}/>

                        </div>
                        <div className={"footer_contain_nav2"}>
                            <FooterBox heading_text={"Contact Info"} link1={"000-000-000"} link2={"halama.pawel@gmail.com"} link3={"Prosta 00, 00-838 Warszawa"}/>

                        </div>
                    </div>

                </div>
                <div className={"footer_copyright"}>
                    <small>&copy; PlannerPro All Right Reserved, 2023</small>
                </div>
            </footer>

        </>
    )
}