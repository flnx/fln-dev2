// import { GithubIcon } from '@/components/github-icon/GithubIcon';
import { GithubIcon } from '@/components/github-icon/GithubIcon';
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
        className="inline-flex justify-center px-4 py-2 border border-gray-800 hover:border-white shadow-sm text-sm font-medium rounded-md text-white font-mono bg-black focus:outline-none focus:ring-0 transition-all"
      >
        {/* <GithubLucideIcon size={28} className="rounded-full bg-white p-1" color='#222' fill="#000" /> */}
        <GithubIcon />
        <span>View GitHub Profile</span>
      </Link>
    </div>
  );
};
