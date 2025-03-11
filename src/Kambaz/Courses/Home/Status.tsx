import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { Button } from "react-bootstrap";
import { BsBellFill } from "react-icons/bs";
import { IoHome } from "react-icons/io5";
import { IoAnalyticsOutline } from "react-icons/io5";
import { TfiAnnouncement } from "react-icons/tfi";
import { SiSimpleanalytics } from "react-icons/si"; 
import { useSelector } from "react-redux";
export default function CourseStatus() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    return (
      <div id="wd-course-status" style={{ width: "350px" }}>
        <h2>Course Status</h2>
        <div className="d-flex">
          {currentUser.role === "FACULTY" && (
            <>
              <div className="w-50 pe-1">
                <Button variant="secondary" size="lg" className="w-100 text-nowrap ">
                <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish </Button> </div>

              <div className="w-50">
                <Button variant="success" size="lg" className="w-100">
              <FaCheckCircle className="me-2 fs-5" /> Publish </Button> </div>

            </>
          )}
          </div>
          <br />
          <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
          <BiImport className="me-2 fs-5" /> Import Existing Content </Button>
          <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
          <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons </Button>
 
          <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
          <IoHome className="me-2 fs-5" /> Choose Home Page </Button>

          <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
          <SiSimpleanalytics className="me-2 fs-5" /> View Course Stream </Button>

          <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
          <TfiAnnouncement className="me-2 fs-5" /> New Announcement </Button>

          <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
          <IoAnalyticsOutline className="me-2 fs-5" /> New Analytic </Button>

          <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
          <BsBellFill className="me-2 fs-5" /> View Course Notifications </Button>

      </div>

  );}