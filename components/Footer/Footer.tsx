import { FC } from 'react';

import { Logo } from '@/components/Logo';

import { getCurrentYear } from '@/utils/time';

import styles from './Footer.module.scss';

interface IProps {}

export const Footer: FC<IProps> = () => {
  return (
    <footer className={styles.container}>
      <div className='wrap'>
        <div className={styles.wrapper}>
          <p className={styles.text}>Fyargat Bikbaev · {getCurrentYear()}</p>
          <div className={styles.logo}>
            <Logo />
          </div>
          <p className={styles.text}>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
