import React from "react";
import HeaderContainer from "./Header/HeaderContainer";
import BodyContainer from "./Body/BodyContainer";

function Container({ data }) {
  return (
    <>
      <HeaderContainer />
      <BodyContainer data={data} />
    </>
  );
}

export default Container;
