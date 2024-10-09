import React from "react";
import {
  imagePriorityHandler,
  selectImageHandler,
} from "../../../utils/handlers";

export default function UserCard({ item, usersData }) {
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
