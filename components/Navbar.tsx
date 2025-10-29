import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-4 inset-x-0 z-50">
            <div className="max-w-3xl mx-auto px-4">
                <nav className="bg-white/40 rounded-xl shadow-md border-4 border-white/60 px-4 sm:px-6 py-3 backdrop-blur-sm">
                    <ul className="flex items-center justify-center gap-4">
                        <li>
                            <Link
                                href="/#title"
                                className="text-sm font-medium text-gray-800 hover:text-fuchsia-500 hover:bg-gray-400/10 p-2 rounded-xl border-2 border-fuchsia-500/0 hover:border-fuchsia-500/80"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/#about"
                                className="text-sm text-gray-800 hover:text-fuchsia-500 hover:bg-gray-400/10 p-2 rounded-xl border-2 border-fuchsia-500/0 hover:border-fuchsia-500/80"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/#projects"
                                className="text-sm text-gray-800 hover:text-fuchsia-500 hover:bg-gray-400/10 p-2 rounded-xl border-2 border-fuchsia-500/0 hover:border-fuchsia-500/80"
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/#contact"
                                className="text-sm text-gray-800 hover:text-fuchsia-500 hover:bg-gray-400/10 p-2 rounded-xl border-2 border-fuchsia-500/0 hover:border-fuchsia-500/80"
                            >
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/admin"
                                className="text-sm text-gray-800 hover:text-fuchsia-500 hover:bg-gray-400/10 p-2 rounded-xl border-2 border-fuchsia-500/0 hover:border-fuchsia-500/80"
                            >
                                Admin
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </nav>
    );
}
