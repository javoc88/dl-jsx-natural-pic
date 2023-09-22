import { Container } from "react-bootstrap";
import Galeria from "../components/Galeria"

export default function Home() {

  return (
    <Container className="mt-3">
      <div id="Home">
        <Galeria />
      </div>
    </Container>
  );
}
