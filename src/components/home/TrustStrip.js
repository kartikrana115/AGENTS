import { CalendarIcon, PersonCheckIcon, LayersIcon, SparkleIcon } from "@/components/icons";

const items = [
  {
    icon: CalendarIcon,
    title: "Convenient",
    description: "Book in minutes from anywhere",
  },
  {
    icon: PersonCheckIcon,
    title: "Professional Experts",
    description: "Trained & verified cleaning specialists",
  },
  {
    icon: LayersIcon,
    title: "Flexible Plans",
    description: "One-time, daily or monthly subscriptions",
  },
  {
    icon: SparkleIcon,
    title: "Premium Care",
    description: "Keep your car fresh, inside and out",
  },
];

export default function TrustStrip() {
  return (
    <section className="relative z-10 px-6 pt-10 sm:pt-14">
      <div className="container-page !px-0">
        <div className="rounded-[24px] border border-[#E5E7EB] bg-white px-6 py-8 shadow-[0_12px_32px_-16px_rgba(16,24,40,0.12)] sm:px-10">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-0">
            {items.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`flex items-start gap-3 px-0 sm:px-6 ${
                    index !== 0 ? "sm:border-l sm:border-[#E5E7EB]" : ""
                  }`}
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EAF4FF] text-[#1677E8]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-[14.5px] font-semibold text-[#101828]">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 text-[13px] leading-5 text-[#667085]">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
