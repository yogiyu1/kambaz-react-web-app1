import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import { Col }from "react-bootstrap";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
            <div id="wd-dashboard-courses">
            <Row xs={1} md={5} className="g-4">

            <Col className="wd-dashboard-course" style={{ width: "270px" }}>
                <Card>
                    <Link to="/Kambaz/Courses/1234/Home"
                    className="wd-dashboard-course-link text-decoration-none text-dark">
                        <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
                        <Card.Body>
                            <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS1234 React JS</Card.Title>
                            <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "48px" }}>
                                        Full Stack software developer</Card.Text>
                            <Button variant="primary">Go</Button>
                        </Card.Body>
                    </Link>
                </Card>
            </Col> 

            <Col className="wd-dashboard-course" style={{ width: "270px" }}>
                <Card>
                    <Link to="/Kambaz/Courses/5001/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                    <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
                        <Card.Body>
                            <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS5001</Card.Title>
                            <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "38px" }}>
                                Intensive Foundations of CS
                            </Card.Text>
                            <Button variant="primary">Go</Button>
                        </Card.Body>
                    </Link>
                </Card>
            </Col>

            <Col className="wd-dashboard-course" style={{ width: "270px" }}>
                <Card>
                    <Link to="/Kambaz/Courses/5002/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                    <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
                        <Card.Body>
                            <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS5002</Card.Title>
                            <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "48px" }}>
                                Discrete Structures
                            </Card.Text>
                            <Button variant="primary">Go</Button>
                        </Card.Body>
                    </Link>
                </Card>
            </Col>

        
            <Col className="wd-dashboard-course" style={{ width: "270px" }}>
                <Card>
                    <Link to="/Kambaz/Courses/5004/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                    <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
                        <Card.Body>
                            <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS5004</Card.Title>
                            <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "48px" }}>
                                Object-Oriented Design
                            </Card.Text>
                            <Button variant="primary">Go</Button>
                        </Card.Body>
                    </Link>
                </Card>
            </Col>

        
            <Col className="wd-dashboard-course" style={{ width: "270px" }}>
                <Card>
                    <Link to="/Kambaz/Courses/5008/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                    <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
                        <Card.Body>
                            <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS5008</Card.Title>
                            <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "48px" }}>
                                Data Structures, Algo&their Applications
                            </Card.Text>
                            <Button variant="primary">Go</Button>
                        </Card.Body>
                    </Link>
                </Card>
            </Col>

                    
            <Col className="wd-dashboard-course" style={{ width: "270px" }}>
                <Card>
                    <Link to="/Kambaz/Courses/5800/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                    <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
                        <Card.Body>
                            <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS5800</Card.Title>
                            <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "48px" }}>
                                Algorithms 
                            </Card.Text>
                            <Button variant="primary">Go</Button>
                        </Card.Body>
                    </Link>
                </Card>
            </Col>

                           
            <Col className="wd-dashboard-course" style={{ width: "270px" }}>
                <Card>
                    <Link to="/Kambaz/Courses/5520/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                    <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
                        <Card.Body>
                            <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS5520</Card.Title>
                            <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "48px" }}>
                                Mobile Application Development 
                            </Card.Text>
                            <Button variant="primary">Go</Button>
                        </Card.Body>
                    </Link>
                </Card>
            </Col>
            </Row>
            </div>
        </div>
    );
}