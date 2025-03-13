import { useState } from 'react';
import { Link } from "react-router";
import { FaPlus, FaTrash } from "react-icons/fa6";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { IoEllipsisVertical } from "react-icons/io5";
import { BsGripVertical } from "react-icons/bs";
import { InputGroup, Row, Col } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { Button, ListGroup, Modal } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { LuNotebookText } from "react-icons/lu";
import { FaCaretDown } from "react-icons/fa";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment } from './reducer'; 

export default function Assignments({ }: { courseId: string }) {
    const { cid } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const assignmentsState = useSelector((state: any) => state.assignmentsReducer);
    console.log("index assignmentsState:", assignmentsState);
    const assignments = assignmentsState?.assignments?.filter((assignment: any) => assignment.course === cid);
    console.log("assignments:", assignments);
    const [showModal, setShowModal] = useState(false);
    const [assignmentToDelete, setAssignmentToDelete] = useState<any>(null);

    const handleDeleteClick = (assignment: any) => {
        setAssignmentToDelete(assignment);
        setShowModal(true);
    };

    const handleConfirmDelete = () => {
        if (assignmentToDelete) {
            dispatch(deleteAssignment(assignmentToDelete._id));
        }
        setShowModal(false);
        setAssignmentToDelete(null);
    };

    const handleCancelDelete = () => {
        setShowModal(false);
        setAssignmentToDelete(null);
    };
    console.log("assignments:", assignments);
    return (
        <div id="wd-assignments" className="text-nowrap">
            <Button 
                variant="danger" 
                size="lg" 
                className="me-1 float-end rounded-0" 
                id="wd-add-module-btn"
                onClick={() => navigate(`/Kambaz/Courses/${cid}/Assignments/New`)}
            >
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

             
                {assignments.map((assignment: any) => (
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
                            <Button
                                variant="link"
                                className="float-end text-danger"
                                onClick={() => handleDeleteClick(assignment)}
                            >
                                <FaTrash />
                            </Button>
                        </Col>
                    </Row>
                    </ListGroup.Item>
                ))}
            </ListGroup>

            <Modal show={showModal} onHide={handleCancelDelete}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete this assignment?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCancelDelete}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handleConfirmDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}


