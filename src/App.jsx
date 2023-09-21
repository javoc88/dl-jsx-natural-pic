import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Admin from "./views/Admin/Admin";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { createContext } from "react";

export default function App() {
  const [publicaciones, setPublicaciones] = useState([]);
  const GlobalState = createContext({ publicaciones, setPublicaciones });

  return (
    <>
      <div className="App text-light">
        <GlobalState.Provider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </BrowserRouter>
        </GlobalState.Provider>
      </div>
    </>
  );
}
