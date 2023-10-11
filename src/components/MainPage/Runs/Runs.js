import classes from "./Runs.module.css";
import runsImg from "../../../assets/run-img.png";
import runsImg2 from "../../../assets/run-imgx2.png";
import { useContext } from "react";
import NavigationContext from "../../../store/navigation-context";

const Runs = () => {
  const navCtx = useContext(NavigationContext);

  return (
    <section className={classes.runs}>
      <h3> Тиражи </h3>{" "}
      <div
        className={classes["runs__box"]}
        onClick={() => {
          navCtx.onNavigate("schedule");
        }}>
        {" "}
        <p>
          {" "}
          Расписание <br /> тиражей{" "}
        </p>{" "}
        <img
          src={runsImg}
          srcSet={`${runsImg2} 2x`}
          alt="A picture of Schedule"
        />
      </div>{" "}
    </section>
  );
};

export default Runs;
