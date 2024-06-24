import { Divider } from '@nextui-org/divider';
import { Link } from '@nextui-org/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Frontend web developer with a passion for React, Next.js, and cool projects. Constantly learning and having fun. Explore my coding journey, along with my interests in running, fitness, and blogging about web development stuff and more!',
  openGraph: {
    title: 'About Kaloyan Georgiev',
    description:
      'A web developer with a knack for building interesting things on the internet',
    siteName: 'webdevkalo',
    url: 'https://webdevkalo.vercel.app/about',
    type: 'profile',
    locale: 'en-US',
  },
};

const About = () => {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-7">Hi there👋</h1>
      <article className="prose prose-p:text-foreground" aria-label="about me">
        <p>
          I'm a web developer with a knack for building cool things on the internet.
        </p>

        <p>
          I'm always seeking new ways to enhance my skills and the projects I work
          on. I love challenging myself and learning new stuff every day.
        </p>

        <p>
          My journey started back in 2021 when I decided to learn HTML/CSS in my free
          time just for fun. I never thought I would get serious about it. I just
          wanted to build basic web pages and see how it's done out of curiosity. I
          had a lot of fun, and 6-7 months later I decided to step up my game and
          learn the basics of JavaScript.
        </p>

        <p>
          At the beggining of 2022 I decided to take a JavaScript module at{' '}
          <Link href="https://softuni.bg/" isExternal>
            Softuni
          </Link>
          , just to see if I would like it. It turned out I did...
        </p>

        <Divider />

        <p>
          Besides coding, you can also find me on the street running or in the gym.
        </p>
      </article>
    </section>
  );
};

export default About;
