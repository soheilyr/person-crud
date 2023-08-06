import type { AppProps } from "next/app";
import localFont from "@next/font/local";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { ThemeProvider, createTheme } from "@mui/material";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import "../globals.css";


const vazir = localFont({
  src: "../../public/assets/fonts/Vazir.woff",
});

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "vazir",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'vazir';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('vazir'), local('vazir'), url(../../public/assets/fonts/Vazir.woff) format('woff');
        }
      `,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={vazir.className}>
      <div className="container mx-auto mt-7">
        <CacheProvider value={cacheRtl}>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </CacheProvider>
        <ToastContainer />
      </div>
    </main>
  );
}
