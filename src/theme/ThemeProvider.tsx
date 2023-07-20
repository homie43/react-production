import React, { FC } from "react";
import { LOCAL_STORAGE_THEME_KEY, ThemeContex, Theme } from "./ThemeContext";

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = React.useState<Theme>(defaultTheme);

  const defaultProps = React.useMemo(
    () => ({
      theme: theme,
      setTheme: setTheme,
    }),
    [theme]
  );
  return <ThemeContex.Provider value={defaultProps}>{children}</ThemeContex.Provider>;
};

export default ThemeProvider;
