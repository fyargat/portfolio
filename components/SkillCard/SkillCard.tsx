'use client';

import { FC, useRef } from 'react';

import styles from './SkillCard.module.scss';

interface IProps {}

export const SkillCard: FC<IProps> = () => {
  const boundingRef = useRef<DOMRect | null>(null);

  const handleMouseLeave = () => (boundingRef.current = null);
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    boundingRef.current = e.currentTarget.getBoundingClientRect();
  };
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!boundingRef.current) return;

    const x = e.clientX - boundingRef.current.left;
    const y = e.clientY - boundingRef.current.top;
    const xPercentage = x / boundingRef.current.width;
    const yPercentage = y / boundingRef.current.height;
    const xRotation = (xPercentage - 0.5) * 20;
    const yRotation = (0.5 - yPercentage) * 20;

    e.currentTarget.style.setProperty('--x-rotation', `${yRotation}deg`);
    e.currentTarget.style.setProperty('--y-rotation', `${xRotation}deg`);
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.innerContainer}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
      ></div>
    </div>
  );
};
