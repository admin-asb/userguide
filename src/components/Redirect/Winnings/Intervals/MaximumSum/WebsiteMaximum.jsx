import classes from "../Intervals.module.css";

const WebMaximum = props => {
  return (
    <>
      <h3>
        {props.webTitle} <br />
        <span>на сайте / в приложении</span>
      </h3>
      <div className={classes.info__wrapper}>
        <p>
          Необходимо обратиться в региональное представительство национальной
          лотереи «Сәтті Жұлдыз», либо в головной офис компании в Алматы.
          Выигрыш выплачивается только безналичным расчетом на карт-счет (IBAN)
          победителя.
          <br />
          <br />
          <b>Для получения выигрыша нужно предоставить:</b>
        </p>
        <ol>
          <li>копию удостоверения личности;</li>
          <li>выигрышный билет;</li>
          <li>оригинал либо копию IBAN карт-счета;</li>
        </ol>
        <p>
          <br />
          <b>...а также заполнить:</b>
        </p>
        <ol>
          <li>
            согласие Участника лотереи на сбор, обработку и защиту персональных
            данных
          </li>
          <li>заявку на перевод денежных средств</li>
          <li>“справку” в двух экземплярах</li>
          <li>заявку на проведение экспертизы лотерейного билета</li>
          <li>договор на проведение медийных мероприятий</li>
          <li>форму “Контактные данные победителя”</li>
        </ol>
      </div>
      <div className={classes["yellow-box"]}>
        <p>
          Процедура выплаты Главного приза предусматривает в обязательном
          порядке необходимость проведения экспертизы выигрышного лотерейного
          билета.
        </p>
      </div>
    </>
  );
};

export default WebMaximum;
