import type { DefaultTheme, UserConfig } from "vitepress";
import { generateImages, generateMeta } from "../hooks";
import { headersPlugin } from "../markdown/headers";
import { figure } from "@mdit/plugin-figure";
import { imgLazyload } from "@mdit/plugin-img-lazyload";
import { align } from "@mdit/plugin-align";
import { imgSize } from "@mdit/plugin-img-size";
import { tabsMarkdownPlugin } from "vitepress-plugin-tabs";
import { emojiRender, defs } from "./emoji";

export const hostname: string = "https://wotaku.wiki";
export const excludedFiles = ["t.md"];

// @unocss-include
const nav: DefaultTheme.NavItem[] = [
  {
    text: "Pages",
    items: [
      { text: "Quick Start", link: "/qs" },
      { text: "FAQs", link: "/faq" },
      { text: "Websites", link: "/websites" },
      { text: "Software", link: "/software" },
      { text: "Misc-sites", link: "/misc" },
      { text: "Tools", link: "/tools" },
      { text: "Music", link: "/music" },
      { text: "Games", link: "/games" },
      { text: "Non-English", link: "/nonen" },
      { text: "NSFW", link: "/nsfw" },
      { text: "Merch", link: "/merch" },
      { text: "Scanlation", link: "/scanlation" },
      { text: "Communities", link: "/comms" },
    ],
  },
  {
    text: "Japan",
    items: [
      { text: "Language", link: "/japan/language" },
      { text: "Immersion", link: "/japan/immersion" },
      { text: "Software", link: "/japan/software" },
      { text: "Culture", link: "/japan/culture" },
    ],
  },
  {
    text: "Glossary",
    items: [
      { text: "General", link: "/glossary/general" },
      { text: "Anime", link: "/glossary/anime" },
      { text: "Manga", link: "/glossary/manga" },
      { text: "Audio", link: "/glossary/audio" },
      { text: "NSFW", link: "/glossary/nsfw" },
    ],
  },
  {
    text: "Torrenting",
    collapsed: true,
    items: [
      { text: "FAQs", link: "/torrenting/faq" },
      { text: "Glossary", link: "/torrenting/glossary" },
      { text: "qBittorent", link: "/torrenting/qbit" },
    ],
  },
  {
    text: "Guides",
    collapsed: true,
    items: [
      {
        text: "Anime",
        items: [
          { text: "Disc Ripping", link: "/guides/anime/discrip" },
          { text: "Fate / Type-Moon", link: "/guides/anime/fate" },
          { text: "Network Streaming", link: "/guides/anime/ns" },
        ],
      },
      {
        text: "Manga",
        items: [
          { text: "Digital Manga Info", link: "/guides/manga/digim" },
          { text: "Madokami", link: "/guides/manga/madokami" },
          { text: "Manga Image Editing", link: "/guides/manga/imagedit" },
        ],
      },
      {
        text: "Music",
        items: [
          { text: "FB2K Synced Lyrics", link: "/guides/music/fb2klyrics" },
          { text: "Squidify", link: "/guides/music/squidify" },
          { text: "Transcoding Audio", link: "/guides/music/transcoding" },
        ],
      },
      {
        text: "Technical",
        items: [
          { text: "Blocking Ads", link: "/guides/tech/adblock" },
          { text: "Extension Repos", link: "/guides/tech/repo" },
          { text: "IRC & XDCC", link: "/guides/tech/irc" },
          { text: "JDL2 Ad-removal", link: "/guides/tech/jdl" },
        ],
      },
    ],
  },
];

const sidebar: DefaultTheme.Sidebar = [
  {
    text: '<span class="i-lucide:zap"></span> Quick Start',
    link: "/qs",
  },
  {
    text: '<span class="i-lucide:message-circle-question"></span> FAQs',
    link: "/faq",
  },
  {
    text: '<span class="i-lucide:earth"></span> Websites',
    link: "/websites",
  },
  {
    text: '<span class="i-lucide:box"></span> Software',
    link: "/software",
  },
  {
    text: '<span class="i-lucide:folder-open"></span> Misc-sites',
    link: "/misc",
  },
  {
    text: '<span class="i-lucide:wrench"></span> Tools',
    link: "/tools",
  },
  {
    text: '<span class="i-lucide:music"></span> Music',
    link: "/music",
  },
  {
    text: '<span class="i-lucide:gamepad-2"></span> Games',
    link: "/games",
  },
  {
    text: '<span class="i-lucide:map"></span> Non-English',
    link: "/nonen",
  },
  {
    text: '<span class="i-lucide:ban"></span> NSFW',
    link: "/nsfw",
  },
  {
    text: '<span class="i-lucide:package-2"></span> Merch',
    link: "/merch",
  },
  {
    text: '<span class="i-lucide:scroll-text"></span> Scanlation',
    link: "/scanlation",
  },
  {
    text: '<span class="i-uil:letter-japanese-a"></span> Japan',
    collapsed: true,
    items: [
      { text: "Language", link: "/japan/language" },
      { text: "Immersion", link: "/japan/immersion" },
      { text: "Software", link: "/japan/software" },
      { text: "Culture", link: "/japan/culture" },
    ],
  },
  {
    text: '<span class="i-lucide:book-open"></span> Glossary',
    collapsed: true,
    items: [
      { text: "General", link: "/glossary/general" },
      { text: "Anime", link: "/glossary/anime" },
      { text: "Manga", link: "/glossary/manga" },
      { text: "Audio", link: "/glossary/audio" },
      { text: "NSFW", link: "/glossary/nsfw" },
    ],
  },
  {
    text: '<span class="i-lucide:magnet"></span> Torrenting',
    collapsed: true,
    items: [
      { text: "FAQs", link: "/torrenting/faq" },
      { text: "Glossary", link: "/torrenting/glossary" },
      { text: "qBittorent", link: "/torrenting/qbit" },
    ],
  },
  {
    text: '<span class="i-lucide:book-key"></span> Guides',
    collapsed: true,
    items: [
      {
        text: "Anime",
        collapsed: true,
        items: [
          { text: "Disc Ripping", link: "/guides/anime/discrip" },
          { text: "Fate / Type-Moon", link: "/guides/anime/fate" },
          { text: "Network Streaming", link: "/guides/anime/ns" },
        ],
      },
      {
        text: "Manga",
        collapsed: true,
        items: [
          { text: "Digital Manga Info", link: "/guides/manga/digim" },
          { text: "Madokami", link: "/guides/manga/madokami" },
          { text: "Manga Image Editing", link: "/guides/manga/imagedit" },
        ],
      },
      {
        text: "Music",
        collapsed: true,
        items: [
          { text: "FB2K Synced Lyrics", link: "/guides/music/fb2klyrics" },
          { text: "Squidify", link: "/guides/music/squidify" },
          { text: "Transcoding Audio", link: "/guides/music/transcoding" },
        ],
      },
      {
        text: "Technical",
        collapsed: true,
        items: [
          { text: "Blocking Ads", link: "/guides/tech/adblock" },
          { text: "Extension Repos", link: "/guides/tech/repo" },
          { text: "IRC & XDCC", link: "/guides/tech/irc" },
          { text: "JDL2 Ad-removal", link: "/guides/tech/jdl" },
        ],
      },
    ],
  },
  {
    text: '<span class="i-lucide:messages-square"></span> Communities',
    link: "/comms",
  },
  {
    text: '<span class="i-lucide:heart-handshake"></span> Credits',
    link: "/credits",
  },
];

export const shared: UserConfig<DefaultTheme.Config> = {
  title: "Wotaku",
  description:
    "Wotaku, the one-stop-shop for all your otaku interests. Here you can find websites for Anime, Manga, Light Novels, Music, Soundtracks, Games and Hentai. Our japanese learning section has books and videos about language, history and culture.",
  lang: "en-US",
  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: true,
  appearance: "dark",
  titleTemplate: ":title • Wotaku.wiki by Duck",
  head: [
    ["meta", { name: "theme-color", content: "#56b4fc" }],
    ["meta", { name: "og:type", content: "website" }],
    ["meta", { name: "og:locale", content: "en" }],
    ["link", { rel: "icon", href: "/asset/inaread.png" }],
    // PWA
    ["link", { rel: "icon", href: "/asset/inaread.png", type: "image/svg+xml" }],
    ["link", { rel: "alternate icon", href: "/asset/inaread.png" }],
    ["link", { rel: "mask-icon", href: "/asset/inaread.png", color: "#56b4fc" }],
    // prettier-ignore
    [
			"meta",
			{
				name: "keywords",
				content:
					"Anime, Anime Piracy, Manga, Manga Piracy, VTuber, Hentai, JPOP, Music, Japan, Learning Japanese, Weeb, Otaku",
			},
		],
    [
      "link",
      {
        rel: "apple-touch-icon",
        href: "/asset/inaread.png",
        sizes: "192x192",
      },
    ],
    [
      "script",
      {
        defer: "",
        "data-domain": "wotaku.wiki",
        src: "https://simp.mom/js/asdasdasd.js",
      },
    ],
    [
      "script",
      { id: "restore-banner-preference" },
      `
(() => {
  const restore = (key, cls, def = false) => {
    const saved = localStorage.getItem(key);
    if (saved) {
      document.documentElement.classList.add(cls);
    }
  };
  restore('ackDomainChange', 'banner-dismissed');
})();`,
    ],
  ],
  srcExclude: ["README.md", "sandbox/**/*.md"],
  sitemap: {
    hostname: hostname,
  },
  transformHead: async (context) => generateMeta(context, hostname),
  buildEnd: async (context) => {
    generateImages(context);
  },
  markdown: {
    emoji: { defs },
    config(md) {
      md.use(emojiRender);
      // @ts-expect-error
      md.use(imgLazyload);
      // @ts-expect-error
      md.use(align);
      // @ts-expect-error
      md.use(figure);
      // @ts-expect-error
      md.use(tabsMarkdownPlugin);
      // @ts-expect-error
      md.use(imgSize);
      md.use(headersPlugin);
    },
  },
  themeConfig: {
    search: {
      options: {
        miniSearch: {
          searchOptions: {
            combineWith: "AND",
            fuzzy: false,
            // @ts-ignore
            boostDocument: (_, term, storedFields: Record<string, string | string[]>) => {
              const titles = (storedFields?.titles as string[])
                .filter((t) => Boolean(t))
                .map((t) => t.toLowerCase());
              // Uprate if term appears in titles. Add bonus for higher levels (i.e. lower index)
              const titleIndex =
                titles.map((t, i) => (t?.includes(term) ? i : -1)).find((i) => i >= 0) ?? -1;
              if (titleIndex >= 0) return 10000 - titleIndex;

              return 1;
            },
          },
        },
        detailedView: true,
      },
      provider: "local",
    },
    logo: { src: "/asset/inaread.png" },
    sidebar,
    nav,
    socialLinks: [
      { icon: "github", link: "https://github.com/wotakumoe/Wotaku" },
      { icon: "discord", link: "https://discord.gg/vShRGx8ZBC" },
    ],
  },
};