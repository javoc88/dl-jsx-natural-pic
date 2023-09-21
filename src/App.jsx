import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";

export default function App() {
  const API_KEY = "2arMZRqLqedpt0T9aIApYZlw3yhepKtNaDDNyQ4txBDAvlKgCbv4HTkP";
  const endpoint = "/fotos.json";

  return (
    <>
      <div className="App text-light">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
