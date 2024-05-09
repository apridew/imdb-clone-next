"use client";

import { useEffect } from "react";

export default function error({ error, reset }) {
  useEffect(() => {
    console.log(error), [error];
  });
  return (
    <div className="text-center mt-10">
      <h1 className="mb-4">Something went wrong, Please try again later.</h1>
      <button
        className="hover:text-amber-400 hover:border-amber-400 border p-2 rounded-lg transition"
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  );
}
