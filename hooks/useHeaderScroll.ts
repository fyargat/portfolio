import { useEffect, useRef, useState } from 'react';

import { Screen, TABLET_BREAKPOINT } from '@/constants';
import { VisibilityStatus } from '@/constants/header';
import { MIN_SCROLL_Y_POSITION, ScrollYDirection } from '@/constants/scroll';
import { useScreenWidth } from '@/hooks/useScreenWidth';
import { useScrollY } from '@/hooks/useScrollY';

const SCROLL_BEHAVIOR = 'smooth';
const MOBILE_HEADER_HEIGHT = 56;

export const useHeaderScroll = () => {
  const { direction, position } = useScrollY();
  const screenWidth = useScreenWidth();

  const isMobile = screenWidth < TABLET_BREAKPOINT;
  const [visibilityStatus, setVisibilityStatus] = useState<VisibilityStatus>(
    VisibilityStatus.Hide,
  );
  const [isAutoScrolling, setIsAutoScrolling] = useState<boolean>(false);

  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll: EventListener = () => {
      scrollTimeout.current && clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(function () {
        setIsAutoScrolling(false);
      }, 100);
    };

    window.addEventListener('scroll', onScroll);

    () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    if (isAutoScrolling) return;

    if (screenWidth < TABLET_BREAKPOINT) {
      setVisibilityStatus(VisibilityStatus.Hide);
      return;
    }

    if (position === MIN_SCROLL_Y_POSITION) {
      setVisibilityStatus(VisibilityStatus.Hide);
      return;
    }

    if (direction !== ScrollYDirection.Top) {
      setVisibilityStatus(VisibilityStatus.Hide);
      return;
    }

    setVisibilityStatus(VisibilityStatus.Visible);
  }, [isAutoScrolling, position, screenWidth, direction]);

  useEffect(() => {
    setVisibilityStatus(VisibilityStatus.Hide);
  }, [isAutoScrolling]);

  const handleScroll = (id: Screen) => () => {
    const element = document.getElementById(id) as HTMLDivElement;

    if (!isMobile) {
      element.scrollIntoView({
        behavior: SCROLL_BEHAVIOR,
      });
      setIsAutoScrolling(true);

      return;
    }

    const TOP_OFFSET = -MOBILE_HEADER_HEIGHT;
    const elementTop = element.getBoundingClientRect().top;
    const scrollY = window.scrollY;

    const y = elementTop + scrollY + TOP_OFFSET;
    window.scrollTo({ top: y, behavior: SCROLL_BEHAVIOR });
  };

  return {
    onScroll: handleScroll,
    visibilityStatus,
  };
};
