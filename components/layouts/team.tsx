import clsx from "clsx";
import Link from "next/link";
import { useEffect, useState, createContext, useContext } from "react";

import { APP_BAR_HEIGHT } from "../../components/nav-bar";
import Spinner from "../../components/spinner";
import type { TeamMember } from "../../pages/api/team";

const TeamContext = createContext<ReturnType<typeof useFetchTeam> | null>(null);

export function TeamLayout({ children }: { children: React.ReactNode }) {
  const { team, status } = useFetchTeam();
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
                    <a className="text-lg font-bold tracking-wide text-gray-800">
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

export function useTeam() {
  const teamData = useContext(TeamContext);
  if (teamData === null) {
    throw new Error("useTeam must be called in a child of TeamLayout");
  }
  return teamData;
}

function useFetchTeam() {
  const [{ status, team }, setState] = useState<{
    status: "loading" | "success" | "error";
    team: TeamMember[];
  }>({ status: "loading", team: [] });
  useEffect(() => {
    let cancel = false;
    fetch("/api/team")
      .then((response) => response.json())
      .then((team: TeamMember[]) => {
        if (cancel) return;
        setState({ status: "success", team });
      })
      .catch((e) => {
        if (cancel) return;
        setState({ status: "error", team: [] });
        console.error(`Something went wrong!`);
      });

    return () => {
      cancel = true;
    };
  }, []);
  return { status, team };
}
