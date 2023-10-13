export interface ISkill {
  id: number;
  icon: string;
  title: string;
}

export type Skills = ISkill[][];

export interface IProject {
  id: number;
  title: string;
  description: string;
  image: string;
  liveLink: ILink[];
  codeLink?: string;
  skills: ISkill[];
}

export interface ILink {
  title?: string;
  link: string;
}

export type Projects = IProject[][];
