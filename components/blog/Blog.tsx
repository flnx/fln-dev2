import Link from 'next/link';
import { Card, CardHeader, CardBody } from '@nextui-org/card';
import { Image } from '@nextui-org/image';
import { Chip } from '@nextui-org/chip';

import type { Blog as BlogProps } from '@/types/blogType';

export const Blog = ({ blogData }: { blogData: BlogProps }) => {
  const { url, alt, width, height } = blogData.image;

  return (
    <Link href={`/blog/${blogData.slug}`}>
      <Card className="gap-5 bg-transparent shadow-none h-full">
        <CardHeader className="overflow-visible p-0 flex-1">
          <Image
            alt={alt}
            className="object-cover rounded-xl w-full m-auto flex"
            style={{
              aspectRatio: '1.75/1',
            }}
            src={url || '/images/hero-card.jpeg'}
            width={width}
            height={height}
          />
        </CardHeader>
        <CardBody className="pb-0 pt-2 flex-col items-start p-0 gap-1">
          <Chip color="secondary" className="mb-3">
            {blogData.categories}
          </Chip>
          <h4 className="font-bold text-xl mb-5 min-h-14">{blogData.title}</h4>
          <small className="text-default-500 text-medium mb-5 min-h-20 block">
            {blogData.description}
          </small>
          <div className="mt-auto flex justify-between w-full pb-2">
            <time dateTime={blogData.date}>{blogData.date}</time>
            <span>{blogData.readTime} min read</span>
          </div>
        </CardBody>
      </Card>
    </Link>
  );
};
