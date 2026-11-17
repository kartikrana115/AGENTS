import Reveal from "@/components/Reveal";
import { ShieldCheckIcon, CalendarIcon, PriceTagIcon, UsersIcon } from "@/components/icons";

const features = [
  {
    icon: ShieldCheckIcon,
    title: "Trusted Experts",
    description: "Verified and trained cleaning professionals you can rely on.",
  },
  {
    icon: CalendarIcon,
    title: "Flexible Scheduling",
    description: "Book one-time, daily or monthly at your convenience.",
  },
  {
    icon: PriceTagIcon,
    title: "Transparent Pricing",
    description: "Clear upfront pricing with absolutely no hidden charges.",
  },
  {
    icon: UsersIcon,
    title: "Multiple Cars",
    description: "Add every vehicle in your family under one account.",
  },
];

export default function WhyCareKar() {
  return (
    <section id="why-carekar" className="relative overflow-hidden px-6 py-20 sm:py-24">
      <div className="pointer-events-none absolute right-[-120px] top-1/3 h-[320px] w-[320px] rounded-full bg-[#EAF4FF] opacity-70 blur-3xl" />

      <div className="container-page relative">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-[#1677E8]">
            Why CareKar
          </span>
          <h2 className="mt-2 text-[32px] font-extrabold leading-tight tracking-tight text-[#101828] sm:text-[38px]">
            A Smarter Way to Keep Your Car Clean
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Reveal key={feature.title} delay={index * 90}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-[20px] border border-[#E5E7EB] bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-transparent hover:shadow-[0_20px_44px_-20px_rgba(22,119,232,0.28)]">
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#EAF4FF] to-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1677E8] to-[#0B3B73] text-white shadow-[0_10px_20px_-8px_rgba(22,119,232,0.45)] transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </span>

                  <h3 className="relative z-10 mt-5 text-[15px] font-semibold text-[#101828]">
                    {feature.title}
                  </h3>
                  <p className="relative z-10 mt-1.5 text-[13.5px] leading-5 text-[#667085]">
                    {feature.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
