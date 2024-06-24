import { Card, CardHeader, CardBody } from '@nextui-org/card';
import { Divider } from '@nextui-org/divider';

import { AnchorIcon, EmailIcon, GithubIcon, LinkedInIcon } from '../icons';
import { subtitle, title } from '../primitives';
import { Link } from '@nextui-org/link';
import { IconSvgProps } from '@/types';
import { FC } from 'react';
import { siteConfig } from '@/config/site';

export const Footer = () => {
  return (
    <footer className="pb-12 pt-24 my-12 text-small border-t border-divider">
      <div className="text-center mb-14">
        <h3 className={title({ size: 'sm' })}>Contact</h3>
        <p className={subtitle({ class: '!text-base' })}>You can find me on</p>
      </div>
      <div className="container mx-auto max-w-[400px] sm:max-w-screen-lg px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 justify-center">
          <Link isExternal href={siteConfig.links.github}>
            <FooterCard
              title="Github"
              description="Check my projects, report bugs, request features or contribute to a project."
              Icon={GithubIcon}
            />
          </Link>
          <Link isExternal href={siteConfig.links.linkedIn}>
            <FooterCard
              title="LinkedIn"
              description="I'm still figuring out LinkedIn, but feel free to connect."
              Icon={LinkedInIcon}
            />
          </Link>
          <Link href={`mailto:${siteConfig.links.email}`}>
            <FooterCard
              title="Email"
              description="Feel free to reach out! Whether you have a project idea or a question."
              Icon={EmailIcon}
            />
          </Link>
        </div>
        <Rights />
      </div>
    </footer>
  );
};

type FooterCardProps = {
  Icon: FC<IconSvgProps>;
  title: string;
  description: string;
};

const FooterCard = ({ Icon, title, description }: FooterCardProps) => {
  return (
    <Card className="dark:bg-neutral-950 !w-full !h-full">
      <CardHeader className="flex gap-3">
        <Icon size={32} />
        <div className="flex gap-3 items-center">
          <p className="text-base">{title}</p>
        </div>
        <AnchorIcon />
      </CardHeader>
      <Divider className="bg-secondary" />
      <CardBody>
        <p className="text-default-500 text-sm font-mono">{description}</p>
      </CardBody>
    </Card>
  );
};

export const Rights = () => {
  return (
    <div className="text-small mt-10 text-center">
      &copy; {new Date().getFullYear()} webdevkalo. All Rights Reserved
    </div>
  );
};
