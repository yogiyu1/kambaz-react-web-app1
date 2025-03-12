import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addAssignment } from '../../../redux/assignmentsSlice'; // Import the addAssignment action

export default function NewAssignment() {
    const { cid } = useParams();
    const [assignment, setAssignment] = useState({
        _id: uuidv4(),
        name: '',
        description: '',
        points: 100,
        dueDate: '',
        availableFrom: '',
        availableUntil: '',
        assignmentGroup: 'ASSIGNMENTS',
        displayGradeAs: 'PERCENTAGE',
        submissionType: 'ONLINE',
        onlineEntryOptions: {
            textEntry: false,
            websiteURL: true,
            mediaRecordings: false,
            studentAnnotation: false,
        },
        course: cid,
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSave = () => {
        dispatch(addAssignment(assignment)); // Dispatch the addAssignment action
        navigate(`/Kambaz/Courses/${cid}/Assignments`); // Navigate back to the assignments list
    };

    const handleCancel = () => {
        navigate(`/Kambaz/Courses/${cid}/Assignments`); // Navigate back to the assignments list
    };

    return (
        <div>
            <h1>Create New Assignment</h1>
            <Form>
                <Form.Group controlId="assignmentName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        value={assignment.name}
                        onChange={(e) => setAssignment({ ...assignment, name: e.target.value })}
                    />
                </Form.Group>
                <Form.Group controlId="assignmentDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={assignment.description}
                        onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
                    />
                </Form.Group>
                <Form.Group controlId="assignmentPoints">
                    <Form.Label>Points</Form.Label>
                    <Form.Control
                        type="number"
                        value={assignment.points}
                        onChange={(e) => setAssignment({ ...assignment, points: parseInt(e.target.value) })}
                    />
                </Form.Group>
                <Form.Group controlId="assignmentDueDate">
                    <Form.Label>Due Date</Form.Label>
                    <Form.Control
                        type="date"
                        value={assignment.dueDate}
                        onChange={(e) => setAssignment({ ...assignment, dueDate: e.target.value })}
                    />
                </Form.Group>
                <Form.Group controlId="assignmentAvailableFrom">
                    <Form.Label>Available From</Form.Label>
                    <Form.Control
                        type="date"
                        value={assignment.availableFrom}
                        onChange={(e) => setAssignment({ ...assignment, availableFrom: e.target.value })}
                    />
                </Form.Group>
                <Form.Group controlId="assignmentAvailableUntil">
                    <Form.Label>Available Until</Form.Label>
                    <Form.Control
                        type="date"
                        value={assignment.availableUntil}
                        onChange={(e) => setAssignment({ ...assignment, availableUntil: e.target.value })}
                    />
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={4} className="text-end">
                        Assignment Group
                    </Form.Label>
                    <Col sm={8}>
                        <Form.Select
                            value={assignment.assignmentGroup}
                            onChange={(e) => setAssignment({ ...assignment, assignmentGroup: e.target.value })}
                        >
                            <option value="QUIZZES">QUIZZES</option>
                            <option value="PROJECT">PROJECT</option>
                            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                            <option value="EXAMS">EXAMS</option>
                        </Form.Select>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={4} className="text-end">
                        Display Grade as
                    </Form.Label>
                    <Col sm={8} className="ms-auto">
                        <Form.Select
                            value={assignment.displayGradeAs}
                            onChange={(e) => setAssignment({ ...assignment, displayGradeAs: e.target.value })}
                        >
                            <option value="PERCENTAGE">Percentage</option>
                            <option value="GRADE">Grade</option>
                        </Form.Select>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={4} className="text-end">
                        Submission Type
                    </Form.Label>
                    <Col sm={8} className="ms-auto">
                        <Form.Select
                            value={assignment.submissionType}
                            onChange={(e) => setAssignment({ ...assignment, submissionType: e.target.value })}
                        >
                            <option value="ONLINE">Online</option>
                            <option value="INPERSON">In-person</option>
                        </Form.Select>
                        {assignment.submissionType === 'ONLINE' && (
                            <div className="p-3 border rounded mt-3">
                                <Form.Label>Online Entry Options</Form.Label>
                                <div className="ms-3">
                                    <Form.Check
                                        type="checkbox"
                                        label="Text Entry"
                                        checked={assignment.onlineEntryOptions.textEntry}
                                        onChange={(e) =>
                                            setAssignment({
                                                ...assignment,
                                                onlineEntryOptions: {
                                                    ...assignment.onlineEntryOptions,
                                                    textEntry: e.target.checked,
                                                },
                                            })
                                        }
                                    />
                                    <Form.Check
                                        type="checkbox"
                                        label="Website URL"
                                        checked={assignment.onlineEntryOptions.websiteURL}
                                        onChange={(e) =>
                                            setAssignment({
                                                ...assignment,
                                                onlineEntryOptions: {
                                                    ...assignment.onlineEntryOptions,
                                                    websiteURL: e.target.checked,
                                                },
                                            })
                                        }
                                    />
                                    <Form.Check
                                        type="checkbox"
                                        label="Media Recordings"
                                        checked={assignment.onlineEntryOptions.mediaRecordings}
                                        onChange={(e) =>
                                            setAssignment({
                                                ...assignment,
                                                onlineEntryOptions: {
                                                    ...assignment.onlineEntryOptions,
                                                    mediaRecordings: e.target.checked,
                                                },
                                            })
                                        }
                                    />
                                    <Form.Check
                                        type="checkbox"
                                        label="Student Annotation"
                                        checked={assignment.onlineEntryOptions.studentAnnotation}
                                        onChange={(e) =>
                                            setAssignment({
                                                ...assignment,
                                                onlineEntryOptions: {
                                                    ...assignment.onlineEntryOptions,
                                                    studentAnnotation: e.target.checked,
                                                },
                                            })
                                        }
                                    />
                                </div>
                            </div>
                        )}
                    </Col>
                </Form.Group>
                <Button variant="primary" onClick={handleSave}>
                    Save
                </Button>
                <Button variant="secondary" onClick={handleCancel} className="ms-2">
                    Cancel
                </Button>
            </Form>
        </div>
    );
}