import classes from "./Purchase.module.css";
import smsPurchase from "../../../assets/sms.png";
import smsPurchase2 from "../../../assets/smsx2.png";
import { useContext } from "react";
import NavigationContext from "../../../store/navigation-context";

const SmsPurchasing = () => {
  const navCtx = useContext(NavigationContext);

  return (
    <div
      className={`${classes.purchase__box} ${classes.sms}`}
      onClick={() => navCtx.onNavigate("sms")}>
      {" "}
      <p> По СМС </p>{" "}
      <img
        src={smsPurchase}
        srcSet={`${smsPurchase2} 2x`}
        alt="A picture of sms purchasing"
      />
    </div>
  );
};

export default SmsPurchasing;
