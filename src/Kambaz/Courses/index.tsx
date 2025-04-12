import CourseNavigation from "./Navigation";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";
import { useState, useEffect } from "react";
import * as enrollmentClient from "./Enrollments/client";

export default function Courses({ courses }: { courses: any[] }) {
  const { cid } = useParams();
  console.log("current courses", courses)
  const course = courses.find((c) => c._id === cid);
  const { pathname } = useLocation();
  const [users, setUsers] = useState<any[]>([]);

  console.log("course", course, useParams());
  const fetchUsers = async () => {
    console.log("ppl cid",cid)
    if (cid) {
      const users = await enrollmentClient.findUsersForCourse(cid);
      console.log("course users", users);
      setUsers(users);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, [cid]);


  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" /> 
        {course && course.name} &gt; {pathname.split("/")[4]}
      </h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CourseNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments courseId={""} />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="People" element={<PeopleTable users={users} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
