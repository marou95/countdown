import { useState } from "react";
import reactLogo from "./assets/react.svg";
import NotionLogo from "./assets/Notion-logo.png";

import background from "./assets/clay-banks-u27Rrbs9Dwc-unsplash.jpg";
import image2 from "./assets/tianshu-liu-SBK40fdKbAg-unsplash.jpg";
import image3 from "./assets/yuya-yoshioka-0IvwihAQy5s-unsplash.jpg";

import "./App.css";
import Countdown from "./countdown.jsx";
import BackgroundSlider from "react-background-slider";

function App() {
  const endDate1 = "2023-08-18";
  const endDate2 = "2023-08-07";

  const trip1 = "Marwen & Thibault"
  const trip2 = "Vivian & Yanic"

  const notionMT = "https://www.notion.so/Japon-49bf0eca44294eebb040435c98126db2"
  const notionVY = ""



  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: '100vw',
        height: '100vh',
        overflow: 'auto'
      }}
    >
      <div >
        <h1 className="h1-title">Japan Countdown</h1>
      </div>
      {/* <p className="read-the-docs">Click on the Notion logo</p> */}
      <div>
        <Countdown date={endDate1} tripTitle={trip1} notionLink={notionMT}  />
        <Countdown date={endDate2} tripTitle={trip2} notionLink={notionVY}  />
      </div>
    </div>
  );
}

export default App;
