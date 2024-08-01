"use client";
import BurgerIcon from "@/icons/BurgerIcon/BurgerIcon";
import LogoIcon from "@/icons/LogoIcon/LogoIcon";
import PhoneIcon from "@/icons/PhoneIcon/PhoneIcon";
import React, { useEffect, useState } from "react";
import Container from "../Container/Container";
import LandingBtn from "../ui/landingBtn/LandingBtn";
import LandingDrawer from "../ui/landingDrawer/LandingDrawer";
import LandingSocial from "../ui/landingSocial/LandingSocial";
import LandingNav from "../utils/landingNav/LandingNav";
import s from "./Header.module.scss";
import Image from "next/image";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <header className={`${s.header} ${isScrolled ? s.scrolled : ""}`}>
      <Container>
        <div className={s.header_items}>
          <div className={s.header_items_burger}>
            <LandingDrawer
              className={s.header_items_burger}
              buttonIcon={<BurgerIcon />}
              placement="left"
              footerTitle="SmileStudio © 2024"
              headerItems={<LogoIcon />}
            >
              <LandingNav
                type="vertical"
                className={s.header_items_burger_nav}
                position="header"
              />
              <LandingSocial />
              <LandingBtn
                iconBtn={<PhoneIcon width="18" height="18" />}
                className={s.header_items_burger_btn}
                nameBtn="+7 (499) 444 12 78"
              />
            </LandingDrawer>
          </div>
          <LogoIcon />
          <LandingNav className={s.header_items_nav} type="horizontal" />
          <LandingBtn
            iconBtn={<PhoneIcon width="18" height="18" />}
            className={s.header_items_btn}
            nameBtn="+7 (499) 444 12 78"
          />
          <div className={s.header_items_phone}>
            <LandingDrawer
              className={s.header_items_phone_drawer}
              buttonIcon={<PhoneIcon width="20" height="20" />}
              headerItems={<Image src="/HeaderScheduleImg.png" width={160} height={160} alt="HeaderDrawerImg" />}
              placement="right"
              footerBtn={<LandingBtn nameBtn="Заказать консультацию" />}
            >
              <h3>Основные виды работ:</h3>
              <ul>
                <li>Изготовление зубных коронок и мостов</li>
                <li>Керамические вкладки и накладки</li>
                <li>Полные протезы на каркасах из титана и диоксида циркония</li>
                <li>Облицовка керамикой</li>
                <li>Производство частичных и полных съемных протезов</li>
                <li>Изготовление виниров</li>
                <li>Изготовление индивидуальных кап для лечения бруксизма (скрежетание зубами)</li>
                <li>Производство диагностических моделей в рамках планирования лечения</li>
                <li>3D печать для создания протезов, моделей и хирургических шаблонов</li>
                <li>Цифровое моделирование улыбки и планирование ортодонтического лечения</li>
                <li>Протезирование на базальных имплантах</li>
              </ul>
            </LandingDrawer>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
