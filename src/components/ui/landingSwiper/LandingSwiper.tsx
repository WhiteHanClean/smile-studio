import React, { FC } from "react";
import s from "./LandingSwiper.module.scss";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

interface swiperPorps {
  spaceBeetwen?: number;
  effect?: string;
  navigation?: boolean;
  pagination?: boolean;
  className?: string;
  autoplayDelay?: number;
  modules?: any[];
  children: React.ReactNode;
}

const LandingSwiper: FC<swiperPorps> = ({
  spaceBeetwen,
  effect,
  navigation,
  pagination,
  className,
  modules = [],
  children,
  autoplayDelay
}) => {
  return (
    <Swiper
      spaceBetween={spaceBeetwen}
      effect={effect}
      navigation={navigation}
      pagination={{
        clickable: pagination,
      }}
      autoplay={{ delay: autoplayDelay }}
      modules={modules}
      className={className}
    >
     {children && React.Children.map(children, (child, index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default LandingSwiper;
