import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Partner } from "./components/Partner";
import { Products } from "./components/Products";
import { WhyChooseUs } from "./components/WhyChooseUs";

export default function Home() {
  return (
    <main className="bg-[var(--color-page)] text-[var(--color-ink)]">
      <Hero />
      <About />
      <Products />
      <WhyChooseUs />
      <Partner />
      <Contact />
      <Footer />
    </main>
  );
}
