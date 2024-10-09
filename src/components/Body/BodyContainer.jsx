import React, { useEffect, useState } from "react";
import Card from "./Card/Card";

export default function BodyContainer({ data }) {
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
    <div style={{}}>
      {ticketsData?.map((item, index) => {
        return <Card item={item} />;
      })}
    </div>
  );
}
