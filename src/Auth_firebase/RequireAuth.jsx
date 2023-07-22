import {useEffect} from "react";
import useAuth from "./useAuth";
import {useNavigate, Outlet} from "react-router-dom";

function RequireAuth() {

    const {authUser} = useAuth()
    const navigate = useNavigate()
    useEffect(() => {
        if (!authUser) {
            navigate("/login/signin")
        }
    })

    return (
<Outlet />

    )

}

export default RequireAuth