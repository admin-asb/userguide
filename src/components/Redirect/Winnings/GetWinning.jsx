import React, { useState } from "react";
import { useEffect } from "react";
import Container from "../../UI/Container";
import classes from "./GetWinning.module.css";
import GetOnlineWinning from "./GetOnlineWinning";
import GetOfflineWinning from "./GetOfflineWinnings";

const GetWinning = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeBox, setActiveBox] = useState(0);
  const [title, setTitle] = useState("Где был куплен билет?");
  const [onlineWinnings, setOnlineWinnings] = useState(false);
  const [offlineWinnings, setOfflineWinnings] = useState(false);
  const [changeToAmount, setChangeToAmount] = useState(false);
  const [offlineAmount, setOfflineAmount] = useState("");

  const onlineHandler = () => {
    setActiveBox(1);
    setTitle("А поточнее?");
    setOnlineWinnings(true);
  };

  const offlineHandler = () => {
    setActiveBox(1);
    setTitle("Где именно?");
    setOfflineWinnings(true);
  };

  const changeAmount = () => {
    setActiveBox(2);
    setTitle("Какого размера выигрыш?");
    setChangeToAmount(true);
  };

  const changeSum = () => {
    setOfflineAmount("100 000");
  };

  const handleLineColor = boxNum => {
    setActiveBox(boxNum);

    if (boxNum === 1) {
      const firstBox = document.querySelector(`.${classes.box1}`);
      if (firstBox) {
        firstBox.classList.add(classes.final);
      }
    }
  };

  return (
    <Container>
      <div className={classes.how}>
        <h2>Как получить выигрыш</h2>
        <div className={classes.transition}>
          <div
            className={`${classes.box} ${classes.box1} ${
              activeBox > 0 ? classes.completed : ""
            } ${activeBox === 0 ? classes.active : ""}`}></div>
          <div
            className={`${classes.box} ${classes.box2} ${
              activeBox > 1 ? classes.completed : ""
            } ${activeBox === 1 ? classes.active : ""}`}></div>
          <div
            className={`${classes.box} ${classes.box3} ${
              activeBox === 2 ? classes.active : ""
            }`}></div>
        </div>
        <h3>{title}</h3>
        <div className={classes.how__wrapper}>
          {onlineWinnings ? (
            <GetOnlineWinning
              change={changeToAmount}
              onChangeAmount={changeAmount}
              onPaint={handleLineColor}
            />
          ) : offlineWinnings ? (
            <GetOfflineWinning
              change={changeToAmount}
              onChangeAmount={changeAmount}
              offlineSum={offlineAmount}
              onChangeSum={changeSum}
            />
          ) : (
            <>
              <div className={classes["blue-box"]} onClick={onlineHandler}>
                Онлайн
              </div>
              <div className={classes["blue-box"]} onClick={offlineHandler}>
                Точки продаж <br />
                или Казпочта
              </div>
            </>
          )}
        </div>
      </div>
    </Container>
  );
};

export default GetWinning;
