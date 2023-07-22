import React from "react";
import '../Components_Application_SCSS/calendar.scss'
import AuthDetails from "../Auth_firebase/AuthDetails";
import {Link} from "react-router-dom";
import SvgIcon from '@mui/material/SvgIcon';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import EventNoteIcon from '@mui/icons-material/EventNote';
function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}
function Calendar() {

    return (
        <>
            <div className="calendar">
                <div className="box_calendar">
                    <div className="calendar_nav">
                        <div className="calendar_logo">
                            <div className="calendar_nav_logo">
                                Planner
                                <span className="calendar_nav_logo_pro">
                                    PRO
                                </span>
                            </div>
                        </div>
                        <div className="calendar_user">
                            <AuthDetails />
                        </div>
                    </div>
                    <div className="calendar_contain">
                        <div className="calendar_menu">
                            <Link to={"/dashboard"} className="menu_el" >      <HomeIcon   sx={{ fontSize: 30}} />Dashboard</Link>
                            <Link to={"/Media"} className="menu_el" >      <PermMediaIcon  sx={{ fontSize: 30}} />Media</Link>
                            <Link to={"/Events"} className="menu_el" >      <EventNoteIcon   sx={{ fontSize: 30}} />Events</Link>

                        </div>
                        <div className="calendar_events">
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Calendar