import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/1234/Home" className="wd-dashboard-course-link" > <img src="/images/reactjs.jpg" width={200} />
                <div>
                <h5> CS1234 React JS </h5>
                <p className="wd-dashboard-course-title">
                    Full Stack software developer  
                </p>
                <button> Go </button>
                </div>
                    </Link>
                </div>   

                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/5001/Home" className="wd-dashboard-course-link" > <img src="/images/reactjs.jpg" width={200} />
                <div>
                <h5> CS5001 </h5>
                <p className="wd-dashboard-course-title">
                    Intensive Foundations of CS Course Charter
                </p>
                <button> Go </button>
                </div>
                    </Link>
                </div>   

                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/5002/Home" className="wd-dashboard-course-link" > <img src="/images/reactjs.jpg" width={200} />
                <div>
                <h5> CS5002 </h5>
                <p className="wd-dashboard-course-title">
                    Discrete Structures Course Charter  
                </p>
                <button> Go </button>
                </div>
                    </Link>
                </div>    

                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/5004/Home" className="wd-dashboard-course-link" > <img src="/images/reactjs.jpg" width={200} />
                <div>
                <h5> CS5004  </h5>
                <p className="wd-dashboard-course-title">
                    Object-Oriented Design Course Charter  
                </p>
                <button> Go </button>
                </div>
                    </Link>
                </div>    

                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/5008/Home" className="wd-dashboard-course-link" > <img src="/images/reactjs.jpg" width={200} />
                <div>
                <h5> CS5008  </h5>
                <p className="wd-dashboard-course-title">
                    Data Structures, Algorithms, and their Applications
                </p>
                <button> Go </button>
                </div>
                    </Link>
                </div>    

                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/5800/Home" className="wd-dashboard-course-link" > <img src="/images/reactjs.jpg" width={200} />
                <div>
                <h5> CS5800 </h5>
                <p className="wd-dashboard-course-title">
                    Algorithms 
                </p>
                <button> Go </button>
                </div>
                    </Link>
                </div>    

                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/5520/Home" className="wd-dashboard-course-link" > <img src="/images/reactjs.jpg" width={200} />
                <div>
                <h5> CS5520 </h5>
                <p className="wd-dashboard-course-title">
                    Mobile Application Development
                </p>
                <button> Go </button>
                </div>
                    </Link>
                </div>    
            </div>
        </div>
    );
}