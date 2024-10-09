import React, { useEffect } from "react";
import { getDetails } from "./api";
import Container from "./components/Container";

export default function App() {
  useEffect(() => {
    getDetails();
  }, []);
  return <Container />;
}
