import { FC } from 'react';

import { Reveal } from '../../components/Reveal';
import styles from './AboutScreen.module.scss';

interface IProps {}

export const AboutScreen: FC<IProps> = () => {
  return (
    <section className={styles.container}>
      <div className='wrap'>
        <h2 className={styles.title}>About me</h2>

        <div>
          <div className={styles.textContainer}>
            <Reveal>
              <p className={styles.text}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
                excepturi, sed facilis nobis fugiat inventore accusamus deleniti
                culpa laborum adipisci nihil repellendus, aliquam velit labore
                tempore, a delectus corporis error numquam incidunt officia odio
                officiis distinctio? Maxime quis vel facilis minima
                reprehenderit, aperiam eos. Deleniti quia sapiente nostrum culpa
                reprehenderit qui ullam nobis explicabo cupiditate iure. Unde,
                nulla dicta vitae laudantium modi fugit ea mollitia? Libero
                alias recusandae cum quo quam odio porro, veniam iure ex
                inventore. Veniam quae inventore rerum in facere reiciendis
                architecto praesentium est doloribus illo ratione sint maxime,
                tempore ad amet quasi voluptatem exercitationem similique animi.
              </p>
            </Reveal>
          </div>

          <div className={styles.textContainer}>
            <Reveal>
              <p className={styles.text}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus, autem! Impedit quidem itaque aliquid possimus
                pariatur doloremque ex molestiae ad, minus magni dolores minima
                obcaecati dolorem asperiores excepturi harum nihil neque cumque
                numquam beatae sapiente nulla cupiditate? Tenetur quae nostrum
                totam molestias provident, maiores voluptates? Officiis
                voluptates atque dolor nisi!
              </p>
            </Reveal>
          </div>

          <div className={styles.textContainer}>
            <Reveal>
              <p className={styles.text}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Sapiente ipsum dignissimos doloribus ducimus, atque unde
                corrupti cupiditate assumenda voluptatem natus tempore mollitia
                similique placeat soluta quis doloremque quisquam quas
                molestias! Repellendus illum quos tempora commodi minima minus
                dolores error ducimus esse placeat. Quam recusandae, eligendi
                unde alias odit explicabo aperiam.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
