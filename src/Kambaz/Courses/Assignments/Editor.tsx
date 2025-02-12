import { Form, Row, Col, Button } from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <Form.Group className="container p-3 w-50 mx-2"> 

      <Form.Group className="mb-3">
        <Form.Label>Assignment Name</Form.Label>
        <Form.Control type="text" defaultValue="A1 - ENV + HTML" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control as="textarea" style={{ height: "200px" }}
          defaultValue="The assignment is available online Submit a link to the landing page of"
        />
      </Form.Group>

      <Form.Group as={Row} className="mb-3 align-items-center">
        <Col sm={4} className="text-end">
            <Form.Label>Points</Form.Label>
        </Col>
        <Col sm={8} className="ms-auto">
            <Form.Control type="number" defaultValue="100" />
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
        <Form.Label column sm={4} className="text-end">Display Grade as</Form.Label>
        <Col sm={8} className="ms-auto">
          <Form.Select>
            <option value="PERCENTAGE" selected>Percentage</option>
            <option value="GRADE">Grade</option>
          </Form.Select>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={4} className="text-end">Submission Type</Form.Label>
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
        <Form.Label column sm={4} className="text-end">Assign</Form.Label>
        <Col sm={8} className="ms-auto">
          <Form.Group className="p-3 border rounded">
            <Form.Group className="mb-3">
              <Form.Label>Assign to</Form.Label>
              <Form.Control type="text" placeholder="Everyone" />
            </Form.Group>

            <Row className="mb-3">
              <Col>
                <Form.Label>Due</Form.Label>
                <Form.Control type="datetime-local" defaultValue="2024-05-13T23:59" />
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Label>Available from</Form.Label>
                <Form.Control type="datetime-local" defaultValue="2024-05-06T00:00" />
              </Col>
              <Col>
                <Form.Label>Until</Form.Label>
                <Form.Control type="datetime-local" defaultValue="2024-05-13T23:59" />
              </Col>
            </Row>
          </Form.Group>
        </Col>
      </Form.Group>

      <hr />

    
      <div className="float-end ">
        <Button variant="light" className="me-2">Cancel</Button>
        <Button variant="danger">Save</Button>
      </div>
    </Form.Group>
  );
}
