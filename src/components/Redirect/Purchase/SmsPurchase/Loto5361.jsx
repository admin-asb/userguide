import classes from "./SmsPurchase.module.css";

const Loto5361 = () => {
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
          <strong>536</strong> или <strong>5/36</strong>
        </p>
        <br />
        <p>
          Стоимость билета: <br />
          <strong>400 ₸</strong>
        </p>
      </div>
      <p>
        Регистр СМС сообщения не имеет значения.
        <br />
        <br />
        Стоимость билета спишется с баланса телефона, баланс должен быть
        положительным.
        <br />
        <br />
        <strong>Подробнее</strong>
        <br />
        <br />
        1. Отправьте слово 536 или 5/36 на бесплатный номер 9087.
        <br />
        <br />
        2. Вы получите сообщение: <br />
        «Satyp aludy rastau yshin 1 sanyn zhiberiniz. Satyp alu sharttary:
        https://szhuldyz.kz/kk/sms Oıyn: 400 tenge Podtverdite oplatu otpraviv
        cifru 1 v otvet na eto soobshchenie. Usloviya pokupki:
        https://szhuldyz.kz/sms Stoimost: 400 tenge»
        <br />
        <br />
        3. Для подтверждения покупки необходимо отправить СМС с цифрой «1»
        <br />
        <br />
        4. В случае успешной оплаты вы получите 2 сообщения: <br />
        <br />
        а) Уведомление об успешной оплате: «Sіz LOTO 5/36 400 tenge toledіnіz.
        Vy oplatili LOTO 5/36 400 tenge» <br /> <br />
        б) Номер билета, комбинацию чисел, дату тиража: «LOTO 5/36 №1111111
        [3,9,19,27,33] ДД ММ ГГГГ, 20:55»
      </p>
    </div>
  );
};

export default Loto5361;
