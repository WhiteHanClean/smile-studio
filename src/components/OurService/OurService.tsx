import React from "react";
import s from "./OurService.module.scss";
import Container from "../Container/Container";
import LandingTabs from "../ui/landingTabs/LandingTabs";
import LandingBtn from "../ui/landingBtn/LandingBtn";
import LandingCarousel from "../ui/landingCarousel/LandingCarousel";
import LandingCard from "../ui/landingCard/LandingCard";
import { FreeMode, Scrollbar, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

const OurService = () => {
  const items = [
    {
      key: "1",
      label: "CAD/CAM протезирование",
    },
    {
      key: "2",
      label: "3D печать зубных конструкций",
    },
    {
      key: "3",
      label: "цифровое планирование улыбки",
    },
    {
      key: "4",
      label: "изготовление виниров, коронок и мостов",
    },
  ];

  const card = [
    {
      id: 1,
      src: "/ourService/ourServiceFirst.svg",
      title: "НАВИГАЦИОННАЯ ХИРУРГИЯ",
      desc: "Эффективное программное обеспечение для моделирования точных хирургических шаблонов в соответствии с заранее проработанным 3D-планом предстоящей имплантации.",
    },
    {
      id: 2,
      src: "/ourService/ourServiceSecond.svg",
      title: "НАВИГАЦИОННАЯ ХИРУРГИЯ",
      desc: "Эффективное программное обеспечение для моделирования точных хирургических шаблонов в соответствии с заранее проработанным 3D-планом предстоящей имплантации.",
    },
    {
      id: 3,
      src: "/ourService/ourServiceThird.svg",
      title: "НАВИГАЦИОННАЯ ХИРУРГИЯ",
      desc: "Эффективное программное обеспечение для моделирования точных хирургических шаблонов в соответствии с заранее проработанным 3D-планом предстоящей имплантации.",
    },
    {
      id: 4,
      src: "/ourService/ourServiceFourth.svg",
      title: "НАВИГАЦИОННАЯ ХИРУРГИЯ",
      desc: "Эффективное программное обеспечение для моделирования точных хирургических шаблонов в соответствии с заранее проработанным 3D-планом предстоящей имплантации.",
    },
    {
      id: 5,
      src: "/ourService/ourServiceFifth.svg",
      title: "НАВИГАЦИОННАЯ ХИРУРГИЯ",
      desc: "Эффективное программное обеспечение для моделирования точных хирургических шаблонов в соответствии с заранее проработанным 3D-планом предстоящей имплантации.",
    },
  ];

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
          <LandingTabs items={items} onChange={tabsChange} />
        </div>
        <div className={s.our_service_cards}>
          <div className={s.our_service_cards_left}>
            <LandingCard
              key={card[0].id}
              imageSrc={card[0].src}
              imageAlt={card[0].src}
              mask={true}
              desc={card[0].desc}
              title={card[0].title}
            />
            <LandingCard
              key={card[1].id}
              imageSrc={card[1].src}
              imageAlt={card[1].src}
              mask={true}
              desc={card[1].desc}
              title={card[1].title}
            />
          </div>
          <div className={s.our_service_cards_right}>
            <div className={s.our_service_cards_right_top}>
              <LandingCard
                key={card[2].id}
                imageSrc={card[2].src}
                imageAlt={card[2].src}
                mask={true}
                desc={card[2].desc}
                title={card[2].title}
              />
              <LandingCard
                key={card[3].id}
                imageSrc={card[3].src}
                imageAlt={card[3].src}
                mask={true}
                desc={card[3].desc}
                title={card[3].title}
              />
            </div>
            <LandingCard
              key={card[4].id}
              imageSrc={card[4].src}
              imageAlt={card[4].src}
              mask={true}
              desc={card[4].desc}
              title={card[4].title}
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
            {card &&
              card.map((items) => (
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
