import classes from "../Intervals.module.css";

const SmsMin = (props) => {
  return (
    <>
      <h3>
        {props.webTitle} <br />
        <span>С помощью SMS</span>
      </h3>
      <div className={classes.info__wrapper}>
        <p>
          <span>Выигрыш до 5 000 ₸:</span>
          <br />
          Автоматически зачисляется на баланс сотовой связи.
          <br />
          <span>Выигрыш до 5 000 ₸:</span>
          <br />
          <b>На баланс номера телефона:</b>
          <br />
          Отправьте бесплатное SMS-сообщение на номер 9087 с текстом: PRIZE
          номер_билета.
          <br />
          <b>На кошелек sz.kz:</b>
          <ol>
            <li>Перейдите по ссылке https://sz.kz/getwin</li>
            <li>Введите номер выигрышного билета.</li>
            <li>Выберите метод выплаты.</li>
          </ol>
        </p>
      </div>
    </>
  );
};

export default SmsMin;
