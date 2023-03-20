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
  const endDate = "2023-08-18";

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
      <div>
        <h1>Countdown to Japan !</h1>
        <a
          href="https://www.notion.so/Japon-49bf0eca44294eebb040435c98126db2"
          target="_blank"
        >
          <img src={NotionLogo} className="logo" alt="Notion Logo" />
        </a>
      </div>
      <p className="read-the-docs">Click on the Notion logo</p>
      <div>
        <Countdown date={endDate}  />
      </div>
    </div>
  );
}

export default App;
