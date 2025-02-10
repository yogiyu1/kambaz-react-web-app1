import { Link } from "react-router";
export default function Assignments(){
    return(
        <div id="wd-assignments">
            <input placeholder="Search for Assignments" style={{ marginRight: "8px" }} id="wd-search-assignment" />
            <button style={{ marginRight: "8px" }} id="wd-add-assignment-group">+ Group</button>
            <button style={{ marginRight: "8px" }} id="wd-add-assignment">+ Assignment</button>
            <h3 id="wd-assignments-title">ASSIGNMENTS 40% of Total <button>+</button> </h3>
            <ul id="wd-assignment-list">
                <li className="wd-assignment-list-item">
                    <Link to="/Kambaz/Courses/1234/Assignments/A1" className="wd-assignment-link">
                        A1 - ENV + HTML
                    </Link>
                    <p className="wd-assignments-informs">
                        Multiple Modules | <strong>not available until</strong> May 6 at 12:00am | 
                        <strong>Due</strong> May 13 at 11:59pm | 100 pts
                    </p>
                </li>
               

                <li className="wd-assignment-list-item">
                    <Link to="/Kambaz/Courses/1234/Assignments/A2" className="wd-assignment-link">
                        A2 - CSS + BOOTSTRAP
                    </Link>
                    <p className="wd-assignments-informs">
                        Multiple Modules | <strong>not available until</strong> May 13 at 12:00am | 
                        <strong>Due</strong> May 20 at 11:59pm | 100 pts
                    </p>
                </li>

                <li className="wd-assignment-list-item">
                    <Link to="/Kambaz/Courses/1234/Assignments/A3" className="wd-assignment-link">
                        A3 - JAVASCRIPT + REACT
                    </Link>
                    <p className="wd-assignments-informs">
                        Multiple Modules | <strong>not available until</strong> May 20 at 12:00am | 
                        <strong>Due</strong> May 27 at 11:59pm | 100 pts
                    </p>
                </li>
            </ul>
    


        </div>
    );
}