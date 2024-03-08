import React from "react";
import { Navbar } from "../../../components/navbar/Navbar";
import ThemeProvider from "../../../theme";
import { Banner } from "../../../components/Banner/Banner";
export const Index = () => {
  return (
    <ThemeProvider>
      <Navbar />
      <Banner />
    </ThemeProvider>
  );
};
