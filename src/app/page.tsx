'use client';

import Image from "next/image";
import Topbar from "./topbar";
import HeroSection from "./herosection";
import ServicesSection from "./servicesection";
import ContactSection from "./contactsection";
import "./globals.css"
import TestimonialsSection from "./testimonialsection";
import Footer from "./footersectoin";
import TutorsSection from "./tutorssection";
import WhatsAppIcon from "./whatsappicon";
import  Faqsection  from "./faqsection";

export default function Home() {
  return (
    <>
      <Topbar />
      <HeroSection />
      <ServicesSection />
      {/* <KeyFeaturesSection/> */}
      <TutorsSection />
      <TestimonialsSection />
      <ContactSection />
      <Faqsection/>
      <Footer />
      <WhatsAppIcon />

    </>
  );
}
