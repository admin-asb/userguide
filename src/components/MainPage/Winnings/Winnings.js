import classes from "./Winnings.module.css";
import checkWinImg from "../../../assets/check-win-img.png";
import checkWinImg2 from "../../../assets/check-win-imgx2.png";
import getWinImg from "../../../assets/get-win-img.png";
import getWinImg2 from "../../../assets/get-win-imgx2.png";
import { useContext } from "react";
import NavigationContext from "../../../store/navigation-context";

const Winnings = () => {
  const navCtx = useContext(NavigationContext);

  return (
    <section className={classes.winnings}>
      <h3> Выигрыши </h3>{" "}
      <div
        className={classes["winning__box"]}
        style={{ filter: "grayscale(1)" }}
      >
        {" "}
        <p>
          {" "}
          Проверка билета <br /> на выигрыш{" "}
        </p>{" "}
        <img
          src={checkWinImg}
          srcSet={`${checkWinImg2} 2x`}
          alt="A picture of Win Checking box"
        />
      </div>{" "}
      <div
        className={classes["winning__box"]}
        onClick={() => navCtx.onNavigate("get-win")}
      >
        {" "}
        <p>
          {" "}
          Как получить <br /> выигрыш{" "}
        </p>{" "}
        <img
          src={getWinImg}
          srcSet={`${getWinImg2} 2x`}
          alt="A picture of Win Getting box"
        />
      </div>{" "}
    </section>
  );
};

export default Winnings;
