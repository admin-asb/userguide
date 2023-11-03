import classes from "./GetWinning.module.css";

const ProgressBox = props => {
  const boxClasses = [classes.box1, classes.box2, classes.box3];
  return (
    <div className={classes.transition}>
      {boxClasses.map((boxClass, index) => (
        <div
          key={index}
          className={`${classes.box} ${boxClass} ${
            props.activeBox > index ? classes.completed : ""
          } ${props.activeBox === index ? classes.active : ""} ${
            props.isClicked ? `${classes.completed} ${classes.final}` : ""
          }`}></div>
      ))}
    </div>
  );
};

export default ProgressBox;
