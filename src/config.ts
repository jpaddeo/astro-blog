import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://jpaddeo.dev/",
  author: "Juan Pablo Addeo",
  desc: "Un blog minimalista, responsivo, SEO-friendly y con mucho contenido de utilidad.",
  title: "JPA Blog",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOCALE = ["es-ES"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/jpaddeo/astro-blog",
    linkTitle: ` ${SITE.title} en Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/juanpabloaddeo",
    linkTitle: `${SITE.title} en LinkedIn`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/jpaddeo",
    linkTitle: `${SITE.title} en Twitter`,
    active: true,
  },  
  {
    name: "Instagram",
    href: "https://instagram.com/jpaddeo",
    linkTitle: `${SITE.title} en Instagram`,
    active: true,
  },  
  {
    name: "Mail",
    href: "mailto:jpaddeo@gmail.com",
    linkTitle: `Enviar un mail a ${SITE.title}`,
    active: false,
  },
  {
    name: "Twitch",
    href: "https://twitch.tv/jpaddeo",
    linkTitle: `${SITE.title} on Twitch`,
    active: true,
  },
  {
    name: "YouTube",
    href: "https://github.com/jpaddeo/astro-blog",
    linkTitle: `${SITE.title} on YouTube`,
    active: false,
  },
  {
    name: "WhatsApp",
    href: "https://github.com/jpaddeo/astro-blog",
    linkTitle: `${SITE.title} on WhatsApp`,
    active: false,
  },
  {
    name: "Snapchat",
    href: "https://github.com/jpaddeo/astro-blog",
    linkTitle: `${SITE.title} on Snapchat`,
    active: false,
  },
  {
    name: "Pinterest",
    href: "https://github.com/jpaddeo/astro-blog",
    linkTitle: `${SITE.title} on Pinterest`,
    active: false,
  },
  {
    name: "TikTok",
    href: "https://github.com/jpaddeo/astro-blog",
    linkTitle: `${SITE.title} on TikTok`,
    active: false,
  },
  {
    name: "CodePen",
    href: "https://github.com/jpaddeo/astro-blog",
    linkTitle: `${SITE.title} on CodePen`,
    active: false,
  },
  {
    name: "Discord",
    href: "https://github.com/jpaddeo/astro-blog",
    linkTitle: `${SITE.title} on Discord`,
    active: false,
  },
  {
    name: "GitLab",
    href: "https://github.com/jpaddeo/astro-blog",
    linkTitle: `${SITE.title} on GitLab`,
    active: false,
  },
  {
    name: "Reddit",
    href: "https://github.com/jpaddeo/astro-blog",
    linkTitle: `${SITE.title} on Reddit`,
    active: false,
  },
  {
    name: "Skype",
    href: "https://github.com/jpaddeo/astro-blog",
    linkTitle: `${SITE.title} on Skype`,
    active: false,
  },
  {
    name: "Steam",
    href: "https://github.com/jpaddeo/astro-blog",
    linkTitle: `${SITE.title} on Steam`,
    active: false,
  },
  {
    name: "Telegram",
    href: "https://github.com/jpaddeo/astro-blog",
    linkTitle: `${SITE.title} on Telegram`,
    active: false,
  },
  {
    name: "Mastodon",
    href: "https://github.com/jpaddeo/astro-blog",
    linkTitle: `${SITE.title} on Mastodon`,
    active: false,
  },
];
