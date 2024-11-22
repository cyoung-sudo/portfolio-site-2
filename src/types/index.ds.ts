export interface IProject {
  id: number;
  name: string;
  about: string;
  website: string;
  images: string[];
  tech: string[];
  repos: { [key: string]: string },
  deployed: boolean;
  auth: boolean;
}