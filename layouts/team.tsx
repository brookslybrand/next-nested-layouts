import Link from "next/link";
import clsx from "clsx";

import { createContext, useContext } from "react";
import { useFetchTeam } from "../hooks/useFetchTeam";
import { APP_BAR_HEIGHT } from "../components/nav-bar";
import Spinner from "../components/spinner";
import { useRouter } from "next/router";

const TeamContext = createContext<ReturnType<typeof useFetchTeam> | null>(null);

export function useTeam() {
  const team = useContext(TeamContext);
  if (team === null) {
    throw new Error("useTeam must be called in a child of TeamLayout");
  }
  return team;
}

export function TeamLayout({ children }: { children: React.ReactNode }) {
  const { team, status } = useFetchTeam();
  const { query } = useRouter();
  const memberId = query.id;

  return (
    <TeamContext.Provider value={{ team, status }}>
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
                    <a
                      className={clsx(
                        "text-lg font-bold tracking-wide text-gray-800 hover:text-blue-800",
                        id === memberId ? "text-blue-600" : null
                      )}
                    >
                      {name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </aside>
        <main className="flex-grow">{children}</main>
      </div>
    </TeamContext.Provider>
  );
}
