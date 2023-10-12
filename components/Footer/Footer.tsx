import cn from 'classnames';
import Image from 'next/image';
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
          <p className={cn(styles.text, styles.textCopyright)}>
            <span className={styles.copyright}>
              <Image
                src='/icons/copyright.svg'
                width={20}
                height={20}
                alt='copyright'
              />
            </span>
            All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
