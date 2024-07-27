import React from "react";
import s from "./LandingBtn.module.scss"
import classNames from "classnames";

interface btnProps {
  nameBtn?: string | "Ok";
  iconBtn?: React.ReactNode;
  className?: string;
}

const LandingBtn = ({ nameBtn, iconBtn, className }: btnProps) => {
  return (
    <button className={classNames(s.landing_btn, className)}>
      {iconBtn}
      {nameBtn}
    </button>
  );
};

export default LandingBtn;
