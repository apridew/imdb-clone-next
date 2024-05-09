import { MdOutlineThumbUp } from "react-icons/md";

export default function MovieRight({movie}) {
  return (
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
  )
}
