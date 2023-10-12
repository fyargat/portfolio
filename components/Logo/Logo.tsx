'use client';

import { MotionConfig, motion, useAnimation, useInView } from 'framer-motion';
import { FC, useEffect, useRef } from 'react';

import styles from './Logo.module.scss';

interface IProps {}

const getRectVariants = (width: number) => ({
  hidden: { width: 0 },
  visible: { width },
});

const animationDuration = 0.5;

export const Logo: FC<IProps> = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(ref, {});

  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible').catch((error) => console.log('error', error));
    }
  }, [isInView, controls]);

  return (
    <div className={styles.container} ref={ref}>
      <div className={styles.iconContainer}>
        <svg
          viewBox='0 0 196 262'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect width='196' height='42' fill='#bbbbbb' />
          <rect y='109' width='177' height='41' fill='#bbbbbb' />
          <rect
            y='262'
            width='153'
            height='42'
            transform='rotate(-90 0 262)'
            fill='#bbbbbb'
          />
          <MotionConfig
            transition={{
              duration: animationDuration,
              ease: 'linear',
            }}
          >
            <motion.rect
              variants={getRectVariants(196)}
              transition={{ delay: animationDuration * 2 - 0.1 }}
              initial='hidden'
              animate={controls}
              width='196'
              height='42'
              fill='#ffffff'
            />
            <motion.rect
              variants={getRectVariants(177)}
              transition={{ delay: animationDuration - 0.1 }}
              initial='hidden'
              animate={controls}
              y='109'
              width='177'
              height='41'
              fill='#ffffff'
            />
            <motion.rect
              variants={getRectVariants(153)}
              initial='hidden'
              animate={controls}
              y='262'
              width='153'
              height='42'
              transform='rotate(-90 0 262)'
              fill='#ffffff'
            />
          </MotionConfig>
        </svg>
      </div>
    </div>
  );
};
