import classes from "./SmsPurchase.module.css";

const Loto5363 = () => {
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
          <strong>
            536 <span>N</span>
          </strong>{" "}
          или{" "}
          <strong>
            5/36 <span>N</span>
          </strong>
        </p>
        <br />
        <p>
          Стоимость билета: <br />
          <strong>
            400 ₸ <span>* N</span>
          </strong>
        </p>
      </div>
      <p>
        <span>N</span> – количество билетов, но не больше 10
        <br />
        <br />
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
        1. Отправьте слово 536 N или 5/36 N (N – количество билетов, но не
        больше 10) на бесплатный номер 9087.
        <br />
        <br />
        2. Вы получите сообщение: <br />
        «Satyp aludy rastau yshin 1 sanyn zhiberiniz. Satyp alu sharttary:
        https://szhuldyz.kz/kk/sms Podtverdite pokupku otpraviv cifru 1 v otvet
        na eto soobshchenie. Usloviya pokupki: https://szhuldyz.kz/sms»
        <br />
        <br />
        3. Для подтверждения покупки необходимо отправить СМС с цифрой «1»
        <br />
        <br />
        4. В случае успешной оплаты вы получите 2 сообщения: <br />
        <br />
        а) Уведомление об успешной оплате: «Sіz Loto 5/36 ____ tenge toledіnіz.
        Vy oplatili Loto 5/36 ____ tenge.» <br />
        <br /> б) N номеров билетов с комбинацией чисел и датой тиража: «LOTO
        5/36 №1111111 [3,9,19,27,33] ДД ММ ГГГГ, 20:55»
      </p>
    </div>
  );
};

export default Loto5363;
