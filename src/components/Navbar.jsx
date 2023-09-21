import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function navbar() {
  return (
    <Navbar bg="secondary">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Link to="/" className="text-decoration-none text-white me-5">
              <Button variant="light"> Home </Button>
            </Link>
            <Link to="/favoritos" className="text-decoration-none text-white">
              <Button variant="dark"> Favoritos </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
