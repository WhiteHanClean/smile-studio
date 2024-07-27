import React from "react";
import s from "./LandingCard.module.scss";
import classNames from "classnames";
import OurServiceMask from "../ourServiceMask/OurServiceMask";
import Image from "next/image";

interface CardProps {
  className?: string;
  mask?: boolean;
  imageSrc: string;
  imageAlt: string;
  title?: string;
  desc?: string;
  subTitle?: string;
  subDesc?: string;
  post?: string;
  price?: string;
  addBtn?: boolean;
  nameBtn?: string;
  classNameField?: string;
  classNameMask?: string;
  classNameButton?: string;
}

const LandingCard = ({
  className,
  mask,
  imageSrc,
  imageAlt,
  title,
  desc,
  subTitle,
  subDesc,
  post,
  price,
  addBtn,
  nameBtn,
  classNameField,
  classNameMask,
  classNameButton
}: CardProps) => {
  return (
    <div className={classNames(s.card, className)}>
      <Image src={imageSrc} alt={imageAlt} width={100} height={100} />
      {mask && (
        <OurServiceMask
          title={title}
          desc={desc}
          classNameField={classNameField}
          classNameMask={classNameMask}
          subTitle={subTitle}
          subDesc={subDesc}
          post={post}
          price={price}
          addBtn={addBtn}
          nameBtn={nameBtn}
          classNameButton={classNameButton}
        />
      )}
    </div>
  );
};

export default LandingCard;
