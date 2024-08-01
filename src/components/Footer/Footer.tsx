"use client";
import LogoIcon from "@/icons/LogoIcon/LogoIcon";
import PhoneIcon from "@/icons/PhoneIcon/PhoneIcon";
import React from "react";
import Container from "../Container/Container";
import LandingBtn from "../ui/landingBtn/LandingBtn";
import LandingSocial from "../ui/landingSocial/LandingSocial";
import LandingNav from "../utils/landingNav/LandingNav";
import s from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <Container>
        <div className={s.footer_nav}>
          <LogoIcon />
          <LandingNav  position="footer"/>
          <div className={s.footer_nav_adaptive}>
            <LandingSocial className={s.footer_nav_adaptive_social}/>
          </div>
          <LandingBtn
            className={s.footer_nav_btn}
            nameBtn="+7 (499) 444 12 78"
            iconBtn={<PhoneIcon width="18" height="18" />}
          />
        </div>
        <div className={s.footer_social}>
          <LandingSocial/>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
