// import { Link, useLocation } from "react-router-dom";
// import { ListGroup } from "react-bootstrap";
// import { AiOutlineDashboard } from "react-icons/ai";
// import { IoCalendarOutline } from "react-icons/io5";
// import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
// import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
// import { useEffect, useState } from "react";

// export default function KambazNavigation() {
//   const location = useLocation();
//   const [selectedTab, setSelectedTab] = useState("");

//   useEffect(() => {
//     if (location.pathname === "/Kambaz/Dashboard") {
//       setSelectedTab("Dashboard");
//     } else if (location.pathname.startsWith("/Kambaz/Dashboard/")) {
//       setSelectedTab("Courses");
//     }else if (location.pathname.startsWith("/Kambaz/Courses/1234")) {
//       setSelectedTab("Courses");
//     } else {
//       setSelectedTab("");
//     }
//   }, [location.pathname]);

//   return (
//     <ListGroup id="wd-kambaz-navigation" style={{ width: 120 }} className="rounded-0 position-fixed
//       bottom-0 top-0 d-none d-md-block bg-black z-2">

//       <ListGroup.Item id="wd-neu-link" target="_blank" action
//         href="https://www.northeastern.edu/"
//         className="bg-black border-0 text-center">
//         <img src="/images/NEU.png" width="75px" alt="NEU Logo" />
//       </ListGroup.Item>

//       <ListGroup.Item to="/Kambaz/Account" as={Link}
//         className="text-center border-0 bg-black text-white">
//         <FaRegCircleUser className="fs-1 text-white" /><br />
//         Account 
//       </ListGroup.Item>

//       <ListGroup.Item to="/Kambaz/Dashboard" as={Link}
//         onClick={() => setSelectedTab("Dashboard")}
//         className={`text-center border-0 ${selectedTab === "Dashboard" ? "bg-white text-danger" : "bg-black text-white"}`}>
//         <AiOutlineDashboard className={`fs-1 ${selectedTab === "Dashboard" ? "text-danger" : "text-danger"}`} /><br />
//         Dashboard 
//       </ListGroup.Item>

//       <ListGroup.Item to="/Kambaz/Dashboard" as={Link}
//       onClick={() => setSelectedTab("Courses")}
//       className={`text-center border-0 
//         ${selectedTab === "Courses" || location.pathname.startsWith("/Kambaz/Courses/1234") 
//           ? "bg-white text-danger" 
//           : "bg-black text-white"}`}>
//       <LiaBookSolid className={`fs-1 ${selectedTab === "Courses" || location.pathname.startsWith("/Kambaz/Courses/1234") 
//           ? "text-danger" 
//           : "text-danger"}`} /><br />
//       Courses 
//     </ListGroup.Item>
 

//       <ListGroup.Item to="/Kambaz/Calendar" as={Link}
//         className={`text-center border-0 ${location.pathname === "/Kambaz/Calendar" ? "bg-white text-danger" : "bg-black text-white"}`}>
//         <IoCalendarOutline className={`fs-1 ${location.pathname === "/Kambaz/Calendar" ? "text-danger" : "text-danger"}`} /><br />
//         Calendar
//       </ListGroup.Item>

//       <ListGroup.Item to="/Kambaz/Inbox" as={Link}
//         className={`text-center border-0 ${location.pathname === "/Kambaz/Inbox" ? "bg-white text-danger" : "bg-black text-white"}`}>
//         <FaInbox className={`fs-1 ${location.pathname === "/Kambaz/Inbox" ? "text-danger" : "text-danger"}`} /><br />
//         Inbox 
//       </ListGroup.Item>

//       <ListGroup.Item to="/labs/lab1" as={Link}
//         className={`text-center border-0 ${location.pathname === "/labs/lab1" ? "bg-white text-danger" : "bg-black text-white"}`}>
//         <LiaCogSolid className={`fs-1 ${location.pathname === "/labs/lab1" ? "text-danger" : "text-danger"}`} /><br />
//         Labs 
//       </ListGroup.Item>

//     </ListGroup>
//   );
// }
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
export default function KambazNavigation() {
  const { pathname } = useLocation();
  const links = [
    { label: "Dashboard", path: "/Kambaz/Dashboard", icon: AiOutlineDashboard },
    { label: "Courses",   path: "/Kambaz/Dashboard", icon: LiaBookSolid },
    { label: "Calendar",  path: "/Kambaz/Calendar",  icon: IoCalendarOutline },
    { label: "Inbox",     path: "/Kambaz/Inbox",     icon: FaInbox },
    { label: "Labs",      path: "/Labs",             icon: LiaCogSolid },
  ];
  return (
    <ListGroup id="wd-kambaz-navigation" style={{width: 120}}
         className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
      <ListGroup.Item id="wd-neu-link" target="_blank" href="https://www.northeastern.edu/"
        action className="bg-black border-0 text-center">
        <img src="/images/NEU.png" width="75px" /></ListGroup.Item>
      <ListGroup.Item as={Link} to="/Kambaz/Account" className={`text-center border-0 bg-black
            ${pathname.includes("Account") ? "bg-white text-danger" : "bg-black text-white"}`}>
        <FaRegCircleUser className={`fs-1 ${pathname.includes("Account") ? "text-danger" : "text-white"}`} />
        <br />
        Account
      </ListGroup.Item>
      {links.map((link) => (
        <ListGroup.Item key={link.path} as={Link} to={link.path} className={`bg-black text-center border-0
              ${pathname.includes(link.label) ? "text-danger bg-white" : "text-white bg-black"}`}>
          {link.icon({ className: "fs-1 text-danger"})}
          <br />
          {link.label}
        </ListGroup.Item>
      ))}
    </ListGroup>
);}
