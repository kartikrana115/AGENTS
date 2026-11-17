import Image from "next/image";
import StoreBadges from "@/components/StoreBadges";
import Reveal from "@/components/Reveal";
import PhoneMockup from "@/components/PhoneMockup";

export default function MobileApp() {
  return (
    <section className="relative z-0 overflow-x-clip bg-[#F8FAFC] px-6 py-14 sm:py-16 lg:pt-24 lg:pb-16">
      <div className="absolute inset-0">
        <Image
          src="/Home/downloadsectoin.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="container-page relative grid items-center gap-16 lg:grid-cols-2">
        <Reveal className="flex flex-col gap-6 lg:pb-24">
          <span className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-[#1677E8]">
            Mobile App
          </span>
          <h2 className="text-[32px] font-extrabold leading-tight tracking-tight text-[#101828] sm:text-[38px]">
            Everything You Need
            <br />
            in Your Pocket
          </h2>
          <p className="max-w-md text-[15px] leading-7 text-[#667085]">
            Manage your cars, book services, track subscriptions and more —
            all in one app.
          </p>
          <StoreBadges />
          <p className="text-[13px] text-[#667085]">Available on iOS & Android</p>
        </Reveal>

        {/* Phones sit in the normal grid on mobile/tablet, fully visible.
            On desktop we pull the whole stack up by 80px so the top of the
            phones spills over this section's top edge into whatever comes
            before it, while the rest of the phones stay fully visible
            inside this section. */}
        <Reveal delay={150} className="relative flex justify-center pt-8 lg:mt-[-80px] lg:justify-end lg:pt-0">
          <PhoneMockup />
        </Reveal>
      </div>
    </section>
  );
}
