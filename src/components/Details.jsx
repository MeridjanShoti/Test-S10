import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router";

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
          <h2>{currentDate.toLocaleDateString}</h2>
          <p>{city.weather[0].description}</p>
          <img src={`https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}></img>
        </div>
      ) : (
        <Spinner animation="grow" />
      )}
    </>
  );
};
export default Details;
