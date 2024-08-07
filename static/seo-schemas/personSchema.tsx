import { WithContext, Person } from 'schema-dts';

export const personSchema: WithContext<Person> = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Kaloyan',
  familyName: 'Georgiev',
  alternateName: 'webdevkalo',
  jobTitle: 'Web Developer',
  email: 'webdevkalo@gmail.com',
  description: 'Web developer with a passion for building engaging interactive web applications and interactive experiences. Explore my portfolio and blog posts to learn more',
  knowsAbout: [
    'Web Development',
    'Frontend & Backend Development',
    'React',
    'NextJS',
    'HTML',
    'Tailwind',
    'CSS',
    'JavaScript',
    'Responsive Design',
    'MongoDB',
    'NodeJS',
    'Express',
    'Unit Testing',
    'Mongoose',
    'Git',
  ],
  alumniOf: [
    {
      '@type': 'EducationalOrganization',
      name: 'SoftUni',
      url: 'https://softuni.bg/',
    },
  ],
  url: 'https://www.webdevkalo.vercel.app',
  sameAs: ['https://github.com/flnx', 'https://linkedin.com/in/kalo-georgiev/'],
  image: '/images/me.jpg',
  worksFor: [
    {
      '@type': 'Project',
      name: 'Where Do I Go',
      description: 'A platform for sharing and exploring adventurous destinations around the globe and more',
      url: 'https://wheredoigo.onrender.com/',
      subjectOf: {
        '@type': 'CreativeWork',
        name: 'Technologies used',
        description: 'A list of technologies used in the project',
        discussionUrl: 'https://github.com/flnx/wheredoigo',
        keywords: [
          'React',
          'CSS Modules',
          'Express',
          'MongoDB',
          'Mongoose',
          'Cloudinary',
          'Vitest',
        ],
      },
    },
    {
      '@type': 'Project',
      name: 'ArtSpaceHub',
      description:'AI Image Generator & AI Art Platform',
      url: 'https://artspacehub.com/',
      subjectOf: {
        '@type': 'CreativeWork',
        name: 'Technologies used',
        description: 'A list of technologies used in the project',
        sameAs: ["https://www.facebook.com/artspacehub"],
        keywords: [
          'NextJS',
          'NextUI',
          'Tailwind',
          'Supabase',
          'AI Driven Model',
          'Typescript',
        ],
      },
    },
    {
      '@type': 'Project',
      name: 'Billionaire Cash Splash',
      description: 'Pick a billionaire and turn spending into comedy',
      url: 'https://billionaire-cash-splash.web.app/',
      subjectOf: {
        '@type': 'CreativeWork',
        name: 'Technologies used',
        description: 'A list of technologies used in the project',
        keywords: ['React', 'SCSS', 'Typescript', 'CSS Modules'],
        discussionUrl: 'https://github.com/flnx/Billionaire-Cash-Splash/tree/main',
      },
    },
    {
      '@type': 'Project',
      name: 'Shrinkifier',
      description: 'Image compressor & optimizer',
      url: 'https://shrinkifier.com/',
      subjectOf: {
        '@type': 'CreativeWork',
        name: 'Technologies used',
        description: 'A list of technologies used in the project',
        keywords: ['NextJS', 'TypeScript', 'Sharp', 'ShadCN', 'Tailwind', 'JSZip'],
        discussionUrl: 'https://github.com/flnx/ebike-world',
      },
    },
    {
      '@type': 'Project',
      name: 'webdevkalo',
      description: 'Personal Portfolio & Blog',
      url: 'https://webdevkalo.vercel.app',
      subjectOf: {
        '@type': 'CreativeWork',
        name: 'Technologies used',
        description: 'A list of technologies used in the project',
        keywords: ['NextJS', 'Typescript', 'NextUI', 'Tailwind', 'Resend'],
        discussionUrl: 'https://github.com/flnx/fln-dev2',
      },
    },
  ],
};
