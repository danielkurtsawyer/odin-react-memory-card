import { useState, useEffect } from "react";
import BirdList from "./components/BirdList/BirdList";
import ScoreBoard from "./components/ScoreBoard/ScoreBoard";

import "./App.css";

function App() {
  const [birdList, setBirdList] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  async function getBirds() {
    const response = await fetch(
      "https://nuthatch.lastelm.software/v2/birds?family=Troglodytidae&hasImg=true",
      {
        mode: "cors",
        headers: {
          "api-key": "fdc0fc05-a554-450f-845f-39d71f737f47",
        },
      }
    );
    const birdData = await response.json();
    setBirdList(birdData.entities);
  }

  useEffect(() => {
    console.log("Getting Birds");

    getBirds();
  }, []);

  return (
    <>
      <header>
        <div className="title">Bird Memory Game</div>
        <ScoreBoard score={score} highScore={highScore} />
      </header>
      <BirdList birdList={birdList} />
    </>
  );
}

export default App;
