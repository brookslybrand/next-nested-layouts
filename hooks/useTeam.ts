import { useEffect, useState } from "react";

import type { TeamMember } from "../pages/api/team";

export function useTeam() {
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
