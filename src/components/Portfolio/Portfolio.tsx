"use client";
import React from "react";
import s from "./Portfolio.module.scss";
import Title from "../Title/Title";
import Container from "../Container/Container";
import LandingCard from "../ui/landingCard/LandingCard";
import LandingCarousel from "../ui/landingCarousel/LandingCarousel";
import LandingBtn from "../ui/landingBtn/LandingBtn";
import PortfolioTabs from "../ui/portfolioTabs/PortfolioTabs";
import { portfolioCard } from "../utils/mocks/portfolioMocks";

const Portfolio = () => {
  return (
    <section id="portfolio" className={s.portfolio}>
      <Container>
        <Title
          classProps={s.portfolio_title}
          title="Портфолио"
          description="Преобразите вашу практику с нашими высококачественными зуботехническими решениями"
        />
        <div className={s.portfolio_tabs}>
          <PortfolioTabs />
        </div>
        <div className={s.portfolio_cards}>
          <div className={s.portfolio_cards_left}>
            <LandingCard
              key={portfolioCard[0].id}
              imageSrc={portfolioCard[0].img}
              imageAlt={portfolioCard[0].img}
              mask={true}
              subDesc={portfolioCard[0].subDesc}
              desc={portfolioCard[0].desc}
              title={portfolioCard[0].title}
              subTitle={portfolioCard[0].subTitle}
              post={portfolioCard[0].post}
              price={portfolioCard[0].price}
              addBtn={true}
              classNameMask={s.portfolio_card_mask}
              classNameField={s.portfolio_card_field}
              classNameButton={s.portfolio_card_btn}
              nameBtn="Заказать звонок"
            />
            <LandingCard
              key={portfolioCard[1].id}
              imageSrc={portfolioCard[1].img}
              imageAlt={portfolioCard[1].img}
              mask={true}
              subDesc={portfolioCard[1].subDesc}
              desc={portfolioCard[1].desc}
              title={portfolioCard[1].title}
              subTitle={portfolioCard[1].subTitle}
              post={portfolioCard[1].post}
              price={portfolioCard[1].price}
              addBtn={true}
              classNameMask={s.portfolio_card_mask}
              classNameField={s.portfolio_card_field}
              classNameButton={s.portfolio_card_btn}
              nameBtn="Заказать звонок"
            />
          </div>
          <div className={s.portfolio_cards_right}>
            <LandingCard
              key={portfolioCard[2].id}
              imageSrc={portfolioCard[2].img}
              imageAlt={portfolioCard[2].img}
              mask={true}
              subDesc={portfolioCard[2].subDesc}
              desc={portfolioCard[2].desc}
              title={portfolioCard[2].title}
              subTitle={portfolioCard[2].subTitle}
              post={portfolioCard[2].post}
              price={portfolioCard[2].price}
              addBtn={true}
              classNameMask={s.portfolio_card_mask}
              classNameField={s.portfolio_card_field}
              classNameButton={s.portfolio_card_btn}
              nameBtn="Заказать звонок"
            />
            <LandingCard
              key={portfolioCard[3].id}
              imageSrc={portfolioCard[3].img}
              imageAlt={portfolioCard[3].img}
              mask={true}
              subDesc={portfolioCard[3].subDesc}
              desc={portfolioCard[3].desc}
              title={portfolioCard[3].title}
              subTitle={portfolioCard[3].subTitle}
              post={portfolioCard[3].post}
              price={portfolioCard[3].price}
              addBtn={true}
              classNameMask={s.portfolio_card_mask}
              classNameField={s.portfolio_card_field}
              classNameButton={s.portfolio_card_btn}
              nameBtn="Заказать звонок"
            />
          </div>
        </div>
        <div className={s.portfolio_carousel}>
          <LandingCarousel
            classNameCard={s.portfolio_carousel_card}
            autoplay={true}
            arrows={true}
            infinite={true}
            pagination={false}
            slidesToShow={1}
            slidesToScroll={1}
            autoplaySpeed={3000}
          >
            {portfolioCard &&
              portfolioCard.map((items) => (
                <LandingCard
                  key={items.id}
                  imageSrc={items.img}
                  imageAlt={items.img}
                  mask={true}
                  subDesc={items.subDesc}
                  subTitle={items.subTitle}
                  post={items.post}
                  price={items.price}
                  addBtn={true}
                  desc={items.desc}
                  title={items.title}
                  nameBtn="Заказать звонок"
                  classNameButton={s.portfolio_carousel_card_btn}
                  classNameMask={s.portfolio_carousel_card_info}
                  classNameField={s.portfolio_carousel_card_field}
                />
              ))}
          </LandingCarousel>
        </div>
        <div className={s.portfolio_btn}>
          <LandingBtn nameBtn="Смотреть все" />
        </div>
      </Container>
    </section>
  );
};

export default Portfolio;
