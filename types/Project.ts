export type Project = {
  name: string;
  description: string;
  stack: string[];
  live: string; // URL of the project
  sourceCode: string;
  imageUrls: string;
  divider?: boolean;
};
