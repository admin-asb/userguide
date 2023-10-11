import classes from "./SmsPurchase.module.css";

const Loto7772 = () => {
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
            «777», «777 t3», «777 Л3», «777 Пр», «777 Пс», «777 Л2» или «777 t1»
          </strong>
        </p>
        <br />
        <p>
          Стоимость билета: <br />
          <strong>100 ₸</strong>
        </p>
      </div>
      <p>
        <strong>Расшифровка:</strong>
        <br />
        <br />
        <strong>t3</strong> - тип комбинации «Точно три»
        <br />
        <br />
        <strong>t1</strong> - тип комбинации «Одна цифра»
        <br />
        <br />
        <strong>Л3</strong> - тип комбинации «Любые три»
        <br />
        <br />
        <strong>Л2</strong> - тип комбинации «Любая пара»
        <br />
        <br />
        <strong>ПР</strong> - тип комбинации «Две цифры» - первая пара
        <br />
        <br />
        <strong>ПС</strong> - тип комбинации «Две цифры» - последняя пара
        <br />
        <br />
        Стоимость билета спишется с баланса телефона, баланс должен быть
        положительным.
      </p>
    </div>
  );
};

export default Loto7772;
