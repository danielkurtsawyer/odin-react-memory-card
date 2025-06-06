import "./bird-card.css";
import { useState } from "react";

function BirdCard({ bird, handleDoubleClick }) {
  const [clicked, setClicked] = useState(false);
  const name = bird.name;
  const image = bird.images[0];
  function handleBirdClick() {
    if (clicked) {
      handleDoubleClick();
    }
    setClicked(true);
  }
  return (
    <div className="bird-card" onClick={handleBirdClick}>
      <img src={image} />
      <div className="bird-name">{name}</div>
    </div>
  );
}

export default BirdCard;
