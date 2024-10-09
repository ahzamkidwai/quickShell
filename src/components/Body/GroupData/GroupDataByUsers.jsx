import React, { useEffect, useState } from "react";
import add from "../../../assets/icons_FEtask/add.svg";
import dot_menu from "../../../assets/icons_FEtask/3_dot_menu.svg";
import UserCard from "../Card/UserCard";

export default function GroupDataByUsers({ ticketsData, usersData }) {
  const [anoopData, setAnoopData] = useState([]);
  const [yogeshData, setYogeshData] = useState([]);
  const [shankarData, setShankarData] = useState([]);
  const [rameshData, setRameshData] = useState([]);
  const [sureshData, setSureshData] = useState([]);

  const allUsers = ["Anoop", "Yogesh", "Shankar", "Ramesh", "Suresh"];

  const getLength = (item) => {
    switch (item) {
      case "Anoop":
        return anoopData.length;
      case "Yogesh":
        return yogeshData.length;
      case "Shankar":
        return shankarData.length;
      case "Ramesh":
        return rameshData.length;
      case "Suresh":
        return sureshData.length;
      default:
        return 0;
    }
  };

  const getInitials = (name) => {
    const words = name.split(" ");
    const initials = words.map((word) => word.charAt(0).toUpperCase()).join("");
    return initials;
  };
  useEffect(() => {
    if (usersData.length) {
      // Anoop
      const anoopDetails = usersData.filter((item) =>
        item.name.includes("Anoop")
      );
      if (anoopDetails.length > 0) {
        let tempData = ticketsData.find(
          (item) => item.userId === anoopDetails[0].id
        );
        if (tempData) {
          tempData = { ...tempData, name: anoopDetails[0].name };
        }
        setAnoopData([tempData]);
        console.log("TEMP DATA (Anoop): ", anoopData);
      }

      // Yogesh
      const yogeshDetails = usersData.filter((item) =>
        item.name.includes("Yogesh")
      );
      if (yogeshDetails.length > 0) {
        let tempData = ticketsData.find(
          (item) => item.userId === yogeshDetails[0].id
        );
        if (tempData) {
          tempData = { ...tempData, name: yogeshDetails[0].name };
        }
        setYogeshData([tempData]);
        console.log("TEMP DATA (Yogesh): ", yogeshData);
      }

      // Shankar
      const shankarDetails = usersData.filter((item) =>
        item.name.includes("Shankar")
      );
      if (shankarDetails.length > 0) {
        let tempData = ticketsData.find(
          (item) => item.userId === shankarDetails[0].id
        );
        if (tempData) {
          tempData = { ...tempData, name: shankarDetails[0].name };
        }
        setShankarData([tempData]);
        console.log("TEMP DATA (Shankar): ", shankarData);
      }

      // Ramesh
      const rameshDetails = usersData.filter((item) =>
        item.name.includes("Ramesh")
      );
      if (rameshDetails.length > 0) {
        let tempData = ticketsData.find(
          (item) => item.userId === rameshDetails[0].id
        );
        if (tempData) {
          tempData = { ...tempData, name: rameshDetails[0].name };
        }
        console.log("TEMP DATA (Ramesh): ", tempData);
        setRameshData([tempData]);
      }

      // Suresh
      const sureshDetails = usersData.filter((item) =>
        item.name.includes("Suresh")
      );
      if (sureshDetails.length > 0) {
        let tempData = ticketsData.find(
          (item) => item.userId === sureshDetails[0].id
        );
        if (tempData) {
          tempData = { ...tempData, name: sureshDetails[0].name };
        }
        console.log("TEMP DATA (Suresh): ", tempData);
        setSureshData([tempData]);
      }
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
        {allUsers.map((item, index) => (
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
              <span
                style={{
                  backgroundColor: "orange",
                  borderRadius: 15,
                  width: 22,
                  textAlign: "center",
                  marginLeft: "10px",
                }}
              >
                {getInitials(item)}
              </span>
              <h3 style={{ fontWeight: "normal", fontSize: 16 }}>{item}</h3>
              <h4 style={{ marginLeft: "8px", color: "gray" }}>
                {getLength(item)}
              </h4>
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
        {allUsers.map((item) => (
          <div key={item} style={{ flex: 1, marginRight: "36px" }}>
            {item === "Anoop" && (
              <div style={{ display: "flex", flexDirection: "column" }}>
                {anoopData?.map((dataItem) => (
                  <>
                    {console.log("Anoop Bhai ka data item : ", dataItem)}
                    <UserCard
                      key={dataItem.id}
                      item={dataItem}
                      usersData={usersData}
                    />
                  </>
                ))}
              </div>
            )}

            {item === "Yogesh" && (
              <div style={{ display: "flex", flexDirection: "column" }}>
                {yogeshData?.map((dataItem) => (
                  <UserCard
                    key={dataItem.id}
                    item={dataItem}
                    usersData={usersData}
                  />
                ))}
              </div>
            )}

            {item === "Shankar" && (
              <div style={{ display: "flex", flexDirection: "column" }}>
                {shankarData?.map((dataItem) => (
                  <UserCard
                    key={dataItem.id}
                    item={dataItem}
                    usersData={usersData}
                  />
                ))}
              </div>
            )}

            {item === "Ramesh" && (
              <div style={{ display: "flex", flexDirection: "column" }}>
                {rameshData?.map((dataItem) => (
                  <UserCard
                    key={dataItem.id}
                    item={dataItem}
                    usersData={usersData}
                  />
                ))}
              </div>
            )}

            {item === "Suresh" && (
              <div style={{ display: "flex", flexDirection: "column" }}>
                {sureshData?.map((dataItem) => (
                  <UserCard
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
