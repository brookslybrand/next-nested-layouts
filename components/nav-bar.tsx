import Link from "next/link";
import clsx from "clsx";
import { useRouter } from "next/router";

export const APP_BAR_HEIGHT = "4.5rem";

export default function NavBar() {
  const { pathname } = useRouter();
  return (
    <header className="sticky inset-0">
      <nav
        className="bg-green-300 px-4 py-2 flex items-center justify-between"
        style={{ height: APP_BAR_HEIGHT }}
      >
        <Link href="/">
          <a className={`text-4xl font-bold ${linkCss(pathname === "/")}`}>
            Home
          </a>
        </Link>

        <div className="space-x-4">
          <Link href="/about">
            <a className={`text-2xl ${linkCss(pathname === "/about")}`}>
              About
            </a>
          </Link>
          <Link href="/team">
            <a className={`text-2xl ${linkCss(pathname === "/team")}`}>Team</a>
          </Link>
        </div>
      </nav>
    </header>
  );
}

function linkCss(currentPage: boolean) {
  return clsx(
    currentPage ? "text-blue-700" : "text-gray-800",
    "hover:text-blue-500"
  );
}
