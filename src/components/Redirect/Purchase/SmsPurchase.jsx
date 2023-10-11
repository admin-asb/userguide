import Container from "../../UI/Container";
import classes from "../HowPurchase.module.css";
import Accordion from "../../Layout/Accordion";
import { useEffect } from "react";
import TeleBingo1 from "./SmsPurchase/TeleBingo1";
import TeleBingo2 from "./SmsPurchase/TeleBingo2";
import Loto6491 from "./SmsPurchase/Loto6491";
import Loto6492 from "./SmsPurchase/Loto6492";
import Loto6493 from "./SmsPurchase/Loto6493";
import Loto5361 from "./SmsPurchase/Loto5361";
import Loto5362 from "./SmsPurchase/Loto5362";
import Loto5363 from "./SmsPurchase/Loto5363";
import Keno1 from "./SmsPurchase/Keno1";
import Keno2 from "./SmsPurchase/Keno2";
import Keno3 from "./SmsPurchase/Keno3";
import Keno21 from "./SmsPurchase/Keno21";
import Keno22 from "./SmsPurchase/Keno22";
import Keno23 from "./SmsPurchase/Keno23";
import Loto7771 from "./SmsPurchase/Loto7771";
import Loto7772 from "./SmsPurchase/Loto7772";
import Check1 from "./SmsPurchase/Check1";
import Check2 from "./SmsPurchase/Check2";

const SmsPurchase = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const lotoTbItems = [
    {
      title: "Один билет",
      content: <TeleBingo1 />,
    },
    {
      title: "Несколько билетов",
      content: <TeleBingo2 />,
    },
  ];

  const loto649Items = [
    {
      title: "Один билет - автовыбор комбинации",
      content: <Loto6491 />,
    },
    {
      title: "Один билет - своя комбинация",
      content: <Loto6492 />,
    },
    {
      title: "Несколько билетов",
      content: <Loto6493 />,
    },
  ];

  const loto536Items = [
    {
      title: "Один билет - автовыбор комбинации",
      content: <Loto5361 />,
    },
    {
      title: "Один билет - своя комбинация",
      content: <Loto5362 />,
    },
    {
      title: "Несколько билетов",
      content: <Loto5363 />,
    },
  ];

  const lotoKenoItems = [
    {
      title: "Один билет - автовыбор комбинации",
      content: <Keno1 />,
    },
    {
      title: "Один билет - своя комбинация",
      content: <Keno2 />,
    },
    {
      title: "Несколько билетов",
      content: <Keno3 />,
    },
  ];

  const lotoKeno2Items = [
    {
      title: "Один билет - автовыбор комбинации",
      content: <Keno21 />,
    },
    {
      title: "Один билет - своя комбинация",
      content: <Keno22 />,
    },
    {
      title: "Несколько билетов",
      content: <Keno23 />,
    },
  ];

  const loto777Items = [
    {
      title: "Один билет - автовыбор комбинации",
      content: <Loto7771 />,
    },
    {
      title: "Один билет - по типу комбинации",
      content: <Loto7772 />,
    },
  ];

  const checkItems = [
    {
      title: "Как проверить билет",
      content: <Check1 />,
    },
    {
      title: "Как получить выигрыш",
      content: <Check2 />,
    },
  ];

  return (
    <Container>
      <div className={`${classes.purchase} ${classes.sms}`}>
        <h2>Как купить билет по СМС</h2>
        <div className={`${classes.box} ${classes["sms-box1"]}`}>
          Внимание! Покупка билетов по СМС c корпоративных номеров недоступна.
        </div>
        <h3>TeleBingo</h3>
        <Accordion items={lotoTbItems} />
        <h3>LOTO 6/49</h3>
        <Accordion items={loto649Items} />
        <h3>5/36</h3>
        <Accordion items={loto536Items} />
        <h3>KENO</h3>
        <Accordion items={lotoKenoItems} />
        <h3>KENO2</h3>
        <Accordion items={lotoKeno2Items} />
        <h3>777</h3>
        <Accordion items={loto777Items} />
        <h3>Проверка билета</h3>
        <Accordion items={checkItems} />
        <p>
          Процедуру получения выигрыша свыше 5 000 тенге можно инициировать
          после проверки билета
        </p>
        <div className={classes["sms-purchase__btn"]}>Проверить билет</div>
        <p>
          * При получении выигрыша свыше 6 МРП необходимо иметь удостоверение
          личности. <br />
          ** При получении выигрыша свыше 250 000 тенге необходимо иметь
          удостоверение личности и IBAN карт-счета. IBAN – 20-значный номер
          банковского счета. IBAN вы можете узнать в любом отделении банка или в
          личном кабинете интернет-банкинга.
        </p>
        <div className={`${classes.box} ${classes["sms-box2"]}`}>
          Покупая билет, вы соглашаетесь с тем, что вам исполнилось 18 лет, вы
          согласны получать SMS от АО "Сәтті Жұлдыз" и принимаете условия
          <a href=""></a>публичного договора.
        </div>
      </div>
    </Container>
  );
};

export default SmsPurchase;
