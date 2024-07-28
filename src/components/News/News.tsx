"use client";
import ArrowIcon from "@/icons/ArrowIcon/ArrowIcon";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "../Container/Container";
import Title from "../Title/Title";
import LandingCarousel from "../ui/landingCarousel/LandingCarousel";
import { newsItems } from "../utils/mocks/newsMocks";
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
            classNameCard={s.news_carousel_slides}
            responsive={[
              {
                breakpoint: 1100,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 835,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                },
              },
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
            {newsItems.map((item, index) => (
              <div key={index} className={s.news_carousel_card}>
                <Image src={item.src} width={100} height={100} alt={`news${index + 1}`} />
                <div className={s.news_carousel_card_title}>
                  <h3>{item.title}</h3>
                  <Link href={item.link}>
                    Подробнее <ArrowIcon />
                  </Link>
                </div>
              </div>
            ))}
          </LandingCarousel>
        </div>
      </Container>
    </section>
  );
};

export default News;
