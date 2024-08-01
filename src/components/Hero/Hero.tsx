"use client";
import React from "react";
import s from "./Hero.module.scss";
import Image from "next/image";
import Container from "../Container/Container";
import LandingBtn from "../ui/landingBtn/LandingBtn";
import LandingSocial from "../ui/landingSocial/LandingSocial";
import LandingSwiper from "../ui/landingSwiper/LandingSwiper";
import { EffectFade, Navigation, Autoplay } from "swiper/modules";
import { heroImages } from "../utils/mocks/heroMocks";

const Hero = () => {
  return (
    <section className={s.hero}>
      <div className={s.hero_background}>
        <LandingSwiper
          effect="fade"
          navigation={false}
          pagination={false}
          spaceBeetwen={30}
          modules={[Autoplay, EffectFade, Navigation]}
          autoplayDelay={5000}
        >
          {heroImages.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              alt={image.alt}
              width={100}
              height={100}
            />
          ))}
        </LandingSwiper>
      </div>
      <div className={s.hero_mask}></div>
      <Container>
        <div className={s.hero_items}>
          <h1>Передовые зуботехнические решения от Smile Studio</h1>
          <h3>
            <span>Скидка 10%</span> на первую консультацию
          </h3>
          <LandingBtn
            className={s.hero_items_btn}
            nameBtn="Заказать консультацию"
          />
          <div className={s.hero_item_socials_adaptive}>
            <LandingSocial />
          </div>
        </div>
        <div className={s.hero_items_field_adaptive}>
          <LandingBtn
            className={s.hero_items_btn_adaptive}
            nameBtn="Заказать консультацию"
          />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
