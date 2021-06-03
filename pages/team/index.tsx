import Head from "next/head";
import { TeamLayout } from "../../components/layouts/team";

function Team() {
  return (
    <>
      <Head>
        <title>Team</title>
      </Head>

      <h1 className="text-4xl py-4 text-center">
        Select a team member to get started
      </h1>
    </>
  );
}

Team.PageLayout = TeamLayout;

export default Team;
