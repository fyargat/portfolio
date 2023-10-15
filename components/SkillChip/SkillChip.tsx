'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FC } from 'react';

import { ISkill } from '@/types';

import styles from './SkillChip.module.scss';

interface IProps {
  skill: ISkill;
}

export const SkillChip: FC<IProps> = ({ skill }) => {
  return (
    <motion.div
      drag
      dragMomentum={false}
      whileDrag={{ scale: 1.2, zIndex: 10 }}
      dragSnapToOrigin
      className={styles.container}
    >
      <Image
        src={`/images/icons/${skill.icon}.svg`}
        width={16}
        height={16}
        alt={`${skill.title} icon`}
        loading='lazy'
        draggable={false}
      />
      <p>{skill.title}</p>
    </motion.div>
  );
};
