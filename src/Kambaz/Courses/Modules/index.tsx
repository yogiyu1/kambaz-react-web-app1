import ModulesControls from "./ModulesControls";
import { ListGroup } from "react-bootstrap";
import LessonControlButtons1 from "./LessonControlButtons1";
import LessonControlButtons from "./LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";

export default function Modules() {
    return (
        <div>
            <ModulesControls /><br /><br /><br /><br />
            <ListGroup className="rounded-0" id="wd-modules">
                <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
                    <div className = "wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />Week 1<LessonControlButtons1 />

                    </div>
                    <ListGroup className="wd-lessons rounded-0">
                        <ListGroup.Item className="wd-lesson p-3 ps-1"> <BsGripVertical className="me-2 fs-3" />LEARNING OBJECTIVES<LessonControlButtons /></ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1"> <BsGripVertical className="me-2 fs-3" />Introduction to the course<LessonControlButtons /></ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1"> <BsGripVertical className="me-2 fs-3" />Learn what is Web Development<LessonControlButtons /></ListGroup.Item>
                    </ListGroup>
                </ListGroup.Item >
            </ListGroup>

            <ListGroup className="rounded-0" id="wd-modules">
                <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
                    <div className = "wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />Week 2<LessonControlButtons1 />
                    </div>
                    <ListGroup className="wd-lessons rounded-0">
                        <ListGroup.Item className="wd-lesson p-3 ps-1"> <BsGripVertical className="me-2 fs-3" />LEARNING OBJECTIVES<LessonControlButtons /></ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1"> <BsGripVertical className="me-2 fs-3" />Introduction to the course<LessonControlButtons /></ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1"> <BsGripVertical className="me-2 fs-3" />Learn what is Web Development<LessonControlButtons /></ListGroup.Item>
                    </ListGroup>
                </ListGroup.Item>
            </ListGroup>

            <ListGroup className="rounded-0" id="wd-modules">
                <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
                    <div className = "wd-title p-3 ps-2 bg-secondary">
                    <BsGripVertical className="me-2 fs-3" />Week 3<LessonControlButtons1 />
                    </div>
                    <ListGroup className="wd-lessons rounded-0">
                        <ListGroup.Item className="wd-lesson p-3 ps-1"> <BsGripVertical className="me-2 fs-3" />LEARNING OBJECTIVES<LessonControlButtons /></ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1"> <BsGripVertical className="me-2 fs-3" />Introduction to the course<LessonControlButtons /></ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1"> <BsGripVertical className="me-2 fs-3" />Learn what is Web Development<LessonControlButtons /></ListGroup.Item>
                    </ListGroup>
                </ListGroup.Item>
            </ListGroup>

            {/* Test */}
            <ListGroup className="rounded-0" id="wd-modules">
                <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
                    {/* <div className = "wd-title p-3 ps-2 bg-secondary">
                    <BsGripVertical className="me-2 fs-3" />Week 3<LessonControlButtons1 />
                    </div> */}
                    <ListGroup className="wd-lessons rounded-0">
                        <ListGroup.Item className="wd-lesson p-3 ps-1"> <BsGripVertical className="me-2 fs-3" />LEARNING OBJECTIVES<LessonControlButtons /></ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1"> <BsGripVertical className="me-2 fs-3" />Introduction to the course<LessonControlButtons /></ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1"> <BsGripVertical className="me-2 fs-3" />Learn what is Web Development<LessonControlButtons /></ListGroup.Item>
                    </ListGroup>
                </ListGroup.Item>
            </ListGroup>




        </div>
    );
}