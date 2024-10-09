import React, { useState } from "react";
import HeaderContainer from "./Header/HeaderContainer";
import BodyContainer from "./Body/BodyContainer";

function Container({ data }) {
  const [groupData, setGroupData] = useState("");
  const [orderData, setOrderData] = useState("");
  return (
    <div style={{ backgroundColor: "#edf9ff", height: "100vh" }}>
      <HeaderContainer
        groupData={groupData}
        setGroupData={setGroupData}
        orderData={orderData}
        setOrderData={setOrderData}
      />
      <BodyContainer data={data} groupData={groupData} orderData={orderData} />
    </div>
  );
}

export default Container;
