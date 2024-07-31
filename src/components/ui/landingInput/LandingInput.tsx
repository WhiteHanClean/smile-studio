"use client";

import React, { FC } from "react";
import s from "./LandingInput.module.scss";
import { Input } from "antd";
import classNames from "classnames";

interface LandingInputProps {
  className?: string;
  placeholder?: string;
}

const LandingInput: FC<LandingInputProps> = ({ className, placeholder }) => {
  return (
    <Input
      className={classNames(s.input_landing, className)}
      placeholder={placeholder}
    />
  );
};

export default LandingInput;
