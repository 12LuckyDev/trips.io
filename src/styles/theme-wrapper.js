import React from "react";
import { ThemeProvider } from "styled-components";
import { THEMES } from "@styles";

const ThemeWrapper = ({ children, themeName }) => (
  <ThemeProvider theme={THEMES[themeName]}>{children}</ThemeProvider>
);

export default ThemeWrapper;
