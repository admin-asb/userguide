import classes from "./SmsPurchase.module.css";

const Check1 = () => {
  return (
    <div className={classes.content}>
      <strong>Как проверить билет, приобретенный с помощью СМС:</strong>
      <p>
        1. В случае выигрыша вы получите СМС сообщение: «Bılet 159920 utysqa ıe
        boldy. Utys kolemі _____tg. osy telefon balansyna bіrneshe kunde
        aydarylady. Bilet 159920 vyigral. Summa vyigrysha _____tg. budet
        zachislena na nomer telefona v techenii neskolcih dney» <br />
        <br />
        2. Проверить билет и сумму выигрыша вы можете на сайте <br />
        <br />
        3. После зачисления денег на баланс телефона вы получите сообщение: «Bul
        nomirge «номер_билета» boiynsha «размер_суммы» koleminde utys
        zhiberildi. Vyigrysh po biletu «номер_билета» na summu «размер_суммы»
        otpravlen na etot nomer.»
      </p>
    </div>
  );
};

export default Check1;
