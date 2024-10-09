import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

export default function GroupDataByStatus({ ticketsData, usersData }) {
  const status = ["Backlog", "Todo", "In Progress", "Done", "Cancelled"];

  const [backlogData, setBacklogData] = useState([]);
  const [todoData, setTodoData] = useState([]);
  const [inProgressData, setInProgressData] = useState([]);
  const [doneData, setDoneData] = useState([]);
  const [cancelledData, setCancelledData] = useState([]);

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
          <div key={index} style={{ textAlign: "center", display: "flex" }}>
            <h3>{item}</h3>
            <h4 style={{ marginLeft: "8px" }}>
              {item === "Backlog"
                ? backlogData.length
                : item === "Todo"
                ? todoData.length
                : item === "In Progress"
                ? inProgressData.length
                : item === "Done"
                ? doneData.length
                : item === "Cancelled"
                ? cancelledData.length
                : 0}
            </h4>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {status.map((item) => (
          <div key={item} style={{ flex: 1, marginRight: "36px" }}>
            {item === "Backlog" && (
              <div style={{ display: "flex", flexDirection: "column" }}>
                {backlogData?.map((dataItem) => (
                  <Card key={dataItem.id} item={dataItem} />
                ))}
              </div>
            )}

            {item === "Todo" && (
              <div style={{ display: "flex", flexDirection: "column" }}>
                {todoData?.map((dataItem) => (
                  <Card key={dataItem.id} item={dataItem} />
                ))}
              </div>
            )}

            {item === "In Progress" && (
              <div style={{ display: "flex", flexDirection: "column" }}>
                {inProgressData?.map((dataItem) => (
                  <Card key={dataItem.id} item={dataItem} />
                ))}
              </div>
            )}

            {item === "Done" && (
              <div style={{ display: "flex", flexDirection: "column" }}>
                {doneData?.map((dataItem) => (
                  <Card key={dataItem.id} item={dataItem} />
                ))}
              </div>
            )}

            {item === "Cancelled" && (
              <div style={{ display: "flex", flexDirection: "column" }}>
                {cancelledData?.map((dataItem) => (
                  <Card key={dataItem.id} item={dataItem} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
