import Head from "next/head";
import { useRouter } from "next/router";
import { TeamLayout, useTeam } from "../../layouts/team";

function TeamMember() {
  const { team, status } = useTeam();
  const { query } = useRouter();
  const memberId = query.id;

  const teamMember = team.find(({ id }) => memberId === id);

  return (
    <>
      <Head>
        <title>Team Member – {teamMember?.name ?? "Loading..."}</title>
      </Head>

      {status === "loading" ? (
        <h1 className="text-4xl py-4 text-center">Loading...</h1>
      ) : teamMember === undefined ? (
        <h1 className="text-4xl py-4 text-center">Author not found</h1>
      ) : (
        <article className="flex flex-col mx-auto max-w-max px-8">
          <h1 className="text-4xl py-4 text-center">{teamMember.name}</h1>
          <div className="relative overflow-hidden rounded-full h-80 w-80 mt-2 bg-blue-100">
            <img
              key={teamMember.id}
              alt={teamMember.name}
              src={teamMember.photo}
              className="absolute inset-0 object-cover w-full h-full"
            />
          </div>
        </article>
      )}
    </>
  );
}

TeamMember.PageLayout = TeamLayout;

export default TeamMember;
