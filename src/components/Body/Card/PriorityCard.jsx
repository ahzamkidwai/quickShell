import React from "react";
import noPriority from "../../../assets/icons_FEtask/No_priority.svg";
import lowPriority from "../../../assets/icons_FEtask/Img_LowPriority.svg";
import mediumPriority from "../../../assets/icons_FEtask/Img_MediumPriority.svg";
import highPriority from "../../../assets/icons_FEtask/Img_HighPriority.svg";
import urgentPriority from "../../../assets/icons_FEtask/urgentPriorityGrey.svg";
import { selectImageHandler } from "../../../utils/handlers";

export default function PriorityCard({ item, usersData }) {
  const priorityHandler = (priority) => {
    if (priority === 0) return "No priority";
    else if (priority === 1) return "Low";
    else if (priority === 2) return "Medium";
    else if (priority === 3) return "High";
    else if (priority === 4) return "Urgent";
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
        {console.log("ITEM BSNHBAD : ", item)}
        <img src={selectImageHandler(item.status)} alt="To Do" />
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

        <div style={{ fontWeight: "bold", color: "gray", fontSize: 12 }}>
          {item.tag[0]}
        </div>
      </div>
    </div>
  );
}
