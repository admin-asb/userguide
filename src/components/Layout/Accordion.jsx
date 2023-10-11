import React, { useState, useEffect, useRef } from "react";
import classes from "./Accordion.module.css";
import arrow from "../../assets/icon-close.svg";

const Accordion = props => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [itemHeights, setItemHeights] = useState([]);

  const refHeights = useRef([]);

  useEffect(() => {
    const newHeights = props.items.map((_, index) => {
      if (refHeights.current[index]) {
        return refHeights.current[index].scrollHeight + "px";
      }
      return "0px";
    });
    setItemHeights(newHeights);
  }, [props.items]);

  const toggleState = index => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className={classes.accordion}>
      {props.items.map((item, index) => (
        <div
          key={index}
          onClick={() => toggleState(index)}
          className={`${classes["accordion-item"]} ${
            index === activeIndex ? classes.active : ""
          }`}>
          <div className={classes["accordion-title"]}>
            <p>{item.title}</p>
            <img
              className={`${classes.arrow} ${
                index === activeIndex ? classes.active : ""
              }`}
              src={arrow}
              alt="Arrow"
            />
          </div>
          <div
            className={`${classes["accordion-content"]} ${
              index === activeIndex ? classes.animated : ""
            }`}
            style={{
              height: index === activeIndex ? itemHeights[index] : "0px",
            }}
            ref={element => (refHeights.current[index] = element)}>
            <div className={classes["accordion-content__inner"]}>
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
