"use client";

import React, { FC } from "react";
import s from "./Reviews.module.scss";
import Image from "next/image";
import { Rate } from "antd";
import classNames from "classnames";

interface IReviewsUser {
  url: string;
  name: string;
  jobs: string;
  description: string;
  rainting: number;
}

interface IReviews {
  user: IReviewsUser;
  className?: string;
}

const Reviews: FC<IReviews> = ({ user, className }) => {
  const { url, name, jobs, description, rainting } = user;
  return (
    <div className={classNames(s.reviews , className)}>
      <div className={s.reviews_content_head}>
        <Image
          src={url ? url : "/reviews/AvatarImage.svg"}
          width={138}
          height={138}
          alt="user"
          className={s.reviews_photo}
        ></Image>
        <div className={s.reviews_content}>
          <h5>{name}</h5>
          <span>{jobs}</span>
        </div>
      </div>
      <div className={s.reviews_content_description}>{description}</div>

      <Rate
        style={{ color: "#39cca9" }}
        className={s.reviews_content_stars}
        disabled
        defaultValue={rainting}
      />
    </div>
  );
};

export default Reviews;
