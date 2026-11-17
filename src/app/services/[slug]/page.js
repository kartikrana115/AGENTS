import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ExteriorIcon,
  InteriorIcon,
  CarIcon,
  CheckCircleIcon,
  ArrowRightIcon,
} from "@/components/icons";

const servicesData = {
  "exterior-car-wash": {
    icon: ExteriorIcon,
    name: "Exterior Car Wash",
    description:
      "A complete exterior wash covering the body, wheels, tyres and glass, leaving your car spotless and shining.",
    inclusions: [
      "Body foam wash",
      "Wheel and tyre cleaning",
      "Glass and mirror cleaning",
      "Exterior wipe-down and drying",
    ],
  },
  "interior-cleaning": {
    icon: InteriorIcon,
    name: "Interior Cleaning",
    description:
      "Deep cleaning of the car interior including seats, dashboard, mats and other surfaces for a fresh cabin.",
    inclusions: [
      "Seat and upholstery cleaning",
      "Dashboard and console cleaning",
      "Floor mat cleaning",
      "Interior glass cleaning",
    ],
  },
  "full-car-cleaning": {
    icon: CarIcon,
    name: "Full Car Cleaning",
    description:
      "Our most complete package, combining interior and exterior cleaning for total doorstep car care.",
    inclusions: [
      "Everything in Exterior Car Wash",
      "Everything in Interior Cleaning",
      "Priority scheduling",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = servicesData[slug];

  return {
    title: service ? `${service.name} | CareKar` : "Service | CareKar",
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <div className="flex flex-1 flex-col">
      <section className="bg-grid bg-gradient-to-b from-blue-50 via-white to-white px-6 py-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-200">
            <Icon className="h-8 w-8" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            {service.name}
          </h1>
          <p className="max-w-xl text-lg leading-8 text-slate-600">
            {service.description}
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-2xl rounded-2xl border border-blue-100 bg-white p-8 shadow-sm shadow-blue-50">
          <h2 className="mb-5 text-lg font-semibold text-slate-900">
            What&apos;s Included
          </h2>
          <ul className="flex flex-col gap-3">
            {service.inclusions.map((item) => (
              <li key={item} className="flex items-center gap-3 text-slate-700">
                <CheckCircleIcon className="h-5 w-5 shrink-0 text-blue-600" />
                {item}
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="mt-8 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-blue-600 font-semibold text-white shadow-md shadow-blue-200 transition-all hover:bg-blue-700 hover:shadow-lg"
          >
            Book This Service
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>

        <div className="mx-auto mt-6 max-w-2xl text-center">
          <Link
            href="/services"
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            &larr; Back to all services
          </Link>
        </div>
      </section>
    </div>
  );
}
