import React, { useState } from "react";
import HeaderContainer from "./Header/HeaderContainer";
import BodyContainer from "./Body/BodyContainer";

function Container({ data }) {
  const [groupData, setGroupData] = useState("");
  const [orderData, setOrderData] = useState("");
  return (
    <>
      <HeaderContainer
        groupData={groupData}
        setGroupData={setGroupData}
        orderData={orderData}
        setOrderData={setOrderData}
      />
      <BodyContainer data={data} />
    </>
  );
}

export default Container;
