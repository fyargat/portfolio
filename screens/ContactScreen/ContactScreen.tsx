import { FC } from 'react';

import { Screen } from '@/constants';

import styles from './ContactScreen.module.scss';

interface IProps {}

export const ContactScreen: FC<IProps> = () => {
  return (
    <section id={Screen.Contact} className={styles.container}>
      <div className='wrap'>
        <h2 className={styles.title}>Contact</h2>
        <p>Write me an e-mail at:</p>
        <p>pedro.klepa+contact@gmail.com</p>
        <p>or</p>
        Reach me through social media: GithubGithub Linkedin
        {/* <p>
          What`s next? Feel free to reach out to me if you`re looking for a
          developer, have a query, or simply want to connect.
        </p> */}
      </div>
    </section>
  );
};
