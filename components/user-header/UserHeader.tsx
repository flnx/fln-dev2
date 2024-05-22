import { Image } from '@nextui-org/react';
import { CheckMark } from './components/CheckMark';
import { Github } from './components/Github';

export const UserHeader = () => {
  return (
    <header className="mb-10">
      <div className="md:flex">
        {/* Image Section*/}
        <section className="-mt-20">
          <Image
            isBlurred
            radius="full"
            width={130}
            src="/images/me.jpg"
            alt="NextUI Album Cover"
            className="m-5"
          />
        </section>

        {/* Profile Info Section */}
        <section className="w-full mt-2 md:h-14 sm:flex sm:items-center">
          <div className="flex gap-2 items-center mb-8 sm:mb-0 sm:ml-11">
            <h2 className="text-2xl">Kaloyan Georgiev</h2>
            <CheckMark />
          </div>

          <Github link="https://github.com/flnx" />
        </section>
      </div>
    </header>
  );
};
