import React from "react";
import "./header.styles.scss";
import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../../helper-files/themes";

function Header({ title, subtitle }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box marginBottom="30px">
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ marginBottom: "5px" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
}

export default Header;
