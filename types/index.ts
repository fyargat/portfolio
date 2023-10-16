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
  images: string[];
  links: ILink[];
  difficulty: number;
  skills: ISkill[];
  autoPlayDelay: number;
}

export interface ILink {
  title: string;
  link: string;
}

export type Projects = IProject[][];
