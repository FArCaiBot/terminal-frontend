import { useMemo } from "react";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
  CssBaseline,
} from "@mui/material";
import palette from "./palette";
import { StyledEngineProvider } from "@mui/styled-engine";

export default function ThemeProvider({ children }) {
  const themeOptions = useMemo(() => ({ palette }), []);
  const theme = createTheme(themeOptions);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
