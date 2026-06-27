import { useState } from "react";
import { Navbar } from "@/sections/Navbar";
import { Hero } from "@/sections/Hero";
import { Search } from "@/sections/Search";
import { Categories } from "@/sections/Categories";
import { Brands } from "@/sections/Brands";
import { WhyChooseUs } from "@/sections/WhyChooseUs";
import { Testimonials } from "@/sections/Testimonials";
import { Footer } from "@/sections/Footer";
import { InquiryModal } from "@/components/InquiryModal";

export default function App() {
  const [inquiryOpen, setInquiryOpen] = useState(false);

  return (
    <>
      <Navbar onInquiry={() => setInquiryOpen(true)} />

      <main>
        <Hero onInquiry={() => setInquiryOpen(true)} />
        <Search />
        <Categories />
        <Brands />
        <WhyChooseUs />
        <Testimonials />
      </main>

      <Footer onInquiry={() => setInquiryOpen(true)} />

      <InquiryModal open={inquiryOpen} onOpenChange={setInquiryOpen} />
    </>
  );
}
