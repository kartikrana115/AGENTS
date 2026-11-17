import Link from "next/link";
import {
  ExteriorIcon,
  InteriorIcon,
  CarIcon,
  CalendarIcon,
  RepeatIcon,
  SparkleIcon,
  ArrowRightIcon,
} from "@/components/icons";

export const metadata = {
  title: "Services | CareKar",
  description:
    "Explore CareKar's car cleaning services and monthly subscription plans.",
};

const services = [
  {
    slug: "exterior-car-wash",
    icon: ExteriorIcon,
    name: "Exterior Car Wash",
    description:
      "Complete exterior wash including body, wheels and glass to keep your car spotless.",
  },
  {
    slug: "interior-cleaning",
    icon: InteriorIcon,
    name: "Interior Cleaning",
    description:
      "Deep cleaning of seats, dashboard, mats and interior surfaces for a fresh cabin.",
  },
  {
    slug: "full-car-cleaning",
    icon: CarIcon,
    name: "Full Car Cleaning",
    description:
      "Combined interior and exterior cleaning for complete doorstep car care.",
  },
];

const frequencies = [
  {
    icon: CalendarIcon,
    title: "One-Time Service",
    description: "Book a single cleaning service whenever you need it.",
  },
  {
    icon: RepeatIcon,
    title: "Daily / Recurring",
    description:
      "Set up a recurring schedule with the flexibility to skip a service subject to cutoff rules.",
  },
  {
    icon: SparkleIcon,
    title: "Monthly Subscription",
    description:
      "Choose a monthly plan with included cleaning services and 2 free foam washes per car.",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-1 flex-col">
      <section className="bg-grid bg-gradient-to-b from-blue-50 via-white to-white px-6 py-20 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-xs font-semibold text-blue-700">
          Our Services
        </span>
        <h1 className="mx-auto mt-4 max-w-2xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          Cleaning Services for Every Need
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
          Choose from our core cleaning services, delivered right at your
          doorstep by verified experts.
        </p>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group rounded-2xl border border-blue-100 bg-white p-7 shadow-sm shadow-blue-50 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-100"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="mb-2 text-lg font-semibold text-slate-900">
                  {service.name}
                </h2>
                <p className="text-sm leading-6 text-slate-500">
                  {service.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600">
                  Learn more
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-blue-600">
              Choose Your Frequency
            </span>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
              Book It Your Way
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {frequencies.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl bg-white p-7 text-center shadow-sm shadow-blue-50"
                >
                  <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
