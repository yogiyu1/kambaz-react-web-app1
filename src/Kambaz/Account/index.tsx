import Profile from "./Profile";
import Signin from "./Signin";
import Signup from "./Signup";
import AccountNavigation from"./Navigation";
import { Routes, Route, Navigate } from "react-router";

export default function Account() {
  return (
    <div id="wd-account-screen">
      <h2>Account</h2>
      <table>
        <tr>
            <td valign="top">
                <AccountNavigation />
            </td>
            <td valign="top">
                <Routes>
                    <Route path="/" element={<Navigate to= "/Kambaz/Account/Signin" />} /> 
                    <Route path="/Signin" element={<Signin />} />
                    <Route path="/Signup" element={<Signup />} />
                    <Route path="/Profile" element={<Profile />} />
                </Routes>
            </td>
        </tr>
      </table>
    </div>
);}
