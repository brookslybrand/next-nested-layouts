import Head from "next/head";

import { useFetchTeam } from "../../hooks/useFetchTeam";
import { TeamLayout } from "../../layouts/team";

function Team() {
  const { team, status } = useFetchTeam();

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
