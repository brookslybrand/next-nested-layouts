import Link from "next/link";
import { APP_BAR_HEIGHT } from "../../components/nav-bar";

export default function Team() {
  return (
    <div
      className="fixed overflow-hidden w-full flex"
      style={{ height: `calc(100% - ${APP_BAR_HEIGHT})` }}
    >
      <aside className="max-w-max px-4 py-6 bg-gray-300 relative h-full overflow-y-auto">
        <ul className="space-y-2">
          {users.map(({ id, name }) => (
            <li key={id}>
              <Link href={`team/${id}`}>
                <a className="text-lg font-bold tracking-wide text-gray-800">
                  {name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
      <main className="flex-grow">
        <h1 className="text-4xl py-4 text-center">
          Select a user to get started
        </h1>
      </main>
    </div>
  );
}

const users = [
  {
    id: 0,
    name: "Brooks Lybrand",
    imgUrl: "",
    bio: "",
  },
  {
    id: 0,
    name: "Brooks Lybrand",
    imgUrl: "",
    bio: "",
  },
  {
    id: 0,
    name: "Brooks Lybrand",
    imgUrl: "",
    bio: "",
  },
  {
    id: 0,
    name: "Brooks Lybrand",
    imgUrl: "",
    bio: "",
  },
  {
    id: 0,
    name: "Brooks Lybrand",
    imgUrl: "",
    bio: "",
  },
  {
    id: 0,
    name: "Brooks Lybrand",
    imgUrl: "",
    bio: "",
  },
  {
    id: 0,
    name: "Brooks Lybrand",
    imgUrl: "",
    bio: "",
  },
  {
    id: 0,
    name: "Brooks Lybrand",
    imgUrl: "",
    bio: "",
  },
  {
    id: 0,
    name: "Brooks Lybrand",
    imgUrl: "",
    bio: "",
  },
  {
    id: 0,
    name: "Brooks Lybrand",
    imgUrl: "",
    bio: "",
  },
  {
    id: 0,
    name: "Brooks Lybrand",
    imgUrl: "",
    bio: "",
  },
  {
    id: 0,
    name: "Brooks Lybrand",
    imgUrl: "",
    bio: "",
  },
  {
    id: 0,
    name: "Brooks Lybrand",
    imgUrl: "",
    bio: "",
  },
  {
    id: 0,
    name: "Brooks Lybrand",
    imgUrl: "",
    bio: "",
  },
  {
    id: 0,
    name: "Brooks Lybrand",
    imgUrl: "",
    bio: "",
  },
  {
    id: 0,
    name: "Brooks Lybrand",
    imgUrl: "",
    bio: "",
  },
  {
    id: 0,
    name: "Brooks Lybrand",
    imgUrl: "",
    bio: "",
  },
  {
    id: 0,
    name: "Brooks Lybrand",
    imgUrl: "",
    bio: "",
  },
  {
    id: 0,
    name: "Brooks Lybrand",
    imgUrl: "",
    bio: "",
  },
  {
    id: 0,
    name: "Brooks Lybrand",
    imgUrl: "",
    bio: "",
  },
  {
    id: 0,
    name: "Brooks Lybrand",
    imgUrl: "",
    bio: "",
  },
  {
    id: 0,
    name: "Brooks Lybrand",
    imgUrl: "",
    bio: "",
  },
  {
    id: 0,
    name: "Brooks Lybrand",
    imgUrl: "",
    bio: "",
  },
  {
    id: 0,
    name: "Brooks Lybrand",
    imgUrl: "",
    bio: "",
  },
  {
    id: 0,
    name: "Brooks Lybrand",
    imgUrl: "",
    bio: "",
  },
  {
    id: 0,
    name: "Brooks Lybrand",
    imgUrl: "",
    bio: "",
  },
  {
    id: 0,
    name: "Brooks Lybrand",
    imgUrl: "",
    bio: "",
  },
  {
    id: 0,
    name: "Brooks Lybrand",
    imgUrl: "",
    bio: "",
  },
  {
    id: 0,
    name: "Brooks Lybrand",
    imgUrl: "",
    bio: "",
  },
  {
    id: 0,
    name: "Brooks Lybrand",
    imgUrl: "",
    bio: "",
  },
  {
    id: 0,
    name: "Brooks Lybrand",
    imgUrl: "",
    bio: "",
  },
  {
    id: 0,
    name: "Brooks Lybrand",
    imgUrl: "",
    bio: "",
  },
  {
    id: 0,
    name: "Brooks Lybrand",
    imgUrl: "",
    bio: "",
  },
  {
    id: 0,
    name: "Brooks Lybrand",
    imgUrl: "",
    bio: "",
  },
  {
    id: 0,
    name: "Brooks Lybrand",
    imgUrl: "",
    bio: "",
  },
  {
    id: 0,
    name: "Brooks Lybrand",
    imgUrl: "",
    bio: "",
  },
  {
    id: 0,
    name: "Brooks Lybrand",
    imgUrl: "",
    bio: "",
  },
  {
    id: 0,
    name: "Brooks Lybrand",
    imgUrl: "",
    bio: "",
  },
  {
    id: 0,
    name: "Brooks Lybrand",
    imgUrl: "",
    bio: "",
  },
  {
    id: 0,
    name: "Brooks Lybrand",
    imgUrl: "",
    bio: "",
  },
  {
    id: 0,
    name: "Brooks Lybrand",
    imgUrl: "",
    bio: "",
  },
  {
    id: 0,
    name: "Brooks Lybrand",
    imgUrl: "",
    bio: "",
  },
  {
    id: 0,
    name: "Brooks Lybrand",
    imgUrl: "",
    bio: "",
  },
  {
    id: 0,
    name: "Brooks Lybrand",
    imgUrl: "",
    bio: "",
  },
  {
    id: 0,
    name: "Brooks Lybrand",
    imgUrl: "",
    bio: "",
  },
  {
    id: 0,
    name: "Brooks Lybrand",
    imgUrl: "",
    bio: "",
  },
  {
    id: 0,
    name: "Brooks Lybrand",
    imgUrl: "",
    bio: "",
  },
  {
    id: 0,
    name: "Brooks Lybrand",
    imgUrl: "",
    bio: "",
  },
  {
    id: 0,
    name: "Brooks Lybrand",
    imgUrl: "",
    bio: "",
  },
  {
    id: 0,
    name: "Brooks Lybrand",
    imgUrl: "",
    bio: "",
  },
  {
    id: 0,
    name: "Brooks Lybrand",
    imgUrl: "",
    bio: "",
  },
  {
    id: 0,
    name: "Brooks Lybrand",
    imgUrl: "",
    bio: "",
  },
  {
    id: 0,
    name: "Brooks Lybrand",
    imgUrl: "",
    bio: "",
  },
  {
    id: 0,
    name: "Brooks Lybrand",
    imgUrl: "",
    bio: "",
  },
];
