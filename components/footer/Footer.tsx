import { Container } from '@/components/container/Container';
// import { GithubIcon } from '../github-icon/GithubIcon';
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card';
import { Divider } from '@nextui-org/divider';
// import Link from 'next/link';

import { AnchorIcon, GithubIcon } from '../icons';
import { subtitle, title } from '../primitives';
import { Link } from '@nextui-org/link';

export const Footer = () => {
  return (
    <footer className="pb-12 pt-24 my-12 text-small border-t border-divider">
      {/* <Divider className="my-24" /> */}
      <div className="text-center mb-14">
        <h3
          className={title({
            size: 'sm',
          })}
        >
          Contact
        </h3>
        <p className={subtitle({ class: '!text-base' })}>You can find me on</p>
      </div>
      <Container>
        <div className="flex gap-3 justify-center">
          <FooterCard />
          <FooterCard />
          <FooterCard />
        </div>
        <Rights />
      </Container>
    </footer>
  );
};

const FooterCard = () => {
  return (
    <Link isExternal href="https://github.com/flnx">
      <Card className="max-w-[300px] bg-neutral-950">
        <CardHeader className="flex gap-3">
          <GithubIcon size={32} />
          <div className="flex gap-3 items-center">
            <p className="text-base">Github</p>
            <AnchorIcon />
          </div>
        </CardHeader>
        <Divider className="bg-secondary" />
        <CardBody>
          <p className="text-default-500 text-sm font-mono">
            Check my projects, report bugs, request features or
            contribute to a project
          </p>
        </CardBody>
      </Card>
    </Link>
  );
};

export const Rights = () => {
  return (
    <div className="text-small mt-10 text-center">
      &copy; {new Date().getFullYear()} webdevkalo. All Rights Reserved
    </div>
  );
};
