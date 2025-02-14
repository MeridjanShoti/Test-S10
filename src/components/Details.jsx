import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router";

const Details = () => {
  const { lat, lon } = useParams();
  const [city, setCity] = useState(null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    fetchCity();
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
  return <>{city ? <h1>{city.name}</h1> : <Spinner animation="grow" />}</>;
};
export default Details;
