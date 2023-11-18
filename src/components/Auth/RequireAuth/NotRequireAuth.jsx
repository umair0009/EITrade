import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function NotRequireAuth ({ children }) {

    const accessToken = useSelector(state=>state.user.accessToken)


    if (accessToken && accessToken!=="") {

        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/" replace />;
    }
    return children

}

export default NotRequireAuth
