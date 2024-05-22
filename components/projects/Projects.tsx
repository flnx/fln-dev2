import { Project } from '@/components/projects/Project';
import type { Project as TProject } from '@/types/Project';

type ProjectsProps = {
  projects: TProject[];
};

export const Projects = ({ projects }: ProjectsProps) => {
  return (
    <section>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <Project {...p} key={p.name} setSizes={true} />
        ))}
      </div>
    </section>
  );
};