import React, { useState } from "react";
import dot_menu from "../../../assets/icons_FEtask/3_dot_menu.svg";
import Cancelled from "../../../assets/icons_FEtask/Cancelled.svg";
import Done from "../../../assets/icons_FEtask/Done.svg";
import in_progress from "../../../assets/icons_FEtask/in_progress.svg";
import Backlog from "../../../assets/icons_FEtask/Backlog.svg";
import To_do from "../../../assets/icons_FEtask/To_do.svg";
import urgentPriority from "../../../assets/icons_FEtask/SVG - Urgent Priority grey.svg";
import noPriority from "../../../assets/icons_FEtask/No_priority.svg";
import lowPriority from "../../../assets/icons_FEtask/Img_LowPriority.svg";
import mediumPriority from "../../../assets/icons_FEtask/Img_MediumPriority.svg";
import highPriority from "../../../assets/icons_FEtask/Img_HighPriority.svg";

export default function UserCard({ item, usersData }) {
  const [userName, setUserName] = useState("");
  const getInitials = (name) => {
    const words = name.split(" ");
    const initials = words.map((word) => word.charAt(0).toUpperCase()).join("");
    return initials;
  };
  const imagePriorityHandler = (priority) => {
    if (priority === 0) return noPriority;
    else if (priority === 1) return lowPriority;
    else if (priority === 2) return mediumPriority;
    else if (priority === 3) return highPriority;
    else if (priority === 4) return urgentPriority;
  };
  return (
    <div
      style={{
        borderWidth: 2,
        borderColor: "#ccc",
        borderStyle: "solid",
        margin: 5,
        padding: 10,
        borderRadius: 5,
        width: "98%",
        height: 80,
        backgroundColor: "white",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Added shadow
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: 12 }}>{item.id}</div>
        <span
          style={{
            backgroundColor: "orange",
            borderRadius: 15,
            width: 22,
            textAlign: "center",
          }}
        ></span>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: 5,
          gap: 5,
        }}
      >
        <img src={To_do} alt="To Do" />
        <div style={{ fontWeight: "bold", color: "black", fontSize: 12 }}>
          {item.title.length > 40
            ? item.title.slice(0, 40) + "..."
            : item.title}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: 5,
          gap: 5,
        }}
      >
        <img
          src={imagePriorityHandler(item.priority)}
          style={{ marginRight: 4 }}
        />
        <img src={To_do} alt="To Do" style={{ marginRight: 4 }} />
        <div style={{ fontWeight: "bold", color: "gray", fontSize: 12 }}>
          {item.tag[0]}
        </div>
      </div>
    </div>
  );
}
