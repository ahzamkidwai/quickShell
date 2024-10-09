import React, { useEffect, useState } from "react";
import { getDetails } from "./api";
import Container from "./components/Container";

export default function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchDetails = async () => {
      const response = await getDetails();
      setData(response);
    };
    fetchDetails();
  }, []);

  useEffect(() => {
    console.log("DATA I AM GETTING IS : ", data);
  }, [data]);
  return <Container data={data} />;
}
