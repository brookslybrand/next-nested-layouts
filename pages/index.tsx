import Head from "next/head";
import { IndexLayout } from "../layout";

function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <h1 className="text-5xl">This is the home page</h1>
      <p className="mt-4 text-lg">Feel free to go somewhere else</p>
    </>
  );
}

Home.PageLayout = IndexLayout;

export default Home;
