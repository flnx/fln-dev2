import { GithubIcon } from '@/components/icons';
import Link from 'next/link';

type GithubProps = {
  link: string;
};

export const Github = ({ link }: GithubProps) => {
  return (
    <div className="flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4 ml-auto">
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center px-4 py-2 border border-gray-800 hover:border-white shadow-sm text-sm rounded-md text-white font-mono bg-black focus:outline-none focus:ring-0 transition-all"
      >
        <GithubIcon size={24} className="mr-3" />
        <span>View GitHub Profile</span>
      </Link>
    </div>
  );
};
