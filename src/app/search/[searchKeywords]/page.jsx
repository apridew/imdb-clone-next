import Results from "@/components/Results";
import { config } from "@/helpers/apis";

export default async function SearchPage({ params }) {
  const searchKeywords = params.searchKeywords;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${searchKeywords}&language=en-US&page=1&include_adult=false`,
    config
  );

  const data = await res.json();
  const results = data.results;

  if (!res.ok) throw new Error("Failed to fetch data");

  console.log(results);

  return (
    <div>
      {results.length === 0 && <h1 className="text-center">No results found</h1>}
      {results && <Results results={results} />}
    </div>
  );
}
