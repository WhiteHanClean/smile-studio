"use client";
import React, { useState, useRef, useEffect } from "react";
import { Carousel } from "antd";
import s from "./TypesWork.module.scss";
import Title from "../Title/Title";
import Container from "../Container/Container";
import Image from "next/image";
import LandingBtn from "../ui/landingBtn/LandingBtn";
import { typesSliderBottom, typesSliderTop } from "../utils/mocks/typesMocks";

const TypesWork = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [media, setMedia] = useState<any>(null);
  const [nav, setNav] = useState<any>(null);
  const mediaRef = useRef<any>(null);
  const navRef = useRef<any>(null);

  useEffect(() => {
    setMedia(mediaRef.current);
    setNav(navRef.current);
  }, []);

  const handleBeforeChange = (oldIndex: number, newIndex: number) => {
    setCurrentSlide(newIndex);
  };

  return (
    <section id="works" className={s.types_work}>
      <Title
        title="Виды работ"
        description="Мы предлагаем широкий спектр услуг"
      />
      <Container>
        <div className={s.types_work_carousels}>
          <div className={s.types_work_carousel_top}>
            <Carousel
              slidesToShow={4}
              centerMode={false}
              asNavFor={media}
              draggable={true}
              ref={navRef}
              infinite={true}
              swipeToSlide={true}
              touchThreshold={50}
              focusOnSelect={true}
              dots={false}
              responsive={[
                {
                  breakpoint: 1100,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                  },
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                  },
                },
                {
                  breakpoint: 389,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                  },
                },
              ]}
              beforeChange={handleBeforeChange}
              arrows
            >
              {typesSliderTop.map((slide, index) => (
                <div key={index} className={s.types_work_carousel_card}>
                  <div
                    className={`${s.types_work_carousel_card_img} ${
                      currentSlide === index ? s.active_card : ""
                    }`}
                  >
                    <Image
                      src={slide.src}
                      width={172}
                      height={172}
                      alt={`slide-${index}`}
                    />
                  </div>
                  <h3>{slide.title}</h3>
                </div>
              ))}
            </Carousel>
          </div>
          <div className={s.types_work_carousel_bottom}>
            <Carousel
              asNavFor={nav}
              touchMove={true}
              dots={false}
              draggable={true}
              arrows
              ref={mediaRef}
            >
              {typesSliderBottom.map((slide, index) => (
                <div key={index} className={s.types_work_carousel_card}>
                  <Image
                    src={slide.background}
                    width={172}
                    height={172}
                    alt={`background-${index}`}
                  />
                  <div className={s.types_work_carousel_card_items}>
                    <div className={s.types_work_carousel_card_left}>
                      <Image
                        src={slide.image}
                        width={172}
                        height={172}
                        alt={`image-${index}`}
                      />
                      <LandingBtn
                        className={s.types_btn}
                        nameBtn="Заказать консультацию"
                      />
                    </div>
                    <div className={s.types_work_carousel_card_right}>
                      <h3>{slide.title}</h3>
                      <ul>
                        {slide.items.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TypesWork;
