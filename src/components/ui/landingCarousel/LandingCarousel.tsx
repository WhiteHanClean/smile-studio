import { Carousel } from "antd";
import React from "react";
import s from "./LandingCarousel.module.scss";

interface carouselProps {
  children: React.ReactNode;
  infinite?: boolean;
  arrows?: boolean;
  classNameCard?: string;
  autoplay?: boolean;
  pagination?: boolean;
  autoplaySpeed?: number;
  slidesToShow?: number;
  slidesToScroll?: number;
  responsive?: Array<{ breakpoint: number; settings: { slidesToShow: number; slidesToScroll: number } }>;
}

const LandingCarousel = ({
  children,
  infinite,
  arrows,
  classNameCard,
  autoplay,
  pagination,
  autoplaySpeed,
  slidesToShow,
  slidesToScroll,
  responsive
}: carouselProps) => {
  return (
    <div className={s.landing_carousel}>
      <Carousel
        autoplaySpeed={autoplaySpeed}
        dots={pagination}
        autoplay={autoplay}
        infinite={infinite}
        arrows={arrows}
        slidesToShow={slidesToShow}
        slidesToScroll={slidesToScroll}
        draggable={true}
        responsive={responsive}
      >
        {children &&
          React.Children.map(children, (child, index) => (
            <div className={classNameCard} key={index}>
              {child}
            </div>
          ))}
      </Carousel>
    </div>
  );
};

export default LandingCarousel;
