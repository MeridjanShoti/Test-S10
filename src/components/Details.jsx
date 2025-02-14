import { useEffect, useState } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router";
import DeatailedWeather from "./DetailedWeather";

const Details = () => {
  const { lat, lon } = useParams();
  const [city, setCity] = useState(null);
  const currentDate = new Date();
  useEffect(() => {
    fetchCity();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchCity = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=32649f31e9a1a6287695f59a3f858bbe`
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
  };

  return (
    <>
      {city ? (
        <div className="text-white text-center">
          <h1 className="fw-bold">{city.name}</h1>
          <h2>{currentDate.toLocaleDateString()}</h2>
          <p>{`${currentDate.getHours()}:${
            currentDate.getMinutes() < 10
              ? "0" + currentDate.getMinutes().toString()
              : currentDate.getMinutes().toString()
          }`}</p>
          <p>{city.weather[0].description}</p>
          <hr></hr>
          <Row className="mx-auto text-nowrap" xs={1} md={3}>
            <Col>
              <p>weather:</p>
              <img src={`https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}></img>
              <hr className="d-md-none" />
            </Col>
            <Col>
              <p>💧 humidity: {city.main.humidity}%</p>
              <p>💨 wind: {city.wind.speed}</p>
              <p></p>
              <hr className="d-md-none" />
            </Col>
            <Col>
              <p>🌡️ {city.main.temp} °C</p>
              <p>Min: {city.main.temp_min}</p>
              <p>Max: {city.main.temp_max}</p>
              <hr className="d-md-none" />
            </Col>
          </Row>
          <Row xs={2} md={3} lg={5} className="justify-content-center mx-4">
            <DeatailedWeather lat={lat} lon={lon} />
          </Row>
        </div>
      ) : (
        <Spinner animation="grow" />
      )}
    </>
  );
};
export default Details;
