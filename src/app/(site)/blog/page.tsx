import { PostCard } from "@/components/ui/PostCard";
import { sanityFetch } from "../../../../sanity/lib/fetch";
import { postsQuery } from "../../../../sanity/lib/queries";
import { Post } from "@/types/sanity";

export const metadata = {
  title: "Blog | Portfolio",
  description: "Thoughts on software development, design, and building products.",
};

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await sanityFetch<Post[]>({ query: postsQuery }) || [];

  return (
    <main className="flex-grow min-h-screen relative">
      <section className="relative pt-24 pb-16 px-6 lg:px-8">
        {/* Background Elements */}
        <div
          className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-grid-pattern [background-size:40px_40px] opacity-[0.05] pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute right-0 top-0 h-[400px] w-[600px] rounded-full bg-primary/10 blur-[100px] pointer-events-none"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl relative z-10">
          {/* Header Section */}
          <div className="mb-12 flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                  Blog
                </h1>
                <span className="flex items-center justify-center rounded-full bg-white/5 border border-white/10 px-3 py-1 text-sm font-medium text-gray-400">
                  {posts.length}
                </span>
              </div>
              <p className="mt-4 text-lg text-gray-400 max-w-2xl">
                Thoughts on software development, design, and building products.
              </p>
            </div>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>

          {posts.length === 0 && (
             <div className="flex flex-col items-center justify-center py-20 text-center">
               <p className="text-gray-400 text-lg">No posts yet. Check back soon!</p>
             </div>
          )}
        </div>
      </section>
    </main>
  );
}
