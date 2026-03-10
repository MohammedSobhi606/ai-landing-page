import gsap from "gsap";
import { ReactLenis } from "lenis/react";
import { useEffect, useRef } from "react";

import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Hero from "./components/hero/Hero";
import Benefits from "./components/Benefits";
import { Collaboration } from "./components/Collaboration";
import Services from "./components/servicesSection/Services";
import Pricing from "./components/pricing/Pricing";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";

function App() {
  const lenisRef = useRef();

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <>
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
      <div className="pt-19 lg:pt-21 overflow-hidden ">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>
      {/* graidient ring */}
      <ButtonGradient />
    </>
  );
}

export default App;
