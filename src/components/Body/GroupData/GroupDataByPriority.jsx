import React, { useEffect, useState } from "react";
import add from "../../../assets/icons_FEtask/add.svg";
import dot_menu from "../../../assets/icons_FEtask/3_dot_menu.svg";
import noPriorityImg from "../../../assets/icons_FEtask/No_priority.svg";
import lowPriorityImg from "../../../assets/icons_FEtask/Img_LowPriority.svg";
import mediumPriorityImg from "../../../assets/icons_FEtask/Img_MediumPriority.svg";
import highPriorityImg from "../../../assets/icons_FEtask/Img_HighPriority.svg";
import urgentPriorityImg from "../../../assets/icons_FEtask/urgentPriorityGrey.svg";
import PriorityCard from "../Card/PriorityCard";
import { imagePriorityHandler } from "../../../utils/handlers";

export default function GroupDataByPriority({
  ticketsData,
  usersData,
  orderData,
}) {
  const [noPriority, setNoPriority] = useState([]);
  const [urgentPriority, setUrgentPriority] = useState([]);
  const [highPriority, setHighPriority] = useState([]);
  const [mediumPriority, setMediumPriority] = useState([]);
  const [lowPriority, setLowPriority] = useState([]);
  console.log("ORDER DATA:", orderData);

  const allPriorities =
    orderData === " Priority"
      ? ["No Priority", "Low", "Medium", "High", "Urgent"]
      : ["Urgent", "High", "Medium", "Low", "No Priority"];

  console.log("Alll Priori : ", allPriorities);
  useEffect(() => {
    if (ticketsData.length > 0) {
      const noPriorityTickets = ticketsData.filter(
        (ticket) => ticket.priority === 0
      );
      setNoPriority(noPriorityTickets);
      console.log("No Priority Tickets : ", noPriority);

      const urgentPriorityTickets = ticketsData.filter(
        (ticket) => ticket.priority === 4
      );
      setUrgentPriority(urgentPriorityTickets);
      console.log("No Urgent Tickets : ", urgentPriority);

      const lowPriorityTickets = ticketsData.filter(
        (ticket) => ticket.priority === 1
      );
      setLowPriority(lowPriorityTickets);

      const mediumPriorityTickets = ticketsData.filter(
        (ticket) => ticket.priority === 2
      );
      setMediumPriority(mediumPriorityTickets);

      const highPriorityTickets = ticketsData.filter(
        (ticket) => ticket.priority === 3
      );
      setHighPriority(urgentPriorityTickets);
    }
  }, [usersData, ticketsData]);

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
        {allPriorities.map((item, index) => (
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
              <img
                src={imagePriorityHandler(item)}
                style={{ marginRight: 4 }}
              />
              <h3 style={{ fontWeight: "normal", fontSize: 16 }}>{item}</h3>
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
        {allPriorities.map((item) => (
          <div key={item} style={{ flex: 1, marginRight: "36px" }}>
            {item === "No Priority" && (
              <div style={{ display: "flex", flexDirection: "column" }}>
                {noPriority?.map((dataItem) => (
                  <>
                    {console.log("No Priority Bhai ka data item : ", dataItem)}
                    <PriorityCard
                      key={dataItem.id}
                      item={dataItem}
                      usersData={usersData}
                    />
                  </>
                ))}
              </div>
            )}

            {item === "Low" && (
              <div style={{ display: "flex", flexDirection: "column" }}>
                {lowPriority?.map((dataItem) => (
                  <PriorityCard
                    key={dataItem.id}
                    item={dataItem}
                    usersData={usersData}
                  />
                ))}
              </div>
            )}

            {item === "Medium" && (
              <div style={{ display: "flex", flexDirection: "column" }}>
                {mediumPriority?.map((dataItem) => (
                  <PriorityCard
                    key={dataItem.id}
                    item={dataItem}
                    usersData={usersData}
                  />
                ))}
              </div>
            )}

            {item === "High " && (
              <div style={{ display: "flex", flexDirection: "column" }}>
                {highPriority?.map((dataItem) => (
                  <PriorityCard
                    key={dataItem.id}
                    item={dataItem}
                    usersData={usersData}
                  />
                ))}
              </div>
            )}

            {item === "Urgent" && (
              <div style={{ display: "flex", flexDirection: "column" }}>
                {urgentPriority?.map((dataItem) => (
                  <PriorityCard
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
