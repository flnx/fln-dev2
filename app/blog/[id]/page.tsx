import { getBlogArticle } from '@/app/api/strapi/blogs';
import { Container } from '@/components/container/Container';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Chip } from '@nextui-org/chip';
import { Image } from '@nextui-org/image';
import clsx from 'clsx';

type Props = {
  params: { id: string };
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const article = await getBlogArticle(params.id);

  if (!article) return {};

  const { title, description, seo, keywords, slug, image } = article;

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: keywords,
    openGraph: {
      title: title,
      description: description,
      siteName: 'webdevkalo',
      url: `https://webdevkalo.vercel.app/${slug}`,
      type: 'article',
      locale: 'en-US',
      authors: 'Kaloyan Georgiev',
      images: {
        url: image.url,
        width: image.width,
        height: image.height,
        alt: image.alt,
      },
    },
  };
};

const BlogArticle = async ({ params }: Props) => {
  const article = await getBlogArticle(params.id);

  if (!article) {
    notFound();
  }

  const { url, alt, width, height } = article.image;

  return (
    <Container>
      <header className="max-w-screen-md m-auto mb-16">
        <h1 className="font-bold text-4xl mb-6">{article.title}</h1>
        <div className="flex justify-between">
          <time
            dateTime={article.date}
            className="text-default-500 text-sm font-semibold inline-block mb-10"
          >
            {article.date}
          </time>
          <Chip color="secondary">{article.categories}</Chip>
        </div>
        <Image
          src={url}
          alt={alt}
          width={width}
          height={height}
          className="object-cover"
          style={{ maxHeight: '34rem' }}
        />
      </header>
      <article className="max-w-screen-md m-auto">
        <div
          dangerouslySetInnerHTML={{ __html: article.content }}
          className={clsx(
            'prose prose-blockquote:font-normal prose-blockquote:prose-sm prose-code:font-mono',
            'prose-headings:text-secondary prose-strong:text-secondary prose-strong:font-bold',
            'break-words bg-code',
            'dark:prose-blockquote:text-slate-100 dark:prose-a:text-primary dark:text-foreground',
          )}
        />
      </article>
    </Container>
  );
};

export default BlogArticle;
