import React from "react";
import { Space } from "antd";
import Link from "next/link";
import s from "./LandingNav.module.scss";
import classNames from "classnames";

interface navProps {
  className?: string;
  type?: "horizontal" | "vertical";
}

const LandingNav = ({ className, type }: navProps) => {
  return (
    <Space className={classNames(s.landing_nav, className)} direction={type}>
      <Link href="#">Работы</Link>
      <Link href="#">О нас</Link>
      <Link href="#">Услуги</Link>
      <Link href="#">Сотрудничество</Link>
      <Link href="#">Технологии</Link>
      <Link href="#">Портфолио</Link>
      <Link href="#">Новости</Link>
      <Link href="#">Контакты</Link>
    </Space>
  );
};

export default LandingNav;
