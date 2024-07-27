import React from "react";
import s from "./OurServiceMask.module.scss";
import classNames from "classnames";
import LandingBtn from "../landingBtn/LandingBtn";

interface serviceMask {
  title?: string;
  subTitle?: string;
  desc?: string;
  subDesc?: string;
  post?: string;
  price?: string;
  addBtn?: boolean;
  nameBtn?: string;
  classNameMask?: string;
  classNameField?: string;
  classNameButton?: string;
}

const OurServiceMask = ({
  title,
  subDesc,
  desc,
  classNameMask,
  classNameField,
  subTitle,
  post,
  price,
  addBtn,
  nameBtn,
  classNameButton
}: serviceMask) => {
  return (
    <div className={classNames(s.img_mask, classNameMask)}>
      <div className={classNames(s.img_mask_field, classNameField)}>
        <h1>{subDesc}</h1>
        <h2>{title}</h2>
        <h3>{desc}</h3>
        <h4>{subTitle}</h4>
        <h5>{post}</h5>
        <p>{price}</p>
        {addBtn && <LandingBtn className={classNameButton} nameBtn={nameBtn} />}
      </div>
    </div>
  );
};

export default OurServiceMask;
