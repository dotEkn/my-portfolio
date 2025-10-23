import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white py-4 flex justify-center gap-6">
      <Link href="/" className="hover:text-blue-400">Home</Link>
      <Link href="/projects" className="hover:text-blue-400">Projects</Link>
    </nav>
  );
}
