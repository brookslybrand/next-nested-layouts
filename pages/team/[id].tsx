import Link from "next/link";
import { useRouter } from "next/router";

import { APP_BAR_HEIGHT } from "../../components/nav-bar";

import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";

// This API comes from the free "Learn GraphQL with Apollo" tutorials
const baseURL = `https://odyssey-lift-off-rest-api.herokuapp.com`;

type Author = {
  id: string;
  name: string;
  photo: string;
};

export default function TeamMember({
  authors,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { query } = useRouter();
  const authorId = query.id;
  if (typeof authorId !== "string") {
    throw new Error(`authorId must be a string, received ${authorId}`);
  }

  const author = authors.find(({ id }) => authorId === id);

  console.log(author);

  return (
    <div
      className="fixed overflow-hidden w-full flex"
      style={{ height: `calc(100% - ${APP_BAR_HEIGHT})` }}
    >
      <aside className="max-w-max px-4 py-6 bg-gray-300 relative h-full overflow-y-auto">
        <ul className="space-y-2">
          {authors.map(({ id, name }) => (
            <li key={id}>
              <Link href={`/team/${id}`}>
                <a className="text-lg font-bold tracking-wide text-gray-800">
                  {name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
      <main className="flex-grow">
        {author === undefined ? (
          <h1 className="text-4xl py-4 text-center">Author not found</h1>
        ) : (
          <div className="flex flex-col mx-auto max-w-max px-8">
            <h1 className="text-4xl py-4">{author.name}</h1>
            <img
              alt={author.name}
              src={author.photo}
              className="rounded-full h-80 w-80 object-cover mt-2"
            />
          </div>
        )}
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch(`${baseURL}/tracks`);
  const data = await response.json();

  // get all of hte unique authors
  const authorIds = new Set(
    data.map(({ authorId }: { authorId: string }) => {
      return authorId;
    })
  );
  const authors = await Promise.all(
    Array.from(authorIds).map(async (authorId) => {
      const response = await fetch(`${baseURL}/author/${authorId}`);
      const data = await response.json();
      return data as Author;
    })
  );

  return {
    props: {
      authors,
    },
  };
}
