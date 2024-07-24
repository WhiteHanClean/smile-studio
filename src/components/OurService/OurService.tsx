import React from "react";
import s from "./OurService.module.scss";
import Container from "../Container/Container";
import LandingTabs from "../ui/landingTabs/LandingTabs";
import Image from "next/image";
import OurServiceMask from "../ui/ourServiceMask/OurServiceMask";
import LandingBtn from "../ui/landingBtn/LandingBtn";
import LandingSwiper from "../ui/landingSwiper/LandingSwiper";
import { Navigation } from "swiper/modules";

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

  const tabsChange = (key: string) => {
    console.log(key);
  };

  return (
    <section className={s.our_service}>
      <Container>
        <div className={s.our_service_title}>
          <h2>Наши услуги</h2>
          <h3>
            Полный спектр зуботехнических услуг, от <span>CAD/CAM</span>
            до <span>3D печати</span> и индивидуального дизайна
          </h3>
        </div>
        <div className={s.our_service_tab}>
          <LandingTabs items={items} onChange={tabsChange} />
        </div>
        <div className={s.our_service_cards}>
          <div className={s.our_service_cards_left}>
            <div className={s.our_service_cards_left_top}>
              <Image
                src={"/ourService/ourServiceFirst.svg"}
                width={100}
                height={100}
                alt="ourServiceFirst"
              />
              <OurServiceMask
                title="НАВИГАЦИОННАЯ ХИРУРГИЯ"
                desc="Эффективное программное обеспечение для моделирования точных хирургических шаблонов в соответствии с заранее проработанным 3D-планом предстоящей имплантации."
              />
            </div>
            <div className={s.our_service_cards_left_bottom}>
              <Image
                src={"/ourService/ourServiceSecond.svg"}
                width={100}
                height={100}
                alt="ourServiceSecond"
              />
              <OurServiceMask
                title="НАВИГАЦИОННАЯ ХИРУРГИЯ"
                desc="Эффективное программное обеспечение для моделирования точных хирургических шаблонов в соответствии с заранее проработанным 3D-планом предстоящей имплантации."
              />
            </div>
          </div>
          <div className={s.our_service_cards_right}>
            <div className={s.our_service_cards_right_top}>
              <div className={s.our_service_cards_right_top_left}>
                <Image
                  src={"/ourService/ourServiceThird.svg"}
                  width={100}
                  height={100}
                  alt="ourServiceThird"
                />
                <OurServiceMask
                  title="CAD/CAM протезирование"
                  desc="Протезирование при помощи диоксида циркония гораздо выгоднее, чем использование других, более дешевых, но уступающих по качеству материалов."
                />
              </div>
              <div className={s.our_service_cards_right_top_right}>
                <Image
                  src={"/ourService/ourServiceFourth.svg"}
                  width={100}
                  height={100}
                  alt="ourServiceFourth"
                />
                <OurServiceMask
                  title="CAD/CAM протезирование"
                  desc="Протезирование при помощи диоксида циркония гораздо выгоднее, чем использование других, более дешевых, но уступающих по качеству материалов."
                />
              </div>
            </div>
            <div className={s.our_service_cards_right_bottom}>
              <Image
                src={"/ourService/ourServiceFifth.svg"}
                width={100}
                height={100}
                alt="ourServiceFifth"
              />
              <OurServiceMask
                title="НАВИГАЦИОННАЯ ХИРУРГИЯ"
                desc="Эффективное программное обеспечение для моделирования точных хирургических шаблонов в соответствии с заранее проработанным 3D-планом предстоящей имплантации."
              />
            </div>
          </div>
        </div>
        <div className={s.our_service_btn}>
          <LandingBtn nameBtn="Оформить заказ" />
        </div>
      </Container>
    </section>
  );
};

export default OurService;
