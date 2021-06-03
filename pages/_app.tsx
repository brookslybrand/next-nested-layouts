import NavBar from "../components/nav-bar";

import type { AppProps } from "next/app";

import "../styles/tailwind.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="absolute inset-0 overflow-y-auto overflow-x-hidden bg-gray-100">
      <NavBar />
      <Component {...pageProps} />
    </div>
  );
}
export default MyApp;
