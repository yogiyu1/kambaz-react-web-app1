import ModulesControls from "./ModulesControls";
import LessonControlButtons1 from "./LessonControlButtons1";
import LessonControlButtons from "./LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { useParams } from "react-router";
import * as db from "../../Database";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function Modules() {
    const { cid } = useParams();
    const [modules, setModules] = useState<any[]>(db.modules);
    const [moduleName, setModuleName] = useState("");
    const addModule = () => {
    setModules([ ...modules, { _id: uuidv4(), name: moduleName, course: cid, lessons: [] } ]);
    setModuleName("");
  };

    return (
        <div className="wd-modules">
        <ModulesControls setModuleName={setModuleName} moduleName={moduleName} addModule={addModule} />
        <br /><br /><br /><br />
            <ul id="wd-modules" className="list-group rounded-0">
        {modules
          .filter((module: any) => module.course === cid)
          .map((module: any) => (
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" /> {module.name} <LessonControlButtons1 />
            </div>
            {module.lessons && (
              <ul className="wd-lessons list-group rounded-0">
                {module.lessons.map((lesson: any) => (
                  <li className="wd-lesson list-group-item p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" /> {lesson.name} <LessonControlButtons />
                  </li>
                ))}</ul>)}</li>))}</ul>

        </div>
    );
}