import type { NextApiRequest, NextApiResponse } from "next";

// This API comes from the free "Learn GraphQL with Apollo" tutorials
const baseURL = `https://odyssey-lift-off-rest-api.herokuapp.com`;

export type TeamMember = {
  id: string;
  name: string;
  photo: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await fetch(`${baseURL}/tracks`);
  const data = await response.json();

  // get all of hte unique authors
  const authorIds = new Set(
    data.map(({ authorId }: { authorId: string }) => {
      return authorId;
    })
  );
  const members = await Promise.all(
    Array.from(authorIds).map(async (authorId) => {
      const response = await fetch(`${baseURL}/author/${authorId}`);
      const data = await response.json();
      return data as TeamMember;
    })
  );

  res.status(200).json(members);
}
