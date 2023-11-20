// 'use client';
import cn from 'classnames';
import Image from 'next/image';
import { FC } from 'react';

import { YaGoalButton } from '@/components/YaGoalButton';

import { Screen } from '@/constants';

import styles from './ContactScreen.module.scss';

interface IProps {}

export const ContactScreen: FC<IProps> = () => {
  return (
    <section id={Screen.Contact} className={styles.container}>
      <div className='wrap'>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Contact</h2>
          <div className={styles.body}>
            <div className={cn(styles.block, styles.blockMail)}>
              <p className={styles.text}>Write me an e-mail at:</p>

              <div>
                <div>
                  <Image
                    src='/images/icons/mail.svg'
                    width={50}
                    height={38}
                    alt='mail icon'
                    loading='lazy'
                    draggable={false}
                  />
                </div>

                <p>
                  <YaGoalButton goal='click_email'>
                    <a
                      className={styles.mail}
                      href='mailto:bikbaevf19@gmail.com'
                    >
                      bikbaevf19@gmail.com
                    </a>
                  </YaGoalButton>
                </p>
              </div>
            </div>

            <p className={styles.or}>or</p>

            <div className={cn(styles.block)}>
              <p className={styles.text}>Reach me through social media:</p>
              <div className={styles.icons}>
                <div className={styles.icon}>
                  <YaGoalButton goal='click_github'>
                    <a
                      className={styles.iconLink}
                      href='https://github.com/fyargat'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Image
                        src='/images/icons/github.svg'
                        width={50}
                        height={50}
                        alt='Github'
                        loading='lazy'
                        draggable={false}
                      />
                    </a>
                  </YaGoalButton>
                </div>
                <div className={styles.icon}>
                  <YaGoalButton goal='click_telegram'>
                    <a
                      className={styles.iconLink}
                      href='https://t.me/fyargat'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Image
                        src='/images/icons/telegram.svg'
                        width={50}
                        height={50}
                        alt='Telegram'
                        loading='lazy'
                        draggable={false}
                      />
                    </a>
                  </YaGoalButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
