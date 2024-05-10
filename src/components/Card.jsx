import Image from "next/image";
import Link from "next/link";
import { IoMdStar } from "react-icons/io";

export default function Card({ result }) {
  const imageMovie = `https://image.tmdb.org/t/p/original/${
    result.backdrop_path || result.poster_path
  }`;

  return (
    <div className="group mt-5 max-h-80 overflow-hidden">
      <Link className="space-y-3" href={`/movie/${result.id}`}>
        <Image
          className="group-hover:scale-105 rounded-lg transition duration-200 ease-in-out max-h-36 object-cover"
          src={
            imageMovie === "https://image.tmdb.org/t/p/original/null"
              ? "/no-image.png"
              : imageMovie
          }
          alt={result.title}
          width={500}
          height={300}
        />
        <div className="group space-y-3 text-justify">
          <h2 className="truncate tracking-widest text-lg font-bold group-hover:text-amber-400 transition">
            {result.title || result.original_name}
          </h2>
          <p className="line-clamp-3 text-md">{result.overview}</p>
          <div className="flex items-center justify-between border-t-2 border-amber-300 group-hover:border-amber-400 pt-1">
            <p className="tracking-wider">
              {result.release_date || result.first_air_date}
            </p>
            <div className="flex items-center gap-2">
              <IoMdStar className="text-amber-400" />
              {result.vote_average.toFixed(1)}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
