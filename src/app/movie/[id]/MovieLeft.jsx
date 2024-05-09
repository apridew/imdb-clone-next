import { IoMdStar } from "react-icons/io";
import { MdOutlineTimer } from "react-icons/md";
import Image from "next/image";

export default function MovieLeft({movie}) {
  return (
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
  )
}
