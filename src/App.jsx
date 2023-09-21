import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import NotFound from "./views/NotFound";
import { useContext } from "react";
import { ContextAPI } from "./context/ContextAPI";

export default function App() {
  const API_KEY = "2arMZRqLqedpt0T9aIApYZlw3yhepKtNaDDNyQ4txBDAvlKgCbv4HTkP";
  const { dataImg, setDataImg } = useContext(ContextAPI);
  const sharedData = { dataImg, setDataImg }
  const endpoint = "/fotos.json";

  return (
    <>
      <div className="App text-light">
        <ContextAPI.Provider value={ sharedData }>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/favoritos" element={<Favoritos />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </ContextAPI.Provider>
      </div>
    </>
  );
}
