import Image from "next/image";
import StoreBadges from "@/components/StoreBadges";

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden rounded-t-[32px] sm:rounded-t-[48px]">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <Image
          src="/Home/lastseciton.png"
          alt="Premium car ready for CareKar's doorstep cleaning service"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="container-page relative grid min-h-[220px] gap-6 py-10 sm:py-12 lg:min-h-[260px] lg:grid-cols-2 lg:items-center">
        <div className="flex flex-col gap-4">
          <h2 className="text-[26px] font-extrabold leading-tight tracking-tight text-white sm:text-[32px]">
            Ready for a Cleaner,
            <br />
            Fresher Ride?
          </h2>
          <p className="max-w-sm text-[14px] leading-6 text-[#BFDBFE]">
            Download the CareKar app and book your first service today.
          </p>
          <StoreBadges />
        </div>
      </div>
    </section>
  );
}
