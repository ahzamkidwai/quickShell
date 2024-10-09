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
    <div>
      <div>GroupDataByStatus</div>
      {status.map((item) => (
        <div key={item}>
          {/* Backlog Section */}
          {item === "Backlog" && (
            <>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  borderWidth: 1,
                  borderColor: "red",
                  borderStyle: "solid",
                }}
              >
                <h3>{item}</h3>
                <h3 style={{ marginLeft: "8px" }}>{backlogData.length}</h3>{" "}
                {/* Add margin here */}
              </div>

              {backlogData?.map((dataItem) => (
                <Card key={dataItem.id} item={dataItem} />
              ))}
            </>
          )}

          {/* Todo Section */}
          {item === "Todo" && (
            <>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderStyle: "solid",
                }}
              >
                <h3>{item}</h3>
                <h3 style={{ marginLeft: "8px" }}>{todoData.length}</h3>{" "}
                {/* Add margin here */}
              </div>

              {todoData?.map((dataItem) => (
                <Card key={dataItem.id} item={dataItem} />
              ))}
            </>
          )}

          {/* In Progress Section */}
          {item === "In Progress" && (
            <>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  borderWidth: 1,
                  borderColor: "green",
                  borderStyle: "solid",
                }}
              >
                <h3>{item}</h3>
                <h3 style={{ marginLeft: "8px" }}>
                  {inProgressData.length}
                </h3>{" "}
                {/* Add margin here */}
              </div>

              {inProgressData?.map((dataItem) => (
                <Card key={dataItem.id} item={dataItem} />
              ))}
            </>
          )}

          {/* Done Section */}
          {item === "Done" && (
            <>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  borderWidth: 1,
                  borderColor: "purple",
                  borderStyle: "solid",
                }}
              >
                <h3>{item}</h3>
                <h3 style={{ marginLeft: "8px" }}>{doneData.length}</h3>{" "}
                {/* Add margin here */}
              </div>

              {doneData?.map((dataItem) => (
                <Card key={dataItem.id} item={dataItem} />
              ))}
            </>
          )}

          {/* Cancelled Section */}
          {item === "Cancelled" && (
            <>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  borderWidth: 1,
                  borderColor: "grey",
                  borderStyle: "solid",
                }}
              >
                <h3>{item}</h3>
                <h3 style={{ marginLeft: "8px" }}>
                  {cancelledData.length}
                </h3>{" "}
                {/* Add margin here */}
              </div>

              {cancelledData?.map((dataItem) => (
                <Card key={dataItem.id} item={dataItem} />
              ))}
            </>
          )}
        </div>
      ))}
    </div>
  );
}
