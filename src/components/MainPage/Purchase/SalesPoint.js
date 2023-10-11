import classes from "./Purchase.module.css";
import salesPointPurchase from "../../../assets/offline.png";
import salesPointPurchase2 from "../../../assets/offlinex2.png";

const SalesPoint = () => {
  return (
    <div className={`${classes.purchase__box} ${classes.offline}`}>
      {" "}
      <p> В точках продаж </p>{" "}
      <img
        src={salesPointPurchase}
        srcSet={`${salesPointPurchase2} 2x`}
        alt="A picture of purchasing through Sales points"
      />
    </div>
  );
};

export default SalesPoint;
