import { Col, Container, Form, Nav, Navbar, Row } from "react-bootstrap";
import { NavLink, useLocation } from "react-router";
import logo from "../assets/Weather.png";
const MyNavBar = () => {
  const location = useLocation();
  return (
    <Navbar expand="lg" className="bg-body-transparent">
      <Container>
        <NavLink className="text-decoration-none me-5" to="/">
          <img src={logo} width="30px"></img>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="d-flex flex-row justify-content-between flex-wrap mt-3">
            <Nav className="me-auto gap-3 flex-row">
              <NavLink
                className={`flex-row text-white text-decoration-none ${
                  location.pathname === "/" ? "nav-link nav-link-active fw-bold" : "nav-link"
                }`}
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={`text-white text-decoration-none ${
                  location.pathname === "/bucosenzafondo" ? "nav-link nav-link-active fw-bold" : "nav-link"
                }`}
                to="/bucosenzafondo"
              >
                Non cliccare qui
              </NavLink>
            </Nav>
            <Form>
              <Row>
                <Col xs="auto">
                  <Form.Control type="text" placeholder="Cerca città" className=" mr-sm-2" />
                </Col>
              </Row>
            </Form>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default MyNavBar;
