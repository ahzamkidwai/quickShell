import React, { useState } from "react";
import Display from "../../assets/icons_FEtask/Display.svg";
import down from "../../assets/icons_FEtask/down.svg";
import {
  Modal,
  Box,
  Typography,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";

const styleModal = {
  position: "absolute",
  top: "15%",
  left: "8%",
  transform: "translate(-50%, -50%)",
  width: 200,
  height: 100,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
};

export default function HeaderContainer({
  groupData,
  setGroupData,
  orderData,
  setOrderData,
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const groupDataItem = [
    { id: 1, label: "Status" },
    { id: 2, label: "User" },
    { id: 3, label: "Priority" },
  ];

  const orderDataItem = [
    { id: 1, label: "Priority" },
    { id: 2, label: "Title" },
  ];

  const handleChange = (type, event) => {
    if (type === "groupData") {
      setGroupData(event.target.value);
    }
    if (type === "orderData") {
      setOrderData(event.target.value);
    }
    handleClose();
  };

  return (
    <div style={{ margin: 10, backgroundColor: "white", paddingBottom: 20 }}>
      <div
        style={{
          borderWidth: 2,
          borderStyle: "solid",
          borderColor: "#ccc",
          width: 110,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          borderRadius: 5,
          cursor: "pointer",
        }}
        onClick={handleOpen}
      >
        <img src={Display} alt="Display Icon" />
        <div style={{ fontWeight: "bold" }}>Display</div>
        <img src={down} alt="Down Arrow" />
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={styleModal}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="body1" style={{ marginBottom: 8 }}>
              Grouping
            </Typography>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <Select
                value={groupData}
                onChange={(e) => handleChange("groupData", e)}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                sx={{ height: 30, paddingTop: 0, paddingBottom: 0 }}
              >
                {groupDataItem.map((item) => (
                  <MenuItem key={item.id} value={item.label}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="body1" style={{ marginBottom: 8 }}>
              Ordering
            </Typography>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <Select
                value={orderData}
                onChange={(e) => handleChange("orderData", e)}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                sx={{ height: 30, paddingTop: 0, paddingBottom: 0 }} // Adjust height and padding
              >
                {orderDataItem.map((item) => (
                  <MenuItem key={item.id} value={item.label}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
