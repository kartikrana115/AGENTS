import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import Services from "@/components/home/Services";
import HowItWorks from "@/components/home/HowItWorks";
import MobileApp from "@/components/home/MobileApp";
import Subscription from "@/components/home/Subscription";
import FamilyCars from "@/components/home/FamilyCars";
import WhyCareKar from "@/components/home/WhyCareKar";
import Transparency from "@/components/home/Transparency";
import Testimonials from "@/components/home/Testimonials";
import FinalCta from "@/components/home/FinalCta";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Hero />
      <TrustStrip />
      <Services />
      <Subscription />
      <HowItWorks />
      <MobileApp />
      <FamilyCars />
      <WhyCareKar />
      <Transparency />
      <Testimonials />
      <FinalCta />
    </div>
  );
}
