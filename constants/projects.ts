import { Projects } from '../types';

export const PROJECTS: Projects = [
  [
    {
      id: 1,
      title: 'Kanban Task Management',
      description:
        'Fully-functional task management app with a light/dark mode toggle.',
      image: 'kanban.jpg',
      liveLink: [{ link: 'http://89.223.120.183:3000' }],
      codeLink: 'https://github.com/fyargat/kanban-task-manager',
      difficulty: 5,
      skills: [
        { id: 1, icon: 'vue', title: 'Vue' },
        { id: 2, icon: 'nuxt', title: 'Nuxt' },
        { id: 3, icon: 'sass', title: 'Sass' },
        { id: 4, icon: 'storybook', title: 'Storybook' },
        { id: 5, icon: 'pinia', title: 'Pinia' },
      ],
    },
    {
      id: 2,
      title: 'Barley Break',
      description:
        'The «Barley Break» is a classic brainteaser where you need to slide numbered tiles on a game board to arrange them in ascending order.',
      image: 'barley-break.png',
      liveLink: [{ link: 'https://fyargat.github.io/barley-break/' }],
      codeLink: 'https://github.com/fyargat/barley-break',
      difficulty: 4,
      skills: [
        { id: 1, icon: 'react', title: 'React' },
        { id: 2, icon: 'zustand', title: 'Zustand' },
        { id: 3, icon: 'typescript', title: 'Typescript' },
        { id: 4, icon: 'sass', title: 'Sass' },
      ],
    },
  ],
  [
    {
      id: 3,
      title: 'Tenderplan Landing Pages',
      description:
        'Tenderplan is a system for searching tenders, auctions, and government procurement.',
      image: 'tenderplan.png',
      difficulty: 3,
      liveLink: [
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
    },

    {
      id: 4,
      title: 'REST Countries API',
      description: 'REST Countries API with color theme switcher.',
      image: 'rest-countries-api.jpg',
      liveLink: [{ link: 'https://fyargat.github.io/rest-countries-api/' }],
      codeLink: 'https://github.com/fyargat/rest-countries-api',
      difficulty: 4,
      skills: [
        { id: 1, icon: 'vue', title: 'Vue' },
        { id: 2, icon: 'sass', title: 'Sass' },
        { id: 3, icon: 'storybook', title: 'Storybook' },
      ],
    },
  ],
];
