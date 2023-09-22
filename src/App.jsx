import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import NotFound from "./views/NotFound";
import { useContext, useEffect } from "react";
import { ContextAPI } from "./context/ContextAPI";
import { createClient } from "pexels";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const { SetDataImg, perPage } = useContext(ContextAPI);
  const API_KEY = "2arMZRqLqedpt0T9aIApYZlw3yhepKtNaDDNyQ4txBDAvlKgCbv4HTkP";
  useEffect(() => {
    const client = createClient(API_KEY);
    const query = "Nature";
    client.photos
      .search({ query, per_page: perPage })
      .then((data) => {
        SetDataImg(data.photos);
      })
      .catch();
  }, [perPage]);

  return (
    <>
      <div className="App">
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/favoritos" element={<Favoritos />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
      </div>
    </>
  );
}
