import Link from "next/link";
import clsx from "clsx";
import { useRouter } from "next/dist/client/router";

export default function NavBar() {
  const { pathname } = useRouter();
  return (
    <nav className="bg-green-300 px-4 py-2 flex items-center justify-between">
      <Link href="/">
        <a className={`text-4xl font-bold ${linkCss(pathname === "/")}`}>
          Home
        </a>
      </Link>

      <div className="space-x-4">
        <Link href="/about">
          <a className={`text-2xl ${linkCss(pathname === "/about")}`}>About</a>
        </Link>
        <Link href="/team">
          <a className={`text-2xl ${linkCss(pathname === "/team")}`}>Team</a>
        </Link>
      </div>
    </nav>
  );
}

function linkCss(currentPage: boolean) {
  return clsx(
    currentPage ? "text-blue-700" : "text-gray-800",
    "hover:text-blue-500"
  );
}
