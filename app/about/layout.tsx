import { Container } from '@/components/container/Container';
import { UserHeader } from '@/components/user-header/UserHeader';
import { Tabs } from '@/components/tabs/Tabs';

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="relative -top-10">
      <div className="h-40 md:h-48 w-full  bg-gradient-to-l from-pink-300 via-purple-300 to-indigo-400 z-0" />

      <Container>
        <UserHeader />
        <div className="max-w-screen-lg m-auto xl:m-0 flex flex-col gap-10 mt-10">
          <Tabs />
          {children}
        </div>
      </Container>
    </section>
  );
};

export default AboutLayout;
