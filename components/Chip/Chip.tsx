import { FC } from 'react';

import styles from './Chip.module.scss';

interface IProps {
  children: React.ReactNode;
}

export const Chip: FC<IProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
