import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const location = useLocation();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      {links.includes("Signin") && (
        <Link
          to="/Kambaz/Account/Signin"
          id="wd-account-signin"
          className={`list-group-item border border-0 
            ${location.pathname === "/Kambaz/Account/Signin" ? "active" : "text-danger"}`}
        >
          Signin
        </Link>
      )}
      {links.includes("Signup") && (
        <Link
          to="/Kambaz/Account/Signup"
          id="wd-account-signup"
          className={`list-group-item border border-0 
            ${location.pathname === "/Kambaz/Account/Signup" ? "active" : "text-danger"}`}
        >
          Signup
        </Link>
      )}
      {links.includes("Profile") && (
        <Link
          to="/Kambaz/Account/Profile"
          id="wd-account-profile"
          className={`list-group-item border border-0 
            ${location.pathname === "/Kambaz/Account/Profile" ? "active" : "text-danger"}`}
        >
          Profile
        </Link>
      )}
    </div>
  );
}
