import {Navigate, Outlet} from "react-router";

const ProtectedUserRoutes = () => {
    const token = localStorage.getItem("token");
    return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedUserRoutes;