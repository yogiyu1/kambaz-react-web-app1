import { ListGroup } from "react-bootstrap";
import { Link, useLocation, useParams } from "react-router-dom";

export default function CourseNavigation() {
  const { pathname } = useLocation();
  const { cid } = useParams(); 

  const links = [
    { label: "Home", path: `/Kambaz/Courses/${cid}/Home` },
    { label: "Modules", path: `/Kambaz/Courses/${cid}/Modules` },
    { label: "Piazza", path: `/Kambaz/Courses/${cid}/Piazza` },
    { label: "Zoom", path: `/Kambaz/Courses/${cid}/Zoom` },
    { label: "Assignments", path: `/Kambaz/Courses/${cid}/Assignments` },
    { label: "Quizzes", path: `/Kambaz/Courses/${cid}/Quizzes` },
    { label: "Grades", path: `/Kambaz/Courses/${cid}/Grades` },
    { label: "People", path: `/Kambaz/Courses/${cid}/People` },
  ];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <ListGroup.Item
          key={link.path}
          as={Link}
          to={link.path}
          className={`list-group-item border border-0 ${pathname.startsWith(link.path) ? "active" : "text-danger"}`}
        >
          {link.label}
        </ListGroup.Item>
      ))}
    </div>
  );
}


      {/* <Link to="/Kambaz/Courses/1234/Home" 
            id="wd-course-home-link"
            className={`list-group-item border border-0
              ${location.pathname === "/Kambaz/Courses/1234/Home" ? "active" : "text-danger"} `}>
          Home
      </Link>

      <Link to="/Kambaz/Courses/1234/Modules" 
            id="wd-course-modules-link" 
            className={`list-group-item border border-0 
              ${location.pathname === "/Kambaz/Courses/1234/Modules" ? "active" : "text-danger"} `}>
          Modules
      </Link>

      <Link to="/Kambaz/Courses/1234/Piazza" 
            id="wd-course-piazza-link" 
            className={`list-group-item border border-0 
              ${location.pathname === "/Kambaz/Courses/1234/Piazza" ? "active" : "text-danger"} `}>
          Piazza
      </Link>

      <Link to="/Kambaz/Courses/1234/Zoom" 
            id="wd-course-zoom-link" 
            className={`list-group-item border border-0 
              ${location.pathname === "/Kambaz/Courses/1234/Zoom" ? "active" : "text-danger"} `}>
          Zoom
      </Link>

      <Link to="/Kambaz/Courses/1234/Assignments" 
            id="wd-course-assignments-link" 
            className={`list-group-item border border-0 
              ${location.pathname.startsWith("/Kambaz/Courses/1234/Assignments") ? "active" : "text-danger"} `}
            >
          Assignments
      </Link>

      <Link to="/Kambaz/Courses/1234/Quizzes" 
            id="wd-course-quizzes-link" 
            className={`list-group-item border border-0 
              ${location.pathname === "/Kambaz/Courses/1234/Quizzes" ? "active" : "text-danger"} `}>
          Quizzes
      </Link>

      <Link to="/Kambaz/Courses/1234/Grades" 
            id="wd-course-modules-link" 
            className={`list-group-item border border-0 
              ${location.pathname === "/Kambaz/Courses/1234/Grades" ? "active" : "text-danger"} `}>
          Grades
      </Link>

      <Link to="/Kambaz/Courses/1234/People" 
            id="wd-course-people-link" 
            className={`list-group-item border border-0 
              ${location.pathname === "/Kambaz/Courses/1234/People" ? "active" : "text-danger"} `}>
          People
      </Link> 
    </div>
  );
}*/}
