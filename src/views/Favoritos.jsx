import { useContext } from "react";
import { ContextAPI } from "../context/ContextAPI";
import { CardImg } from "../components/CardImg";
import { Container } from "react-bootstrap";

const Favoritos = () => {
  const { dataImg, SetDataImg } = useContext(ContextAPI);
  return (
    <Container className="mt-3">
      <div className="galeria grid-columns-5 p-8">
        {dataImg.map((dat, index) =>
          dat.liked ? <CardImg key={index} datImg={dat} index={index} /> : null
        )}
      </div>
    </Container>
  );
};

export default Favoritos;
