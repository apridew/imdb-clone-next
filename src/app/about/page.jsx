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
        IMDb, short for Internet Movie Database, has been a consistent focal
        point for film enthusiasts, television aficionados, and celebrity
        followers since it&apos;s launch in 1990. As a subsidiary of Amazon.com
        since 1998, IMDb has solidified itself as the most popular and reliable
        source of information in the entertainment industry. With its extensive
        and detailed database, IMDb provides reviews, ratings, trailers, and
        information about the cast and crew behind the scenes, helping users
        explore the world of entertainment and make informed decisions about
        what they want to watch.
      </p>

      <p>
        IMDb is the world&apos;s most popular and authoritative source for
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
