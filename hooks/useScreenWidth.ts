import { useEffect, useState } from 'react';

const getWindowWidth = () =>
  typeof window !== 'undefined' ? window.innerWidth : 0;

export const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState<number>(getWindowWidth());

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(getWindowWidth());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenWidth;
};
