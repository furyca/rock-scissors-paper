import { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import Game from "./components/Game/Game";
import Header from "./components/Header/Header";
import Result from "./components/Result/Result";

function App() {
  const [results, setResults] = useState(false);
  const [playerSelection, setPlayerSelection] = useState("");
  const [homeSelection, setHomeSelection] = useState("");
  const [score, setScore] = useState(0);
  const [winLose, setWinLose] = useState("");
  const arr = ["rock", "paper", "scissors"];

  const setSelections = (select) => {
    setPlayerSelection(select);
    setHomeSelection(arr[Math.floor(Math.random() * arr.length)]);
    setResults(true);
  };

  useEffect(() => {
    results && setResult();
    // eslint-disable-next-line
  }, [results]);

  const setResult = () => {
    if (playerSelection === homeSelection) {
      setWinLose("DRAW");
      return;
    }
    if (playerSelection === "rock") {
      switch (homeSelection) {
        case "scissors":
          setWinLose("WIN");
          setScore((prev) => prev + 1);
          break;
        case "paper":
          setWinLose("LOSE");
          setScore((prev) => prev - 1);
          break;
        default:
          break;
      }
      return;
    } else if (playerSelection === "paper") {
      switch (homeSelection) {
        case "rock":
          setWinLose("WIN");
          setScore((prev) => prev + 1);
          break;
        case "scissors":
          setWinLose("LOSE");
          setScore((prev) => prev - 1);
          break;
        default:
          break;
      }
      return;
    }
    //if player selection is 'scissors'
    else {
      switch (homeSelection) {
        case "paper":
          setWinLose("WIN");
          setScore((prev) => prev + 1);
          break;
        case "rock":
          setWinLose("LOSE");
          setScore((prev) => prev - 1);
          break;
        default:
          break;
      }
      return;
    }
  };

  return (
    <>
      <Header score={score} />
      {results ? (
        <Result
          playerSelection={playerSelection}
          homeSelection={homeSelection}
          handleResult={() => setResults(false)}
          winLose={winLose}
        />
      ) : (
        <Game handleSelection={setSelections} />
      )}
      <Footer />
    </>
  );
}

export default App;
