import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import * as client from "./client";
export default function Profile(){
    const [profile, setProfile] = useState<any>({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const fetchProfile = () => {
        if (!currentUser) return navigate("/Kambaz/Account/Signin");
        setProfile(currentUser);
    };
    const updateProfile = async () => {
      const updatedProfile = await client.updateUser(profile);
      dispatch(setCurrentUser(updatedProfile));
    };
  
    useEffect(() => { fetchProfile(); }, []);

    const signout = async () => {
        await client.signout();
        dispatch(setCurrentUser(null));
        navigate("/Kambaz/Account/Signin");
      };
    return(
        <div id="wd-profile-screen">
            <h3>Profile</h3>
            {profile && (
        <div>
          <button onClick={updateProfile} className="btn btn-primary w-100 mb-2"> Update </button>
          username: <Form.Control defaultValue={profile.username} id="wd-username" className="mb-2"
                       onChange={(e) => setProfile({ ...profile, username:  e.target.value })}/> 
          password: <Form.Control defaultValue={profile.password} id="wd-password" className="mb-2"
                       onChange={(e) => setProfile({ ...profile, password:  e.target.value })}/>
          firstName: <Form.Control defaultValue={profile.firstName} id="wd-firstname" className="mb-2"
                       onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}/>
          lastName: <Form.Control defaultValue={profile.lastName} id="wd-lastname" className="mb-2"
                       onChange={(e) => setProfile({ ...profile, lastName:  e.target.value })}/>
          dob: <Form.Control defaultValue={profile.dob} id="wd-dob" className="mb-2"
                       onChange={(e) => setProfile({ ...profile, dob: e.target.value })} type="date"/>
          email: <Form.Control defaultValue={profile.email} id="wd-email" className="mb-2"
                       onChange={ (e) => setProfile({ ...profile, email: e.target.value })}/>
          role: <select onChange={(e) => setProfile({ ...profile, role:  e.target.value })}
                 className="form-control mb-2" id="wd-role">
            <option value="USER">User</option>            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>      <option value="STUDENT">Student</option>
          </select>
          <button onClick={signout} className="wd-signout-btn btn btn-danger w-100">
            Sign out
          </button>

        </div>
      )}
</div>);}