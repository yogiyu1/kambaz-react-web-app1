import Account from "./Account";
import Dashboard from "./Dashboard";
import "./styles.css";
import { Routes, Route, Navigate } from "react-router";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import AssignmentEditor from "./Courses/Assignments/AssignmentEditor";
import ErrorBoundary from "./ErrorBoundary";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import ProtectedRoute from "./Account/ProtectedRoute";
import { useSelector } from "react-redux";
// import { addCourse, updateCourse, deleteCourse } from "./Courses/reducer";
import Session from "./Account/Session";
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";

export default function Kambaz() {
    const coursesState = useSelector((state: any) => state.coursesReducer);
    const [courses, _setCourses]= coursesState.courses;
    const [course, setCourse] = useState<any>({
        _id: uuidv4(), name: "", number: "", startDate: "", endDate: "", description: "",
    });

    // const dispatch = useDispatch();
    const [userCourses, setUserCourses] = useState<any[]>([]);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const addNewCourse = async () => {
        const newCourse = await userClient.createCourse(course);
        setUserCourses([ ...userCourses, newCourse ]);
      };
    
    const fetchCourses = async () => {
      try {
        const myCourses = await userClient.findMyCourses();
        setUserCourses(myCourses);
      } catch (error) {
        console.error(error);
      }
    };

    const handleupdateCourse = async () => {
        const updatedCourse = await courseClient.updateCourse(course);
        console.log("updatedcourses", updatedCourse);
        setUserCourses(userCourses.map((c: { _id: any; }) => {
            if (c._id === updatedCourse._id) { return updatedCourse; }
            else { return c; }
        }))
    };
    
    useEffect(() => {
      fetchCourses();
    }, [currentUser]);

    const deleteCourse = async (courseId: string) => {
        await courseClient.deleteCourse(courseId);
        setUserCourses(userCourses.filter((course) => course._id !== courseId));
    };

    // const updateCourse = async () => {
    //     const updateCourse = async () => {
    //         await courseClient.updateCourse(course);
    //         setCourses(courses.map((c: { _id: any; }) => {
    //             if (c._id === course._id) { return course; }
    //             else { return c; }
    //         }))}};
    // const handleAddCourse = (name: string, description: string) => {
    //     console.log("Add button clicked Redux");
    //     const newCourse = { _id: uuidv4(), name: name, description: description };
    //     dispatch(addCourse(newCourse));
    // };


    // function handleDeleteCourse(courseId: string) {
    //         console.log("delete button clicked Redux, courseId", courseId);
    //         dispatch(deleteCourse(courseId));
    //     }

    
    


    return (
        <Session>
        <div id="wd-kambaz">
            <KambazNavigation />
            <div className="wd-main-content-offset p-3">
                <Routes>
                    <Route path="/" element={<Navigate to="Account" />} />
                    <Route path="/Account/*" element={<Account />} />
                    <Route path="/Dashboard" element={
                        <ProtectedRoute>
                            <Dashboard
                                courses={userCourses}
                                course={course}
                                setCourse={setCourse}
                                handleAddCourse={addNewCourse}
                                handleDeleteCourse={deleteCourse}
                                handleUpdateCourse={handleupdateCourse}
                            />
                        </ProtectedRoute>
                    } />
                    <Route path="/Courses/:cid/*" element={<ProtectedRoute><Courses courses={userCourses}/></ProtectedRoute>} />
                    <Route path="/Courses/:cid/Assignments/New" element={<ErrorBoundary><AssignmentEditor /></ErrorBoundary>} /> 
                    <Route path="/Courses/:cid/Assignments/Edit/:aid" element={<ErrorBoundary><AssignmentEditor /></ErrorBoundary>} /> 
                    <Route path="/Calendar" element={<h1>Calendar</h1>} />
                    <Route path="/Inbox" element={<h1>Inbox</h1>} />
                </Routes>
            </div>
        </div>
        </Session>
    );
}