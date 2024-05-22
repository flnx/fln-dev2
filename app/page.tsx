import { Projects } from '@/components/projects/Projects';
import { Showcase } from '@/components/showcase/Showcase';

import projects from '@/constants/projects.json';

export default async function Home() {
  return (
    <>
      <Showcase />
      <Projects projects={projects} />
    </>
  );
}
