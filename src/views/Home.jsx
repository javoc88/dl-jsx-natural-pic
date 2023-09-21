import { Container } from "react-bootstrap";
import Galeria from "../components/Galeria"

export default function Home() {

  return (
    <Container className="mt-5">
      <div id="Home">
        <h1>Natural Pic</h1>
        <Galeria />
      </div>
    </Container>
  );
}
