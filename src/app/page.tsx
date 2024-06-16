import Image from "next/image";
import Topbar from "./topbar";
import HeroSection from "./herosection";
import ServicesSection from "./servicesection";
import TutorsSection from "./tutorssection";
import ContactSection from "./contactsection";
import "./globals.css"
import TestimonialsSection from "./testimonialsection";
import Footer from "./footersectoin";

export default function Home() {
  return (
    <>
      <Topbar />
      <HeroSection />
      <ServicesSection />
      <TutorsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
