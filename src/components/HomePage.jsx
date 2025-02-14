import { Col, Container, Row, Spinner } from "react-bootstrap";
import CityCard from "./CityCard";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const HomePage = () => {
  const [city, setCity] = useState(null);
  const fetchCity = () =>
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=41.8933203&lon=12.4829321&units=metric&appid=32649f31e9a1a6287695f59a3f858bbe`
    )
      .then((resp) => resp.json())
      .then((data) => {
        if (data) {
          setCity(data);
        } else {
          setCity(null);
          alert("nessuna città trovata");
        }
      })
      .catch((error) => console.error("ERRORE:", error));
  useEffect(() => {
    fetchCity();
  }, []);
  return (
    <>
      <Container>
        <Row>
          <Col className="text-center text-white">
            {city ? (
              <>
                <h1>{city.name}</h1>
                <Row>
                  <Col className="d-flex justify-content-center align-items-center mb-2 flex-wrap">
                    <img src={`https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}></img>
                    <p className="fs-1 mb-0 text-nowrap text-center">{city.weather[0].description}</p>
                  </Col>
                </Row>
                <Link to={"/details/" + city.id}></Link>
                <Row>
                  <Col>
                    <p>Min: {city.main.temp_min} °C</p>
                    <p>Max: {city.main.temp_max} °C</p>
                  </Col>
                </Row>
                <Link className="btn btn-info" to={"/details/" + city.coord.lat + "/" + city.coord.lon}>
                  Go to Details
                </Link>
              </>
            ) : (
              <Spinner animation="grow" />
            )}
          </Col>
        </Row>
        <Row className="mt-5">
          <Col></Col>
        </Row>
        <Row className="mt-5 gy-3">
          <Col xs={12} md={4}>
            <CityCard city="milano" />
          </Col>
          <Col xs={12} md={4}>
            <CityCard city="napoli" />
          </Col>
          <Col xs={12} md={4}>
            <CityCard city="torino" />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default HomePage;
