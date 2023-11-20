'use client';

import { FC, PropsWithChildren } from 'react';

import { pointYandexGoal } from '@/utils/point-yandex-goal';

import styles from './YaGoalButton.module.scss';

interface IProps extends PropsWithChildren {
  goal: string;
}

export const YaGoalButton: FC<IProps> = ({ children, goal }) => {
  const handleClick = () => {
    pointYandexGoal(goal);
  };

  return (
    <button className={styles.container} onClick={handleClick}>
      {children}
    </button>
  );
};
