import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import { useContext, useEffect } from "react";
import { createContext } from "react";

export default function App() {
  const API_KEY = "2arMZRqLqedpt0T9aIApYZlw3yhepKtNaDDNyQ4txBDAvlKgCbv4HTkP";
  const [publicaciones, setPublicaciones] = useContext();
  const GlobalState = createContext({ publicaciones, setPublicaciones });
  const endpoint = "/fotos.json";

  return (
    <>
      <div className="App text-light">
        <GlobalState.Provider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/favoritos" element={<Favoritos />} />
            </Routes>
          </BrowserRouter>
        </GlobalState.Provider>
      </div>
    </>
  );
}
