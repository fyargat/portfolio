'use client';

import cn from 'classnames';
import { motion } from 'framer-motion';
import { FC, useState } from 'react';

import { Logo } from '@/components/Logo';

import { Screen } from '@/constants';
import { VisibilityStatus, links } from '@/constants/header';
import { useHeaderScroll } from '@/hooks/useHeaderScroll';

import styles from './Header.module.scss';

interface IProps {}

export const Header: FC<IProps> = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  const { visibilityStatus, onScroll } = useHeaderScroll();

  return (
    <>
      <header
        className={cn(styles.header, {
          [styles.headerMobileOpen]: isMobileMenuOpen,
          [styles.headerDesktopVisible]:
            visibilityStatus === VisibilityStatus.Visible,
        })}
      >
        <div className={styles.container}>
          <div className={cn('wrap', styles.wrap)}>
            <div className={cn(styles.logo, styles.logoDesktop)}>
              <button onClick={onScroll(Screen.Intro)} aria-label='Logo'>
                <Logo />
              </button>
            </div>

            <nav className={cn(styles.nav, styles.navDesktop)}>
              <ul className={styles.navList}>
                {links.map((v) => (
                  <li className={styles.navItem} key={v.id}>
                    <button
                      onClick={onScroll(v.value)}
                      className={styles.navInteractiveElem}
                    >
                      {v.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {isMobileMenuOpen ? (
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
                        onClick={onScroll(v.value)}
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
                <button onClick={onScroll(Screen.Intro)} aria-label='Logo'>
                  <Logo />
                </button>
              </div>
            )}

            <button
              onClick={toggleMobileMenu}
              className={styles.menu}
              aria-label='Menu'
            >
              <div className={styles.menuLine} />
              <div className={styles.menuLine} />
              <div className={styles.menuLine} />
            </button>
          </div>
        </div>
      </header>
      <div
        className={cn(styles.shadow, {
          [styles.shadowVisible]: visibilityStatus === VisibilityStatus.Visible,
        })}
      />
    </>
  );
};
