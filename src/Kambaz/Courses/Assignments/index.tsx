import { Link } from "react-router";
import { FaPlus } from "react-icons/fa6";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { IoEllipsisVertical } from "react-icons/io5";
import { BsGripVertical } from "react-icons/bs";
import { InputGroup, Row, Col } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { Button} from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { ListGroup } from "react-bootstrap";
import {LuNotebookText} from "react-icons/lu";
import { FaCaretDown } from"react-icons/fa";
import { useParams } from "react-router";
import * as db from "../../Database";

export default function Assignments(){
    const { cid } = useParams()
    const assignments = db.assignments.filter((assignment) => assignment.course === cid);
    return(
        <div id="wd-assignments" className="text-nowrap">
            {/* <input placeholder="Search for Assignments" style={{ marginRight: "8px" }} id="wd-search-assignment" />
            <button style={{ marginRight: "8px" }} id="wd-add-assignment-group">+ Group</button>
            <button style={{ marginRight: "8px" }} id="wd-add-assignment">+ Assignment</button>
            <h3 id="wd-assignments-title">ASSIGNMENTS 40% of Total <button>+</button> </h3> */}
            <Button variant="danger" size="lg" className="me-1 float-end rounded-0" id="wd-add-module-btn">
            <FaPlus className="position-relative me-3" style={{ bottom: "1px" }} />
                Assignment
            </Button>
            <Button variant="secondary" size="lg" className="me-1 float-end rounded-0" id="wd-add-module-btn">
            <FaPlus className="position-relative me-3" style={{ bottom: "1px" }} />
                Group
            </Button>
  
            <InputGroup className="w-50 ms-3 me-1 position-relative">
                <Form.Control size="lg" className="rounded-0 ps-5" placeholder="Search..."/>
                <FaSearch className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" />
            </InputGroup>
            <br /><br /><br /><br />

            
            <ListGroup className="rounded-0" id="wd-modules">
                <ListGroup.Item className="wd-module p-0 mb-0 fs-5 border-gray">
                    <div className="wd-title d-flex align-items-center justify-content-between p-3 ps-2 bg-secondary text-dark">

                        <div className="d-flex align-items-center">
                            <BsGripVertical className="me-2 fs-3" />
                            <span> <FaCaretDown />  ASSIGNMENTS</span>
                        </div>

                        <div className="d-flex align-items-center gap-2">
                        <p className="border border-dark rounded-pill px-3 py-1 mb-0">40% of Total</p>


                            <span className="fs-4">+</span>
                            <IoEllipsisVertical className="fs-4" />
                        </div>
                    </div> 
                </ListGroup.Item>

             
                {assignments.map((assignment) => (
                    <ListGroup.Item key={assignment._id} className="wd-lesson p-3 ps-1">
                    <Row className="align-items-center">
                        <Col sm={1} className="text-center">
                            <BsGripVertical className="me-2 fs-3" />
                            <LuNotebookText className="fs-3 text-success" />
                        </Col>

                        <Col sm={8}>
                        <Link
                            to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                            className="wd-assignment-link text-dark fw-bold fs-5"
                        >
                            {assignment.title}
                        </Link>
                        <p className="wd-assignments-informs text-muted mb-0">
                            <span className="text-danger">
                            {assignment.detail.modules.join(", ")}
                            </span>{" "}
                            | <strong>Not available until</strong> {assignment.detail.availableFrom}
                            <br />
                            <strong>Due</strong> {assignment.detail.dueDate} | {assignment.detail.points} pts
                        </p>
                        </Col>

                        <Col sm={3} className="text-end">
                            <LessonControlButtons />
                        </Col>
                    </Row>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
}


{/* 
    
                <ListGroup.Item className="wd-lesson p-3 ps-1">
                    <Row className="align-items-center">
                        <Col sm={1} className="text-center">
                            <BsGripVertical className="me-2 fs-3" />
                            <LuNotebookText className="fs-3 text-success" />
                        </Col>

                        <Col sm={8}>
                            <Link
                                to="/Kambaz/Courses/1234/Assignments/A1"
                                className="wd-assignment-link text-dark fw-bold fs-5">
                                A1
                            </Link>
                            <p className="wd-assignments-informs text-muted mb-0">
                                <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 6 at 12:00am
                                <br />
                                <strong>Due</strong> May 13 at 11:59pm | 100 pts
                            </p>
                        </Col>

                        <Col sm={3} className="text-end">
                            <LessonControlButtons />
                        </Col>
                    </Row>
                </ListGroup.Item>

        
                <ListGroup.Item className="wd-lesson p-3 ps-1">
                    <Row className="align-items-center">
                        <Col sm={1} className="text-center">
                            <BsGripVertical className="me-2 fs-3" />
                            <LuNotebookText className="fs-3 text-success" />
                        </Col>

                        <Col sm={8}>
                            <Link
                                to="/Kambaz/Courses/1234/Assignments/A2"
                                className="wd-assignment-link text-dark fw-bold fs-5">
                                A2
                            </Link>
                            <p className="wd-assignments-informs text-muted mb-0">
                                <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 13 at 12:00am
                                <br />
                                <strong>Due</strong> May 20 at 11:59pm | 100 pts
                            </p>
                        </Col>

                        <Col sm={3} className="text-end">
                            <LessonControlButtons />
                        </Col>
                    </Row>
                </ListGroup.Item>


                <ListGroup.Item className="wd-lesson p-3 ps-1">
                    <Row className="align-items-center">
        
                        <Col sm={1} className="text-center">
                            <BsGripVertical className="me-2 fs-3" />
                            <LuNotebookText className="fs-3 text-success" />
                        </Col>

                        <Col sm={8}>
                            <Link
                                to="/Kambaz/Courses/1234/Assignments/A3"
                                className="wd-assignment-link text-dark fw-bold fs-5">
                                A3
                            </Link>
                            <p className="wd-assignments-informs text-muted mb-0">
                                <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 20 at 12:00am
                                <br />
                                <strong>Due</strong> May 27 at 11:59pm | 100 pts
                            </p>
                        </Col>

                        <Col sm={3} className="text-end">
                            <LessonControlButtons />
                        </Col>
                    </Row>
                </ListGroup.Item>
                </ListGroup.Item>
            </ListGroup> */}


