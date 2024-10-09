import React from "react";
import Display from "../../assets/icons_FEtask/Display.svg";
import down from "../../assets/icons_FEtask/down.svg";
import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";

export default function HeaderContainer() {
  return (
    <div
      style={{
        borderWidth: 0,
        borderStyle: "solid",
        borderColor: "#ccc",
      }}
    >
      <CDropdown>
        <CDropdownToggle color="secondary" style={{ marginLeft: 10 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              borderWidth: 2,
              borderStyle: "solid",
              borderColor: "#ccc",
              borderRadius: 5,
              justifyContent: "space-between",
              width: "8%",
              padding: "5px",
            }}
          >
            <img src={Display} alt="Display Menu" style={{ marginRight: 8 }} />
            <p style={{ color: "black", fontWeight: "bold", margin: 0 }}>
              Display
            </p>
            <img src={down} alt="Down" style={{ marginLeft: 8 }} />{" "}
          </div>
        </CDropdownToggle>
        <CDropdownMenu>
          <CDropdownItem href="#">Action</CDropdownItem>
          <CDropdownItem href="#">Another action</CDropdownItem>
          <CDropdownItem href="#">Something else here</CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    </div>
  );
}
