import { useEffect } from "react";
import Container from "../../UI/Container";
import classes from "../HowPurchase.module.css";
import Accordion from "../../Layout/Accordion";

const Questions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const accordionItems = [
    {
      title: "Облагается ли выигрыш налогом?",
      content: "Content for Item 1",
    },
    {
      title: "Как выплачиваются выигрыши?",
      content: "Content for Item 2",
    },
    {
      title: "Какие документы необходимо предъявить для получения выигрыша?",
      content: "Content for Item 3",
    },
  ];

  const accordionItems2 = [
    {
      title: "Граждане другой страны могут участвовать в лотерее?",
      content: "Content for Item 4",
    },
    {
      title: "Мне 17 лет, а мне отказали в продаже лотерейного билета?",
      content: "Content for Item 5",
    },
    {
      title: "Как купить билет?",
      content: "Content for Item 6",
    },
    {
      title:
        "Если я участвую в разных тиражных лотереях, мне выдадут один лотерейный билет?",
      content: "Content for Item 7",
    },
    {
      title:
        "Могу я отменить комбинацию и вернуть купленный лотерейный билет, если передумал?",
      content: "Content for Item 8",
    },
  ];

  return (
    <Container>
      <div className={classes.purchase}>
        <h2>Часто задаваемые вопросы о лотереях</h2>
        <h3>Категория вопросов </h3>
        <Accordion items={accordionItems} />
        <h3>Категория вопросов </h3>
        <Accordion items={accordionItems2} />
        <p className={classes.note}>
          Если Вы не нашли ответ, на интересующий Вас вопрос, пишите нам, мы
          ответим Вам в ближайшее время.
        </p>
      </div>
    </Container>
  );
};

export default Questions;
