export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://dipomitsubishi.vercel.app/sitemap.xml",
  };
}
