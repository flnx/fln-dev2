import type { Metadata } from 'next';
import { Blog } from '@/components/blog/Blog';
import { Container } from '@/components/container/Container';
import { FeaturedBlog } from '@/components/blog/Featured';
import { getBlogs } from '../api/strapi/blogs';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'A technical blog about web development and articles on NextJS, React, HTML, CSS, Front-end development and more.',
  keywords:
    'React, NextJS, JavaScript, HTML, CSS, Web Development, Front-end, SSR, Server Side Components',
  openGraph: {
    title: "WebDevKalo's Blog",
    description: 'Web Development Insights and IT Essentials',
    siteName: 'webdevkalo',
    url: 'https://webdevkalo.vercel.app/blog',
    type: 'website',
    locale: 'en-US',
  },
};

const Page = async () => {
  const blogs = await getBlogs();

  const featured = blogs.find((b) => b.featured);

  return (
    <Container>
      {/* Featured */}
      <h1 className="text-8xl text-center mb-8 font-bold mt-8">Blog</h1>
      <p className="text-3xl text-center mb-20">
        Web Development Insights and IT Essentials
      </p>

      {blogs.length === 0 ? (
        <section className="text-center">
          <p className="text-xl text-pink-600">
            The blog is currently on a break. We'll be back soon with fresh content
            and insightful discussions.
          </p>
        </section>
      ) : (
        <>
          <article className="mb-28">
            {featured && <FeaturedBlog blogData={featured} />}
          </article>
          {/* Blogs */}
          <section>
            <h2 className="text-3xl font-semibold mb-8">Articles</h2>
            <div className="grid gap-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {blogs.map((b) => (
                <Blog blogData={b} key={b.id} />
              ))}
            </div>
          </section>
        </>
      )}
    </Container>
  );
};

export default Page;
