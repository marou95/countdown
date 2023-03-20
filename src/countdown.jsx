import React, { useState, useEffect } from "react";
import "./countdown.css";

const Countdown = ({ date, endDate }) => {
  const endDateObj = new Date(Date.parse(endDate));

  const calculateTimeLeft = () => {
    const difference = +new Date(date) - +new Date();
    

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        isTimeUp: false, // Ajouter une propriété pour indiquer si le temps est écoulé
      };
    } else {
      timeLeft = {
        isTimeUp: true, // Temps écoulé
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const { days, hours, minutes, seconds, isTimeUp } = timeLeft;

  return (
    <div>
      {isTimeUp ? (
        <div>Temps écoulé !</div>
      ) : (
        <>
          <div className="countdown">
      <div className="card">
        <div className="countdown-value">{days}</div>
        <div className="countdown-unit">Days</div>
      </div>
      <div className="card">
        <div className="countdown-value">{hours}</div>
        <div className="countdown-unit">Hours</div>
      </div>
      <div className="card">
        <div className="countdown-value">{minutes}</div>
        <div className="countdown-unit">Minutes</div>
      </div>
      <div className="card">
        <div className="countdown-value">{seconds}</div>
        <div className="countdown-unit">Secondes</div>
      </div>
      {/* <p>Counting down to jap on {moment.unix(unixEndDate).format('dddd, MMMM Do, YYYY | h:mm A')}</p> */}
      <div>Fin le {endDateObj.toLocaleString()}</div>

    </div>
        </>
      )}
    </div>
  );
};

export default Countdown;
