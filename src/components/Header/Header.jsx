import style from "./Header.module.scss";

const Header = ({score}) => {
  return (
    <header>
      <div>
        <h1>ROCK</h1>
        <h1>PAPER</h1>
        <h1>SCISSORS</h1>
      </div>
      <div className={style.scoreBox}>
        <span>Score</span>
        <h2>{score}</h2>
      </div>
    </header>
  );
};

export default Header;
