import Reveal from "@/components/Reveal";
import { CarIcon, GridServiceIcon, CalendarIcon, PaymentCardIcon, SparkleIcon } from "@/components/icons";

const steps = [
  {
    icon: CarIcon,
    title: "Add Your Car",
    description: "Add your vehicle details in a few seconds.",
  },
  {
    icon: GridServiceIcon,
    title: "Choose a Service",
    description: "Select the service and frequency you need.",
  },
  {
    icon: CalendarIcon,
    title: "Pick Date & Time",
    description: "Schedule a slot at your preferred location.",
  },
  {
    icon: PaymentCardIcon,
    title: "Make Payment",
    description: "Secure and hassle-free online payment.",
  },
  {
    icon: SparkleIcon,
    title: "Service at Your Door",
    description: "Our expert arrives and cleans your car.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden bg-white px-6 py-20 sm:py-24">
      {/* Soft decorative backdrop */}
      <div className="pointer-events-none absolute left-1/2 top-24 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-[#EAF4FF] opacity-60 blur-3xl" />

      <div className="container-page relative">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-[#1677E8]">
            How It Works
          </span>
          <h2 className="mt-2 text-[32px] font-extrabold leading-tight tracking-tight text-[#101828] sm:text-[38px]">
            Book. Relax. Get It Done.
          </h2>
          <p className="mt-3 text-[15px] leading-6 text-[#667085]">
            A seamless and transparent process designed around your
            convenience.
          </p>
        </Reveal>

        <div className="relative mt-16">
          {/* Gradient connecting line with animated dashes */}
          <div className="pointer-events-none absolute left-0 right-0 top-[34px] hidden lg:block">
            <div className="h-[2px] w-full bg-gradient-to-r from-[#1677E8]/10 via-[#1677E8]/40 to-[#1677E8]/10" />
          </div>

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.title} delay={index * 90}>
                  <div className="group flex flex-col items-center text-center">
                    <div className="relative mb-5">
                      <div className="relative z-10 flex h-[68px] w-[68px] items-center justify-center rounded-2xl bg-gradient-to-br from-[#1677E8] to-[#0B3B73] text-white shadow-[0_12px_24px_-8px_rgba(22,119,232,0.45)] transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:scale-105">
                        <Icon className="h-7 w-7" />
                      </div>
                      <span className="absolute -right-2 -top-2 z-20 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#F5B700] text-[11px] font-bold text-white shadow-sm">
                        {index + 1}
                      </span>
                    </div>

                    <h3 className="text-[15px] font-semibold text-[#101828]">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 max-w-[190px] text-[13.5px] leading-5 text-[#667085]">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
