import { Form, Row, Col, Button } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import * as db from "../../Database";

export default function AssignmentEditor() {
  const { cid, aid } = useParams(); 
  const assignment = db.assignments.find((a) => a._id === aid);

  if (!assignment) {
    return <p className="text-danger text-center">Assignment not found.</p>;
  }

  console.log("wtf?", assignment);
  return (
    <Form.Group className="container p-3 w-50 mx-2">

      <Form.Group className="mb-3">
        <Form.Label>Assignment Name</Form.Label>
        <Form.Control type="text" defaultValue={assignment.title} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          as="textarea"
          style={{ height: "200px" }}
          defaultValue={assignment.detail.description}
        />
      </Form.Group>

      <Form.Group as={Row} className="mb-3 align-items-center">
        <Col sm={4} className="text-end">
          <Form.Label>Points</Form.Label>
        </Col>
        <Col sm={8} className="ms-auto">
          <Form.Control type="number" defaultValue={assignment.detail?.points || 100} />
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
        <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
          <Button variant="light" className="me-2">
            Cancel
          </Button>
        </Link>
        <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
          <Button variant="danger">Save</Button>
        </Link>
      </div>
    </Form.Group>
  );
}
