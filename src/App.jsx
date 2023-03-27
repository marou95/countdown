import "./App.css";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import NotionLogo from "./assets/Notion-logo.png";
import background from "./assets/clay-banks-u27Rrbs9Dwc-unsplash.jpg";
import background2 from "./assets/tianshu-liu-SBK40fdKbAg-unsplash.jpg";
import Countdown from "./countdown.jsx";
import BackgroundSlider from "react-background-slider";

function App() {
  const endDate1 = "2023-08-17";
  const endDate2 = "2023-08-07";

  const trip1 = "Marwen & Thibault";
  const trip2 = "Vivian & Yanic";

  const notionMT =
    "https://www.notion.so/Japon-49bf0eca44294eebb040435c98126db2";
  const notionVY =
    "https://www.notion.so/Japan-fa8e2e3f04e7483d86eb99676367a157";

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100vw",
        height: "100vh",
        overflow: "auto",
      }}
    >
      <div>
        <h1 className="h1-title">Japan Countdown</h1>
      </div>
      {/* <p className="read-the-docs">Click on the Notion logo</p> */}
      <div className="global-countdown">
        <Countdown date={endDate1} tripTitle={trip1} notionLink={notionMT} />
        <Countdown date={endDate2} tripTitle={trip2} notionLink={notionVY} />
      </div>
    </div>
  );
}

export default App;
