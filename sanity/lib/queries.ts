import { groq } from "next-sanity";

// Projects Query
export const projectsQuery = groq`
  *[_type == "project"] | order(slug.current asc) {
    _id,
    title,
    "slug": slug.current,
    thumbnail,
    description,
    tags,
    demoUrl,
    repoUrl
  }
`;

// Single Project Query
export const projectQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    thumbnail,
    description,
    tags,
    demoUrl,
    repoUrl
  }
`;

// Posts Query
export const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    mainImage,
    publishedAt,
    author,
    body
  }
`;

// Single Post Query
export const postQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    mainImage,
    publishedAt,
    author,
    body
  }
`;

// Settings Query (Profile info)
export const settingsQuery = groq`
  *[_type == "settings"][0] {
    _id,
    siteTitle,
    seoDescription,
    socialLinks,
    heroText
  }
`;

// Profile Query (Alias for Settings Query)
export const profileQuery = settingsQuery;

// Experiences Query
export const experiencesQuery = groq`
  *[_type == "experience"] | order(startDate desc) {
    _id,
    company,
    role,
    startDate,
    endDate,
    current,
    description,
    logo
  }
`;

// Skills Query
export const skillsQuery = groq`
  *[_type == "skill"] | order(proficiency desc) {
    _id,
    name,
    icon,
    category,
    proficiency
  }
`;
