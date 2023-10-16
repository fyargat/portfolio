'use client';

import cn from 'classnames';
import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';

import { TABLET_BREAKPOINT } from '@/constants';
import { useScreenWidth } from '@/hooks/useScreenWidth';

import styles from './Slider.module.scss';

interface IProps {
  images: string[];
  delay: number;
  mount: (isMount: boolean) => void;
}

export const Slider: FC<IProps> = ({ images, delay, mount }) => {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const [progress, setProgress] = useState<number>(0);

  const screenWidth = useScreenWidth();

  const isTablet = screenWidth >= TABLET_BREAKPOINT;

  const handleSlidePrev = () => {
    if (!swiper) return;

    const isStart = swiper?.activeIndex === 0;

    if (isStart) {
      swiper.slideTo(images.length - 1);
      return;
    }

    swiper.slidePrev();
  };

  const handleSlideNext = () => {
    if (!swiper) return;

    const isEnd = swiper?.activeIndex === images.length - 1;

    if (isEnd) {
      swiper.slideTo(0);
      return;
    }

    swiper.slideNext();
  };

  useEffect(() => {
    mount(true);
  }, [mount]);

  return (
    <div className={styles.container}>
      <div className={styles.slider}>
        <Swiper
          onSwiper={setSwiper}
          slidesPerView={'auto'}
          autoHeight
          spaceBetween={30}
          centeredSlides={true}
          onProgress={(_, progress) => setProgress(progress)}
          autoplay={{
            delay: delay,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
        >
          {images.map((image) => (
            <SwiperSlide key={image}>
              <Image
                src={`/images/projects/${image}`}
                width={1080}
                height={608}
                alt={`image`}
                draggable={false}
                loading='lazy'
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {images.length > 1 && isTablet ? (
        <div className={styles.controls}>
          <button
            className={cn(styles.button, styles.buttonPrev)}
            onClick={handleSlidePrev}
            aria-label='prev'
          >
            <Image
              src={'/images/icons/arrow-left.svg'}
              width={28}
              height={50}
              alt='prev icon'
            />
          </button>
          <div className={styles.progress}>
            <div
              style={{
                width: `${Math.round(progress * 100)}%`,
              }}
              className={styles.progressBar}
            ></div>
          </div>
          <button
            className={cn(styles.button, styles.buttonNext)}
            onClick={handleSlideNext}
            aria-label='next'
          >
            <Image
              src={'/images/icons/arrow-right.svg'}
              width={28}
              height={50}
              alt='prev icon'
            />
          </button>
        </div>
      ) : null}
    </div>
  );
};
