import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <main className="m-4 p-4 border-[16px] border-green-300">
        <h1 className="text-5xl">This is the about page</h1>
        <p className="mt-4 text-lg">There's really not much here</p>
      </main>
    </>
  );
}
