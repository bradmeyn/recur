import Link from "next/link";

export default function PrimaryLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="rounded-xl  bg-tremor-brand text-white text-sm  py-3 font-semibold px-5 hover:bg-tremor-brand-emphasis"
    >
      <span>{label}</span>
    </Link>
  );
}
