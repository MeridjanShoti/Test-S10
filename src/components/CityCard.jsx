import { useEffect, useState } from "react";
import { Card, Col, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router";
const CityCard = (props) => {
  const [city, setCity] = useState(null);
  const [cityInfo, setCityInfo] = useState(null);
  useEffect(() => {
    fetchCity();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (city) {
      fetchCityInfo();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);

  const fetchCity = () =>
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${props.city}&appid=32649f31e9a1a6287695f59a3f858bbe`)
      .then((resp) => resp.json())
      .then((data) => {
        if (data) {
          setCity(data[0]);
        } else {
          setCity(null);
          alert("nessuna città trovata");
        }
      })
      .catch((error) => console.error("ERRORE:", error));

  const fetchCityInfo = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&units=metric&appid=32649f31e9a1a6287695f59a3f858bbe`
    )
      .then((resp) => resp.json())
      .then((data) => {
        if (data) {
          setCityInfo(data);
        } else {
          setCityInfo(null);
          alert("nessuna città trovata");
        }
      })
      .catch((error) => console.error("ERRORE:", error));
  };
  return (
    <>
      {cityInfo ? (
        <Card className="text-center rounded-5 shadow">
          <Row>
            <Col>
              <Card.Img
                variant="top"
                src={`https://openweathermap.org/img/wn/${cityInfo.weather[0].icon}@2x.png`}
                style={{ width: "200px" }}
              />
            </Col>
            <Col className="d-flex flex-column justify-content-center">
              <p className="fs-1 text-nowrap px-2">{cityInfo.main.temp} °C</p>
            </Col>
          </Row>
          <Card.Body>
            <Card.Title>{cityInfo.name || "nome città"} </Card.Title>
            <Card.Text>{cityInfo.weather[0].description || "condizioni meteo"}</Card.Text>
            <Link className="btn btn-info" to={"/details/" + cityInfo.coord.lat + "/" + cityInfo.coord.lon}>
              Go to details
            </Link>
          </Card.Body>
        </Card>
      ) : (
        <Spinner animation="grow" />
      )}
    </>
  );
};
export default CityCard;
