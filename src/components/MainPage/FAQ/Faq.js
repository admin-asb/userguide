import classes from "./Faq.module.css";
import faqImg from "../../../assets/faq-img.png";
import faqImg2 from "../../../assets/faq-imgx2.png";
import { useNavigate } from "react-router-dom";

const Faq = () => {
  const navigate = useNavigate();

  const navigationHandler = () => {
    navigate("/faq");
  };

  return (
    <section className={classes.faq}>
      <h3> Часто задаваемые вопросы </h3>{" "}
      <div className={classes["faq__box"]} onClick={navigationHandler}>
        {" "}
        <p>
          {" "}
          Вопросы и <br /> ответы{" "}
        </p>{" "}
        <img
          src={faqImg}
          srcSet={`${faqImg2} 2x`}
          alt="A picture of Schedule"
        />
      </div>{" "}
    </section>
  );
};

export default Faq;
