type BlogSEO = {
  metaTitle: string | null;
  metaDescription: string | null;
}

export type Blog = {
  id: number;
  title: string;
  slug: string;
  featured: boolean | null;
  categories: string;
  date: string;
  description: string;
  readTime: number;
  keywords: string;
  preventIndexing: boolean;
  content: string;
  image: {
    url: string,
    alt: string,
    width: number,
    height: number,
  };
  seo: BlogSEO;
  RelatedBlogs?: Blog;
};