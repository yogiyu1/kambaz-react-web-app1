import { Form, Row, Col, Button } from "react-bootstrap";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateAssignment } from "./reducer";
import { useState } from "react";

export default function AssignmentEditor() {
  const { cid, aid } = useParams(); 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const assignments = useSelector((state: any) => state.assignments.assignments);
  const assignment = assignments.find((a: { _id: string | undefined; }) => a._id === aid);

  const [editedAssignment, setEditedAssignment] = useState({
    _id: assignment._id,
    name: assignment.name,
    description: assignment.detail?.description || "",
    points: assignment.detail?.points || 100,
    dueDate: assignment.detail?.dueDate || "",
    availableFrom: assignment.detail?.availableFrom || "",
    availableUntil: assignment.detail?.availableUntil || "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setEditedAssignment({ ...editedAssignment, [name]: value });
  };

  const handleSave = () => {
    dispatch(updateAssignment(editedAssignment)); 
    navigate(`/Kambaz/Courses/${cid}/Assignments`); 
  };

  return (
    <Form.Group className="container p-3 w-50 mx-2">
      <Form.Group className="mb-3">
        <Form.Label>Assignment Name</Form.Label>
        <Form.Control 
          type="text" 
          name="name"
          value={editedAssignment.name} 
          onChange={handleChange} 
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          as="textarea"
          style={{ height: "200px" }}
          name="description"
          value={editedAssignment.description}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group as={Row} className="mb-3 align-items-center">
        <Col sm={4} className="text-end">
          <Form.Label>Points</Form.Label>
        </Col>
        <Col sm={8}>
          <Form.Control 
            type="number" 
            name="points"
            value={editedAssignment.points} 
            onChange={handleChange} 
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={4} className="text-end">
          Due Date
        </Form.Label>
        <Col sm={8}>
          <Form.Control 
            type="datetime-local" 
            name="dueDate"
            value={editedAssignment.dueDate}
            onChange={handleChange} 
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col sm={6}>
          <Form.Label>Available From</Form.Label>
          <Form.Control 
            type="datetime-local" 
            name="availableFrom"
            value={editedAssignment.availableFrom}
            onChange={handleChange} 
          />
        </Col>
        <Col sm={6}>
          <Form.Label>Until</Form.Label>
          <Form.Control 
            type="datetime-local" 
            name="availableUntil"
            value={editedAssignment.availableUntil}
            onChange={handleChange} 
          />
        </Col>
      </Form.Group>

      <hr />

      <div className="float-end">
        <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
          <Button variant="light" className="me-2">Cancel</Button>
        </Link>
        <Button variant="danger" onClick={handleSave}>Save</Button>
      </div>
    </Form.Group>
  );
}

