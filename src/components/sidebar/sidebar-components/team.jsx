import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../../helper-files/themes";
import { mockDataTeam, teaminfo } from "../../../helper-files/simpleConstants";
import { Header } from "../../../helper-files/componentExports";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcons from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcons from "@mui/icons-material/SecurityOutlined";

function Team() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    { field: "phone", headerName: "Phone Number", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    {
      field: "access",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            margin="0 auto"
            padding="5px"
            display="flex"
            justifyContent="center"
            borderRadius="4px"
            backgroundColor={
              access === "admin"
                ? colors.greenAccent[600]
                : colors.greenAccent[700]
            }
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcons />}
            {access === "user" && <LockOpenOutlinedIcons />}
            <Typography color={colors.grey[100]} sx={{ marginLeft: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box margin="20px">
      <Header title={teaminfo.title} subtitle={teaminfo.subtitle} />
      <Box margin="40px 0 0 0" height="75vh">
        <DataGrid rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
}

export default Team;
