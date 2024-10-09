import React, { useEffect, useState } from "react";
import To_do from "../../../assets/icons_FEtask/To_do.svg";
import { getInitials, imagePriorityHandler } from "../../../utils/handlers";
import "./Card.css"; // Import the CSS file

export default function Card({ item, usersData }) {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (usersData && item) {
      const userName = usersData.find(
        (userItem) => userItem.id === item.userId
      );

      if (userName) {
        let name = userName.name;
        setUserName(name);
      } else {
        console.log("User not found");
      }
    }
  }, [usersData, item]);

  return (
    <div className="card">
      <div className="card-header">
        <div style={{ fontSize: 12 }}>{item.id}</div>
        <span className="initials">{getInitials(userName)}</span>
      </div>
      <div className="card-content">
        <img src={To_do} alt="To Do" />
        <div className="card-title">
          {item.title.length > 40
            ? item.title.slice(0, 40) + "..."
            : item.title}
        </div>
      </div>

      <div className="card-tag">
        <img
          src={imagePriorityHandler(item.priority)}
          style={{ marginRight: 4 }}
          alt="Priority"
        />
        <img src={To_do} alt="To Do" style={{ marginRight: 4 }} />
        <div className="card-tag-text">{item.tag[0]}</div>
      </div>
    </div>
  );
}
