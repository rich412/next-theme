import {
  createTheme,
  GlobalStyles,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { css } from "@mui/material/styles";
interface ProviderI {
  children?: React.ReactNode;
}

type ThemeT = "dark" | "light";

const AppThemeProvider: React.FC<ProviderI> = ({ children }) => {
  const globalStyles = css`
    :root {
      body {
        background-color: #fff;
        color: #121212;
      }
    }
    [data-theme="dark"] {
      body {
        background-color: #121212;
        color: #fff;
      }
    }
  `;
  const { resolvedTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<ThemeT>("dark");

  useEffect(() => {
    setCurrentTheme(resolvedTheme);
  }, [resolvedTheme]);

  const theme = createTheme({
    breakpoints: {
      step: 3,
      keys: ["sm", "md", "lg"],
      values: {
        xs: 0,
        sm: 0,
        md: 600,
        lg: 1200,
        xl: 1536,
      },
    },
    palette: {
      mode: currentTheme,
      primary: {
        main: currentTheme === "light" ? "#ff3478" : "#0152cc",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles styles={globalStyles} />
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default AppThemeProvider;
