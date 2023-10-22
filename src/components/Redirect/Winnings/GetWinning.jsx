import React, { useState } from "react";
import { useEffect } from "react";
import Container from "../../UI/Container";
import classes from "./GetWinning.module.css";
import GetOnlineWinning from "./GetOnlineWinning";
import GetOfflineWinning from "./GetOfflineWinnings";
import WebsiteMin from "./Intervals/MinimumSum/WebsiteMin";

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
  const [websiteMin, setWebsiteMin] = useState(false);

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

  const handleLineColor = (boxNum) => {
    setActiveBox(boxNum);

    if (boxNum === 2) {
      const firstBox = document.querySelector(`.${classes.box1}`);
      if (firstBox) {
        firstBox.classList.add(classes.final);
      }
    }
  };

  const websiteMinHandler = () => {
    setWebsiteMin(true);
    setTitle("До 20 700 ₸");
  };

  const renderContent = () => {
    if (onlineWinnings) {
      console.log("onlineWinning");
      if (websiteMin) {
        return <WebsiteMin webTitle={title} />;
      } else {
        return (
          <GetOnlineWinning
            change={changeToAmount}
            onChangeAmount={changeAmount}
            onPaint={() => handleLineColor(2)}
            onlineTitle={title}
            onWebsiteMin={websiteMinHandler}
          />
        );
      }
    } else if (offlineWinnings) {
      console.log("offlineWinning");
      return (
        <GetOfflineWinning
          change={changeToAmount}
          onChangeAmount={changeAmount}
          offlineSum={offlineAmount}
          onChangeSum={changeSum}
          onPaint={() => handleLineColor(2)}
          offlineTitle={title}
        />
      );
      // } else if (websiteMin) {
      //   console.log("websiteMin");
      //   return <WebsiteMin />;
    } else {
      console.log("default");
      return (
        <>
          <h3>{title}</h3>
          <div className={classes.how__wrapper}>
            <div className={classes["blue-box"]} onClick={onlineHandler}>
              Онлайн
            </div>
            <div className={classes["blue-box"]} onClick={offlineHandler}>
              Точки продаж <br />
              или Казпочта
            </div>
          </div>
        </>
      );
    }
  };

  const renderBoxes = () => {
    const boxClasses = [classes.box1, classes.box2, classes.box3];
    return boxClasses.map((boxClass, index) => (
      <div
        key={index}
        className={`${classes.box} ${boxClass} ${
          activeBox > index ? classes.completed : ""
        } ${activeBox === index ? classes.active : ""}`}
      ></div>
    ));
  };

  return (
    <Container>
      <div className={classes.how}>
        <h2>Как получить выигрыш</h2>
        <div className={classes.transition}>{renderBoxes()}</div>
        {renderContent()}
      </div>
    </Container>
  );
};

export default GetWinning;
