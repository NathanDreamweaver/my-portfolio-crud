import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="sticky top-4 z-50">
            <div className="max-w-3xl mx-auto px-4">
                <nav className="rounded-2xl border-4 border-black px-4 sm:px-6 py-3 backdrop-blur-sm bg-white/80 dark:bg-zinc-900/80 shadow-[8px_8px_0_0_#000]">
                    <ul className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 sm:gap-4">
                        <li>
                            <Link
                                href="/#title"
                                className="text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 hover:bg-zinc-100/80 dark:hover:bg-zinc-800/80 px-3 py-2 rounded-lg transition-colors border-2 border-black/0 hover:border-black shadow-[4px_4px_0_0_#000]/0 hover:shadow-[4px_4px_0_0_#000]"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/#about"
                                className="text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 hover:bg-zinc-100/80 dark:hover:bg-zinc-800/80 px-3 py-2 rounded-lg transition-colors border-2 border-black/0 hover:border-black shadow-[4px_4px_0_0_#000]/0 hover:shadow-[4px_4px_0_0_#000]"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/#projects"
                                className="text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 hover:bg-zinc-100/80 dark:hover:bg-zinc-800/80 px-3 py-2 rounded-lg transition-colors border-2 border-black/0 hover:border-black shadow-[4px_4px_0_0_#000]/0 hover:shadow-[4px_4px_0_0_#000]"
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/#contact"
                                className="text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 hover:bg-zinc-100/80 dark:hover:bg-zinc-800/80 px-3 py-2 rounded-lg transition-colors border-2 border-black/0 hover:border-black shadow-[4px_4px_0_0_#000]/0 hover:shadow-[4px_4px_0_0_#000]"
                            >
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/admin"
                                className="text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 hover:bg-zinc-100/80 dark:hover:bg-zinc-800/80 px-3 py-2 rounded-lg transition-colors border-2 border-black/0 hover:border-black shadow-[4px_4px_0_0_#000]/0 hover:shadow-[4px_4px_0_0_#000]"
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
