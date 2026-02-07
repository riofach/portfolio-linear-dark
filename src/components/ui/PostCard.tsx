"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Post } from "@/types/sanity";
import { urlFor } from "../../../sanity/lib/image";
import { ArrowUpRight } from "lucide-react";

const MotionLink = motion.create(Link);

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  const imageUrl = post.mainImage ? urlFor(post.mainImage).width(800).height(450).url() : "/placeholder.png";
  const date = post.publishedAt ? new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }) : "";

  return (
    <MotionLink
      href={`/blog/${post.slug}`}
      className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-card-dark transition-colors hover:border-primary/50 hover:shadow-[0_0_30px_rgba(91,19,236,0.1)] h-full"
      whileHover={{ scale: 1.02 }}
    >
      <div className="aspect-video w-full overflow-hidden bg-gray-900 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-card-dark to-transparent z-10 opacity-60"></div>
        {post.mainImage && (
          <Image
            src={imageUrl}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>
      
      <div className="relative z-20 -mt-12 p-8 pt-0">
        <div className="mb-4">
          {date && (
            <span className="text-sm text-gray-400 font-medium bg-black/50 px-2 py-1 rounded backdrop-blur-sm">
              {date}
            </span>
          )}
        </div>
        
        <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors mb-2">
          {post.title}
        </h3>
        
        <div className="mt-6 flex items-center gap-4">
          <span className="text-sm font-bold text-white hover:text-primary transition-colors flex items-center gap-1">
            Read Article
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </MotionLink>
  );
}
