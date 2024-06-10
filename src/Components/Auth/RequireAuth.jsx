import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function RequierAuth({ allowedRoles }) {

    const { isLoggedIn, role } = useSelector((state) => state.auth);

    return isLoggedIn && allowedRoles.find((myRole) => myRole == role) ? (
        <Outlet />
    ) : isLoggedIn ? ( <Navigate to="/denied" />) : (<Navigate to="login" />)

}

export default RequierAuth;