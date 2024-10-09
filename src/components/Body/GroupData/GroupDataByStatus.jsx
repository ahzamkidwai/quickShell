import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Cancelled from "../../../assets/icons_FEtask/Cancelled.svg";
import Done from "../../../assets/icons_FEtask/Done.svg";
import in_progress from "../../../assets/icons_FEtask/in_progress.svg";
import Backlog from "../../../assets/icons_FEtask/Backlog.svg";
import To_do from "../../../assets/icons_FEtask/To_do.svg";
import add from "../../../assets/icons_FEtask/add.svg";
import dot_menu from "../../../assets/icons_FEtask/3_dot_menu.svg";

export default function GroupDataByStatus({ ticketsData, usersData }) {
  const status = ["Backlog", "Todo", "In Progress", "Done", "Cancelled"];

  const [backlogData, setBacklogData] = useState([]);
  const [todoData, setTodoData] = useState([]);
  const [inProgressData, setInProgressData] = useState([]);
  const [doneData, setDoneData] = useState([]);
  const [cancelledData, setCancelledData] = useState([]);

  const getLength = (item) => {
    switch (item) {
      case "Backlog":
        return backlogData.length;
      case "Todo":
        return todoData.length;
      case "In Progress":
        return inProgressData.length;
      case "Done":
        return doneData.length;
      case "Cancelled":
        return cancelledData.length;
      default:
        return 0;
    }
  };

  const getImageLogo = (item) => {
    switch (item) {
      case "Backlog":
        return Backlog;
      case "Todo":
        return To_do;
      case "In Progress":
        return in_progress;
      case "Done":
        return Done;
      case "Cancelled":
        return Cancelled;
      default:
        return 0;
    }
  };

  useEffect(() => {
    setBacklogData(ticketsData.filter((ticket) => ticket.status === "Backlog"));
    setTodoData(ticketsData.filter((ticket) => ticket.status === "Todo"));
    setInProgressData(
      ticketsData.filter((ticket) => ticket.status === "In progress")
    );
    setDoneData(ticketsData.filter((ticket) => ticket.status === "Done"));
    setCancelledData(
      ticketsData.filter((ticket) => ticket.status === "Cancelled")
    );
  }, [ticketsData]);

  return (
    <div
      style={{
        padding: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "16px",
        }}
      >
        {status.map((item, index) => (
          <div
            key={index}
            style={{
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "80%",
              width: 272,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                alignItems: "center",
                gap: 5,
              }}
            >
              <img src={getImageLogo(item)} style={{ paddingLeft: "14px" }} />
              <h3 style={{ fontWeight: "normal", fontSize: 16 }}>{item}</h3>
              <h4 style={{ marginLeft: "8px", color: "gray" }}>
                {getLength(item)}
              </h4>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                alignItems: "center",
              }}
            >
              <img src={add} alt="" />
              <img src={dot_menu} alt="" />
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {status.map((item) => (
          <div key={item} style={{ flex: 1, marginRight: "36px" }}>
            {item === "Backlog" && (
              <div style={{ display: "flex", flexDirection: "column" }}>
                {backlogData?.map((dataItem) => (
                  <Card
                    key={dataItem.id}
                    item={dataItem}
                    usersData={usersData}
                  />
                ))}
              </div>
            )}

            {item === "Todo" && (
              <div style={{ display: "flex", flexDirection: "column" }}>
                {todoData?.map((dataItem) => (
                  <Card
                    key={dataItem.id}
                    item={dataItem}
                    usersData={usersData}
                  />
                ))}
              </div>
            )}

            {item === "In Progress" && (
              <div style={{ display: "flex", flexDirection: "column" }}>
                {inProgressData?.map((dataItem) => (
                  <Card
                    key={dataItem.id}
                    item={dataItem}
                    usersData={usersData}
                  />
                ))}
              </div>
            )}

            {item === "Done" && (
              <div style={{ display: "flex", flexDirection: "column" }}>
                {doneData?.map((dataItem) => (
                  <Card
                    key={dataItem.id}
                    item={dataItem}
                    usersData={usersData}
                  />
                ))}
              </div>
            )}

            {item === "Cancelled" && (
              <div style={{ display: "flex", flexDirection: "column" }}>
                {cancelledData?.map((dataItem) => (
                  <Card
                    key={dataItem.id}
                    item={dataItem}
                    usersData={usersData}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
