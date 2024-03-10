export default function Header() {
  // const page = usePathname();
  // const pageName =
  //   page.split("/")?.pop()?.charAt(0)?.toUpperCase() +
  //   page.split("/")?.pop()?.slice(1);

  return (
    <header className="w-full flex justify-between items-center">
      <h1 className=" mb-2">Dashboard</h1>
    </header>
  );
}
