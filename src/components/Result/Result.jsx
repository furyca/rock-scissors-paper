import style from "./Result.module.scss";

const Result = ({ playerSelection, homeSelection, handleResult, winLose }) => {
  return (
    <main>
      <div>
        <h3>You Picked</h3>
        <div
          className={`${style.selectionWrapper} ${
            playerSelection === "rock"
              ? style.rock
              : playerSelection === "scissors"
              ? style.scissors
              : style.paper
          }`}
        >
          <img src={`assets/${playerSelection}.svg`} alt={playerSelection} />
        </div>
      </div>
      <div>
        <h3>Result: {winLose}</h3>
        <button onClick={handleResult}>PLAY AGAIN</button>
      </div>
      <div>
        <h3>Home Picked</h3>
        <div
          className={`${style.selectionWrapper} ${
            homeSelection === "rock"
              ? style.rock
              : homeSelection === "scissors"
              ? style.scissors
              : style.paper
          }`}
        >
          <img src={`assets/${homeSelection}.svg`} alt={homeSelection} />
        </div>
      </div>
    </main>
  );
};

export default Result;
