import Image from "next/image";
import banner from "@/images/imdb-banner.png";

export default function About() {
  return (
    <div className="max-w-6xl mx-auto p-3 space-y-4 text-justify">
      <h1 className="text-2xl font-medium text-amber-400">About</h1>

      <div className="py-4 drop-shadow">
        <Image className="rounded-lg" src={banner} alt="imdb-banner" />
      </div>
      <p>
        Launched online in 1990 and a subsidiary of Amazon.com since 1998, IMDb
        is the world's most popular and authoritative source for movie, TV and
        celebrity content, designed to help fans explore the world of movies and
        shows and decide what to watch.
      </p>

      <p>
        IMDb is the world's most popular and authoritative source for
        information on movies, TV shows, and celebrities. Products and services
        to help fans discover and decide what to watch and where to watch it
        include: the IMDb website for desktop and mobile devices; apps for iOS
        and Android; and, X-Ray on Prime Video.
      </p>

      <p>
        For entertainment industry professionals, IMDb provides IMDbPro and Box
        Office Mojo. IMDb licenses information from its vast and authoritative
        database to third-party businesses worldwide; learn more at
        developer.imdb.com. IMDb is an Amazon company. For more information,
        visit https://www.imdb.com/press and follow @IMDb.
      </p>
    </div>
  );
}
