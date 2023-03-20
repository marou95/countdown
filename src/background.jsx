import React from "react";
import { useEffect, useState } from "react";

export default function Background() {
  const [photo, setPhoto] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      change();
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [photo]);

  const change = () => {
    if (photo === 5) {
      setPhoto(1);
      return;
    }

    setPhoto((prev) => prev + 1);
  };

  const returnPhotoURL = () => {
    switch (photo) {
      case 1:
        return "./images/img1.jpg";
      case 2:
        return "./images/img2.jpg";
      case 3:
        return "./images/img3.jpg";
      case 4:
        return "./images/img4.jpg";
      default:
        return null;
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${returnPhotoURL()})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "500px",
        height: "500px",
      }}

export default Background
