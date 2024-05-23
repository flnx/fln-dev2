import Image from 'next/image';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { Divider } from '@nextui-org/divider';
import { Chip } from '@nextui-org/chip';
import type { Project as TProject } from '@/types/Project';
import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';
import { Popover, PopoverTrigger, PopoverContent } from '@nextui-org/popover';

type ExtendedProjectProps = TProject & { setSizes?: boolean };

export const Project = ({
  name,
  description,
  stack,
  live,
  sourceCode,
  imageUrls,
  divider,
  setSizes,
}: ExtendedProjectProps) => {
  return (
    <>
      <Card
        isBlurred
        isFooterBlurred
        className="bg-[#8c7851]/10 dark:border-none dark:bg-default-100/50 shadow-md relative"
        shadow="none"
      >
        <CardHeader className="flex-2">
          <Image
            alt="Album cover"
            className="aspect-video object-cover rounded-lg"
            src={imageUrls}
            width={1920}
            height={1080}
            sizes={
              setSizes
                ? '(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw'
                : '(min-width: 1024px) 50vw, 100vw'
            }
            quality={95}
          />
        </CardHeader>
        <CardBody className="flex-1 overflow-visible">
          <h1 className="text-2xl font-bold mb-4">{name}</h1>
          <p className="mb-6 text-sm font-mono">{description}</p>
          <TeckStack stack={stack} />
        </CardBody>
        <CardFooter className="dark:bg-black/20 dark:border-default-100">
          <Buttons sourceCode={sourceCode} live={live} />
        </CardFooter>
      </Card>
      {divider && (
        <Divider className="my-20 bg-gradient-to-l from-pink-300 via-purple-300 to-indigo-400" />
      )}
    </>
  );
};

const TeckStack = ({ stack }: { stack: string[] }) => {
  return (
    <div className="flex mt-auto flex-wrap gap-1">
      {stack.map((s) => (
        <Chip
          className="bg-default-800 text-white dark:bg-teal-400/10 dark:text-teal-300 text-tiny"
          key={s}
        >
          {s}
        </Chip>
      ))}
    </div>
  );
};

const Buttons = ({ live, sourceCode }: { live: string; sourceCode: string }) => {
  const isPrivate = !!!sourceCode;

  return (
    <div className="flex gap-1">
      <Link
        href={live}
        className="w-28 py-3 rounded-md text-tiny text-white bg-zinc-900 dark:bg-black/10 border border-transparent dark:border-teal-400/5 flex items-center justify-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        Live
      </Link>
      {isPrivate ? (
        <Popover placement="bottom" showArrow={true}>
          <PopoverTrigger>
            <Button className="w-28 py-3 rounded-md text-tiny text-white bg-zinc-900 dark:bg-black/10 border border-transparent dark:border-teal-400/5 flex items-center justify-center">
              Source Code
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="px-1 py-2">
              {/* <div className="text-small font-bold">Popover Content</div> */}
              <div className="text-tiny">
                This repository has been made private to protect sensitive
                information. Request access if needed.
              </div>
            </div>
          </PopoverContent>
        </Popover>
      ) : (
        <Button
          as={Link}
          href={sourceCode}
          className="w-28 py-3 rounded-md text-tiny text-white bg-zinc-900 dark:bg-black/10 border border-transparent dark:border-teal-400/5 flex items-center justify-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source Code
        </Button>
      )}
    </div>
  );
};
