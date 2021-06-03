import Head from "next/head";
import Link from "next/link";
import clsx from "clsx";
import { useRouter } from "next/router";
import Spinner from "../../components/spinner";
import { useFetchTeam } from "../../hooks/useFetchTeam";
import { APP_BAR_HEIGHT } from "../../components/nav-bar";
import { TeamLayout, useTeam } from "../../layouts/team";

function TeamMember() {
  const { team, status } = useTeam();
  const { query } = useRouter();
  const authorId = query.id;

  const teamMember = team.find(({ id }) => authorId === id);

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
          <h1 className="text-4xl py-4">{teamMember.name}</h1>
          <img
            alt={teamMember.name}
            src={teamMember.photo}
            className="rounded-full h-80 w-80 object-cover mt-2"
          />
        </article>
      )}
    </>
  );
}

TeamMember.PageLayout = TeamLayout;

export default TeamMember;
