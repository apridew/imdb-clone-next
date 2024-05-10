"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBox() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${search}`);
    setSearch("");
  };

  return (
    <form
      className="flex justify-between max-w-6xl mx-auto p-3"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Type keywords here..."
        className="w-full h-14 rounded-md dark:text-neutral-50 text-neutral-600 tracking-wider placeholder-neutral-400 outline-none bg-transparent"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="text-amber-400 disabled:text-neutral-400"
        disabled={!search}
      >
        Search
      </button>
    </form>
  );
}
