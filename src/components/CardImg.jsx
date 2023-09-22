import { useState, useContext } from "react";
import Card from "react-bootstrap/Card";
import { IconHeart, IconHeartFilled } from "@tabler/icons-react";
import { ContextAPI } from "../context/ContextAPI";

export const CardImg = ({ datImg, index }) => {
  const [isLiked, setIsLiked] = useState(datImg.liked);
  const { dataImg, SetDataImg } = useContext(ContextAPI);

  const handleClick = (e) => {
    e.preventDefault();

    const chngLiked = dataImg;
    chngLiked[index].liked = !chngLiked[index].liked;
    setIsLiked(datImg.liked);
    SetDataImg(chngLiked);
  };

  return (
    <>
      <Card border="success" style={{ width: "18rem" }} bg="dark" text="light" onDoubleClick={handleClick}>
        <Card.Img variant="top" src={datImg.src.tiny} alt={datImg.alt} />
        <Card.Body>
          <Card.Title>{datImg.alt}</Card.Title>
          <Card.Text>{datImg.photographer}</Card.Text>
          {isLiked ? (
            <IconHeartFilled className="isLiked" onClick={handleClick} />
          ) : (
            <IconHeart onClick={handleClick} />
          )}
        </Card.Body>
      </Card>
    </>
  );
};
