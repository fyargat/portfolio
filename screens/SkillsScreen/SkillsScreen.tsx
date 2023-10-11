import { FC } from 'react';

import styles from './SkillsScreen.module.scss';

interface IProps {}

export const SkillsScreen: FC<IProps> = () => {
  return (
    <section className={styles.container}>
      <div className='wrap'>
        <h2 className={styles.title}>Skills</h2>
      </div>
    </section>
  );
};
