import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const Protected = () => {
    const auth = useSelector(response => response.authSlice);
    const { user } = auth;

    return user ? <Outlet /> : <Navigate to={'/login'} />
}

export default Protected;