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
import AboutUs from "@/components/AboutUs/AboutUs";
import CheckoutOrder from "@/components/CheckoutOrder/CheckoutOrder";
import CustomerReviews from "@/components/CustomerReviews/CustomerReviews";
import Benefits from "@/components/Benefits/Benefits";
import Pricing from "@/components/Pricing/Pricing";
import Awards from "@/components/Awards/Awards";
import Contacts from "@/components/Contacts/Contacts";
import Tech from "@/components/Tech/Tech";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Hero/>
      <TypesWork/>
      <Awards/>
      <AsideBtn/>
      <OurService/>
      <AboutUs/>
      <Benefits />
      <Tech/>
      <CustomerReviews />
      <Pricing/>
      <Portfolio/>
      <CheckoutOrder />
      <News/>
      <Contacts/>
      <Footer />
    </main>
  );
}
