import ym from '@appigram/react-yandex-metrika';

import { enableYM } from '@/providers/yandex-metrika';

export const pointYandexGoal = (goal: string) => {
  console.log('enableYM', enableYM);

  if (!enableYM) {
    console.log(`%c[YandexMetrika](GOAL)`, `color: orange`, goal);
    return;
  }
  ym('reachGoal', goal);
};
