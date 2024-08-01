import React from "react";
import s from "./AboutUs.module.scss";
import LandingCarousel from "../ui/landingCarousel/LandingCarousel";
import LandingBtn from "../ui/landingBtn/LandingBtn";
import Image from "next/image";
import Container from "../Container/Container";
import { aboutUsMocks } from "../utils/mocks/aboutUsMocks";

const AboutUs = () => {
  return (
    <section id="about" className={s.about}>
      <Container>
        <LandingCarousel
          arrows={false}
          slidesToShow={1}
          slidesToScroll={1}
          pagination={true}
          autoplay={true}
          autoplaySpeed={3500}
          infinite={true}
        >
          {aboutUsMocks.map((card, index) => (
            <div
              key={index}
              className={`${s.carousel_card} ${
                index === 0 ? s.first_card : s.other_cards
              }`}
            >
              <div className={s.carousel_card_background}>
                <Image
                  src={card.backgroundImage}
                  width={100}
                  height={100}
                  alt="backgroundImage"
                />
              </div>
              <div className={s.carousel_card_left}>
                <h2>{card.title}</h2>
                <h3>{card.subtitle}</h3>
                <p>{card.description}</p>
                <LandingBtn
                  className={s.carousel_card_left_btn}
                  nameBtn={card.buttonText}
                />
              </div>
              <div className={s.carousel_card_right}>
                <Image src={card.image} width={100} height={100} alt="" />
                <LandingBtn
                  className={s.carousel_card_left_btn}
                  nameBtn={card.buttonText}
                />
              </div>
            </div>
          ))}
        </LandingCarousel>
      </Container>
    </section>
  );
};

export default AboutUs;
