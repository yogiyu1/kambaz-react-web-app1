import { Link } from "react-router-dom";
import { Row, Col, Card, Button, FormControl } from "react-bootstrap";
import * as db from "./Database";
import { useState } from "react";
import { enrollCourse, unenrollCourse } from "./Courses/Enrollments/reducer";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

export default function Dashboard(
    { courses, course, setCourse, addNewCourse,
        deleteCourse, updateCourse }: {
        courses: any[]; course: any; setCourse: (course: any) => void;
        addNewCourse: () => void; 
        deleteCourse: (course: any) => void;
        updateCourse: () => void; }) {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
    const publishedCourses = currentUser.role === "FACULTY" 
        ? courses 
        : courses.filter((course) =>
            enrollments.some(
                (enrollment: any) =>
                    enrollment.user === currentUser._id &&
                    enrollment.course === course._id
            )
        );

    const [showAllCourses, setShowAllCourses] = useState(true);
    const unenrolledCourses = currentUser.role === "FACULTY" || showAllCourses
    ? []
    : courses.filter((course) =>
        !enrollments.some(
            (enrollment: any) =>
                enrollment.user === currentUser._id &&
                enrollment.course === course._id
        )
    );

    const handleUnenroll = (user: string, course: string) => {
        
        dispatch(unenrollCourse({user, course}));
    };

    const handleEnroll = (user: string, course: string) => {
        const _id = uuidv4()
        dispatch(enrollCourse({_id, user, course}));
    };

    console.log("Published courses:", publishedCourses);
    return (
        <div className="p-4" id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> 
            <hr />

            {currentUser.role === "FACULTY" && (
                <>
                    <h5>New Course
                        <button className="btn btn-primary float-end"
                            id="wd-add-new-course-click"
                            onClick={addNewCourse}>
                            Add
                        </button>
                        <button className="btn btn-warning float-end me-2"
                            onClick={updateCourse} 
                            id="wd-update-course-click">
                            Update
                        </button>
                    </h5>
                    <br />
                    <FormControl value={course.name} className="mb-2"   
                        onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                    <FormControl as="textarea" value={course.description} rows={3} className="mb-2"
                        onChange={(e) => setCourse({ ...course, description: e.target.value })} />
                </>
            )}

            {currentUser.role === "STUDENT" && (
                <>
                    <h5>New Course
                        <button className="btn btn-primary float-end"
                            id="wd-add-new-course-click"
                            onClick={() => {
                                console.log("Toggling showAllCourses:", !showAllCourses);
                                setShowAllCourses(!showAllCourses);
                            }}>
                                {showAllCourses ? "Show All Courses" : "Show Enrolled Courses" }
                        </button>
                    </h5>
                    <br />
                    <FormControl value={course.name} className="mb-2"   
                        onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                    <FormControl as="textarea" value={course.description} rows={3} className="mb-2"
                        onChange={(e) => setCourse({ ...course, description: e.target.value })} />
                </>
            )}

            <h2 id="wd-dashboard-published">Published Courses ({publishedCourses.length})</h2> 
            <hr />

            <div id="wd-dashboard-courses">
                <Row xs={1} md={5} className="g-4">
                    {publishedCourses.map((course) => (
                        <Col className="wd-dashboard-course" style={{ width: "300px" }} key={course._id}>
                            <Card>
                                
                                    <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
                                    <Card.Body className="card-body">
                                        <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                                            {course.name}
                                        </Card.Title>
                                        <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                            {course.description}
                                        </Card.Text>
                                        
                                        <Button variant="primary" onClick={() => navigate(`/Kambaz/Courses/${course._id}/Home`)}>Go</Button>

                                        {currentUser.role === "FACULTY" && (
                                            <>
                                                <button onClick={(event) => {
                                                    event.preventDefault();
                                                    deleteCourse(course._id);
                                                }} className="btn btn-danger float-end"
                                                    id="wd-delete-course-click">
                                                    Delete
                                                </button>
                                                <button id="wd-edit-course-click"
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        setCourse(course);
                                                    }}
                                                    className="btn btn-warning me-2 float-end">
                                                    Edit
                                                </button>
                                            </>
                                        )}

                                        {currentUser.role === "STUDENT" && !showAllCourses &&  (
                                            enrollments.some((enrollment: { _id: any; user: any; course: any; }) => enrollment.user === currentUser._id && enrollment.course === course._id) ? (
                                                <Button variant="danger" onClick={() => handleUnenroll(currentUser._id, course._id)}>
                                                    Unenroll
                                                </Button>
                                            ) : (
                                                <Button variant="success" onClick={() => handleEnroll(currentUser._id, course._id)}>
                                                    Enroll
                                                </Button>
                                            )
                                        )}

                                    </Card.Body>
                                
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>

            <hr />
            <div id="wd-dashboard-courses">
                <Row xs={1} md={5} className="g-4">
                    {unenrolledCourses.map((course) => (
                        <Col className="wd-dashboard-course" style={{ width: "300px" }} key={course._id}>
                            <Card>
                                
                                    
                                    <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
                                    <Card.Body className="card-body">
                                        <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                                            {course.name}
                                        </Card.Title>
                                        <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                            {course.description}
                                        </Card.Text>
                                        <Button variant="primary" onClick={() => navigate(`/Kambaz/Courses/${course._id}/Home`)}>Go</Button>

                                        {currentUser.role === "FACULTY" && (
                                            <>
                                                <button onClick={(event) => {
                                                    event.preventDefault();
                                                    deleteCourse(course._id);
                                                }} className="btn btn-danger float-end"
                                                    id="wd-delete-course-click">
                                                    Delete
                                                </button>
                                                <button id="wd-edit-course-click"
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        setCourse(course);
                                                    }}
                                                    className="btn btn-warning me-2 float-end">
                                                    Edit
                                                </button>
                                            </>
                                        )}
                                        {currentUser.role === "STUDENT" && !showAllCourses &&  (
                                            enrollments.some((enrollment: {_id: any; user: any; course: any; }) => enrollment.user === currentUser._id && enrollment.course === course._id) ? (
                                                <Button variant="danger" onClick={() => handleUnenroll(currentUser._id, course._id)}>
                                                    Unenroll
                                                </Button>
                                            ) : (
                                                <Button variant="success" onClick={() => handleEnroll(currentUser._id, course._id)}>
                                                    Enroll
                                                </Button>
                                            )
                                        )}
                                    </Card.Body>
                                
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
}

