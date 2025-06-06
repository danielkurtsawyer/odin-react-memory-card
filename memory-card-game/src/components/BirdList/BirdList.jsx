import "./bird-list.css";
import BirdCard from "../BirdCard/BirdCard";

function BirdList({ birdList }) {
  console.log(birdList, Array.isArray(birdList));

  return (
    <div className="bird-list">
      {birdList.length === 0 && <div className="loading">Loading...</div>}
      {birdList.length > 0 &&
        birdList.map((bird) => {
          console.log(bird);
          return <BirdCard bird={bird} key={bird.id} />;
        })}
    </div>
  );
}

export default BirdList;
