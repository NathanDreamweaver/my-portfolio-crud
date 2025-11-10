import { createServer } from "@/lib/supabase/server";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default async function HomePage() {
  const supabase = await createServer();

  // Fetch only projects that are NOT hidden
  const { data: projects, error } = await supabase
    .from("projects")
    .select("*")
    .eq("is_hidden", false)
    .order("created_at", { ascending: false });

  if (error) console.error(error);

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 via-fuchsia-50 to-violet-50 dark:bg-linear-to-br dark:from-purple-950 dark:via-fuchsia-950 dark:to-violet-950 relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#a855f73d_2px,transparent_2px),linear-gradient(to_bottom,#a855f73d_2px,transparent_2px)] bg-size-[48px_48px] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Navigation Bar */}
        <Navbar />

      {/* Title */}
      <div id="title" className="w-full min-h-screen px-15 text-left flex items-center justify-center scroll-mt-24 overflow-hidden">
        <div className="px-6 py-4 border-4 border-black rounded-2xl shadow-[10px_10px_0_0_#000] bg-white/80 dark:bg-zinc-900/80">
          <h1 className="font-rampart-one text-5xl sm:text-6xl md:text-8xl lg:text-9xl leading-none font-extrabold tracking-wide text-black dark:text-white">
            FILIPPO
          </h1>
          <h1 className="font-rampart-one text-5xl sm:text-6xl md:text-8xl lg:text-9xl leading-none font-extrabold tracking-wide text-black dark:text-white">
            NOVARINI
          </h1>
        </div>
      </div>

      {/* About Me */}
      <section id="about" className="w-full py-16 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            {/* Image placeholder */}
            <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-2xl border-4 border-black overflow-hidden bg-zinc-100 dark:bg-zinc-900 shadow-[8px_8px_0_0_#000]">
              <Image
                src="https://placehold.co/600x400?text=Placeholder+Image"
                alt="Placeholder Image"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                priority
              />
            </div>

            {/* Text*/}
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 underline decoration-wavy decoration-4 decoration-fuchsia-500">
                About Me
              </h2>
              <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
                vel pulvinar lorem. Integer interdum, nibh id molestie luctus, arcu
                mi volutpat augue, vel posuere augue libero id ex. Maecenas sit amet
                nisi posuere, placerat lacus id, facilisis arcu.
              </p>
              <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae vitae
                dicta sunt explicabo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <div id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-24">
        {!projects || projects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-zinc-500 dark:text-zinc-400">
              No projects to display yet.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/project/${project.slug}`}
                className="group block"
              >
                <article className="rounded-2xl overflow-hidden bg-white dark:bg-zinc-900 border-4 border-black shadow-[8px_8px_0_0_#000] group-hover:shadow-[12px_12px_0_0_#000] transition-shadow">
                  {project.cover_url && (
                    <div className="relative w-full h-48 border-b-4 border-black">
                      <Image
                        src={project.cover_url}
                        alt={project.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-400 transition-colors">
                      {project.title}
                    </h2>
                    {project.summary && (
                      <p className="mt-2 text-zinc-600 dark:text-zinc-400 line-clamp-3">
                        {project.summary}
                      </p>
                    )}
                    {project.tags && project.tags.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-3">
                        {project.tags.map((tag: string) => (
                          <span
                            key={tag}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-900 dark:text-fuchsia-200 border-2 border-black shadow-[3px_3px_0_0_#000]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
      <Footer />
      </div>
    </div>
  );
}