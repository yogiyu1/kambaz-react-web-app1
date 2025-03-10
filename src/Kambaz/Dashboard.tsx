import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import { Col }from "react-bootstrap";
import * as db from "./Database";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FormControl } from "react-bootstrap";

export default function Dashboard() {
    const [course, setCourse] = useState<any>({
        _id: "0", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
        image: "/images/reactjs.jpg", description: "New Description"
      });
    
      const addNewCourse = () => {
        const newCourse = { ...course, _id: uuidv4() };
        setCourses([...courses, newCourse ]);
      };
    const [courses, setCourses] = useState<any[]>(db.courses);
    return (
          
        <div className="p-4" id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />


            <h5>New Course
                <button className="btn btn-primary float-end"
                  id="wd-add-new-course-click"
                  onClick={addNewCourse} > Add </button>
            </h5><br />
            <FormControl value={course.name} className="mb-2"   
                onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
            <FormControl as="textarea" value={course.description} rows={3} className="mb-2"
                onChange={(e) => setCourse({ ...course, description: e.target.value }) } />



            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
            <div id="wd-dashboard-courses">
            <Row xs={1} md={5} className="g-4">
                {courses.map((course) => (
                <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                    <Card>
                        <Link to={`/Kambaz/Courses/${course._id}/Home`}
                        className="wd-dashboard-course-link text-decoration-none text-dark">
                            <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
                            <Card.Body  className="card-body">
                                <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                                    {course.name} </Card.Title>
                                <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                    {course.description} </Card.Text>
                                <Button variant="primary"> Go </Button>
                            </Card.Body>
                        </Link>
                    </Card>
                </Col> 
            ))}
            </Row>
            </div>
        </div>
    );
}