import React from "react";
import { Space } from "antd";
import Link from "next/link";
import s from "./LandingNav.module.scss";
import classNames from "classnames";
import { landingNavRoutes } from "../mocks/landingNavMocks";

interface navProps {
  className?: string;
  type?: "horizontal" | "vertical";
  position?: "header" | "footer";
}

const LandingNav = ({ className, type, position = "header" }: navProps) => {
  return (
    <Space className={classNames(s.landing_nav, className)} direction={type}>
      {landingNavRoutes
        .filter((route) => route.location === position)
        .map((route) => (
          <Link href={route.path} key={route.path}>
            {route.name}
          </Link>
        ))}
    </Space>
  );
};

export default LandingNav;
