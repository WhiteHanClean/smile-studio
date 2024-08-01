import React, { useState, useRef, MouseEvent } from "react";
import s from "./PortfolioTabs.module.scss";

const PortfolioTabs = () => {
  const [activeTab, setActiveTab] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const startX = useRef<number>(0);
  const scrollLeft = useRef<number>(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const tabs = [
    "Все Категории",
    "Бюгельные протезы",
    "Виниры",
    "Диоксид циркония",
    "Металлокерамика",
    "Навигационные шаблоны",
    "Протезы на имплантах"
  ];

  const handleMouseDown = (e: MouseEvent) => {
    if (containerRef.current) {
      startX.current = e.pageX - containerRef.current.offsetLeft;
      scrollLeft.current = containerRef.current.scrollLeft;
      containerRef.current.addEventListener('mousemove', handleMouseMove);
      containerRef.current.addEventListener('mouseup', handleMouseUp);
    }
  };

  const handleMouseMove = (e: any) => {
    if (containerRef.current) {
      const x = e.pageX - containerRef.current.offsetLeft;
      const scroll = x - startX.current;
      containerRef.current.scrollLeft = scrollLeft.current - scroll;
    }
  };

  const handleMouseUp = () => {
    if (containerRef.current) {
      containerRef.current.removeEventListener('mousemove', handleMouseMove);
      containerRef.current.removeEventListener('mouseup', handleMouseUp);
    }
  };

  return (
    <div className={s.portfolio_tabs}>
      <div
        className={s.portfolio_tabs_overflow}
        ref={containerRef}
        onMouseDown={handleMouseDown}
      >
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={activeTab === index ? `${s.active}` : ""}
            onClick={() => handleTabClick(index)}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PortfolioTabs;
