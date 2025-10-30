import { createServer } from "@/lib/supabase/server";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const supabase = await createServer();

    const { data: project, error } = await supabase
        .from("projects")
        .select("*")
        .eq("slug", slug)
        .single();

    if (error || !project) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-white dark:bg-zinc-950">
            <Navbar />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <article>
                    {project.is_hidden && (
                        <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded">
                            <p className="text-sm text-red-800 dark:text-red-200">
                                This project is hidden from the public view
                            </p>
                        </div>
                    )}

                    {project.cover_url && (
                        <div className="relative w-full h-96 rounded-lg mb-8 overflow-hidden">
                            <Image
                                src={project.cover_url}
                                alt={project.title}
                                fill
                                sizes="(min-width: 1024px) 768px, 100vw"
                                className="object-cover"
                                priority
                            />
                        </div>
                    )}

                    <header className="mb-8">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl leading-tight font-bold text-zinc-900 dark:text-zinc-100 mb-4">
                            {project.title}
                        </h1>

                        {project.tags && project.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag: string) => (
                                    <span
                                        key={tag}
                                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-900 dark:text-fuchsia-200"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}

                        {project.summary && (
                            <p className="text-xl text-zinc-600 dark:text-zinc-400">
                                {project.summary}
                            </p>
                        )}

                        <div className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
                            <time dateTime={project.created_at}>
                                Created on{" "}
                                <span className="text-zinc-900 dark:text-zinc-100">
                                    {new Date(project.created_at).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </span>
                            </time>
                        </div>
                    </header>

                    {project.content && (
                        <div className="prose prose-zinc dark:prose-invert max-w-none">
                            <div className="whitespace-pre-wrap">{project.content}</div>
                        </div>
                    )}
                </article>

                <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
                    <Link
                        href="/"
                        className="text-fuchsia-600 hover:text-fuchsia-700 dark:text-fuchsia-400 dark:hover:text-fuchsia-300"
                    >
                        ← Back to all projects
                    </Link>
                </div>
            </main>
            <Footer />
        </div>
    );
}