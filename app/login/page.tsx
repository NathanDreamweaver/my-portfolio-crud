import { login } from "@/app/actions/auth";
import Link from "next/link";

export default async function LoginPage({
    searchParams,
}: {
    searchParams: Promise<{ error?: string; message?: string }>;
}) {
    const params = await searchParams;

    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex items-center justify-center px-4">
            <div className="max-w-md w-full space-y-8">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
                        Admin Login
                    </h1>
                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                        Sign in to manage your portfolio
                    </p>
                </div>

                <div className="bg-white dark:bg-zinc-900 shadow-lg rounded-lg p-8 border border-zinc-200 dark:border-zinc-800">
                    {params.error && (
                        <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded">
                            <p className="text-sm text-red-800 dark:text-red-200">
                                {params.error === "invalid_credentials"
                                    ? "Invalid email or password. Please try again."
                                    : "An error occurred. Please try again."}
                            </p>
                        </div>
                    )}

                    {params.message && (
                        <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded">
                            <p className="text-sm text-blue-800 dark:text-blue-200">
                                {params.message === "check_email"
                                    ? "Check your email for a confirmation link."
                                    : params.message}
                            </p>
                        </div>
                    )}

                    <form action={login} className="space-y-6">
                        <div className="relative">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="peer w-full px-3 py-3 border border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-transparent"
                                placeholder="Email address"
                            />
                            <label
                                htmlFor="email"
                                className="absolute left-3 -top-2 bg-white dark:bg-zinc-900 px-1 text-xs text-zinc-500 dark:text-zinc-400 transition-all duration-150 ease-out
                                           peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-400 dark:peer-placeholder-shown:text-zinc-500
                                           peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-600 dark:peer-focus:text-blue-400
                                           peer-autofill:-top-2 peer-autofill:text-xs peer-autofill:text-blue-600 dark:peer-autofill:text-blue-400"
                            >
                                Email address
                            </label>
                        </div>

                        <div className="relative">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="peer w-full px-3 py-3 border border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-transparent autofill:bg-transparent autofill:shadow-[inset_0_0_0px_1000px_theme(colors.white)] dark:autofill:shadow-[inset_0_0_0px_1000px_theme(colors.zinc.800)]"
                                placeholder="Password"
                            />
                            <label
                                htmlFor="password"
                                className="absolute left-3 -top-2 bg-white dark:bg-zinc-900 px-1 text-xs text-zinc-500 dark:text-zinc-400 transition-all duration-150 ease-out
                                           peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-400 dark:peer-placeholder-shown:text-zinc-500
                                           peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-600 dark:peer-focus:text-blue-400
                                           peer-autofill:-top-2 peer-autofill:text-xs peer-autofill:text-blue-600 dark:peer-autofill:text-blue-400"
                            >
                                Password
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                        >
                            Sign in
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <Link
                            href="/"
                            className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                        >
                            ← Back to portfolio
                        </Link>
                    </div>
                </div>

                <p className="text-center text-xs text-zinc-500 dark:text-zinc-400">
                    Protected area. Authorized access only.
                </p>
            </div>
        </div>
    );
}