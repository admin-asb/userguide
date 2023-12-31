import classes from "./SmsPurchase.module.css";

const Check2 = () => {
  return (
    <div className={classes.content}>
      <strong>Как получить выигрыш?</strong>
      <p>
        Выигрыши в размере до 5 000 тенге (включительно) автоматически
        зачисляются на баланс телефона.
        <br />
        <br />
        Выигрыши в размере от 5 001 тенге до 20 700 тенге можно получить
        несколькими способами:
        <br />
        <br />
        ·         На баланс номера телефона. Для этого отправьте бесплатное СМС
        -сообщение на номер 9087 с текстом: PRIZE номер_билета;
        <br />
        <br />
        ·         В "Кошелек" на сайте sz.kz.
        <br />
        <br />
        Выигрыши от 6 МРП (20 700 тенге) до 250 000 тенге * можно получить в
        «Кошелек» на сайте sz.kz.
        <br />
        <br />
        Для получения выигрыша свыше 250 000 тенге ** необходимо обратиться в
        региональное представительство национальной лотереи «Сәтті Жұлдыз», либо
        в головной офис компании в Алматы. Выигрыш выплачивается только
        безналичным расчетом на карт-счет (IBAN) победителя.
      </p>
    </div>
  );
};

export default Check2;
