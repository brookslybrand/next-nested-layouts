import NavBar from "../components/nav-bar";

import type { AppProps } from "next/app";

import "../styles/tailwind.css";

type ComponentWithPageLayout = AppProps & {
  Component: AppProps["Component"] & {
    PageLayout?: React.ComponentType;
  };
};

function MyApp({ Component, pageProps }: ComponentWithPageLayout) {
  return (
    <div className="absolute inset-0 overflow-y-auto overflow-x-hidden bg-gray-100">
      <NavBar />
      {Component.PageLayout ? (
        <Component.PageLayout>
          <Component {...pageProps} />
        </Component.PageLayout>
      ) : (
        <Component {...pageProps} />
      )}
    </div>
  );
}
export default MyApp;
