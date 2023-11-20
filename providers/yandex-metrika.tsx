'use client';

import ym, { YMInitializer } from '@appigram/react-yandex-metrika';
import { Router } from 'next/router';
import { PropsWithChildren, useCallback, useEffect } from 'react';

export const enableYM =
  process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_YM_ID;

export const YandexMetrika = ({ children }: PropsWithChildren) => {
  console.log('enableYM', enableYM);

  const hit = useCallback((url: string) => {
    if (enableYM) {
      ym('hit', url);
    } else {
      console.log(`%c[YandexMetrika](HIT)`, `color: orange`, url);
    }
  }, []);

  useEffect(() => {
    hit(window.location.pathname + window.location.search);
    Router.events.on('routeChangeComplete', (url: string) => hit(url));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {enableYM && (
        <YMInitializer
          accounts={[Number(process.env.NEXT_PUBLIC_YM_ID)]}
          options={{ defer: true }}
          version='2'
        />
      )}
      {children}
    </>
  );
};
