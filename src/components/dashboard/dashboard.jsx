import React from "react";
import { Header } from "../../helper-files/componentExports.jsx";
import { dashboardinfo } from "../../helper-files/simpleConstants.jsx";
import { Box } from "@mui/material";
import "./dashboard.styles.scss";

function Dashboard() {
  return (
    <Box margin="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title={dashboardinfo.title} subtitle={dashboardinfo.subtitle} />
      </Box>
    </Box>
  );
}

export default Dashboard;
