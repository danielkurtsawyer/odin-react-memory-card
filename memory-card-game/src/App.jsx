import { useState, useEffect } from "react";
import BirdList from "./components/BirdList/BirdList";
import ScoreBoard from "./components/ScoreBoard/ScoreBoard";
import birdIcon from "./assets/bird.svg";

import "./App.css";

function App() {
  const [birdList, setBirdList] = useState([]);
  const [birdClicked, setBirdClicked] = useState({});
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
    const birdList = birdData.entities;
    const birdClicked = {};
    birdList.forEach((bird) => {
      birdClicked[bird.id] = false;
    });
    // shuffle bird list
    birdList.sort(() => 0.5 - Math.random());
    setBirdList(birdList);
    console.log(birdList.length);
    setBirdClicked(birdClicked);
  }

  useEffect(() => {
    console.log("Getting Birds");

    getBirds();
  }, []);

  function shuffleBirdList() {
    setBirdList(birdList.sort(() => 0.5 - Math.random()));
  }

  function handleBirdClick(id) {
    shuffleBirdList();

    console.log(score);
    if (birdClicked[id]) {
      handleRepeatClick();
    } else {
      const tempBirdClicked = birdClicked;
      tempBirdClicked[id] = true;
      setBirdClicked(tempBirdClicked);
      incrementScore();
    }
  }

  function handleRepeatClick() {
    if (score < birdList.length) {
      console.log("Good try, but you clicked a card twice");
    }

    // reset birdClicked clicked states to False for each id
    resetBirdClicked();
  }

  function incrementScore() {
    setScore((score) => score + 1);
    if (score + 1 === birdList.length) {
      console.log("Nice job! You got all the cards");

      resetBirdClicked(true);
    }
  }

  function resetBirdClicked(win = false) {
    if (win) {
      setHighScore(birdList.length);
    } else {
      if (score > highScore) {
        setHighScore(score);
      }
    }

    setScore(0);
    const tempBirdClicked = birdClicked;
    Object.keys(birdClicked).forEach((key) => (tempBirdClicked[key] = false));
    setBirdClicked(tempBirdClicked);
  }

  return (
    <>
      <header>
        <div className="title-logo">
          <img src={birdIcon} alt="" />
          <div className="title">Bird Memory Game</div>
        </div>
        <ScoreBoard score={score} highScore={highScore} />
      </header>
      <BirdList birdList={birdList} handleBirdClick={handleBirdClick} />
    </>
  );
}

export default App;
