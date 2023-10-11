import classes from "./SmsPurchase.module.css";

const Loto7771 = () => {
  return (
    <div className={classes.content}>
      <div className={classes.box}>
        <p>
          Номер для отправки СМС: <br />
          <strong>9087</strong>
        </p>
        <br />
        <p>
          Текст СМС сообщения: <br />
          <strong>777</strong>
        </p>
        <br />
        <p>
          Стоимость билета: <br />
          <strong>100 ₸</strong>
        </p>
      </div>
      <p>
        Стоимость билета спишется с баланса телефона, баланс должен быть
        положительным.
        <br />
        <br />
        <strong>Подробнее</strong>
        <br />
        <br />
        1. Отправить слово 777 на бесплатный номер 9087
        <br />
        <br />
        2. Вы получите сообщение: <br />
        «Satyp aludy rastau yshin 1 sanyn zhiberiniz. Satyp alu sharttary:
        https://szhuldyz.kz/kk/sms Oıyn: 100 tenge Podtverdite oplatu otpraviv
        cifru 1 v otvet na eto soobshchenie. Usloviya pokupki:
        https://szhuldyz.kz/sms Stoimost: 100 tenge»
        <br />
        <br />
        3. Для подтверждения покупки необходимо отправить SMS с цифрой «1»
        <br />
        <br />
        4. В случае успешной оплаты вы получите 2 сообщения: <br />
        <br />
        а) Уведомление об успешной оплате: «Sіz 777 100 tenge toledіnіz. Vy
        oplatili 777 100 tenge» <br />
        <br /> б) Номер билета, комбинацию чисел, дату тиража: «T777 №1111111
        [1, 2, 3] ДД ММ ГГГГ, 20:55»
      </p>
    </div>
  );
};

export default Loto7771;
