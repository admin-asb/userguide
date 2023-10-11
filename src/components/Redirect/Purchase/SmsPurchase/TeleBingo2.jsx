import classes from "./SmsPurchase.module.css";

const TeleBingo2 = () => {
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
            Telebingo <span>N</span>
          </strong>{" "}
          или{" "}
          <strong>
            Telebingo <span>N</span>
          </strong>
        </p>
        <br />
        <p>
          Стоимость билета: <br />
          <strong>
            500 ₸ <span>* N</span>
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
        1. Отправьте слово Telebingo N или Телебинго N (N – количество билетов,
        но не больше 10) на бесплатный номер 9087. <br />
        <br />
        2. Вы получите сообщение: <br />
        «Satyp aludy rastau yshin 1 sanyn zhiberiniz. Satyp alu sharttary:
        https://szhuldyz.kz/kk/sms Podtverdite pokupku otpraviv cifru 1 v otvet
        na eto soobshchenie. Usloviya pokupki: https://szhuldyz.kz/sms» <br />
        <br />
        3. Для подтверждения покупки необходимо отправить СМС с цифрой «1»{" "}
        <br />
        <br />
        4. В случае успешной оплаты вы получите сообщения: <br />
        <br />
        а) Уведомление об успешной оплате: «Sіz TeleBingo ____ tenge toledіnіz.
        Vy oplatili TeleBingo ____ tenge.» <br />
        <br /> б) N номеров билетов с комбинацией чисел и датой тиража:
        «TeleBingo bilet: 5079259 [1,12,31,61,70], [5,26,45,57,63],
        [14,48,59,79,90] TIRAZH DATA 5.04.2023»
      </p>
    </div>
  );
};

export default TeleBingo2;
