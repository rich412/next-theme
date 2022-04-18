import "../styles/globals.css";
import type { AppProps } from "next/app";
import AppThemeProvider from "../components/AppThemeProvider";

import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <AppThemeProvider>
        <Component {...pageProps} />
      </AppThemeProvider>
    </ThemeProvider>
  );
}

export default MyApp;
