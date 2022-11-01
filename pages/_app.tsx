import "../styles/globals.css";
import type { AppProps } from "next/app";
import CookieModal from "../components/CookieModal";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CookieModal privacyPage="/privacy-policy" /> <Component {...pageProps} />
    </>
  );
}

export default MyApp;
