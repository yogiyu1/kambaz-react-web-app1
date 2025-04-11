import { Row, Col, Card, Button, FormControl } from "react-bootstrap";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Dashboard(
    { courses, unenrolledCourses, course, setCourse, handleAddCourse,
        handleDeleteCourse, handleUpdateCourse, handleEnroll, handleUnenroll }: 
        { courses: any[]; 
        unenrolledCourses: any[];
        course: any; setCourse: (course: any) => void;
        handleAddCourse: (name: string, description: string) => void; 
        handleDeleteCourse: (courseId: string) => void;
        handleUpdateCourse: (course: any) => void;
        handleEnroll: (userId: string, courseId: string) => void;
        handleUnenroll: (userId: string, courseId: string) => void; }) {
    
    console.log("coursesState:", courses);
    const navigate = useNavigate();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const [showAllCourses, setShowAllCourses] = useState(true);

    return (
        <div className="p-4" id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> 
            <hr />
            {currentUser.role === "FACULTY" && (
                <>
                    <h5>New Course
                        <button className="btn btn-primary float-end"
                            id="wd-add-new-course-click"
                            onClick={() => handleAddCourse(course.name, course.description)}
                            >
                            Add
                        </button>
                        <button className="btn btn-warning float-end me-2"
                            onClick={() => handleUpdateCourse(course)}
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


                <>
                    <h5> Click button to show Enrollment Screen
                        <button className="btn btn-primary float-end"
                            id="wd-add-new-course-click"
                            onClick={() => {
                                console.log("Toggling showAllCourses:", !showAllCourses);
                                setShowAllCourses(!showAllCourses);
                                console.log("Unenrolled courses", unenrolledCourses);
                                
                            }}>
                                {showAllCourses ? "Show All Courses" : "Show Enrolled Courses" }
                        </button>
                    </h5>
                    <br />
                </>

            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> 
            
            <hr />

            <div id="wd-dashboard-courses">
                <Row xs={1} md={5} className="g-4">
                    {courses.map((course) => (
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
                                                    handleDeleteCourse(course._id);
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
                                        <hr />
                                        {!showAllCourses &&  (<>
                                                <Button className="btn btn-danger float-end" variant="success" onClick={() => handleUnenroll(currentUser._id, course._id)}>
                                                    Unenroll
                                                </Button>
                                        </>)}
                                    </Card.Body>
                                
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>

            
            {!showAllCourses &&  (<>
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
                                                    handleDeleteCourse(course._id);
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
                                                <hr />
                                                <Button className = "float-end" variant="success" onClick={() => handleEnroll(currentUser._id, course._id)}>
                                                    Enroll
                                                </Button>
                                            
                                        
                                    </Card.Body>
                                
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
            </>)}
        </div>
    );
}

