import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import logo from "../assets/img/footer-logo.png";

function BasicExample() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#110915" }}>
      <Container>
        <Navbar.Brand>
          <Link to="/" className="Navbar-title">
            <Image src={logo} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto Navbar-section">
            <Link className="Navbar-element " to="/HeroSection">
              <h4>Web3Makr</h4>
            </Link>
            <Link className="Navbar-element " to="/Contact">
              <h4>White Paper</h4>
            </Link>
            <Link className="Navbar-element " to="/Contact">
              <h4>Services</h4>
            </Link>
            <Link className="Navbar-element" to="/Contact">
              <h4>Tool</h4>
            </Link>
            <Link className="Navbar-element " to="/Contact">
              <h4>Contact us</h4>
            </Link>
            <Button
              variant="outline-info"
              style={{
                width: "150px",
                height: "40px",
                marginLeft: "2rem",
                marginTop: ".5rem",
              }}
            >
              Start for free
            </Button>{" "}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
