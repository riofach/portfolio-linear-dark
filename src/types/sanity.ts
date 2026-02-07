import { PortableTextBlock } from "sanity";

export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
  crop?: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
}

export interface LocalizedString {
  en: string;
  id: string;
}

export interface LocalizedText {
  en: string;
  id: string;
}

export interface Project {
  _id: string;
  _type: "project";
  title: string;
  slug: string;
  thumbnail?: SanityImage;
  description?: string;
  tags?: string[];
  demoUrl?: string;
  repoUrl?: string;
}

export interface Post {
  _id: string;
  _type: "post";
  title: string;
  slug: string;
  mainImage?: SanityImage;
  publishedAt?: string;
  author?: string;
  body?: PortableTextBlock[];
}

export interface Experience {
  _id: string;
  _type: "experience";
  company: string;
  role: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description?: string;
  logo?: SanityImage;
}

export interface Skill {
  _id: string;
  _type: "skill";
  name: string;
  icon?: SanityImage;
  category: "frontend" | "backend" | "tools";
  proficiency?: number;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}

export interface Settings {
  _id: string;
  _type: "settings";
  siteTitle?: string;
  seoDescription?: string;
  socialLinks?: SocialLink[];
  heroText?: LocalizedText;
}
