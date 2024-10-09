import React from "react";
import Card from "../Card/Card";

export default function GroupDataByStatus({ ticketsData, usersData }) {
  return (
    <div>
      GroupDataByStatus
      {ticketsData?.map((item, index) => {
        return <Card item={item} />;
      })}
    </div>
  );
}
