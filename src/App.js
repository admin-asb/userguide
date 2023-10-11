import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import MainPage from "./pages/MainPage";
import OnlinePurchase from "./components/Redirect/Purchase/OnlinePurchase";
import SubscriptionPurchase from "./components/Redirect/Purchase/SubscriptionPurchase";
import Schedule from "./components/Redirect/Runs/Schedule";
import GameRules from "./components/Redirect/Rules/GameRules";
import Rights from "./components/Redirect/Rules/Rights";
import WalletRules from "./components/Redirect/Rules/WalletRules";
import Questions from "./components/Redirect/FAQ/Questions";
import SmsPurchase from "./components/Redirect/Purchase/SmsPurchase";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "/online", element: <OnlinePurchase /> },
      { path: "/subscription", element: <SubscriptionPurchase /> },
      { path: "/schedule", element: <Schedule /> },
      { path: "/rules", element: <GameRules /> },
      { path: "/rights", element: <Rights /> },
      { path: "/wallet-rules", element: <WalletRules /> },
      { path: "/faq", element: <Questions /> },
      { path: "/sms", element: <SmsPurchase /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
