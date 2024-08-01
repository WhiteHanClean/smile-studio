import React from "react";
import YandexMap from "../YandexMap/YandexMap";
import s from "./Contacts.module.scss";
import Container from "../Container/Container";
import Title from "../Title/Title";
import LandingBtn from "../ui/landingBtn/LandingBtn";

const Contacts = () => {
  return (
    <section id="contacts" className={s.contacts}>
      <Container className={s.contacts_container}>
        <div className={s.line}></div>
        <div className={s.contacts_content}>
          <div className={s.contacts_content_description}>
            <Title
              title="Контакты"
              description="ЗУБОТЕХНИЧЕСКАЯ ЛАБОРАТОРИЯ СМАЙЛ СТУДИО / SMILE STUDIO"
              classProps={s.contacts_title}
            />

            <Title
              title="Контакты"
              description="ЗУБОТЕХНИЧЕСКАЯ ЛАБОРАТОРИЯ СМАЙЛ СТУДИО / SMILE STUDIO"
              classProps={s.contacts_title_mobile}
            />
            <h3>
              ГРАФИК РАБОТЫ: 10:00 – 21:00 | Ежедневно, без перерывов и выходных
            </h3>
            <h4>
              <span>АДРЕС: </span>Большой Дровяной пер. д.18
            </h4>
            <h4>
              <span>ТЕЛЕФОН: </span>7 (499) 444-12-78
            </h4>
          </div>

          <div className={s.contacts_content_map}>
            <div className={s.contacts_content_cart}>
              <YandexMap />
            </div>
            <LandingBtn
              className={s.contact_btn}
              nameBtn="Показать в Яндекс картах"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contacts;
