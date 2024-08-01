"use client";

import React from "react";
import s from "./CheckoutOrder.module.scss";
import Image from "next/image";
import LandingBtn from "../ui/landingBtn/LandingBtn";
import Container from "../Container/Container";
import LandingInput from "../ui/landingInput/LandingInput";
import { Button, Form, FormProps } from "antd";
import classNames from "classnames";

type FieldType = {
  username?: string;
  number?: string;
};

const CheckoutOrder = () => {
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <section className={s.checkout_order}>
      <Container>
        <div
          className={classNames(s.checkout_order_img, s.checkout_order_form)}
        >
          <Image
            src={"/checkoutOrder/img_hand_peop.svg"}
            width={327}
            height={324}
            alt="hand_peop"
            className={s.peop}
          />
          <Image
            src={"/checkoutOrder/img_hand_rob.svg"}
            width={390}
            height={402}
            alt="hand_rob"
            className={s.rob}
          />
          <div className={s.checkout_order_form_title}>
            <h2>Оформить заказ</h2>
            <span>
              Для оформления заказа заполните форму, и мы обязательно свяжемся с
              вами
            </span>
          </div>

          <Form
            name="basic"
            style={{ zIndex: 100, position: "relative" }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            className={s.form}
          >
            <Form.Item<FieldType>
              name="username"
              rules={[{ required: true, message: "" }]}
            >
              <LandingInput className={s.form_input} placeholder="Ваше имя" />
            </Form.Item>

            <Form.Item<FieldType>
              name="number"
              rules={[{ required: true, message: "" }]}
            >
              <LandingInput
                className={s.form_input}
                placeholder="Ваш номер телефона"
              />
            </Form.Item>

            <div className={s.forms_btn}>
              <Button className={s.form_btn} htmlType="submit">
                Отправить
              </Button>
            </div>
          </Form>

          <LandingBtn
            className={s.checkout_order_btn}
            nameBtn="Расширенный заказ"
          />
        </div>
      </Container>
    </section>
  );
};

export default CheckoutOrder;
