import React, { useState } from "react";
import { useEffect } from "react";
import Container from "../../UI/Container";
import classes from "./GetWinning.module.css";
import ProgressBox from "./ProgressBox";
import Content from "./Content";

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
  const [websiteMedium, setWebsiteMedium] = useState(false);
  const [websiteMaximum, setWebsiteMaximum] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

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

  const websiteMinHandler = () => {
    setWebsiteMin(true);
    setTitle("До 20 700 ₸");
  };

  const websiteMediumHandler = () => {
    setWebsiteMedium(true);
    setTitle("От 20 700 ₸ до 250 000 ₸");
  };

  const websiteMaximumHandler = () => {
    setWebsiteMaximum(true);
    setTitle("Свыше 250 000 ₸");
  };

  const handleLineColor = boxNum => {
    setActiveBox(boxNum);

    if (boxNum === 2) {
      const firstBox = document.querySelector(`.${classes.box1}`);
      if (firstBox) {
        firstBox.classList.add(classes.final);
      }
    }
  };

  const handleIsClickedChange = () => {
    setIsClicked(true);
  };

  return (
    <Container>
      <div className={classes.how}>
        <h2>Как получить выигрыш</h2>
        <ProgressBox activeBox={activeBox} isClicked={isClicked} />
        <Content
          handleLineColor={handleLineColor}
          title={title}
          onlineWinnings={onlineWinnings}
          offlineWinnings={offlineWinnings}
          websiteMin={websiteMin}
          websiteMedium={websiteMedium}
          websiteMax={websiteMaximum}
          changeToAmount={changeToAmount}
          onlineHandler={onlineHandler}
          offlineHandler={offlineHandler}
          changeAmount={changeAmount}
          offlineAmount={offlineAmount}
          changeSum={changeSum}
          websiteMinHandler={websiteMinHandler}
          websiteMediumHandler={websiteMediumHandler}
          websiteMaximumHandler={websiteMaximumHandler}
          onClickedChange={handleIsClickedChange}
        />
      </div>
    </Container>
  );
};

export default GetWinning;
