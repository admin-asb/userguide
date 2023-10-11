import classes from "./Rules.module.css";
import emojiIcon from "../../../assets/emoji.svg";
import shieldIcon from "../../../assets/shield.svg";
import walletIcon from "../../../assets/wallet.svg";
import bonusIcon from "../../../assets/bonus.svg";
import downloadIcon from "../../../assets/download.svg";
import { useContext } from "react";
import NavigationContext from "../../../store/navigation-context";

const Rules = () => {
  const navCtx = useContext(NavigationContext);

  return (
    <section className={classes.rules}>
      <h3> Правила </h3>{" "}
      <div
        className={classes.rules__box}
        onClick={() => {
          navCtx.onNavigate("rules");
        }}>
        <img src={emojiIcon} alt="An emoji icon" />
        <p> Правила ответственной игры </p>{" "}
      </div>{" "}
      <div
        className={classes.rules__box}
        onClick={() => {
          navCtx.onNavigate("rights");
        }}>
        <img src={shieldIcon} alt="Shield icon" />
        <p> Правовая информация, закон о лотерее </p>{" "}
      </div>{" "}
      <div
        className={classes.rules__box}
        onClick={() => {
          navCtx.onNavigate("wallet-rules");
        }}>
        <img src={walletIcon} alt="Wallet icon" />
        <p> Правила пользования кошельком </p>{" "}
      </div>{" "}
      <div className={classes.rules__box}>
        <img src={bonusIcon} alt="Bonus icon" />
        <p> Скачать правила бонусной программы </p>{" "}
        <img src={downloadIcon} alt="Icon for downloading" />
      </div>{" "}
    </section>
  );
};

export default Rules;
