import "@/styles/globals.css";
import type { AppProps } from "next/app";
// internal imports
import { Footer, NavBar } from "@/components";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
