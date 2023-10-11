import classes from "./Purchase.module.css";
import onlinePurchase from "../../../assets/online.png";
import onlinePurchase2 from "../../../assets/onlinex2.png";
import { useContext } from "react";
import NavigationContext from "../../../store/navigation-context";

const Online = () => {
  const navCtx = useContext(NavigationContext);

  return (
    <div
      className={`${classes.purchase__box} ${classes.online}`}
      onClick={() => navCtx.onNavigate("online")}>
      {" "}
      <p> Онлайн </p>{" "}
      <img
        src={onlinePurchase}
        srcSet={`${onlinePurchase2} 2x`}
        alt="A picture of online purchasing"
      />
    </div>
  );
};

export default Online;
