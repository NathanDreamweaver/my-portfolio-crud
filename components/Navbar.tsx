import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="sticky top-4 z-50">
            <div className="max-w-3xl mx-auto px-4">
                <nav className="rounded-xl shadow-md border border-zinc-200 dark:border-zinc-800 px-4 sm:px-6 py-3 backdrop-blur-sm bg-white/70 dark:bg-zinc-900/70">
                    <ul className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 sm:gap-4">
                        <li>
                            <Link
                                href="/#title"
                                className="text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 hover:bg-zinc-100/60 dark:hover:bg-zinc-800/60 px-3 py-2 rounded-lg transition-colors"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/#about"
                                className="text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 hover:bg-zinc-100/60 dark:hover:bg-zinc-800/60 px-3 py-2 rounded-lg transition-colors"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/#projects"
                                className="text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 hover:bg-zinc-100/60 dark:hover:bg-zinc-800/60 px-3 py-2 rounded-lg transition-colors"
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/#contact"
                                className="text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 hover:bg-zinc-100/60 dark:hover:bg-zinc-800/60 px-3 py-2 rounded-lg transition-colors"
                            >
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/admin"
                                className="text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 hover:bg-zinc-100/60 dark:hover:bg-zinc-800/60 px-3 py-2 rounded-lg transition-colors"
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
