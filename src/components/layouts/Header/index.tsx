import Link from "next/link";

const Header = () => {
    return (
        <header className="flex bg-black text-white p-4">
            <h1 className="text-2xl font-bold hover:text-[#ed297b] ml-10">CloudHub</h1>
            <nav className="ml-350 mt-1">
                <ul className="flex space-x-4">
                    <li><Link href="/" className=" hover:text-[#ed297b]">Home</Link></li>
                    <li><Link href="/about" className="hover:underline hover:text-[#ed297b]">About</Link></li>
                    <li><Link href="/contact" className="hover:underline hover:text-[#ed297b]">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;