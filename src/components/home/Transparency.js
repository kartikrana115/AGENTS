import Image from "next/image";
import Reveal from "@/components/Reveal";
import { CheckIcon } from "@/components/icons";

const stages = [
  {
    step: "01",
    title: "Before Service",
    items: ["Expert arrival", "Vehicle inspection", "Before-service photos"],
  },
  {
    step: "02",
    title: "During Service",
    items: ["Service checklist", "Professional cleaning", "Status updates"],
  },
  {
    step: "03",
    title: "After Service",
    items: ["After-service photos", "Completion confirmation", "Rating & feedback"],
  },
];

export default function Transparency() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] px-6 py-20 sm:py-24">
      <div className="pointer-events-none absolute -left-32 top-10 h-[360px] w-[360px] rounded-full bg-[#EAF4FF] opacity-70 blur-3xl" />

      <div className="container-page relative grid items-center gap-14 lg:grid-cols-2">
        <Reveal className="relative">
          <div className="relative aspect-[4/3.4] w-full overflow-hidden rounded-[28px] shadow-[0_24px_56px_-24px_rgba(16,24,40,0.25)]">
            <Image
              src="/Service/external.png"
              alt="CareKar cleaning expert foam washing a car at a customer's home"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-6 -right-4 flex items-center gap-3 rounded-2xl border border-[#E5E7EB] bg-white px-5 py-4 shadow-[0_16px_36px_-16px_rgba(16,24,40,0.2)] sm:-right-8">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1677E8] text-white">
              <CheckIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-[13px] font-semibold text-[#101828]">100% Verified</p>
              <p className="text-[11px] text-[#667085]">Every job photo-documented</p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-[#1677E8]">
              Complete Transparency
            </span>
            <h2 className="mt-2 text-[32px] font-extrabold leading-tight tracking-tight text-[#101828] sm:text-[38px]">
              See Every Step of the Service
            </h2>
          </Reveal>

          <div className="mt-8 flex flex-col gap-4">
            {stages.map((stage, index) => (
              <Reveal key={stage.title} delay={index * 100}>
                <div className="group flex gap-5 rounded-2xl border border-transparent p-4 transition-all duration-300 hover:border-[#E5E7EB] hover:bg-white hover:shadow-[0_12px_28px_-16px_rgba(16,24,40,0.15)]">
                  <div className="flex flex-col items-center">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#1677E8] to-[#0B3B73] text-[13px] font-bold text-white shadow-[0_8px_16px_-6px_rgba(22,119,232,0.45)] transition-transform duration-300 group-hover:scale-110">
                      {stage.step}
                    </span>
                    {index !== stages.length - 1 && (
                      <span className="mt-2 h-full w-px flex-1 bg-[#DCE6F5]" />
                    )}
                  </div>
                  <div className="pb-2">
                    <h3 className="text-[15.5px] font-semibold text-[#101828]">
                      {stage.title}
                    </h3>
                    <ul className="mt-2.5 flex flex-col gap-2">
                      {stage.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-[13.5px] text-[#667085]">
                          <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#EAF4FF] text-[#1677E8]">
                            <CheckIcon className="h-2.5 w-2.5" />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
