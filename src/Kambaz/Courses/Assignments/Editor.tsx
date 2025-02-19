// import { Form, Row, Col, Button } from "react-bootstrap";
// import { useParams } from "react-router";
// import * as db from "../../Database";

// export default function AssignmentEditor() {
//   const { cid } = useParams()
//   const { assignments } = db.assignments
//   return (
//     <Form.Group className="container p-3 w-50 mx-2"> 

//       <Form.Group className="mb-3">
//         <Form.Label>Assignment Name</Form.Label>
//         <Form.Control type="text" defaultValue="A1 - ENV + HTML" />
//       </Form.Group>

//       <Form.Group className="mb-3">
//         <Form.Control as="textarea" style={{ height: "200px" }}
//           defaultValue="The assignment is available online Submit a link to the landing page of"
//         />
//       </Form.Group>

//       <Form.Group as={Row} className="mb-3 align-items-center">
//         <Col sm={4} className="text-end">
//             <Form.Label>Points</Form.Label>
//         </Col>
//         <Col sm={8} className="ms-auto">
//             <Form.Control type="number" defaultValue="100" />
//         </Col>
//       </Form.Group>


//         <Form.Group as={Row} className="mb-3 align-items-center">
//             <Form.Label column sm={4} className="text-end">
//                 Assignment Group
//             </Form.Label>
//             <Col sm={8}>
//                 <Form.Select>
//                     <option value="QUIZZES">QUIZZES</option>
//                     <option value="PROJECT">PROJECT</option>
//                     <option value="ASSIGNMENTS" selected>ASSIGNMENTS</option>
//                     <option value="EXAMS">EXAMS</option>
//                 </Form.Select>
//             </Col>
//         </Form.Group>


//       <Form.Group as={Row} className="mb-3">
//         <Form.Label column sm={4} className="text-end">Display Grade as</Form.Label>
//         <Col sm={8} className="ms-auto">
//           <Form.Select>
//             <option value="PERCENTAGE" selected>Percentage</option>
//             <option value="GRADE">Grade</option>
//           </Form.Select>
//         </Col>
//       </Form.Group>

//       <Form.Group as={Row} className="mb-3">
//         <Form.Label column sm={4} className="text-end">Submission Type</Form.Label>
//         <Col sm={8} className="ms-auto">
//           <Form.Group className="p-3 border rounded">
//             <Form.Select>
//               <option value="ONLINE" selected>Online</option>
//               <option value="INPERSON">In-person</option>
//             </Form.Select>

      
//             <Form.Label className="mt-3">Online Entry Options</Form.Label>
//             <div className="ms-3">
//               <Form.Check type="checkbox" label="Text Entry" />
//               <Form.Check type="checkbox" label="Website URL" defaultChecked />
//               <Form.Check type="checkbox" label="Media Recordings" />
//               <Form.Check type="checkbox" label="Student Annotation" />
//               <Form.Check type="checkbox" label="File Uploads" />
//             </div>
//           </Form.Group>
//         </Col>
//       </Form.Group>

//       <Form.Group as={Row} className="mb-3">
//         <Form.Label column sm={4} className="text-end">Assign</Form.Label>
//         <Col sm={8} className="ms-auto">
//           <Form.Group className="p-3 border rounded">
//             <Form.Group className="mb-3">
//               <Form.Label>Assign to</Form.Label>
//               <Form.Control type="text" placeholder="Everyone" />
//             </Form.Group>

//             <Row className="mb-3">
//               <Col>
//                 <Form.Label>Due</Form.Label>
//                 <Form.Control type="datetime-local" defaultValue="2024-05-13T23:59" />
//               </Col>
//             </Row>

//             <Row>
//               <Col>
//                 <Form.Label>Available from</Form.Label> <Form.Label>Until</Form.Label>
//                 <Form.Control type="datetime-local" defaultValue="2024-05-06T00:00" />
                
//                 <Form.Control type="datetime-local" defaultValue="2024-05-13T23:59" />
//               </Col>
//             </Row>
//           </Form.Group>
//         </Col>
//       </Form.Group>

//       <hr />

    
//       <div className="float-end ">
//         <Button variant="light" className="me-2">Cancel</Button>
//         <Button variant="danger">Save</Button>
//       </div>
//     </Form.Group>
//   );
// }

import { Form, Row, Col, Button } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import * as db from "../../Database";

export default function AssignmentEditor() {
  const { cid, aid } = useParams(); // 获取课程ID和作业ID

  // 查找当前作业
  const assignment = db.assignments.find((a) => a._id === aid);

  // 如果找不到作业，显示错误提示
  if (!assignment) {
    return <p className="text-danger text-center">Assignment not found.</p>;
  }

  return (
    <Form.Group className="container p-3 w-50 mx-2">
      {/* Assignment Name */}
      <Form.Group className="mb-3">
        <Form.Label>Assignment Name</Form.Label>
        <Form.Control type="text" defaultValue={assignment.title} />
      </Form.Group>

      {/* Description */}
      <Form.Group className="mb-3">
        <Form.Control
          as="textarea"
          style={{ height: "200px" }}
          defaultValue={assignment.detail.description}
        />
      </Form.Group>

      {/* Points */}
      <Form.Group as={Row} className="mb-3 align-items-center">
        <Col sm={4} className="text-end">
          <Form.Label>Points</Form.Label>
        </Col>
        <Col sm={8} className="ms-auto">
          <Form.Control type="number" defaultValue={assignment.detail?.points || 100} />
        </Col>
      </Form.Group>

      {/* Assignment Group */}
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

      {/* Display Grade As */}
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

      {/* Submission Type */}
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

      {/* Assign Section */}
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

      {/* Buttons */}
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
