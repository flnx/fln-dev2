'use client';

// Components
import { Link } from '@nextui-org/link';
import { Snippet } from '@nextui-org/snippet';
import { Code } from '@nextui-org/code';
import { GithubIcon } from '@/components/icons';
import { Image } from '@nextui-org/image';

import { title, subtitle } from '@/components/primitives';
import { siteConfig } from '@/config/site';
import { button as buttonStyles } from '@nextui-org/theme';
import clsx from 'clsx';

export const Showcase = () => {
  return (
    <section>
      <div className="md:flex md:gap-14">
        {/* Left: Intro */}
        <section className="flex-1 md:pt-10 xl:pt-12">
          <div className="space-y-8 py-8 md:py-10 lg:pr-27">
            <Intro />
            <Buttons />
          </div>
        </section>

        {/* Right: Image (Desktop only) */}
        <div className="hidden md:flex-1 md:flex md:items-center md:justify-center">
          <Image
            src={'/images/showcase/showcase.png'}
            alt="image"
            isBlurred
            className="w-full h-auto object-contain rounded-b-full"
          />
        </div>
      </div>
    </section>
  );
};

const Intro = () => {
  return (
    <div className="inline-block max-w-xl space-y-10 flex-1">
      <h1 className={title({ class: 'md:!leading-tight tracking-normal' })}>
        I'm Kalo, I like
        <span className={title({ class: 'text-pink-700' })}> coding&nbsp;</span>
        and sharing my experiences in the world of web development
      </h1>

      <p className={subtitle({ class: '!text-base' })}>
        Creating and deploying interactive, mobile-friendly and accessible web
        applications.
      </p>
    </div>
  );
};

const Buttons = () => {
  return (
    <div className="flex gap-3">
      <Link
        isExternal
        className={buttonStyles({
          color: 'primary',
          radius: 'full',
          variant: 'shadow',
        })}
        href={siteConfig.links.docs}
      >
        Projects
      </Link>
      <Link
        isExternal
        className={buttonStyles({ variant: 'bordered', radius: 'full' })}
        href={siteConfig.links.github}
      >
        <GithubIcon size={20} />
        GitHub
      </Link>
    </div>
  );
};

const ShowcaseSnippet = () => {
  return (
    <div className="mt-8">
      <Snippet hideCopyButton hideSymbol variant="flat">
        <span>
          Get started by editing <Code color="primary">app/page.tsx</Code>
        </span>
      </Snippet>
    </div>
  );
};
