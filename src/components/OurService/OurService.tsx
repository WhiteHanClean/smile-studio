"use client";
import React from "react";
import s from "./OurService.module.scss";
import Container from "../Container/Container";
import LandingTabs from "../ui/landingTabs/LandingTabs";
import LandingBtn from "../ui/landingBtn/LandingBtn";
import LandingCarousel from "../ui/landingCarousel/LandingCarousel";
import LandingCard from "../ui/landingCard/LandingCard";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { cardService, itemsService } from "../utils/mocks/ourServiceMocks";

const OurService = () => {
  const tabsChange = (key: string) => {
    console.log(key);
  };

  return (
    <section className={s.our_service}>
      <Container>
        <div className={s.our_service_title}>
          <h2>Наши услуги</h2>
          <h3>
            Полный спектр зуботехнических услуг, от <span>CAD/CAM </span>
            до <span>3D печати</span> и индивидуального дизайна
          </h3>
        </div>
        <div className={s.our_service_tab}>
          <LandingTabs items={itemsService} onChange={tabsChange} />
        </div>
        <div className={s.our_service_cards}>
          <div className={s.our_service_cards_left}>
            <LandingCard
              key={cardService[0].id}
              imageSrc={cardService[0].src}
              imageAlt={cardService[0].src}
              mask={true}
              desc={cardService[0].desc}
              title={cardService[0].title}
            />
            <LandingCard
              key={cardService[1].id}
              imageSrc={cardService[1].src}
              imageAlt={cardService[1].src}
              mask={true}
              desc={cardService[1].desc}
              title={cardService[1].title}
            />
          </div>
          <div className={s.our_service_cards_right}>
            <div className={s.our_service_cards_right_top}>
              <LandingCard
                key={cardService[2].id}
                imageSrc={cardService[2].src}
                imageAlt={cardService[2].src}
                mask={true}
                desc={cardService[2].desc}
                title={cardService[2].title}
              />
              <LandingCard
                key={cardService[3].id}
                imageSrc={cardService[3].src}
                imageAlt={cardService[3].src}
                mask={true}
                desc={cardService[3].desc}
                title={cardService[3].title}
              />
            </div>
            <LandingCard
              key={cardService[4].id}
              imageSrc={cardService[4].src}
              imageAlt={cardService[4].src}
              mask={true}
              desc={cardService[4].desc}
              title={cardService[4].title}
            />
          </div>
        </div>
        <div className={s.our_service_carousel}>
          <LandingCarousel
            classNameCard={s.our_service_carousel_card}
            autoplay={true}
            arrows={true}
            infinite={true}
            pagination={false}
            slidesToShow={1} slidesToScroll={1}
            autoplaySpeed={3000}
          >
            {cardService &&
              cardService.map((items) => (
                <LandingCard
                  key={items.id}
                  imageSrc={items.src}
                  imageAlt={items.src}
                  mask={true}
                  desc={items.desc}
                  title={items.title}
                  classNameMask={s.our_service_carousel_card_info}
                  classNameField={s.our_service_carousel_card_field}
                />
              ))}
          </LandingCarousel>
        </div>
        <div className={s.our_service_btn}>
          <LandingBtn nameBtn="Оформить заказ" />
        </div>
      </Container>
    </section>
  );
};

export default OurService;
