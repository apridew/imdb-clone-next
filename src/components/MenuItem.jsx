import Link from "next/link";

export default function MenuItem({ title, href, Icon }) {
  return (
    <div>
      <Link
        href={href}
        className="tracking-wider hover:text-amber-400 transition"
      >
        <Icon className="text-2xl sm:hidden" />
        <p className="uppercase hidden sm:inline text-sm">{title}</p>
      </Link>
    </div>
  );
}
