import Image from 'next/image';
import { FC } from 'react';

import { ISkill } from '@/types';

import styles from './SkillElement.module.scss';

interface IProps {
  skill: ISkill;
}

export const SkillElement: FC<IProps> = ({ skill }) => {
  return (
    <>
      <div title={skill.title} className={styles.container}>
        <Image
          src={`/icons/${skill.icon}.svg`}
          alt={`${skill.title} icon`}
          width={40}
          height={40}
        />
      </div>
    </>
  );
};
