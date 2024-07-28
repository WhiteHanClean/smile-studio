"use client";
import Header from "@/components/Header/Header";
import styles from "./page.module.scss";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import OurService from "@/components/OurService/OurService";
import Portfolio from "@/components/Portfolio/Portfolio";
import AsideBtn from "@/components/AsideBtn/AsideBtn";
import News from "@/components/News/News";
import TypesWork from "@/components/TypesWork/TypesWork";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Hero/>
      <TypesWork/>
      <AsideBtn/>
      <OurService/>
      <Portfolio/>
      <News/>
      <Footer />
    </main>
  );
}
