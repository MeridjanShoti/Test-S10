import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router";
import HomePage from "./components/HomePage";
import MyNavBar from "./components/MyNavBar";
import Footer from "./components/Footer";
import Details from "./components/Details";

function App() {
  return (
    <div
      className="d-flex flex-column position-relative"
      style={{
        background: "linear-gradient(180deg, rgba(107,133,135,1) 0%, rgba(158,247,247,1) 100%)",
        minHeight: "100vh",
      }}
    >
      <BrowserRouter>
        <MyNavBar />
        <Routes>
          <Route
            path="/"
            element={
              <div style={{ marginTop: "56px" }}>
                <HomePage />
              </div>
            }
          />
          <Route
            path="/details/:lat/:lon"
            element={
              <div style={{ marginTop: "56px" }}>
                <Details />
              </div>
            }
          />
          <Route
            path="*"
            element={
              <div
                style={{
                  minHeight: "calc(100vh - 56px)",
                  backgroundImage:
                    "url(https://dilei.it/wp-content/uploads/sites/3/2022/07/ezio-greggio.jpg?w=670&h=377&quality=100&strip=all&crop=1)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "50%, 20%",
                }}
                className="d-flex flex-column text-white justify-content-between"
              >
                <div className="d-flex flex-column">
                  <h1 className="text-center mt-5">OH OH, SEI FINITO NELLE GRINFIE DEL VILE</h1>
                  <Link className="btn btn-danger text-warning w-25 p-2 mx-auto mt-5" to="/">
                    IMPLORA PIETÁ E TORNA ALLA HOME
                  </Link>
                  <p className="text-center mt-5">
                    Come? che tempo è? è il tempo di lasciare le tue speranze ed abbracciare le tenebre
                  </p>
                </div>
                <div>
                  <p className="text-danger text-center">
                    Hai per caso visto il gabibbo? cerca &quot;gabibbo&quot; nella searchbar
                  </p>
                </div>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
