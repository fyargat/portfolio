import { motion } from 'framer-motion';
import Image from 'next/image';
import { FC } from 'react';

import styles from './Star.module.scss';

interface IProps {
  isFill?: boolean;
}

export const Star: FC<IProps> = ({ isFill = false }) => {
  const iconPath = isFill ? 'star-fill.svg' : 'star-outline.svg';

  return (
    <motion.div
      drag
      dragMomentum={false}
      whileDrag={{ scale: 1.1, zIndex: 10 }}
      dragSnapToOrigin
      className={styles.container}
    >
      <Image
        src={`/images/icons/${iconPath}`}
        alt={`star`}
        draggable={false}
        fill
      />
    </motion.div>
  );
};
