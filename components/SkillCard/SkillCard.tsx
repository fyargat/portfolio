import { FC } from 'react';

import styles from './SkillCard.module.scss';

interface IProps {}

export const SkillCard: FC<IProps> = () => {
  return <div className={styles.container}>SkillCard</div>;
};
