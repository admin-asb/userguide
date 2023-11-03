import GetOfflineWinning from "./GetOfflineWinnings";
import GetOnlineWinning from "./GetOnlineWinning";
import WebMaximum from "./Intervals/MaximumSum/WebsiteMaximum";
import WebMedium from "./Intervals/MediumSum/WebsiteMedium";
import WebsiteMin from "./Intervals/MinimumSum/WebsiteMin";
import SelectionButtons from "./SelectionButtons";

const Content = ({
  title,
  onlineWinnings,
  offlineWinnings,
  websiteMin,
  websiteMedium,
  websiteMax,
  changeToAmount,
  onlineHandler,
  offlineHandler,
  changeAmount,
  offlineAmount,
  changeSum,
  websiteMinHandler,
  websiteMediumHandler,
  websiteMaximumHandler,
  handleLineColor,
  onClickedChange,
}) => {
  if (onlineWinnings) {
    if (websiteMin) {
      return <WebsiteMin webTitle={title} />;
    } else if (websiteMedium) {
      return <WebMedium webTitle={title} />;
    } else if (websiteMax) {
      return <WebMaximum webTitle={title} />;
    } else {
      return (
        <GetOnlineWinning
          change={changeToAmount}
          onChangeAmount={changeAmount}
          onPaint={handleLineColor}
          onlineTitle={title}
          onWebsiteMin={websiteMinHandler}
          onWebMedium={websiteMediumHandler}
          onWebMax={websiteMaximumHandler}
          onClickedChange={onClickedChange}
        />
      );
    }
  } else if (offlineWinnings) {
    return (
      <GetOfflineWinning
        change={changeToAmount}
        onChangeAmount={changeAmount}
        offlineSum={offlineAmount}
        onChangeSum={changeSum}
        onPaint={() => handleLineColor(2)}
        offlineTitle={title}
      />
    );
  } else {
    return (
      <>
        <h3>{title}</h3>
        <SelectionButtons
          onOnlineClick={onlineHandler}
          onOfflineClick={offlineHandler}
        />
      </>
    );
  }
};

export default Content;
