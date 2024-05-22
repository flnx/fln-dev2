import { Container } from '@/components/container/Container';
import { Projects } from '@/components/projects/Projects';
import { Showcase } from '@/components/showcase/Showcase';
import { Blog } from '@/components/blog/Blog';

import { title } from '@/components/primitives';
import { getLatestArticles } from './api/blogs';
import projects from '@/constants/projects.json';

import { personSchema } from '@/static/seo-schemas/personSchema';

export default async function Home() {
  const blogs = await getLatestArticles();

  return (
    <Container>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <div className="py-16 space-y-24 md:space-y-44">
        <Showcase />
        <div>
          <h4
            className={title({
              fullWidth: true,
              size: 'sm',
              class: 'text-center sm:text-left mb-10 text-2xl sm:text-3xl',
            })}
          >
            Personal Projects
          </h4>

          <Projects projects={projects} />

          <section className="pt-36">
            <h4
              className={title({
                fullWidth: true,
                size: 'sm',
                class: 'text-center sm:text-left mb-10 text-2xl sm:text-3xl',
              })}
            >
              Latest Articles
            </h4>

            <div className="grid gap-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {blogs.map((b) => (
                <Blog blogData={b} key={b.id} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </Container>
  );
}
