import { useState } from "react";
import "./Avatar.css";

function Avatar({ image, name, status }) {
  const statusColor = () => {
    if (status === "inline") {
      return "status-inline";
    } else if (status === "offline") {
      return "status-offline";
    } else if (status === "occupied") {
      return "status-away";
    }
  };
  return (
    <div className="avatar-container">
      <img src={image} alt="Avatar" className="avatar-img" />
      <p className="avatar-name">{name}</p>
      <div className={`avatar-status ${statusColor()}`}></div>
    </div>
  );
}

export default Avatar;
