import { useState } from "react";
import Card from "react-bootstrap/Card";
import { TestImg.json } from "../TestImg";
import { IconHeart, IconHeartFilled } from "@tabler/icons-react";

export const CardImg = ({ TestImg }) => {
  const [isLiked, setIsLiked] = useState(TestImg.liked);
  const handleClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <>
      <Card style={{ width: "18rem" }} onDoubleClick={handleClick}>
        <Card.Img variant="top" src={TestImg.src.original} alt={TestImg.alt} />
        <Card.Body>
          <Card.Title>{TestImg.alt}</Card.Title>
          <Card.Text>{TestImg.photographer}</Card.Text>
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
