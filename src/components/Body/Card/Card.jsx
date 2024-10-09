import React from "react";
import urgentPriority from "../../../assets/icons_FEtask/SVG - Urgent Priority grey.svg";
import noPriority from "../../../assets/icons_FEtask/No_priority.svg";
import lowPriority from "../../../assets/icons_FEtask/Img_LowPriority.svg";
import mediumPriority from "../../../assets/icons_FEtask/Img_MediumPriority.svg";
import highPriority from "../../../assets/icons_FEtask/Img_HighPriority.svg";
import To_do from "../../../assets/icons_FEtask/To_do.svg";

export default function Card({ item }) {
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
      }}
    >
      <div>{item.id}</div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: 5,
          gap: 5,
        }}
      >
        <img src={To_do} alt="To Do" />
        <div style={{ fontWeight: "bold", color: "gray" }}>{item.title}</div>
      </div>
      {/* <img src={urgentPriority} alt="Urgent" />
      <p>{priorityHandler(item.priority)}</p>
      <img src={imagePriorityHandler(item.priority)} alt="" /> */}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: 5,
          gap: 5,
        }}
      >
        <img src={To_do} alt="To Do" />
        <div style={{ fontWeight: "bold", color: "gray" }}>{item.tag[0]}</div>
      </div>
    </div>
  );
}
