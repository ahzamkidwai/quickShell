import React, { useEffect, useState } from "react";
import Card from "./Card/Card";
import GroupDataByStatus from "./GroupData/GroupDataByStatus";
import GroupDataByUsers from "./GroupData/GroupDataByUsers";
import GroupDataByPriority from "./GroupData/GroupDataByPriority";

export default function BodyContainer({ data, groupData, orderData }) {
  const [ticketsData, setTicketsData] = useState([]);
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    if (data?.tickets?.length > 0) {
      setTicketsData(data.tickets);
      console.log("Tickets Data : ", ticketsData);
    }
    if (data?.users?.length > 0) {
      setUsersData(data.users);
      console.log("Users Data : ", usersData);
    }
  }, [data]);

  return (
    <div style={{ backgroundColor: "#edf9ff" }}>
      {groupData === "Status" && (
        <GroupDataByStatus ticketsData={ticketsData} usersData={usersData} />
      )}
      {groupData === "Priority" && (
        <GroupDataByPriority ticketsData={ticketsData} usersData={usersData} />
      )}
      {groupData === "User" && (
        <GroupDataByUsers ticketsData={ticketsData} usersData={usersData} />
      )}
    </div>
  );
}
