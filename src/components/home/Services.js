import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { ClockIcon, ArrowRightIcon, CarIcon } from "@/components/icons";

const services = [
  {
    slug: "exterior-car-wash",
    title: "Exterior Car Wash",
    description: "Remove dirt, dust and grime for a sparkling exterior.",
    duration: "30–45 mins",
    image: "/Service/external.png",
  },
  {
    slug: "interior-cleaning",
    title: "Interior Cleaning",
    description: "Clean and fresh interiors for a healthier drive.",
    duration: "45–60 mins",
    image: "/Service/internal.png",
  },
  {
    slug: "full-car-cleaning",
    title: "Full Car Cleaning",
    description: "Complete interior and exterior care for a like-new feel.",
    duration: "60–90 mins",
    image:
      "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=900&h=700&fit=crop&q=80",
  },
];

export default function Services() {
  return (
    <section id="services" className="px-6 py-20 sm:py-24">
      <div className="container-page">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-[#1677E8]">
              Our Services
            </span>
            <h2 className="mt-2 text-[32px] font-extrabold leading-tight tracking-tight text-[#101828] sm:text-[38px]">
              Complete Car Care at Your Doorstep
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-[#1677E8] hover:underline"
          >
            View All Services
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 100} className="h-full">
              <Link
                href={`/services/${service.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-[#E5E7EB] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(16,24,40,0.18)]"
              >
                <div className="relative h-[220px] w-full shrink-0 overflow-hidden bg-[#0B0B0B]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="relative -mt-6 flex flex-1 flex-col rounded-t-[24px] bg-white px-6 pb-6 pt-9">
                  <span className="absolute -top-6 left-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF4FF] text-[#1677E8] shadow-[0_8px_20px_-8px_rgba(22,119,232,0.35)]">
                    <CarIcon className="h-6 w-6" />
                  </span>

                  <h3 className="text-[17px] font-semibold text-[#101828]">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-6 text-[#667085]">
                    {service.description}
                  </p>

                  <div className="mt-auto flex items-center justify-between pt-5">
                    <span className="flex items-center gap-1.5 text-[13px] text-[#667085]">
                      <ClockIcon className="h-4 w-4" />
                      {service.duration}
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E5E7EB] text-[#101828] transition-all duration-300 group-hover:translate-x-0.5 group-hover:border-[#1677E8] group-hover:bg-[#1677E8] group-hover:text-white">
                      <ArrowRightIcon className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
