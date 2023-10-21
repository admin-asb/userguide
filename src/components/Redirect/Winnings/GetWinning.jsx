import React, { useState } from "react";
import { useEffect } from "react";
import Container from "../../UI/Container";
import classes from "./GetWinning.module.css";
import GetWinning1 from "./GetWinning1";
import GetOnlineWinning from "./GetOnlineWinning";
import GetOfflineWinning from "./GetOfflineWinnings";

const GetWinning = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeBox, setActiveBox] = useState(0);
  const [completedBox, setCompletedBox] = useState(false);
  const [title, setTitle] = useState("Где был куплен билет?");
  const [onlineWinnings, setOnlineWinnings] = useState(false);
  const [offlineWinnings, setOfflineWinnings] = useState(false);

  const onlineHandler = () => {
    setActiveBox(1);
    setCompletedBox(true);
    setTitle("А поточнее?");
    setOnlineWinnings(true);
  };

  const offlineHandler = () => {
    setActiveBox(1);
    setCompletedBox(true);
    setTitle("Где именно?");
    setOfflineWinnings(true);
  };

  return (
    <Container>
      <div className={classes.how}>
        <h2>Как получить выигрыш</h2>
        <div className={classes.transition}>
          <div
            className={`${classes.box} ${
              completedBox ? classes.completed : ""
            } ${activeBox === 0 ? classes.active : ""}`}
          >
            1
          </div>
          <div
            className={`${classes.box} ${
              activeBox === 1 ? classes.active : ""
            }`}
          >
            2
          </div>
          <div
            className={`${classes.box} ${
              activeBox === 2 ? classes.active : ""
            }`}
          >
            3
          </div>
        </div>
        <h3>{title}</h3>
        {!onlineWinnings ? (
          <GetWinning1 onOnline={onlineHandler} onOffline={offlineHandler} />
        ) : (
          <GetOnlineWinning />
        )}
      </div>
    </Container>
  );
};

export default GetWinning;
