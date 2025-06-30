import React from "react";
import "./Splash.module.css";
import logo from "../../Assets/Images/logo.png";

export default function Splash() {
  return (
    <div className="splash-screen">
      <img src={logo} alt="شعار المدرسة" className="splash-logo" />
    </div>
  );
}
