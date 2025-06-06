import "./scoreboard.css";

function ScoreBoard({ score, highScore }) {
  return (
    <div className="scoreboard-container">
      <div className="score">Score: {score}</div>
      <div className="high-score">High Score: {highScore}</div>
    </div>
  );
}

export default ScoreBoard;
