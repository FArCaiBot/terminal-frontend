import { Box, Grid, Stack, Typography } from "@mui/material";
import { Map } from "../Map/Map";

export const Banner = ({ stats }) => {
  return (
    <Box
      component="section"
      border="GrayText"
      sx={{ height: "550px", mt: "64px" }}
    >
      <Grid
        container
        padding={{ xs: 3, sm: 8 }}
        spacing={2}
        flexDirection={{ xs: "column", sm: "row" }}
      >
        <Grid
          item
          display={"flex"}
          flexDirection={"column"}
          alignItems={{ xs: "center", sm: "flex-start" }}
          width={{ xs: "100%", sm: "530" }}
          xs={12}
          sm={6}
          md={8}
        >
          <Typography
            variant="h3"
            textAlign={{ xs: "center", sm: "justify" }}
            fontWeight={"bold"}
          >
            TERMINAL TERRESTRE
          </Typography>
          <Stack
            flexDirection={{ xs: "column", sm: "row" }}
            textAlign={{ xs: "center", sm: "justify" }}
          >
            <Typography variant="h3" fontWeFight={"bold"}>
              Ciudad de&nbsp;
            </Typography>
            <Typography
              variant="h3"
              fontWeight={"bold"}
              color={"custom.feldgrau"}
            >
              Yantzaza
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Map provinciasActivo={[19, 11, 3, 1]} />
        </Grid>
      </Grid>
      Texto de prueba
    </Box>
  );
};
