import Container from "../../UI/Container";
import classes from "../HowPurchase.module.css";

const SubscriptionPurchase = () => {
  return (
    <Container>
      <div className={classes.purchase}>
        <h2> Как купить билет по ежедневной подписке </h2>
        <h3> Для абонентов Beeline </h3>
        <p>
          <strong> Ежедневная подписка 100 ₸/день </strong> <br /> Для активации
          подписки наберите на мобильном телефоне USSD *88# <br />
          <br />
          <strong> Несколько билетов </strong> <br /> Наберите *88*N#, где N
          количество билетов от 1 до 10. Например, чтобы купить 10 билетов,
          наберите *88*10# Стоимость каждого купленного билета 100 ₸ <br />
          <br />
          Суперприз 1 000 000 ₸ <br />
          <br />
          <strong> Отключить подписку *88*0# </strong> <br />
          <br />
          Для получения подробной информации или решения возникшего вопроса
          позвоните на бесплатный номер 8-800-080-9351 <br />
          <br />
          ссылка <a href="https://uda4a.sz.kz/"> https://uda4a.sz.kz/</a>
        </p>
        <h3> Для абонентов Tele2/Алтел </h3>
        <p>
          <strong> Ежедневная подписка 100₸ / день </strong> <br /> Для
          активации подписки наберите на мобильном телефоне USSD *9351# <br />
          <br />
          <strong> Несколько билетов </strong> <br /> Наберите *9351*N#, где N
          количество билетов от 1 до 10. Например, чтобы купить 10 билетов,
          наберите *9351*10# Стоимость каждого купленного билета 100 ₸ <br />
          <br />
          Суперприз 1 000 000 ₸ <br />
          <br />
          <strong> Отключить подписку *9351*0# </strong> <br />
          <br />
          Для получения подробной информации или решения возникшего вопроса
          позвоните на бесплатный номер 8-800-080-9351 <br />
          <br />
          ссылки <br />
          <a href="https://udacha.tele2.kz/"> https://udacha.tele2.kz/</a>
          <br />
          <a href="https://udacha.altel.kz/"> https://udacha.altel.kz/</a>
        </p>
      </div>
    </Container>
  );
};

export default SubscriptionPurchase;
