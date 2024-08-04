"use client";

import React from "react";
import s from "./CustomerReviews.module.scss";
import Title from "../Title/Title";
import Reviews from "../Reviews/Reviews";
import Container from "../Container/Container";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import LandingCarousel from "../ui/landingCarousel/LandingCarousel";

const CustomerReviews = () => {
  const users = [
    {
      url: "/reviews/AvatarImage.svg",
      name: "Евгений Кудрявцев",
      jobs: "Врач дантист высшей категории Владелец стомотологического центра “Дентикал”",
      description: "Огромное спасибо команде “SmileStudio” за профессиональную работу и качественные, эстетичные и функциональные протезы",
      rainting: 5,
      id: 1,
    },
    {
      url: "/reviews/AvatarImage.svg",
      name: "Владислав Журавлев",
      jobs: "Врач дантист высшей категории Владелец стомотологического центра “Дентикал”",
      description:
        "Огромное спасибо команде “SmileStudio” за профессиональную работу и качественные, эстетичные и функциональные протезы",
      rainting: 5,
      id: 2,
    },
    {
      url: "/reviews/AvatarImage.svg",
      name: "Владислав Журавлев",
      jobs: "Врач дантист высшей категории Владелец стомотологического центра “Дентикал”",
      description:
        "Огромное спасибо команде “SmileStudio” за профессиональную работу и качественные, эстетичные и функциональные протезы",
      rainting: 5,
      id: 3,
    },
    {
      url: "/reviews/AvatarImage.svg",
      name: "Владислав Журавлев",
      jobs: "Врач дантист высшей категории Владелец стомотологического центра “Дентикал”",
      description:
        "Огромное спасибо команде “SmileStudio” за профессиональную работу и качественные, эстетичные и функциональные протезы",
      rainting: 4,
      id: 4,
    },
    {
      url: "/reviews/AvatarImage.svg",
      name: "Владислав Журавлев",
      jobs: "Врач дантист высшей категории Владелец стомотологического центра “Дентикал”",
      description:
        "Огромное спасибо команде “SmileStudio” за профессиональную работу и качественные, эстетичные и функциональные протезы",
      rainting: 4,
      id: 4,
    },
  ];

  return (
    <section className={s.customer_reviews}>
      <Title
        title="Отзывы клиентов"
        description="Узнайте, как мы помогаем коллегам повысить качество и эффективность стоматологической работы"
        classProps={s.title_customer_reviews}
      />

      <div className={s.customer_reviews_content}>
        {users.map((user, i) => {
          return <Reviews key={i} user={user} />;
        })}
      </div>

      <div className={s.customer_reviews_corusel}>
        <LandingCarousel
          arrows={false}
          slidesToShow={1}
          slidesToScroll={1}
          pagination={true}
          autoplay={true}
          autoplaySpeed={3500}
          infinite={true}
        >
          {users.map((user, i) => {
            return (
              <div className={s.reviews_carousel} key={i}>
                <Reviews className={s.reviews_card} key={i} user={user} />
              </div>
            );
          })}
        </LandingCarousel>  
      </div>
    </section>
  );
};

export default CustomerReviews;
