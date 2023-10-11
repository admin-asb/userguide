import classes from "./Purchase.module.css";
import Online from "./Online";
import SmsPurchasing from "./SmsPurchasing";
import Subscription from "./Subscription";
import SalesPoint from "./SalesPoint";

const Purchase = () => {
  return (
    <section className={classes.purchase}>
      <h3> Как купить лотерейный билет </h3>{" "}
      <div className={classes["purchase__grid-container"]}>
        <Online /> <SmsPurchasing />
        <Subscription />
        <SalesPoint />
      </div>{" "}
    </section>
  );
};

export default Purchase;
