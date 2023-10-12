'use client';

import cn from 'classnames';
import { motion } from 'framer-motion';
import { FC, useState } from 'react';

import { Logo } from '@/components/Logo';

import { Screen, TABLET_BREAKPOINT } from '@/constants';
import { links } from '@/constants/header';
import { MIN_SCROLL_Y_POSITION, ScrollYDirection } from '@/constants/scroll';
import { useScreenWidth } from '@/hooks/useScreenWidth';
import { useScrollY } from '@/hooks/useScrollY';

import styles from './Header.module.scss';

interface IProps {}

export const Header: FC<IProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);

  const scrollY = useScrollY();
  const screenWidth = useScreenWidth();

  const isHeaderDown =
    screenWidth >= TABLET_BREAKPOINT &&
    scrollY.direction === ScrollYDirection.Top &&
    scrollY.position !== MIN_SCROLL_Y_POSITION;

  const handleScroll = (id: Screen) => () => {
    const element = document.getElementById(id) as HTMLDivElement;

    element.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <header
      className={cn(styles.header, {
        [styles.headerOpen]: isOpen,
        [styles.headerDown]: isHeaderDown,
        [styles.headerUp]: false,
      })}
    >
      <div className={styles.container}>
        <div className={cn('wrap', styles.wrap)}>
          <div className={cn(styles.logo, styles.logoDesktop)}>
            <Logo />
          </div>

          <nav className={cn(styles.nav, styles.navDesktop)}>
            <ul className={styles.navList}>
              {links.map((v) => (
                <li className={styles.navItem} key={v.id}>
                  <button
                    onClick={handleScroll(v.value)}
                    className={styles.navInteractiveElem}
                  >
                    {v.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {isOpen ? (
            <nav className={cn(styles.nav, styles.navMobile)}>
              <ul className={styles.navList}>
                {links.map((v) => (
                  <motion.li
                    variants={{
                      initial: { y: 20, opacity: 0 },
                      visible: { y: 0, opacity: 1 },
                    }}
                    initial='initial'
                    animate='visible'
                    transition={{
                      duration: 0.2,
                      ease: 'easeInOut',
                      delay: v.delay,
                    }}
                    className={styles.navItem}
                    key={v.id}
                  >
                    <button
                      onClick={handleScroll(v.value)}
                      className={styles.navInteractiveElem}
                    >
                      {v.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </nav>
          ) : (
            <div className={cn(styles.logo, styles.logoMobile)}>
              <Logo />
            </div>
          )}

          <button onClick={toggle} className={styles.menu}>
            <div className={styles.menuLine} />
            <div className={styles.menuLine} />
            <div className={styles.menuLine} />
          </button>
        </div>
      </div>
    </header>
  );
};
