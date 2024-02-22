import React from "react";
import { Navbar } from "../../../components/navbar/Navbar";
import ThemeProvider from "../../../theme";
export const Index = () => {
  return (
    <ThemeProvider>
      <Navbar />
    </ThemeProvider>
  );
};
