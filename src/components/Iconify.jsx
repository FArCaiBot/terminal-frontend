import { Icon } from "@iconify/react";
import { Box } from "@mui/material";
import React from "react";

export const Iconify = ({ icon, sx, ...other }) => {
  return <Box component={Icon} icon={icon} sx={{ ...sx }} {...other} />;
};
