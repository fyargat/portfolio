'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { FC, useRef } from 'react';

import styles from './IntroScreen.module.scss';

interface IProps {}

export const IntroScreen: FC<IProps> = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', '60% start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section ref={sectionRef} className={styles.container}>
      <div className='wrap'>
        <motion.h1 style={{ x }} className={styles.title}>
          Hi, I’m Fyargat. <br /> Frontend Developer.
        </motion.h1>
      </div>
    </section>
  );
};
