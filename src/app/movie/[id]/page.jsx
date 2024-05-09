import { config } from "@/helpers/config";
import { MdOutlineThumbUp } from "react-icons/md";
import { IoMdStar } from "react-icons/io";
import { MdOutlineTimer } from "react-icons/md";
import Image from "next/image";

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
      {/* Left */}
      <div className="mx-auto lg:mx-0">
        <Image
          className="rounded-t-lg"
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          alt={movie.title}
          width={500}
          height={300}
        />
        <div className=" flex justify-between p-2 md:w-[500px] text-amber-400 opacity-75 bg-neutral-600 rounded-b-lg">
          <div className="flex items-center tracking-widest gap-2">
            <IoMdStar />
            {movie.vote_average.toFixed(1)}
          </div>
          <div className="flex items-center tracking-wide gap-1">
            <MdOutlineTimer />
            <p>{movie.runtime} min</p>
          </div>
        </div>
      </div>
      {/* Right */}
      <div className="text-justify flex flex-col justify-between gap-4 mt-5 sm:mt-0">
        <h2 className="truncate tracking-widest text-xl font-bold rounded-lg dark:text-amber-400 border-b-2 dark:border-amber-400 border-black pb-3">
          {movie.title || movie.name}
        </h2>
        <p className="leading-relaxed">{movie.overview}</p>
        <div className="flex items-center justify-between rounded-lg border-t-2 dark:border-amber-400 border-black dark:text-amber-400 font-bold">
          <div className="flex items-center gap-2 pt-3">
            <h4>Date Realeased : </h4>
            <p>{movie.release_date || movie.first_air_date}</p>
          </div>
          <div className="flex items-center gap-2">
            <MdOutlineThumbUp />
            {movie.vote_count}
          </div>
        </div>
      </div>
    </div>
  );
}
