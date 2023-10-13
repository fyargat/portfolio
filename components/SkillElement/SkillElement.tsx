import { motion } from 'framer-motion';
import Image from 'next/image';
import { FC, RefObject } from 'react';

import { ISkill } from '@/types';

import styles from './SkillElement.module.scss';

interface IProps {
  skill: ISkill;
  constraintsRef: RefObject<Element>;
}

export const SkillElement: FC<IProps> = ({ skill, constraintsRef }) => {
  return (
    <>
      <motion.div
        title={skill.title}
        drag
        dragMomentum={false}
        dragTransition={{ timeConstant: 1000, power: 0.1 }}
        whileDrag={{ scale: 1.1, zIndex: 10 }}
        dragConstraints={constraintsRef}
        className={styles.container}
      >
        <Image
          src={`/icons/${skill.icon}.svg`}
          alt={`${skill.title} icon`}
          width={40}
          height={40}
          draggable={false}
        />
      </motion.div>
    </>
  );
};
