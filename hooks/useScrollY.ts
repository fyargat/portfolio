import { useMotionValueEvent, useScroll } from 'framer-motion';
import { useState } from 'react';

import { ScrollYDirection } from '@/constants/scroll';

export const useScrollY = () => {
  const { scrollY } = useScroll();

  const [direction, setDirection] = useState<ScrollYDirection | null>(null);
  const [position, setPosition] = useState<number>(0);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const direction =
      latest > scrollY.getPrevious()
        ? ScrollYDirection.Down
        : ScrollYDirection.Top;

    setDirection(direction);
    setPosition(latest);
  });

  return {
    direction,
    position,
  };
};
