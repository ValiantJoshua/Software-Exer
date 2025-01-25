import Link from "next/link";
export default function Header() {
  return (
    <header className="flex items-center justify-between border-2 px-2 mt-3 mb-2 rounded-xl bg-slate-100">
      
      <Link className="text-primary font-extrabold text-xl " href={"/"}>
        TAHU BULAT
      </Link>
      <nav className=" items-center flex gap-8 text-gray-500 font-semibold py-2">
        <Link className="hover:text-gray-800 hover:underline"href={"/"}>Home</Link>
        <a className="hover:text-gray-800 hover:underline"href="#Menu">Menu</a>
        <a className="hover:text-gray-800 hover:underline"href="#About">About</a>
        <a className="hover:text-gray-800 hover:underline"href="#Review">Review</a>
        <Link
          href={"/login"}
          className="bg-primary text-white px-6 py-2 rounded-full hover:bg-yellow-500" 
        >
          Login
        </Link>
      </nav>
    
    </header>
  );
}
