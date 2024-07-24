import React from "react";
import s from "./OurServiceMask.module.scss";

interface serviceMask {
  title?: string;
  desc?: string;
}

const OurServiceMask = ({ title, desc }: serviceMask) => {
  return (
    <div className={s.img_mask}>
      <div className={s.img_mask_field}>
        <h2>{title}</h2>
        <h3>{desc}</h3>
      </div>
    </div>
  );
};

export default OurServiceMask;
