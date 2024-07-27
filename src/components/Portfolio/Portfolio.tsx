import React from "react";
import s from "./Portfolio.module.scss";
import Title from "../Title/Title";
import Container from "../Container/Container";
import LandingCard from "../ui/landingCard/LandingCard";
import LandingCarousel from "../ui/landingCarousel/LandingCarousel";
import LandingBtn from "../ui/landingBtn/LandingBtn";
import PortfolioTabs from "../ui/portfolioTabs/PortfolioTabs";

const Portfolio = () => {
  const card = [
    {
      id: 1,
      img: "/portfolio/portfiolioFirst.svg",
      subDesc:
        "УСЛОВНО-СЪЕМНЫЙ ПРОТЕЗ НА 6-ТИ ИМПЛАНТАТАХ, ЦЕЛЬНОФРЕЗЕРОВАННЫЙ, ЦЕЛЬНОКЕРАМИЧЕСКАЯ ОБЛИЦОВКА, ВИНТОВАЯ ФИКСАЦИЯ",
      title: "РАБОТА",
      desc: "Выбирая для себя такую конструкцию, конечный потребитель получает высочайшую эстетику, максимально приближенную по внешнему виду и функционалу к природным зубам, полное отсутствие неприятных ощущений, забыв о съёмных протезах раз и навсегда.",
      subTitle: "ТЕХНИКИ",
      post: "Щербаков И. В., Абаляев А. Ю.",
      price: "Стоимость: от 79 500 руб.",
    },
    {
      id: 2,
      img: "/portfolio/portfolioSecond.svg",
      subDesc:
        "УСЛОВНО-СЪЕМНЫЙ ПРОТЕЗ НА 6-ТИ ИМПЛАНТАТАХ, ЦЕЛЬНОФРЕЗЕРОВАННЫЙ, ЦЕЛЬНОКЕРАМИЧЕСКАЯ ОБЛИЦОВКА, ВИНТОВАЯ ФИКСАЦИЯ",
      title: "РАБОТА",
      desc: "Выбирая для себя такую конструкцию, конечный потребитель получает высочайшую эстетику, максимально приближенную по внешнему виду и функционалу к природным зубам, полное отсутствие неприятных ощущений, забыв о съёмных протезах раз и навсегда.",
      subTitle: "ТЕХНИКИ",
      post: "Щербаков И. В., Абаляев А. Ю.",
      price: "Стоимость: от 79 500 руб.",
    },
    {
      id: 3,
      img: "/portfolio/porfolioThird.svg",
      subDesc:
        "УСЛОВНО-СЪЕМНЫЙ ПРОТЕЗ НА 6-ТИ ИМПЛАНТАТАХ, ЦЕЛЬНОФРЕЗЕРОВАННЫЙ, ЦЕЛЬНОКЕРАМИЧЕСКАЯ ОБЛИЦОВКА, ВИНТОВАЯ ФИКСАЦИЯ",
      title: "РАБОТА",
      desc: "Выбирая для себя такую конструкцию, конечный потребитель получает высочайшую эстетику, максимально приближенную по внешнему виду и функционалу к природным зубам, полное отсутствие неприятных ощущений, забыв о съёмных протезах раз и навсегда.",
      subTitle: "ТЕХНИКИ",
      post: "Щербаков И. В., Абаляев А. Ю.",
      price: "Стоимость: от 79 500 руб.",
    },
    {
      id: 4,
      img: "/portfolio/portfolioFourth.svg",
      subDesc:
        "УСЛОВНО-СЪЕМНЫЙ ПРОТЕЗ НА 6-ТИ ИМПЛАНТАТАХ, ЦЕЛЬНОФРЕЗЕРОВАННЫЙ, ЦЕЛЬНОКЕРАМИЧЕСКАЯ ОБЛИЦОВКА, ВИНТОВАЯ ФИКСАЦИЯ",
      title: "РАБОТА",
      desc: "Выбирая для себя такую конструкцию, конечный потребитель получает высочайшую эстетику, максимально приближенную по внешнему виду и функционалу к природным зубам, полное отсутствие неприятных ощущений, забыв о съёмных протезах раз и навсегда.",
      subTitle: "ТЕХНИКИ",
      post: "Щербаков И. В., Абаляев А. Ю.",
      price: "Стоимость: от 79 500 руб.",
    },
  ];

  return (
    <section className={s.portfolio}>
      <Container>
        <Title
          classProps={s.portfolio_title}
          title="Портфолио"
          description="Преобразите вашу практику с нашими высококачественными зуботехническими решениями"
        />
        <div className={s.portfolio_tabs}>
          <PortfolioTabs/>
        </div>
        <div className={s.portfolio_cards}>
          <div className={s.portfolio_cards_left}>
            <LandingCard
              key={card[0].id}
              imageSrc={card[0].img}
              imageAlt={card[0].img}
              mask={true}
              subDesc={card[0].subDesc}
              desc={card[0].desc}
              title={card[0].title}
              subTitle={card[0].subTitle}
              post={card[0].post}
              price={card[0].price}
              addBtn={true}
              classNameMask={s.portfolio_card_mask}
              classNameField={s.portfolio_card_field}
              classNameButton={s.portfolio_card_btn}
              nameBtn="Заказать звонок"
            />
            <LandingCard
              key={card[1].id}
              imageSrc={card[1].img}
              imageAlt={card[1].img}
              mask={true}
              subDesc={card[1].subDesc}
              desc={card[1].desc}
              title={card[1].title}
              subTitle={card[1].subTitle}
              post={card[1].post}
              price={card[1].price}
              addBtn={true}
              classNameMask={s.portfolio_card_mask}
              classNameField={s.portfolio_card_field}
              classNameButton={s.portfolio_card_btn}
              nameBtn="Заказать звонок"
            />
          </div>
          <div className={s.portfolio_cards_right}>
            <LandingCard
              key={card[2].id}
              imageSrc={card[2].img}
              imageAlt={card[2].img}
              mask={true}
              subDesc={card[2].subDesc}
              desc={card[2].desc}
              title={card[2].title}
              subTitle={card[2].subTitle}
              post={card[2].post}
              price={card[2].price}
              addBtn={true}
              classNameMask={s.portfolio_card_mask}
              classNameField={s.portfolio_card_field}
              classNameButton={s.portfolio_card_btn}
              nameBtn="Заказать звонок"
            />
            <LandingCard
              key={card[3].id}
              imageSrc={card[3].img}
              imageAlt={card[3].img}
              mask={true}
              subDesc={card[3].subDesc}
              desc={card[3].desc}
              title={card[3].title}
              subTitle={card[3].subTitle}
              post={card[3].post}
              price={card[3].price}
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
            {card &&
              card.map((items) => (
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
