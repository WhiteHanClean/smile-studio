"use client";
import Header from "@/components/Header/Header";
import styles from "./page.module.scss";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import OurService from "@/components/OurService/OurService";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Hero/>
      <OurService/>
      <Footer />
    </main>
  );
}
