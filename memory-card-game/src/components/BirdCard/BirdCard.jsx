import "./bird-card.css";

function BirdCard({ bird, handleBirdClick }) {
  const name = bird.name;
  const image = bird.images[0];
  const id = bird.id;
  return (
    <div className="bird-card" onClick={() => handleBirdClick(id)}>
      <img src={image} />
      <div className="bird-name">{name}</div>
    </div>
  );
}

export default BirdCard;
