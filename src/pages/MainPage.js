import Container from "../components/UI/Container";
import Winnings from "../components/MainPage/Winnings/Winnings";
import Runs from "../components/MainPage/Runs/Runs";
import Purchase from "../components/MainPage/Purchase/Purchase";
import Faq from "../components/MainPage/FAQ/Faq";
import Rules from "../components/MainPage/Rules/Rules";
import { NavContextProvider } from "../store/navigation-context";

const MainPage = () => {
  return (
    <Container>
      <h2> Справочник участника </h2>{" "}
      <NavContextProvider>
        <Purchase /> <Winnings />
        <Runs /> <Faq /> <Rules />{" "}
      </NavContextProvider>{" "}
    </Container>
  );
};

export default MainPage;
