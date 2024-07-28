"use client";
import AdsideBtnBackground from "@/icons/AsideBtnBackground/AdsideBtnBackground";
import AsideBtnIcon from "@/icons/AsideBtnIcon/AsideBtnIcon";
import AsideBtnMask from "@/icons/AsideBtnMask/AsideBtnMask";
import React from "react";
import Container from "../Container/Container";
import s from "./AsideBtn.module.scss";

const AsideBtn = () => {
  return (
    <div className={s.aside_btn}>
      <Container>
        <div className={s.aside_btn_items}>
          <div className={s.aside_btn_field}>
            <div className={s.aside_btn_item}>
              <AsideBtnMask />
            </div>
            <div className={s.aside_btn_item}>
              <AdsideBtnBackground />
            </div>
            <div className={s.aside_btn_item}>
              <AsideBtnIcon />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AsideBtn;
