import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const movies = searchParams.movies || "trending";

  // await new Promise((resolve) => setTimeout(resolve, 2000));

  const res = await fetch(
    `https://api.themoviedb.org/3${
      movies === "top-rated" ? "/movie/top_rated" : "/trending/movie/day"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );
  const data = await res.json();
  const result = data.results;

  if (!res.ok) throw new Error("Failed to fetch data");

  console.log(result);

  return (
    <div>
      <Results results={result} />
    </div>
  );
}
