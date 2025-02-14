import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router";
import HomePage from "./components/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="*"
            element={
              <div
                style={{
                  minHeight: "100vh",
                  backgroundImage:
                    "url(https://dilei.it/wp-content/uploads/sites/3/2022/07/ezio-greggio.jpg?w=670&h=377&quality=100&strip=all&crop=1)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
                className="d-flex flex-column text-white"
              >
                <h1 className="text-center mt-5">OH OH, SEI FINITO NELLE GRINFIE DEL VILE</h1>
                <Link className="btn btn-danger text-warning w-25 p-2 mx-auto mt-5" to="/">
                  IMPLORA PIETÁ E TORNA ALLA HOME
                </Link>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
