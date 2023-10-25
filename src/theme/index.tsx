import React, { Suspense, useMemo, useState } from "react";
import PropTypes from "prop-types";
import "antd/dist/antd.css";
import palette from "./palette";
import breakpoints from "./breakpoints";
import typography from "./typography";

// import {
//   ThemeProvider as AntdThemeProvider,
//   createStyles,
//   useThemeMode,
// } from "styled-components";
import { Button, ConfigProvider, Input, Space, theme } from "antd";
// ;

export const themeConst = {
  DARK: "Dark",
};

const DarkThemeComponent = React.lazy(() => import("./dark"));

const curTheme = themeConst.DARK;

const toggleTheme = function () {
  if (curTheme) {
    localStorage.setItem("theme", themeConst.DARK);
  }
  // window.location.reload();
};

type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const themeOptions = useMemo(
    () => ({
      // palette: palette.DARK,
      breakpoints,
      typography,
      shape: { borderRadius: 8 },
    }),
    [curTheme]
  );

  return (
    <div>
      {/* <Button onClick={toggleTheme}>Mode{themeConst.DARK}</Button> */}
      <DarkThemeComponent>{children}</DarkThemeComponent>
    </div>
  );
};

export default ThemeProvider;
