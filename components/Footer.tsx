export default function Footer() {
    return (
        <footer className="mt-16 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <p className="text-center text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="font-medium">Filippo Novarini</span>
                    {" "}
                    —
                    {" "}
                    <a
                        href="mailto:f.novarini@student.fontys.nl"
                        className="underline-offset-4 hover:underline"
                    >
                        f.novarini@student.fontys.nl
                    </a>
                </p>
            </div>
        </footer>
    );
}
