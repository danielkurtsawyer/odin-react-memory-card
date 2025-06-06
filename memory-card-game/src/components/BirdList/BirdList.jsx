import "./bird-list.css";
import BirdCard from "../BirdCard/BirdCard";

function BirdList({
  birdList,
  handleRepeatClick,
  incrementScore,
  shuffleBirdList,
}) {
  return (
    <div className="bird-list">
      {birdList.length === 0 && <div className="loading">Loading...</div>}
      {birdList.length > 0 &&
        birdList.map((bird) => {
          return (
            <BirdCard
              bird={bird}
              key={bird.id}
              handleRepeatClick={handleRepeatClick}
              incrementScore={incrementScore}
              shuffleBirdList={shuffleBirdList}
            />
          );
        })}
    </div>
  );
}

export default BirdList;
