import { Metadata } from 'next';
import { Container } from '@/components/container/Container';
import { Project } from '@/components/projects/Project';
import { personSchema } from '@/static/seo-schemas/personSchema';

import projects from '@/constants/projects.json';

export const metadata: Metadata = {
  title: 'Personal Projects',
  description: 'Explore my web development portfolio featuring React, Next.js, TypeScript, CSS, HTML and more.',
  openGraph: {
    title: "Kaloyan's Personal Projects",
    description: "A list of my personal projects",
    siteName: 'webdevkalo',
    url: 'https://webdevkalo.vercel.app/projects',
    type: 'website',
    locale: 'en-US'
  },
};

const Projects = () => {
  return (
    <Container>
      <section className="max-w-screen-md m-auto mt-9">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <h1 className="text-4xl font-bold tracking-tight mb-12">Personal Projects</h1>

        {projects.map((p, i, arr) => (
          <Project {...p} divider={!!arr[i + 1]} key={p.name} />
        ))}
      </section>
    </Container>
  );
};

export default Projects;
