"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function NavbarItem({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <div>
      <Link
        className={`tracking-wider dark:hover:text-amber-400 hover:text-white transition font-semibold ${
          genre === param ? "border-b-2 py-2 rounded dark:border-amber-400" : ""
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}
