import { FC } from 'react';

import { Reveal } from '@/components/Reveal';

import { Screen } from '@/constants';

import styles from './AboutScreen.module.scss';

interface IProps {}

export const AboutScreen: FC<IProps> = () => {
  return (
    <section id={Screen.About} className={styles.container}>
      <div className='wrap'>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>About me</h2>

          <div>
            <div className={styles.textContainer}>
              <Reveal>
                <p className={styles.text}>
                  Hi 👋, I`m Fyargat. I`m a Frontend Developer with experience
                  in React, NextJS, and Sass development. Two years of work at{' '}
                  <a
                    className={styles.link}
                    href='https://tenderplan.ru/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <span>Tenderplan</span>
                  </a>{' '}
                  helped me become a professional in creating responsive and
                  creative web applications. Currently, I am freelancing, where
                  I continue to apply and enhance my skills by creating websites
                  that combine creative design with high performance.
                </p>
              </Reveal>
            </div>

            <div className={styles.textContainer}>
              <Reveal>
                <p className={styles.text}>
                  In addition to frontend development, I am also passionate
                  about backend development. I actively study NodeJS, NestJS,
                  and MongoDB to understand the entire structure of web
                  applications and ensure their quality operation from both
                  sides. Furthermore, I have experience in creating Telegram
                  bots 🤖, adding an extra layer of diversity to my knowledge
                  and skills.{' '}
                </p>
              </Reveal>
            </div>

            <div className={styles.textContainer}>
              <Reveal>
                <p className={styles.text}>
                  In my work, I value attention to detail and a commitment to
                  perfection. I believe in the importance of clean code and good
                  application architecture. My goal is to continue applying new
                  technologies, learning, and growing as a developer, as well as
                  creating products that bring value and joy to users. If you
                  have interesting projects or are looking for a web development
                  specialist, I am always ready for new challenges and
                  collaboration. ✉️
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
