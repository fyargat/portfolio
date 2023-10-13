'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { FC, useCallback, useEffect, useRef } from 'react';

interface IProps {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
}

export const Reveal: FC<IProps> = ({ children, width = 'fit-content' }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  const animate = useCallback(async () => {
    await mainControls.start('visible');
    await slideControls.start('visible');
  }, [mainControls, slideControls]);

  useEffect(() => {
    if (isInView) {
      animate().catch((error) => console.log('error', error));
    }
  }, [animate, isInView]);

  return (
    <div
      ref={ref}
      style={{
        width,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial='hidden'
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{ hidden: { scaleX: '100%' }, visible: { scaleX: 0 } }}
        initial='hidden'
        animate={slideControls}
        transition={{ duration: 0.5, ease: 'easeIn' }}
        style={{
          position: 'absolute',
          transformOrigin: 'right',
          inset: 0,
          backgroundColor: '#191919',
          zIndex: 10,
        }}
      />
    </div>
  );
};
