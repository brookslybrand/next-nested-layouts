import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";

import { APP_BAR_HEIGHT } from "../../components/nav-bar";
import Spinner from "../../components/spinner";
import { useTeam } from "../../hooks/useTeam";

export default function TeamMember() {
  const { team, status } = useTeam();
  const { query } = useRouter();
  const authorId = query.id;

  const teamMember = team.find(({ id }) => authorId === id);

  return (
    <>
      <Head>
        <title>Team Member – {teamMember?.name ?? "Loading..."}</title>
      </Head>
      <div
        className="fixed overflow-hidden w-full flex"
        style={{ height: `calc(100% - ${APP_BAR_HEIGHT})` }}
      >
        <aside
          className={clsx(
            "px-4 py-6 bg-gray-300 relative h-full overflow-y-auto",
            status === "loading" ? "w-48" : "max-w-max"
          )}
        >
          {status === "loading" ? (
            <Spinner className="w-10 h-10 m-auto absolute inset-0" />
          ) : (
            <ul className="space-y-2">
              {team.map(({ id, name }) => (
                <li key={id}>
                  <Link href={`/team/${id}`}>
                    <a className="text-lg font-bold tracking-wide text-gray-800">
                      {name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </aside>
        <main className="flex-grow">
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
        </main>
      </div>
    </>
  );
}
