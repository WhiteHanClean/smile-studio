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
            <Image
              width={246}
              height={334}
              src={"/awards/one.svg"}
              alt="one"
            ></Image>

            <p>Официальный партнер Nobel Biocare</p>
          </div>

          <div className={s.awards_card}>
            <Image
              width={246}
              height={334}
              src={"/awards/two.svg"}
              alt="one"
            ></Image>

            <p>Официальный партнер Nobel Biocare</p>
          </div>
          

          <div className={s.awards_card}>
            <Image
              width={246}
              height={334}
              src={"/awards/three.svg"}
              alt="one"
            ></Image>

            <p>Официальный партнер Nobel Biocare</p>
          </div>

          <div className={s.awards_card}>
            <Image
              width={246}
              height={334}
              src={"/awards/four.svg"}
              alt="one"
            ></Image>

            <p>Официальный партнер Nobel Biocare</p>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Awards;
