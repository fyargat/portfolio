import Image from 'next/image';
import { FC } from 'react';

import { Chip } from '@/components/Chip';

import styles from './Project.module.scss';

interface IProps {
  image: string;
}

export const Project: FC<IProps> = ({ image }) => {
  return (
    <article className={styles.container}>
      <div className={styles.image}>
        <Image
          src={image}
          width={1000}
          height={1000}
          alt='Project Image'
          draggable={false}
        />
      </div>
      <h3 className={styles.title}>Title</h3>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, tempore.
      </p>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Chip>React</Chip>
        </li>
        <li className={styles.item}>
          <Chip>Redux</Chip>
        </li>
        <li className={styles.item}>
          <Chip>Sass</Chip>
        </li>
      </ul>
    </article>
  );
};
