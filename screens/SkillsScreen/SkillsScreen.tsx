'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { FC, useRef } from 'react';

import { SkillCard } from '@/components/SkillCard';

import { DESKTOP_BREAKPOINT, Screen } from '@/constants';
import {
  BACKEND_SKILLS,
  FRONTEND_SKILLS,
  MISCELLANEOUS_SKILLS,
} from '@/constants/skills';
import { useScreenWidth } from '@/hooks/useScreenWidth';

import styles from './SkillsScreen.module.scss';

interface IProps {}

export const SkillsScreen: FC<IProps> = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['-80% start', '-30% start'],
  });
  const screenWidth = useScreenWidth();

  const isDesktop = screenWidth >= DESKTOP_BREAKPOINT;

  const yUp = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const xLeft = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const xRight = useTransform(scrollYProgress, [0, 1], [-50, 0]);

  return (
    <section id={Screen.Skills} ref={sectionRef} className={styles.container}>
      <div className='wrap'>
        <h2 className={styles.title}>Skills</h2>

        <ul className={styles.list}>
          <li className={styles.item}>
            <h3 className={styles.itemTitle}>Front-end</h3>
            <motion.div
              style={
                isDesktop
                  ? {
                      y: yUp,
                      x: xRight,
                      transition: 'transform 0.3s ease',
                    }
                  : { y: 0 }
              }
            >
              <SkillCard skills={FRONTEND_SKILLS} />
            </motion.div>
          </li>

          <li className={styles.item}>
            <h3 className={styles.itemTitle}>Back-end</h3>
            <motion.div
              style={
                isDesktop
                  ? {
                      y: yUp,
                      x: xLeft,
                      transition: 'transform 0.3s ease',
                    }
                  : { y: 0 }
              }
            >
              <SkillCard skills={BACKEND_SKILLS} />
            </motion.div>
          </li>

          <li className={styles.item}>
            <h3 className={styles.itemTitle}>Miscellaneous</h3>
            <motion.div
              style={
                isDesktop
                  ? {
                      x: xLeft,
                      transition: 'transform 0.3s ease',
                    }
                  : { y: 0 }
              }
            >
              <SkillCard skills={MISCELLANEOUS_SKILLS} />
            </motion.div>
          </li>
        </ul>
      </div>
    </section>
  );
};
