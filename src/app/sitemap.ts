import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://arthurp.fr";

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/legal/mentions-legales`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/legal/confidentialite`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/legal/cgu`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const projects = [
    "lazybot",
    "qrcode",
    "qcu",
    "reducelink",
    "links",
    "learn",
    "sudoku",
    "clock",
    "formcraft",
    "pomodoro",
    "visio",
    "doudou",
    "portfolio",
    "moon",
    "calculatrice",
    "chrono",
    "blocnote",
    "imprimersudoku",
  ];

  const projectPages: MetadataRoute.Sitemap = projects.map((slug) => ({
    url: `${baseUrl}/projets/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...projectPages];
}
