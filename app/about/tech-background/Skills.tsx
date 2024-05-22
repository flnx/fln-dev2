import { Chip } from '@nextui-org/react';
import skills from '@/constants/skills.json';

type Skill = {
  name: string;
  img: string;
};

export const Skills = () => {
  return (
    <div className="flex flex-wrap gap-3 max-w-md">
      {skills.map((s: Skill) => (
        <Chip key={s.name} className="bg-slate-800 text-white">
          <code className="font-semibold">{s.name}</code>
        </Chip>
      ))}
    </div>
  );
};
