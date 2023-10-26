import { Projects } from '../types';

export const PROJECTS: Projects = [
  [
    {
      id: 1,
      title: 'Kanban Task Management',
      description:
        'Fully-functional task management app with a light/dark mode toggle.',
      images: ['kanban-1.png', 'kanban-2.png', 'kanban-3.png', 'kanban-4.png'],
      links: [
        {
          title: 'Code',
          link: 'https://github.com/fyargat/kanban-task-manager',
        },
        {
          title: 'Live',
          link: 'https://kanban.fyargat.com/',
        },
      ],
      difficulty: 5,
      skills: [
        { id: 1, icon: 'vue', title: 'Vue' },
        { id: 2, icon: 'nuxt', title: 'Nuxt' },
        { id: 3, icon: 'sass', title: 'Sass' },
        { id: 4, icon: 'storybook', title: 'Storybook' },
        { id: 5, icon: 'pinia', title: 'Pinia' },
        { id: 6, icon: 'docker', title: 'Docker' },
      ],
      autoPlayDelay: 3900,
    },
    {
      id: 2,
      title: 'Barley Break',
      description:
        'The «Barley Break» is a classic brainteaser where you need to slide numbered tiles on a game board to arrange them in ascending order.',
      images: [
        'barley-break-1.png',
        'barley-break-2.png',
        'barley-break-3.png',
      ],
      links: [
        {
          title: 'Code',
          link: 'https://github.com/fyargat/barley-break',
        },
        {
          title: 'Live',
          link: 'https://fyargat.github.io/barley-break/',
        },
      ],
      difficulty: 4,
      skills: [
        { id: 1, icon: 'react', title: 'React' },
        { id: 2, icon: 'zustand', title: 'Zustand' },
        { id: 3, icon: 'typescript', title: 'Typescript' },
        { id: 4, icon: 'sass', title: 'Sass' },
      ],
      autoPlayDelay: 3800,
    },
  ],
  [
    {
      id: 3,
      title: 'Tenderplan Landing Pages',
      description:
        'Tenderplan is a system for searching tenders, auctions, and government procurement.',
      images: [
        'tenderplan-1.png',
        'tenderplan-2.png',
        'tenderplan-3.png',
        'tenderplan-4.png',
        'tenderplan-5.png',
        'tenderplan-6.png',
      ],
      difficulty: 3,
      links: [
        {
          title: 'Search',
          link: 'https://tenderplan.ru/search',
        },
        {
          title: 'Control',
          link: 'https://tenderplan.ru/control',
        },
        {
          title: 'Prices',
          link: 'https://tenderplan.ru/rates',
        },
        {
          title: 'Careers',
          link: 'https://tenderplan.ru/careers',
        },
      ],
      skills: [
        { id: 1, icon: 'react', title: 'React' },
        { id: 2, icon: 'sass', title: 'Sass' },
        { id: 3, icon: 'gsap', title: 'Gsap' },
      ],
      autoPlayDelay: 4000,
    },

    {
      id: 4,
      title: 'REST Countries API',
      description:
        'The application displays a list of cards with information about different countries, allowing the user to navigate to a detailed page about the selected country. It also includes a theme toggle option.',
      images: [
        'rest-countries-api-1.png',
        'rest-countries-api-2.png',
        'rest-countries-api-3.png',
        'rest-countries-api-4.png',
      ],
      links: [
        {
          title: 'Backend',
          link: 'https://github.com/fyargat/countries_api',
        },
        {
          title: 'Frontend',
          link: 'https://github.com/fyargat/countries_client',
        },
        {
          title: 'Live',
          link: 'https://countries.fyargat.com/',
        },
      ],
      difficulty: 4,
      skills: [
        { id: 1, icon: 'nextjs', title: 'Next' },
        { id: 2, icon: 'sass', title: 'Sass' },
        { id: 3, title: 'FSD' },
        { id: 4, icon: 'nestjs', title: 'Nest' },
        { id: 5, icon: 'prisma', title: 'Prisma' },
        { id: 6, icon: 'postgres', title: 'Postgres' },
        { id: 7, icon: 'swagger', title: 'Swagger' },
      ],
      autoPlayDelay: 4200,
    },
  ],
];
