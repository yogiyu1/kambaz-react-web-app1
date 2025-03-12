import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { addAssignment, updateAssignment } from './reducer'; // Import the actions

interface AssignmentDetail {
    dueDate: string;
    points: number;
    availableFrom: string;
    description: string;
    modules: string[];
}

interface Assignment {
    _id: string;
    title: string;
    course: string;
    detail: AssignmentDetail;
}

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const assignmentsState = useSelector((state: any) => state.assignmentsReducer);
    console.log("assignmentsState:", assignmentsState);
    const existingAssignment = assignmentsState?.assignments?.find((assignment: any) => assignment._id === aid);

    const [assignment, setAssignment] = useState<Assignment>({
        _id: aid || uuidv4(),
        title: existingAssignment?.title || '',
        course: cid || '',
        detail: {
            dueDate: existingAssignment?.detail?.dueDate || '',
            points: existingAssignment?.detail?.points || 100,
            availableFrom: existingAssignment?.detail?.availableFrom || '',
            description: existingAssignment?.detail?.description || '',
            modules: existingAssignment?.detail?.modules || [],
        },
    });

    useEffect(() => {
        if (existingAssignment) {
            setAssignment(existingAssignment);
        }
    }, [existingAssignment]);

    const handleSave = () => {
        if (existingAssignment) {
            dispatch(updateAssignment(assignment)); // Dispatch the updateAssignment action
        } else {
            dispatch(addAssignment(assignment)); // Dispatch the addAssignment action
        }
        navigate(`/Kambaz/Courses/${cid}/Assignments`); // Navigate back to the assignments list
    };

    const handleCancel = () => {
        navigate(`/Kambaz/Courses/${cid}/Assignments`); // Navigate back to the assignments list
    };

    console.log("assignment:", assignment);
    console.log("existingAssignment:", existingAssignment);
    return (
        <Form.Group className="container p-3 w-50 mx-2">
    
          <Form.Group className="mb-3">
            <Form.Label>Assignment Name</Form.Label>
            <Form.Control type="text" 
            defaultValue={assignment.title} 
            onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}/>
          </Form.Group>
    
          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              style={{ height: "200px" }}
              defaultValue={assignment.detail.description}
              onChange={(e) => setAssignment({ ...assignment, detail: { ...assignment.detail, description: e.target.value } })}
              />
          </Form.Group>
    
          <Form.Group as={Row} className="mb-3 align-items-center">
            <Col sm={4} className="text-end">
              <Form.Label>Points</Form.Label>
            </Col>
            <Col sm={8} className="ms-auto">
              <Form.Control type="number" defaultValue={assignment.detail?.points || 100} 
              onChange={(e) => setAssignment({ ...assignment, detail: { ...assignment.detail, points: parseInt(e.target.value) } })}
              />
            </Col>
          </Form.Group>
    
          <Form.Group as={Row} className="mb-3 align-items-center">
            <Form.Label column sm={4} className="text-end">
              Assignment Group
            </Form.Label>
            <Col sm={8}>
              <Form.Select>
                <option value="QUIZZES">QUIZZES</option>
                <option value="PROJECT">PROJECT</option>
                <option value="ASSIGNMENTS" selected>ASSIGNMENTS</option>
                <option value="EXAMS">EXAMS</option>
              </Form.Select>
            </Col>
          </Form.Group>
    
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={4} className="text-end">
              Display Grade as
            </Form.Label>
            <Col sm={8} className="ms-auto">
              <Form.Select>
                <option value="PERCENTAGE" selected>Percentage</option>
                <option value="GRADE">Grade</option>
              </Form.Select>
            </Col>
          </Form.Group>
    
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={4} className="text-end">
              Submission Type
            </Form.Label>
            <Col sm={8} className="ms-auto">
              <Form.Group className="p-3 border rounded">
                <Form.Select>
                  <option value="ONLINE" selected>Online</option>
                  <option value="INPERSON">In-person</option>
                </Form.Select>
                <Form.Label className="mt-3">Online Entry Options</Form.Label>
                <div className="ms-3">
                  <Form.Check type="checkbox" label="Text Entry" />
                  <Form.Check type="checkbox" label="Website URL" defaultChecked />
                  <Form.Check type="checkbox" label="Media Recordings" />
                  <Form.Check type="checkbox" label="Student Annotation" />
                  <Form.Check type="checkbox" label="File Uploads" />
                </div>
              </Form.Group>
            </Col>
          </Form.Group>
    
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={4} className="text-end">
              Assign
            </Form.Label>
            <Col sm={8} className="ms-auto">
              <Form.Group className="p-3 border rounded">
                <Form.Group className="mb-3">
                  <Form.Label>Assign to</Form.Label>
                  <Form.Control type="text" placeholder="Everyone" />
                </Form.Group>
    
                <Row className="mb-3">
                  <Col>
                    <Form.Label>Due</Form.Label>
                    <Form.Control
                      type="datetime-local"
                      defaultValue={assignment.detail.dueDate}
                    />
                  </Col>
                </Row>
    
                <Row>
                  <Col sm={6}>
                    <Form.Label>Available from</Form.Label>
                  </Col>
                  <Col sm={6}>
                    <Form.Label>Until</Form.Label>
                  </Col>
                  <Col sm={6}>
                    <Form.Control
                      type="datetime-local"
                      defaultValue={assignment.detail.availableFrom}
                    />
                  </Col>
                  <Col sm={6}>
                    <Form.Control
                      type="datetime-local"
                      defaultValue={assignment.detail.dueDate}
                    />
                  </Col>
                </Row>
              </Form.Group>
            </Col>
          </Form.Group>
    
          <hr />
    
          <div className="float-end">
            <Button variant="primary" onClick={handleSave}>
                    Save
            </Button>
            <Button variant="secondary" onClick={handleCancel} className="ms-2">
                    Cancel
            </Button>
          </div>
        </Form.Group>
      );
}