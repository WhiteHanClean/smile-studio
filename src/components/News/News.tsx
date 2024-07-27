import ArrowIcon from "@/icons/ArrowIcon/ArrowIcon";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import Container from "../Container/Container";
import Title from "../Title/Title";
import LandingCarousel from "../ui/landingCarousel/LandingCarousel";
import s from "./News.module.scss";

const News = () => {
  return (
    <section className={s.news}>
      <Container>
        <Title
          classProps={s.news_title}
          title="Новости"
          description="Будьте в курсе последних трендов и инноваций в зуботехнической отрасли"
        />
        <div className={s.news_carousel}>
          <LandingCarousel
            responsive={[
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
            ]}
            arrows={true}
            slidesToShow={4}
            slidesToScroll={1}
            pagination={false}
          >
            <div className={s.news_carousel_card}>
              <Image
                src={"/news/newsFirst.svg"}
                width={100}
                height={100}
                alt="newsFirst"
              />
              <div className={s.news_carousel_card_title}>
                <h3>ФРЕЗЕРНЫЙ СТАНОК ROLAND DWX 52D</h3>
                <Link href="#">
                  Подробнее <ArrowIcon />
                </Link>
              </div>
            </div>
            <div className={s.news_carousel_card}>
              <Image
                src={"/news/newsSecond.svg"}
                width={100}
                height={100}
                alt="newsSecond"
              />
              <div className={s.news_carousel_card_title}>
                <h3>СТОМАТОЛОГИЧЕСКИЙ 3D-СКАНЕР MEDIT T-SERIES T310</h3>
                <Link href="#">
                  Подробнее <ArrowIcon />
                </Link>
              </div>
            </div>
            <div className={s.news_carousel_card}>
              <Image
                src={"/news/newsThird.svg"}
                width={100}
                height={100}
                alt="newsThird"
              />
              <div className={s.news_carousel_card_title}>
                <h3>АРТИКУЛЯТОР AMANN GIRRBACH</h3>
                <Link href="#">
                  Подробнее <ArrowIcon />
                </Link>
              </div>
            </div>
            <div className={s.news_carousel_card}>
              <Image
                src={"/news/newsFouth.svg"}
                width={100}
                height={100}
                alt="newsFouth"
              />
              <div className={s.news_carousel_card_title}>
                <h3>ИНСТРАГРАМ ПОСТЫ СМАЙЛ СТУДИО</h3>
                <Link href="#">
                  Подробнее <ArrowIcon />
                </Link>
              </div>
            </div>
            <div className={s.news_carousel_card}>
              <Image
                src={"/news/newsFirst.svg"}
                width={100}
                height={100}
                alt="newsFirst"
              />
              <div className={s.news_carousel_card_title}>
                <h3>Производство частичных и полных съемных протезов.</h3>
                <Link href="#">
                  Подробнее <ArrowIcon />
                </Link>
              </div>
            </div>
          </LandingCarousel>
        </div>
      </Container>
    </section>
  );
};

export default News;
