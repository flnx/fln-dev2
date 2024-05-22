import { Divider } from '@nextui-org/react';
import { Skills } from './Skills';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tech Background',
  description: "HTML, CSS/SCSS, Tailwind, JavaScript (JS), React, Next.js, Express, MongoDB, Mongoose, Unit Testing, and Git.",
  openGraph: {
    title: 'Tech Background of Kaloyan Georgiev',
    description: "Creating and deploying interactive, mobile-friendly and accessible apps",
    siteName: 'webdevkalo',
    url: 'https://webdevkalo.vercel.app/about/tech-background',
    type: 'profile',
    locale: 'en-US'
  },
};

const TechBackground = async () => {
  return (
    <section>
      <h1 className="text-xl font-semibold mb-10">
        Creating and deploying interactive & mobile-friendly applications
      </h1>

      <article>
        <code className="text-medium inline-block mb-5">Skills</code>
        <Skills />

        <Divider className="my-12 max-w-screen-md" />
      </article>
    </section>
  );
};
export default TechBackground;
