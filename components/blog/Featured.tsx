import { Card, CardHeader, CardBody} from '@nextui-org/card';
import { Chip } from '@nextui-org/chip';
import { Image } from '@nextui-org/image';
import { Blog } from '@/types/blogType';

import Link from 'next/link';

export const FeaturedBlog = ({ blogData }: { blogData: Blog }) => {
  const { url, alt, width, height } = blogData.image;

  return (
    <Link href={`/blog/${blogData.slug}`}>
      <Card className="lg:flex-row gap-5 bg-transparent shadow-none">
        <CardHeader className="overflow-visible p-0 flex-1">
          <Image
            alt={alt}
            className="object-cover rounded-xl"
            src={url}
            width={width}
            height={height}
          />
        </CardHeader>
        <CardBody className="pb-0 pt-2 flex-col items-start flex-1 p-5 gap-1">
          {/* <p className="text-tiny uppercase font-bold">Daily Mix</p> */}
          <Chip color="secondary" className="mb-3">
            {blogData.categories}
          </Chip>
          <h4 className="font-bold text-xl mb-5 lg:text-4xl">{blogData.title}</h4>
          <small className="text-default-500 text-medium mb-5">
            {blogData.description}
          </small>
          <div className="mt-auto flex justify-between w-full pb-2">
            <time dateTime="20.02.2012">{blogData.date}</time>
            <span>{blogData.readTime} min read</span>
          </div>
        </CardBody>
      </Card>
    </Link>
  );
};
