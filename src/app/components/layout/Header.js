import Link from "next/link";
export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link className="text-primary font-extrabold 4xl font-" href="">
        TAHU BULAT
      </Link>
      <nav className=" items-center flex gap-8 text-gray-500 font-semibold py-2">
        <Link href={""}>Home</Link>
        <Link href={""}>Menu</Link>
        <Link href={""}>About</Link>
        <Link href={""}>Review</Link>
        <Link
          href={""}
          className="bg-primary text-white px-6 py-2 rounded-full"
        >
          Login
        </Link>
      </nav>
    </header>
  );
}
