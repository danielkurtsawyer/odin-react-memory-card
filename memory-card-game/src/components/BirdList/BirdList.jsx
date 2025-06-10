import "./bird-list.css";
import BirdCard from "../BirdCard/BirdCard";

function BirdList({ birdList, handleBirdClick }) {
  return (
    <div className="bird-list">
      {birdList.length === 0 && <div className="loading">Loading...</div>}
      {birdList.length > 0 &&
        birdList.map((bird, index) => {
          return (
            <BirdCard
              bird={bird}
              key={bird.id}
              index={index}
              handleBirdClick={handleBirdClick}
            />
          );
        })}
    </div>
  );
}

export default BirdList;
