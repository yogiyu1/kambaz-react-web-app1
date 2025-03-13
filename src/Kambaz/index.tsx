import Account from "./Account";
import Dashboard from "./Dashboard";
import "./styles.css";
import { Routes, Route, Navigate } from "react-router";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import AssignmentEditor from "./Courses/Assignments/AssignmentEditor"; // Import the AssignmentEditor component
import ErrorBoundary from "./ErrorBoundary"; // Import the ErrorBoundary component
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ProtectedRoute from "./Account/ProtectedRoute";
import { useSelector, useDispatch } from "react-redux";
import { addCourse, updateCourse, deleteCourse } from "./Courses/reducer";

export default function Kambaz() {
    const coursesState = useSelector((state: any) => state.coursesReducer);
    const [course, setCourse] = useState<any>({
        _id: uuidv4(), name: "", number: "", startDate: "", endDate: "", description: "",
    });

    const dispatch = useDispatch();
    

    const handleAddCourse = (name: string, description: string) => {
        console.log("Add button clicked Redux");
        const newCourse = { _id: uuidv4(), name: name, description: description };
        dispatch(addCourse(newCourse));
    };


    const handleDeleteCourse = (courseId: string) => {
        console.log("delete button clicked Redux, courseId", courseId);
        dispatch(deleteCourse(courseId));
    };

    const handleUpdateCourse = (course: any) => {
        console.log("update button clicked Redux, course", course);
        dispatch(updateCourse(course));
    };


    return (
        <div id="wd-kambaz">
            <KambazNavigation />
            <div className="wd-main-content-offset p-3">
                <Routes>
                    <Route path="/" element={<Navigate to="Account" />} />
                    <Route path="/Account/*" element={<Account />} />
                    <Route path="/Dashboard" element={
                        <ProtectedRoute>
                            <Dashboard
                                coursesState={coursesState}
                                course={course}
                                setCourse={setCourse}
                                handleAddCourse={handleAddCourse}
                                handleDeleteCourse={handleDeleteCourse}
                                handleUpdateCourse={handleUpdateCourse}
                            />
                        </ProtectedRoute>
                    } />
                    <Route path="/Courses/:cid/*" element={<ProtectedRoute><Courses courses={coursesState}/></ProtectedRoute>} />
                    <Route path="/Courses/:cid/Assignments/New" element={<ErrorBoundary><AssignmentEditor /></ErrorBoundary>} /> {/* Wrap with ErrorBoundary */}
                    <Route path="/Courses/:cid/Assignments/Edit/:aid" element={<ErrorBoundary><AssignmentEditor /></ErrorBoundary>} /> {/* Wrap with ErrorBoundary */}
                    <Route path="/Calendar" element={<h1>Calendar</h1>} />
                    <Route path="/Inbox" element={<h1>Inbox</h1>} />
                </Routes>
            </div>
        </div>
    );
}