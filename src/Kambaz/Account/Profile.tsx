import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
export default function Profile(){
    return(
        <div id="wd-profile-screen">
            <h3>Profile</h3>
            {/* <input defaultValue="alice" placeholder="username" className="wd-username"/><br/>
            <input defaultValue="123"   placeholder="password" type="password" className="wd-password" /><br/>
            <input defaultValue="Alice" placeholder="First Name" id="wd-firstname" /><br/>
            <input defaultValue="Wonderland" placeholder="Last Name" id="wd-lastname" /><br/>
            <input defaultValue="2000-01-01" type="date" id="wd-dob" /><br/>
            <input defaultValue="alice@wonderland" type="email" id="wd-email" /><br/>
            <select defaultValue="FACULTY" id="wd-role">
                <option value="USER">User</option>       <option value="ADMIN">Admin</option>
                <option value="USER">User</option>       <option value="ADMIN">Admin</option>
            </select><br/>
            <Link to="/Kambaz/Account/Signin" >Sign out</Link> */}
            <Form.Control id="wd-username"
               placeholder="alice"
               className="mb-2"/>
            <Form.Control id="wd-password"
               placeholder="password" type="password"
               className="mb-2"/>
            <Form.Control id="wd-firstname"
               placeholder="Alice"
               className="mb-2"/>
            <Form.Control id="wd-firstname"
               placeholder="Alice"
               className="mb-2"/>
            <Form.Control id="wd-lastname"
               placeholder="Wonderland"
               className="mb-2"/>
            <Form.Control id="wd-dob" type="date" placeholder="2000-01-01" className="mb-2"/>
            <Form.Control id="wd-email"
               placeholder="alice@wonderland" type="email"
               className="mb-2"/>
            <Form.Group controlId="wd-role">
                <Form.Select id="wd-role" className="mb-2">
                    <option value="USER">User</option>
                    <option value="ADMIN">Admin</option>
                </Form.Select>
            </Form.Group>
            <Link id="wd-signout-btn"
              to="/Kambaz/Account/Signin" 
              className="btn btn-danger w-100 mb-2">
              Sign out 
            </Link>
        </div>
    )
}