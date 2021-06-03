import Head from "next/head";

function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main className="m-4 p-4 border-[16px] border-green-300">
        <h1 className="text-5xl">This is the home page</h1>
        <p className="mt-4 text-lg">Feel free to go somewhere else</p>
      </main>
    </>
  );
}

export default Home;
