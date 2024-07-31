import React from "react";
import YandexMap from "../YandexMap/YandexMap";
import s from "./Contacts.module.scss";
import Container from "../Container/Container";
import Title from "../Title/Title";
import LandingBtn from "../ui/landingBtn/LandingBtn";

const Contacts = () => {
  return (
    <section className={s.contacts}>
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
