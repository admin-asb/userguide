import classes from "../Intervals.module.css";

const WebsiteMin = (props) => {
  return (
    <>
      <h3>
        {props.webTitle} <br />
        <span>на сайте / в приложении</span>
      </h3>
      <div className={classes.info__wrapper}>
        <p>
          <b>Для получения выигрыша:</b>
        </p>
        <ol>
          <li>
            перейдите в раздел “Мои билеты” и нажмите на кнопку “Получить
            выигрыш”.
          </li>
          <li>выигрыши будут начислены в “Кошелек”.</li>
          <li>в разделе “Кошелек” выведите выигрыш любым удобным способом.</li>
        </ol>
        <a href="#">
          <button>Мои билеты</button>
        </a>
      </div>
    </>
  );
};

export default WebsiteMin;
