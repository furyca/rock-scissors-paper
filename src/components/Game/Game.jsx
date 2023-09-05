import Selection from "../Selection/Selection";
import "./Game.module.scss";

const Game = ( {handleSelection} ) => {
  return (
    <main>
      <ul>
        <Selection selection="paper" image='/assets/paper.svg' handleSelection={handleSelection} />
        <Selection selection="scissors" image='/assets/scissors.svg' handleSelection={handleSelection} />
        <Selection selection="rock" image='/assets/rock.svg' handleSelection={handleSelection} />
      </ul>
    </main>
  );
};

export default Game;
