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
          title: 'Search Page',
          link: 'https://tenderplan.ru/search',
        },
        {
          title: 'Control Page',
          link: 'https://tenderplan.ru/control',
        },
        {
          title: 'Prices Page',
          link: 'https://tenderplan.ru/rates',
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
      description: 'REST Countries API with color theme switcher.',
      images: [
        'rest-countries-api-1.png',
        'rest-countries-api-2.png',
        'rest-countries-api-3.png',
        'rest-countries-api-4.png',
        'rest-countries-api-5.png',
      ],
      links: [
        {
          title: 'Code',
          link: 'https://github.com/fyargat/rest-countries-api',
        },
        {
          title: 'Live',
          link: 'https://fyargat.github.io/rest-countries-api/',
        },
      ],
      difficulty: 4,
      skills: [
        { id: 1, icon: 'vue', title: 'Vue' },
        { id: 2, icon: 'sass', title: 'Sass' },
        { id: 3, icon: 'storybook', title: 'Storybook' },
      ],
      autoPlayDelay: 4200,
    },
  ],
];
