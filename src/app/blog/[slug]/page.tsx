import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { sanityFetch } from "../../../../sanity/lib/fetch";
import { postQuery, postsQuery } from "../../../../sanity/lib/queries";
import { urlFor } from "../../../../sanity/lib/image";
import { Post } from "@/types/sanity";

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await sanityFetch<Post[]>({ query: postsQuery });

  if (!posts) return [];

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await sanityFetch<Post>({ query: postQuery, params: { slug } });

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Blog`,
    description: post.title, // Ideally we'd have a description field, but title is fallback
  };
}

const ptComponents: PortableTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="relative w-full aspect-video my-8 rounded-lg overflow-hidden">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || "Post image"}
            fill
            className="object-cover"
          />
        </div>
      );
    },
  },
  block: {
    h1: ({ children }) => <h1 className="text-3xl font-bold text-white mt-8 mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-bold text-white mt-8 mb-4">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-bold text-white mt-6 mb-3">{children}</h3>,
    h4: ({ children }) => <h4 className="text-lg font-bold text-white mt-4 mb-2">{children}</h4>,
    normal: ({ children }) => <p className="mb-4 text-gray-300 leading-relaxed">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-4 italic my-6 text-gray-400 bg-white/5 p-4 rounded-r-lg">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc list-inside mb-6 ml-4 text-gray-300 space-y-2">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal list-inside mb-6 ml-4 text-gray-300 space-y-2">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-1">{children}</li>,
    number: ({ children }) => <li className="mb-1">{children}</li>,
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/") ? "noreferrer noopener" : undefined;
      return (
        <a 
          href={value.href} 
          rel={rel} 
          className="text-primary hover:text-primary/80 underline decoration-primary/30 hover:decoration-primary/80 transition-all"
        >
          {children}
        </a>
      );
    },
    code: ({ children }) => (
      <code className="bg-white/10 text-primary-foreground px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
  },
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await sanityFetch<Post>({ query: postQuery, params: { slug } });

  if (!post) {
    notFound();
  }

  const imageUrl = post.mainImage 
    ? urlFor(post.mainImage).width(1200).height(675).url() 
    : "/placeholder.png";
    
  const date = post.publishedAt ? new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }) : "";

  return (
    <main className="flex-grow min-h-screen relative pt-24 pb-16 px-6 lg:px-8">
      {/* Background Elements */}
      <div
        className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-grid-pattern [background-size:40px_40px] opacity-[0.05] pointer-events-none"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-3xl relative z-10">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-sm text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        <header className="mb-10">
          <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
            {date && (
              <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                <Calendar className="w-3.5 h-3.5" />
                {date}
              </span>
            )}
            {post.author && (
              <span className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5" />
                {post.author}
              </span>
            )}
          </div>
          
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl mb-6 leading-tight">
            {post.title}
          </h1>
        </header>

        {post.mainImage && (
          <div className="aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-card-dark relative mb-12 shadow-2xl shadow-primary/5">
            <Image
              src={imageUrl}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <article className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-gray-300 prose-a:text-primary prose-a:no-underline hover:prose-a:text-primary/80 prose-strong:text-white prose-code:text-primary-foreground prose-code:bg-white/10 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none">
          {post.body ? (
            <PortableText value={post.body} components={ptComponents} />
          ) : (
            <p className="text-gray-500 italic">No content available for this post.</p>
          )}
        </article>
      </div>
    </main>
  );
}
