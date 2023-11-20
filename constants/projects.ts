import { Projects } from '../types';

export const PROJECTS: Projects = [
  [
    {
      id: 1,
      title: 'Link Sharing App | DevLinks',
      description:
        'DevLinks - your personal assistant for exchanging useful links. With the help of an elegant interface, you can drag, sort, and preview your links, as well as see previews on mobile devices. Now you can easily share your favorite resources, ensuring convenience and efficiency.',
      images: [
        'link-sharing-app-1.png',
        'link-sharing-app-2.png',
        'link-sharing-app-3.png',
        'link-sharing-app-4.png',
        'link-sharing-app-5.png',
      ],
      links: [
        {
          title: 'Backend',
          link: 'https://github.com/fyargat/link_sharing_app_api',
        },
        {
          title: 'Frontend',
          link: 'https://github.com/fyargat/link_sharing_app_client',
        },
        {
          title: 'Storybook',
          link: 'https://storybook--6558d06adebe37cbea392498.chromatic.com',
        },
        {
          title: 'Live',
          link: 'https://link-sharing-app.fyargat.com',
        },
      ],
      difficulty: 5,
      skills: [
        { id: 1, icon: 'nextjs', title: 'Next' },
        { id: 2, icon: 'sass', title: 'Sass' },
        { id: 3, title: 'FSD' },
        { id: 4, icon: 'react-query', title: 'React-Query' },
        { id: 5, icon: 'react-hook-form', title: 'React-Hook-Form' },
        { id: 6, title: 'yup' },
        { id: 7, icon: 'nestjs', title: 'Nest' },
        { id: 8, icon: 'prisma', title: 'Prisma' },
        { id: 9, icon: 'postgres', title: 'Postgres' },
        { id: 10, icon: 'swagger', title: 'Swagger' },
        { id: 11, icon: 'docker', title: 'Docker' },
      ],
      autoPlayDelay: 3800,
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
    {
      id: 3,
      title: 'Telegram Bot | Outlinet',
      description:
        'Outlinet - telegram bot that provides personal VPN keys for the Outline program. Get your key in a single message and set up a secure internet connection. Reliable data protection on your device with minimal effort.',
      images: [
        'outlinet-1.png',
        'outlinet-2.png',
        'outlinet-3.png',
        'outlinet-4.png',
      ],
      links: [
        {
          title: 'Client',
          link: 'https://gitlab.com/vpn-bot/bot',
        },
        {
          title: 'API',
          link: 'https://gitlab.com/vpn-bot/api',
        },
        {
          title: 'Admin',
          link: 'https://gitlab.com/vpn-bot/admin_bot',
        },
        {
          title: 'Live',
          link: 'https://t.me/outlinet_bot',
        },
      ],
      difficulty: 4,
      skills: [
        { id: 1, icon: 'nestjs', title: 'Nest' },
        { id: 2, icon: 'mongo', title: 'MongoDB' },
        { id: 3, icon: 'mongoose', title: 'Mongoose' },
        { id: 4, title: 'nestjs-telegraf' },
        { id: 5, icon: 'rabbitmq', title: 'RabbitMQ' },
        { id: 6, title: 'date-fns' },
        { id: 7, icon: 'sentry', title: 'Sentry' },
      ],
      autoPlayDelay: 3950,
    },
  ],
  [
    {
      id: 4,
      title: 'Kanban Task Management',
      description:
        'Task management application providing users with a convenient working environment in both light and dark modes. Easily create, edit, and delete tasks, and switch between themes based on personal preferences.',
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
      difficulty: 4,
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
      id: 5,
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
      difficulty: 4,
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
      id: 6,
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
