import { useEffect, useState } from "react";
import "./Avatar.css";

function Avatar({ image, name, status }) {
  const [statusClass, setStatusClass] = useState("");

  useEffect(() => {
    if (status === "inline") {
      setStatusClass("status-inline");
    } else if (status === "occupied") {
      setStatusClass("status-away");
    } else if (status === "offline") {
      setStatusClass("status-offline");
    }
  }, [statusClass]);

  return (
    <div className="avatar-container">
      <img src={image} alt="Avatar" className="avatar-img" />
      <p className="avatar-name">{name}</p>
      <div className={`avatar-status ${statusClass}`}></div>
    </div>
  );
}

export default Avatar;
