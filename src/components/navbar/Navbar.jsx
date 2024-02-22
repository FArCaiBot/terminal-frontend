import { AppBar, Box, Link, Stack, Toolbar } from "@mui/material";
import { NavDrawer } from "./NavDrawer";

const navList = [
  "Inicio",
  "Horarios y atención",
  "Cooperativas",
  "Sugerencias",
];

export const Navbar = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        component="nav"
        sx={{
          boxShadow: "none",
          bgcolor: "common.white",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <NavDrawer navconfig={navList} />
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "right",
          }}
        >
          <Stack
            display={{ xs: "none", sm: "block" }}
            spacing={5}
            direction={"row"}
            mx={5}
          >
            {navList.map((e) => (
              <Link
                key={e}
                underline="none"
                color={"common.black"}
                component="button"
                fontWeight={700}
              >
                {e}
              </Link>
            ))}
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
