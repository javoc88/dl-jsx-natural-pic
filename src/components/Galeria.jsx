import "../assets/css/galeria.css"
import { useContext, useState } from "react";
import { ContextAPI } from "../context/ContextAPI";
import { CardImg } from "./CardImg";
import Button from "react-bootstrap/Button";

export default function Galeria() {
  const { dataImg, perPage, setPerPag } = useContext(ContextAPI);
  const [isLimited, setLimite] = useState(false);
  const msjLimite = "Haz alcanzado el máximo de 80 imágenes a mostrar.";
  const handleClick = () => {
    if (perPage < 80) {
      setPerPag(perPage + 20);
    } else {
      setLimite(true);
    }
  };

  return (
    <>
      <div className="galeria grid-columns-5 p-8">
        {dataImg.map((dat, index) => (
          <CardImg key={index} datImg={dat} index={index} />
        ))}
      </div>

      <section className="showMore">
        <Button variant="success" onClick={handleClick}>
          Mostrar más
        </Button>
        {isLimited ? <p>{msjLimite}</p> : null}
      </section>
    </>
  );
}
