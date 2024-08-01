"use client";

import React from "react";
import s from "./Awards.module.scss";
import Container from "../Container/Container";
import Title from "../Title/Title";
import Image from "next/image";

const Awards = () => {
  return (
    <section className={s.awards}>
      <Container>
        <Title title="Награды" description="Работаем и побеждаем!"></Title>
        <div className={s.awards_content}>
          <div className={s.awards_card}>
            <div className={s.awards_card_glow}></div>
            <Image
              width={246}
              height={302}
              src={"/awards/one.svg"}
              alt="one.svg"
            />
            <p>
              Официальный партнер <span>Nobel Biocare</span>
            </p>
          </div>
          <div className={s.awards_card}>
            <div className={s.awards_card_glow}></div>
            <Image
              width={240}
              height={297}
              src={"/awards/two.svg"}
              alt="two.svg"
            />
            <p>
              Лучшее <span>инновационное</span> открытие года
            </p>
          </div>
          <div className={s.awards_card}>
            <div className={s.awards_card_glow}></div>
            <Image
              width={211}
              height={292}
              src={"/awards/three.svg"}
              alt="three.svg"
            />
            <p>
              <span>100 лучших</span> медицинских организаций
            </p>
          </div>
          <div className={s.awards_card}>
            <div className={s.awards_card_glow}></div>
            <Image
              width={246}
              height={302}
              src={"/awards/four.svg"}
              alt="four.svg"
            />
            <p>
              Официальный партнер <span>Nobel Biocare</span>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Awards;
