import classes from "./SmsPurchase.module.css";

const Keno22 = () => {
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
            Keno2 <span>N N N...</span>
          </strong>
          &nbsp; или&nbsp;
          <strong>
            Кено2 <span>N N N...</span>
          </strong>
        </p>
        <br />
        <p>
          Стоимость билета: <br />
          <strong>100 ₸</strong>
        </p>
      </div>
      <p>
        <span>N N N...</span> - комбинация, через пробел 1-10 цифр (от 1 до 80)
        <br />
        <br />
        <span className={classes.gray}>Пример:</span> <strong>Кeno2</strong>
        &nbsp;
        <span>1 15 23 33 4 58 74 61 44</span>
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
        1. Отправить слово Keno2 или Кено2 и через пробел 1-10 цифр (от 1 до 80)
        на бесплатный номер 9087 <br />
        <br />
        &nbsp;
        <span className={classes.ml}>
          Пример: Кeno2 1 15 23 33 4 58 74 61 44
        </span>
        <br />
        <br />
        2. Вы получите сообщение: <br />
        «Satyp aludy rastau yshin 1 sanyn zhiberiniz. Satyp alu sharttary:
        https://szhuldyz.kz/kk/sms Oıyn: 100 tenge Podtverdite oplatu otpraviv
        cifru 1 v otvet na eto soobshchenie. Usloviya pokupki:
        https://szhuldyz.kz/sms Stoimost: 100 tenge»
        <br />
        <br />
        3. Для подтверждения покупки необходимо отправить СМС с цифрой «1»
        <br />
        <br />
        4. В случае успешной оплаты вы получите 2 сообщения: <br />
        <br />
        а) Уведомление об успешной оплате: «Sіz KENO2 100 tenge toledіnіz. Vy
        oplatili KENO2 100 tenge.» <br />
        <br /> б) Номер билета, комбинацию чисел, дату тиража: «Keno2 №1111111
        [3,9,19,27,33,49] ДД ММ ГГГГ, 20:55»
      </p>
    </div>
  );
};

export default Keno22;
