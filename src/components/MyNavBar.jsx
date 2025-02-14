import { Col, Container, Form, Nav, Navbar, Row } from "react-bootstrap";
import { NavLink } from "react-router";
import logo from "../assets/Weather.png";
const MyNavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-transparent">
      <Container>
        <NavLink className="text-decoration-none me-5" to="/">
          <img src={logo} width="30px"></img>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav border-1" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto gap-3">
            <NavLink className="text-white text-decoration-none nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="text-white text-decoration-none nav-link" to="/bucosenzafondo">
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default MyNavBar;
