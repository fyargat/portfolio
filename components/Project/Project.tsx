import Image from 'next/image';
import { FC } from 'react';

import { SkillChip } from '@/components/SkillChip';
import { Star } from '@/components/Star';

import { MAX_DIFFICULTY_STARS } from '@/constants';
import { IProject } from '@/types';

import styles from './Project.module.scss';

interface IProps {
  project: IProject;
}

export const Project: FC<IProps> = ({ project }) => {
  return (
    <article className={styles.container}>
      <div className={styles.image}>
        <Image
          src={`/images/projects/${project.image}`}
          width={1000}
          height={1000}
          alt={`${project.title} image`}
          draggable={false}
          loading='lazy'
        />
      </div>
      <div className={styles.head}>
        <h3 className={styles.title}>{project.title}</h3>

        <div className={styles.stars} title='Difficulty'>
          {Array(MAX_DIFFICULTY_STARS)
            .fill('_')
            .map((_, index) => {
              const isFill = index + 1 <= project.difficulty;

              return <Star key={index} isFill={isFill} />;
            })}
        </div>
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
        {project.codeLink ? (
          <a
            className={styles.link}
            href={project.codeLink}
            target='_blank'
            rel='noopener noreferrer'
          >
            GitHub Link
          </a>
        ) : null}
        {project.liveLink.map(({ link, title }) => (
          <a
            key={link}
            className={styles.link}
            href={link}
            target='_blank'
            rel='noopener noreferrer'
          >
            {title ?? 'Live Link'}
          </a>
        ))}
      </div>
    </article>
  );
};
