import { PropsWithChildren } from 'react';

import { YandexMetrika } from './yandex-metrika';

export const AppProvider = ({ children }: PropsWithChildren) => {
  return <YandexMetrika>{children}</YandexMetrika>;
};
