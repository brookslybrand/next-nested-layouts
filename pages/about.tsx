import Head from "next/head";
import { IndexLayout } from "../components/layouts";

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <h1 className="text-5xl">This is the about page</h1>
      <p className="mt-4 text-lg">There's really not much here</p>
    </>
  );
}

About.PageLayout = IndexLayout;
