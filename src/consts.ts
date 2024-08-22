import type { Site, Page, Links, Socials } from "@types";

// Global
export const SITE: Site = {
  TITLE: "Astro Sphere",
  DESCRIPTION: "Welcome to Astro Sphere, this is my portfolio practice.",
  AUTHOR: "Wen Yen Huang",
};

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
};

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
};

// Projects Page
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
};

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
};

// Links
export const LINKS: Links = [
  {
    TEXT: "Home",
    HREF: "/",
  },
  {
    TEXT: "Work",
    HREF: "/work",
  },
  // {
  //   TEXT: "Blog",
  //   HREF: "/blog",
  // },
  {
    TEXT: "Projects",
    HREF: "/projects",
  },
];

// Socials
export const SOCIALS: Socials = [
  {
    NAME: "Email",
    ICON: "email",
    TEXT: "dges5102@gmail.com",
    HREF: "mailto:dges5102@gmail.com",
  },
  {
    NAME: "Github",
    ICON: "github",
    TEXT: "allpass122",
    HREF: "https://github.com/allpass122",
  },
  {
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "Wen Yen Huang",
    HREF: "https://www.linkedin.com/in/wenyen-huang-45a7a9207/",
  },
  // {
  //   NAME: "Twitter",
  //   ICON: "twitter-x",
  //   TEXT: "markhorn_dev",
  //   HREF: "https://twitter.com/markhorn_dev",
  // },
];
