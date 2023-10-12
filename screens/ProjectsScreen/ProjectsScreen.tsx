'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { FC, useRef } from 'react';

import { Project } from '@/components/Project';

import { Screen, TABLET_BREAKPOINT } from '@/constants';
import { useScreenWidth } from '@/hooks/useScreenWidth';

import styles from './ProjectsScreen.module.scss';

interface IProps {}

export const ProjectsScreen: FC<IProps> = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['20% end', 'end start'],
  });
  const screenWidth = useScreenWidth();

  const isTablet = screenWidth >= TABLET_BREAKPOINT;

  const yDown = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const yUp = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <section id={Screen.Projects} ref={sectionRef} className={styles.container}>
      <div className='wrap'>
        <h2 className={styles.title}>Projects</h2>

        <div className={styles.projects}>
          <div className={styles.column}>
            <motion.ul
              style={isTablet ? { y: yDown } : { y: 0 }}
              className={styles.list}
            >
              <li className={styles.item}>
                <Project image='/images/georgia-tech.jpg' />
              </li>
              <li className={styles.item}>
                <Project image='/images/eleanor.jpg' />
              </li>
            </motion.ul>
          </div>

          <div className={styles.column}>
            <motion.ul
              style={isTablet ? { y: yUp } : { y: 0 }}
              className={styles.list}
            >
              <li className={styles.item}>
                <Project image='/images/kanban.png' />
              </li>

              <li className={styles.item}>
                <Project image='/images/milna.jpg' />
              </li>
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
};
