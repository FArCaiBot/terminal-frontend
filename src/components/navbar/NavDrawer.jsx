import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Iconify } from "../Iconify";
import { useState } from "react";

export const NavDrawer = ({ navconfig = [] }) => {
  const [open, setOpen] = useState(false);

  const onHandleOpen = () => {
    setOpen(true);
  };

  const onHandleClose = () => {
    setOpen(false);
  };

  return (
    <Box pl={2} display={{ xs: "block", sm: "none" }}>
      <IconButton onClick={onHandleOpen}>
        <Iconify icon={"material-symbols:menu"} color={"custom.gunmental"} />
      </IconButton>
      <Drawer anchor="left" open={open} onClose={onHandleClose}>
        <Box
          sx={{ width: "100%", pt: 8 }}
          bgcolor={"custom.feldgrau"}
          height={"100%"}
        >
          <List>
            {navconfig.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton color="inherit">
                  <ListItemText
                    primary={item}
                    primaryTypographyProps={{
                      fontSize: 14,
                      color: "common.white",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};
