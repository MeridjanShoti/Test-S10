import { Col, Container, Form, Nav, Navbar, Row } from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router";
import logo from "../assets/Weather.png";
import { useEffect, useState } from "react";
const MyNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchedCity, setSearchedCity] = useState("");
  const [city, setCity] = useState(null);
  const handleChange = (e) => {
    setSearchedCity(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchedCity.toLowerCase() !== "gabibbo") {
      fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${searchedCity.toLowerCase()}&appid=32649f31e9a1a6287695f59a3f858bbe`
      )
        .then((resp) => resp.json())
        .then((data) => {
          if (data && data.length > 0) {
            setCity(data[0]);
          } else {
            setCity(null);
            alert("nessuna città trovata");
          }
          setSearchedCity("");
        })
        .catch((error) => console.error("ERRORE:", error));
    } else {
      window.location.href = "https://www.youtube.com/watch?v=-LRYfH3yy6Q";
    }
  };
  useEffect(() => {
    if (city) {
      navigate(`/details/${city.lat}/${city.lon}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);
  return (
    <Navbar
      expand="lg"
      className="bg-body-transparent position-fixed top w-100 z-3"
      style={{ backdropFilter: "blur(10px)" }}
    >
      <Container>
        <NavLink className="text-decoration-none me-5" to="/">
          <img src={logo} width="30px"></img>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="d-flex flex-row justify-content-between flex-wrap mt-3 mt-lg-0 w-100">
            <div>
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
            </div>
            <div>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col xs="auto">
                    <Form.Control
                      type="text"
                      placeholder="Cerca città"
                      className=" mr-sm-2"
                      onChange={handleChange}
                      value={searchedCity}
                    />
                  </Col>
                </Row>
              </Form>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default MyNavBar;
