import React from "react";
import s from "./Benefits.module.scss";
import Title from "../Title/Title";
import Container from "../Container/Container";

const Benefits = () => {
  const dates = [
    {
      id: 1,
      text: "индивидуальный подход к каждому заказу",
    },
    {
      id: 2,
      text: "Цифровые решения и высокие технологии",
    },
    {
      id: 3,
      text: "опытные техники, мастера своего дела",
    },
    {
      id: 4,
      text: "ответственность за конечный результат",
    },
    {
      id: 5,
      text: "быстрая и надежная доставка продукции",
    },
    {
      id: 6,
      text: "расширенные гарантии на все виды работ",
    },
  ];
  return (
    <section id="cooperation" className={s.benefits}>
      <Container>
        <Title
          title="Преимущества сотрудничества "
          description="Обеспечьте своей клинике конкурентное преимущество
 с нашими инновациями и материалами высшего качества"
          classProps={s.title_benefits}
        />

        <div className={s.benefits_content}>
          {dates.map((date, i) => {
            return (
              <div className={s.benefits_block_content} key={i}>
                <span>{date.id}</span>
                <div className={s.benefits_block}>
                  <p>{date.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Benefits;
