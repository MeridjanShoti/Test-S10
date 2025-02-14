import { useEffect, useState } from "react";
import { Card, Col } from "react-bootstrap";

const DeatailedWeather = (props) => {
  const [weatherList, setWeatherList] = useState([]);
  const fetch5Days = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${props.lat}&lon=${props.lon}&units=metric&appid=32649f31e9a1a6287695f59a3f858bbe`
    )
      .then((resp) => resp.json())
      .then((data) => {
        if (data) {
          setWeatherList(data.list);
          console.log(data);
        } else {
          setWeatherList(null);
          alert("nessuna condizione meteo trovata");
        }
      })
      .catch((error) => console.error("ERRORE:", error));
  };
  useEffect(() => {
    fetch5Days();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {
        //il risultato fetchato mi da una lista di condizioni meteorologiche per ogni 3 ore nei prossimi 5 giorni
        //filtro ogni 8 risultati per ottenere un solo risultato al giorno e prendo solo 5 risultati
        //renderizzo una card per ogni giorno
        weatherList
          .filter((day, index) => index % 8 === 0)
          .slice(0, 5)
          .map((day, index) => {
            return (
              <Col key={"day-" + index}>
                <p>{day.dt_txt}</p>
                <Card>
                  <Card.Img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} />
                  <Card.Body>
                    <Card.Title style={{ minHeight: "50px" }}>{day.weather[0].description}</Card.Title>
                    <Card.Text>{day.main.temp} °C</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })
      }
    </>
  );
};
export default DeatailedWeather;
