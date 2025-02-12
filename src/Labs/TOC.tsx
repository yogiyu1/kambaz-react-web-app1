import { useLocation } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

export default function TOC() {
  const location = useLocation();

  const isLabsActive = location.pathname === "/Labs";
  const isLab1Active = location.pathname === "/Labs" || location.pathname === "/Labs/Lab1";

  return (
    <Nav variant="pills">
      <Nav.Item>
        <Nav.Link to="/Labs" as={Link} active={!isLab1Active && isLabsActive}>
          Labs
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link to="/Labs/Lab1" as={Link} active={!isLabsActive && isLab1Active}>
          Lab 1
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link to="/Labs/Lab2" as={Link} active={location.pathname === "/Labs/Lab2"}>
          Lab 2
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link to="/Labs/Lab3" as={Link} active={location.pathname === "/Labs/Lab3"}>
          Lab 3
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link to="/Kambaz" as={Link} active={location.pathname === "/Kambaz"}>
          Kambaz
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="https://github.com/yogiyu1/kambaz-react-web-app1">
          My GitHub
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
