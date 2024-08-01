"use client";

import React, { FC } from "react";
import s from "./Title.module.scss";
import classNames from "classnames";

interface ITitle {
  title: string;
  description?: string;
  classProps?: string;
}
const Title: FC<ITitle> = ({ title, description, classProps }) => {
  return (
    <div className={classNames(s.title_content, classProps)}>
      <h2 className={s.title}>{title}</h2>
      <p className={s.sub_title}>{description}</p>
    </div>
  );
};

export default Title;
