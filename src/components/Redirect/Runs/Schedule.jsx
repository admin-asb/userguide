import React, { useEffect } from "react";
import Container from "../../UI/Container";
import classes from "../HowPurchase.module.css";

const Schedule = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <div className={`${classes.purchase} ${classes.schedule}`}>
        <h2> Расписание проведения и трансляции тиражных лотерей </h2>
        <h3 className={classes.live}> TeleBingo </h3>
        <p>
          Каждое воскресенье в 9:00, 31&nbsp;канал,&nbsp;
          <a href="" target="_blank">
            YOUTUBE
          </a>
        </p>
        <h3 className={classes.live}> LOTO 6/49 </h3>
        <p>
          Каждый понедельник, среда и пятница в&nbsp;22:00,&nbsp;
          <a href="" target="_blank">
            YOUTUBE
          </a>
        </p>
        <h3 className={classes.live}> 5/36 </h3>
        <p>
          Ежедневно в 21:00,&nbsp;
          <a href="" target="_blank">
            YOUTUBE
          </a>
        </p>
        <h3> KENO </h3> <p> Ежедневно в 22:00 </p> <h3> KENO2 </h3>
        <p> Два раза в день в 10:00 и 22:00 </p> <h3> 777 </h3>
        <p> Два раза в день в 10:00 и 22:00 </p> <h3> 8/20 </h3>
        <p> Ежедневно в 19:00 </p> <h3> 4/20 </h3>
        <p> Ежедневно в 20:00 </p> <h3> SuperLoto </h3>
        <p> Ежедневно в 19:00 </p>
        <div className={classes.box}>
          Расписание тиражей предствалено по времени Астаны.
        </div>
      </div>
    </Container>
  );
};

export default Schedule;
