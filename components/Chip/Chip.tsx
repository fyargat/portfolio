'use client';

import { motion } from 'framer-motion';
import { FC } from 'react';

import styles from './Chip.module.scss';

interface IProps {
  children: React.ReactNode;
}

export const Chip: FC<IProps> = ({ children }) => {
  return (
    <motion.div
      drag
      dragMomentum={false}
      whileDrag={{ scale: 1.2, zIndex: 10 }}
      dragSnapToOrigin
      className={styles.container}
    >
      {children}
    </motion.div>
  );
};
