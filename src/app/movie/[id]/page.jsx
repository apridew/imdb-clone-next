import MovieLeft from "@/app/movie/[id]/MovieLeft";
import MovieRight from "@/app/movie/[id]/MovieRight";
import { config } from "@/helpers/apis";

export default async function MoviePage({ params }) {
  const movieId = params.id;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}`,
    config
  );

  const movie = await res.json();
  console.log(movie);

  return (
    <div className="sm:grid sm:grid-cols-none lg:grid-cols-2 xl:grid-cols-2 mx-auto max-w-6xl p-3 gap-2 mt-5">
      <MovieLeft movie={movie} />
      <MovieRight movie={movie} />
    </div>
  );
}
