import { FC } from 'react';

import { SkillCard } from '@/components/SkillCard';

import styles from './SkillsScreen.module.scss';

interface IProps {}

export const SkillsScreen: FC<IProps> = () => {
  return (
    <section className={styles.container}>
      <div className='wrap'>
        <h2 className={styles.title}>Skills</h2>

        <ul className={styles.list}>
          <li className={styles.item}>
            <h3 className={styles.itemTitle}>Front-end</h3>
            <SkillCard />
          </li>

          <li className={styles.item}>
            <h3 className={styles.itemTitle}>Back-end</h3>
            <SkillCard />
          </li>

          <li className={styles.item}>
            <h3 className={styles.itemTitle}>Miscellaneous</h3>
            <SkillCard />
          </li>
        </ul>
      </div>
    </section>
  );
};
