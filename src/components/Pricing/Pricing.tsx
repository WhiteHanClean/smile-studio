import React from "react";
import s from "./Pricing.module.scss";
import Container from "../Container/Container";
import Title from "../Title/Title";
import LandingBtn from "../ui/landingBtn/LandingBtn";
import Image from "next/image";

const Pricing = () => {
  return (
    <section className={s.pricing}>
      <Container>
        <div className={s.pricing_container}>
          <div>
            
            <Title
              title="Ценообразование"
              description="Получите конкурентоспособное предложение с индивидуальным подходом к вашим потребностям"
              classProps={s.pricing_title}
            />

            <Title
              title="Ценообразование"
              description="Получите конкурентоспособное предложение с индивидуальным подходом к вашим потребностям"
              classProps={s.pricing_title_mobile}
            />

            <LandingBtn
              className={s.pricing_btn}
              nameBtn="Персонализированное предложение"
            />

          </div>
          <div className={s.reviews_photo}>
            <Image
              src={"/Pricing/news.svg"}
              width={643}
              height={726}
              alt="user"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Pricing;
