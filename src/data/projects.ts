export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  repoUrl?: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: "E-commerce Analytics Dashboard",
    description: "A comprehensive analytics platform for online retailers, featuring real-time data visualization and inventory management.",
    tags: ["React", "Tailwind", "Node.js"],
    link: "#",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrYuG7lmS1K0jJVvUmEs9X3jf7z8BIJBziYsYRn38eQGLXN5blpfdAqsB0HCyf2BWm7LNxavbf_ZQQGqjjrYV4RSB34-UWsrtk8Vf0HsQSnbPYQNvQZ449EVUBooz6EL30-cj7g3rjthn8t8U0Uchp7n9Z8Bnqm3vsATeAcZ-wlEKgOaxAvMNBzNQUKJSabk2yUNlGcKPtIFLS05yqDPR3BuqJxLf4ocn_ufpTvtwZTjFUgxnWXZbLGJru3ukl3DbnzQOnynMWYj0",
  },
  {
    title: "NeoBank Mobile App",
    description: "A modern fintech mobile application focused on simplifying personal finance for Gen Z users.",
    tags: ["iOS", "SwiftUI", "Figma"],
    link: "#",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUkuIrOtYT5ddkCUT7vgZkJ1SDURC1jCdlWliqnUON-i7D5ZlmvRK6p2KKUhc6FWQfy1LlAtN7iTWTHC5F3C9P_3h9Yuf_eYy_UATEBqppUH36BcPLHRBlhQuJDGBS9I0d5aCZET-xTFMnWSh11ozKfyggnJfJHT_5CL43LQqWH_6LWOfyTK1G47wXFsgrUgHqczW_jeOdzBSMpkCf10PAjM-cP-UI6WyUTRdl_CQyorjHVaC2LUUEyZSuh3o588qJjSH3PeSEPow",
  },
  {
    title: "Wanderlust Travel Platform",
    description: "A comprehensive booking engine allowing users to create custom travel itineraries with AI assistance.",
    tags: ["Next.js", "Supabase"],
    link: "#",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMpgKHxr1YS0o7tpoqdubRez4WeppIUQVhlhvRaU6LDKVNypCZWT7M5U4ParS-P6IURbLbFX6CS3ff0MFbJMGBmR82M_IGHaNjnuF6OByAAU6LBHxWXrIssijWzQR7g86iDxrvOjPH_g-GnstXpHC2ooI1Lt-DhgvPvJHatrDUguwG3m8pTEFQwqsr6mv55FMP_kPRRjRY8QYWDR4XcowHhykeSqK8Sixihtab4ewHU6dV02g7cb152xyCUp0WVk56hSMpX03oIC4",
  },
  {
    title: "CopyGen AI",
    description: "An intelligent content generation tool helping marketers create SEO-optimized blog posts in minutes.",
    tags: ["Python", "OpenAI"],
    link: "#",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwQwfJq3QA3xpmfQuqb2QogwEZHr-fmXykYnNQTcsZmuQn5br_PjzUwqBSw3YDu8NZk_rfUdo266ygualBCAMNvzoT53m3gJqezpiy6FvcZjidnafI8LSJnMwhEDe6ai0xmoGzwaRVAJPzT0zHsgyOIfmj6pG-iNTQMCmKKgMctpy1AzojX0WlW-F6H2wBEjhP0g_ggAA32jfxTkNXa7LZnJE6Cg7z7LCJ5eYkm3n0iB7snvOWdOcoYIceYXF3koIm-86hzmTW4zg",
  },
];
