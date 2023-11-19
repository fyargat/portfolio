import dynamic from 'next/dynamic';
import Image from 'next/image';
import { FC, useState } from 'react';

import { SkillChip } from '@/components/SkillChip';

import { IProject } from '@/types';

import { Star } from '../Star';
import styles from './Project.module.scss';

const Slider = dynamic(
  () => import('@/components/Slider').then((m) => m.Slider),
  {
    ssr: false,
  },
);

interface IProps {
  project: IProject;
}

export const Project: FC<IProps> = ({ project }) => {
  const [isSliderMount, setIsSliderMount] = useState<boolean>(false);

  const isDifficulty = project.difficulty === 5;

  return (
    <article className={styles.container}>
      {!isSliderMount ? (
        <Image
          src={`/images/projects/${project.images[0]}`}
          width={1080}
          height={608}
          alt={`image`}
          draggable={false}
          loading='lazy'
        />
      ) : null}

      <Slider
        mount={setIsSliderMount}
        images={project.images}
        delay={project.autoPlayDelay}
      />

      <div className={styles.head}>
        {isDifficulty && <Star isFill />}
        <h3 className={styles.title}>{project.title}</h3>
      </div>
      <p className={styles.text}>{project.description}</p>
      <ul className={styles.list}>
        {project.skills.map((skill) => (
          <li key={skill.id} className={styles.item}>
            <SkillChip skill={skill} />
          </li>
        ))}
      </ul>
      <div className={styles.links}>
        {project.links.map(({ link, title }) => (
          <a
            key={link}
            className={styles.link}
            href={link}
            target='_blank'
            rel='noopener noreferrer'
          >
            {title}
          </a>
        ))}
      </div>
    </article>
  );
};
