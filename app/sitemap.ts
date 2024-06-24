import { MetadataRoute } from "next";
import { getBlogs } from "./api/blogs";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs = await getBlogs();

  const blogRoutes = blogs.map((blog) => ({
    url: `https://webdevkalo.vercel.app/blog/${blog.slug}`,
    lastModified: blog.date,
  }));

  const routes = [
    "/",
    "/projects",
    "/blog",
    "/about",
    "/about/contact",
  ].map((route) => ({
    url: `https://webdevkalo.vercel.app${route}`,
    lastModified: new Date(),
  }));

  return [...routes, ...blogRoutes];
}
