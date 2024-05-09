"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function NavbarItem({ title, param }) {
  const searchParams = useSearchParams();
  const movies = searchParams.get("movies");
  const activeParam = movies ? movies : "trending";

  return (
    <div>
      <Link
        className={`tracking-wider text-black dark:text-white border-white dark:hover:text-amber-400 hover:text-white transition font-semibold ${
          activeParam === param
            ? "border-b-4 py-2 rounded text-white dark:text-amber-400 dark:border-amber-400"
            : ""
        }`}
        href={`/?movies=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}
