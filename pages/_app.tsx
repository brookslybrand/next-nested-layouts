import type { AppProps } from "next/app";
import NavBar from "../components/nav-bar";

import "../styles/tailwind.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="absolute inset-0 overflow-y-auto overflow-x-hidden bg-gray-100">
      <header>
        <NavBar />
      </header>
      <Component {...pageProps} />
    </div>
  );
}
export default MyApp;
