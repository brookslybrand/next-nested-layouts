import clsx from "clsx";
import Head from "next/head";
import Link from "next/link";

import { APP_BAR_HEIGHT } from "../../components/nav-bar";
import Spinner from "../../components/spinner";
import { useTeam } from "../../hooks/useTeam";

// This API comes from the free "Learn GraphQL with Apollo" tutorials
const baseURL = `https://odyssey-lift-off-rest-api.herokuapp.com`;

export default function Team() {
  const { team, status } = useTeam();
  return (
    <>
      <Head>
        <title>Team</title>
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
          <h1 className="text-4xl py-4 text-center">
            Select a team member to get started
          </h1>
        </main>
      </div>
    </>
  );
}
