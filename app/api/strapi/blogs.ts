import { content } from "@/constants/content";

export const getBlogs = async () => {
  try {
    const blogs = content.map((b) => ({
      ...b,
      content: "",
    }));

    return blogs;
  } catch (err) {
    return [];
  }
};

export const getBlogArticle = async (slug: string) => {
  try {
    const blog = content.find((b) => b.slug === slug);

    if (!blog) {
      throw new Error("Failed to fetch data");
    }

    return blog;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const getLatestArticles = async () => {
  try {
    const blogs = content.map((b) => ({
      ...b,
      content: "",
    }));

    return blogs;
  } catch (err) {
    return [];
  }
};
