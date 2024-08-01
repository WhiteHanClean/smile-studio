import React from "react";
import s from "./Tech.module.scss";
import Container from "../Container/Container";
import Title from "../Title/Title";
import LandingBtn from "../ui/landingBtn/LandingBtn";
import LandingCarousel from "../ui/landingCarousel/LandingCarousel";
import Image from "next/image";
import { Carousel } from "antd";
import { techMocksCard, techMocksSlider } from "../utils/mocks/techMocks";

const Tech = () => {
  return (
    <section id="tech" className={s.tech}>
      <Title
        classProps={s.tech_title}
        title="Технологии и материалы"
        description="Лидерство в применении передовых цифровых технологий и качественных материалов"
      />
      <Container>
        <div className={s.tech_carousel}>
          <Carousel
            centerMode={true}
            infinite={true}
            dots={false}
            draggable={true}
            slidesToScroll={1}
            slidesToShow={1}
          >
            {techMocksSlider.map((slide, index) => (
              <div className={s.tech_carousel_card} key={index}>
                <Image
                  src={slide.imageSrc}
                  width={100}
                  height={100}
                  alt={slide.imageAlt}
                />
                <div className={s.tech_carousel_card_title}>
                  <h3>{slide.title}</h3>
                  <p>{slide.description}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        <div className={s.tech_btn_field}>
          <LandingBtn
            className={s.tech_btn}
            nameBtn="Записаться на экскурсию в лабораторию"
          />
        </div>
        <div className={s.tech_crads}>
          <div className={s.tech_card}>
            {techMocksCard.map((item, index) => (
              <div className={s.tech_card_field} key={index}>
                <Image
                  src={item.imageSrc}
                  width={100}
                  height={100}
                  alt={item.imageAlt}
                />
                <div className={s.tech_card_field_title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Tech;
