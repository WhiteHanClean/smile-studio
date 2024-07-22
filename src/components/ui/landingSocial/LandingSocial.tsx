import FacebookIcon from "@/icons/FacebookIcon/FacebookIcon";
import InstagramIcon from "@/icons/InstagramIcon/InstagramIcon";
import VkIcon from "@/icons/VkIcon/VkIcon";
import React from "react";
import s from "./LandingSocial.module.scss"
import classNames from "classnames";

interface socialsProps {
  className?: string;
}

const LandingSocial = ({className}: socialsProps) => {
  return (
    <div className={classNames(s.landing_socials, className)}>
      <p>Наши соц сети:</p>
      <a href="#">
        <FacebookIcon />
      </a>
      <a href="#">
        <VkIcon />
      </a>
      <a href="#">
        <InstagramIcon />
      </a>
    </div>
  );
};

export default LandingSocial;
