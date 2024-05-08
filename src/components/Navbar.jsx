import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div className="flex dark:bg-neutral-900 bg-amber-400 p-4 justify-center gap-8 lg:text-lg">
      <NavbarItem title="Trending" param="trending" />
      <NavbarItem title="Top Rated" param="toprated" />
    </div>
  );
}
