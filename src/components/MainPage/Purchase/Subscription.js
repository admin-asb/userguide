import classes from "./Purchase.module.css";
import subscriptionPurchase from "../../../assets/subscription.png";
import subscriptionPurchase2 from "../../../assets/subscriptionx2.png";
import { useContext } from "react";
import NavigationContext from "../../../store/navigation-context";

const Subscription = () => {
  const navCtx = useContext(NavigationContext);

  return (
    <div
      className={`${classes.purchase__box} ${classes.subscription}`}
      onClick={() => {
        navCtx.onNavigate("subscription");
      }}>
      {" "}
      <p> По подписке </p>{" "}
      <img
        src={subscriptionPurchase}
        srcSet={`${subscriptionPurchase2} 2x`}
        alt="A picture of purchasing through Subscription"
      />
    </div>
  );
};

export default Subscription;
