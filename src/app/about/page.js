import {
  CarIcon,
  UsersIcon,
  ShieldCheckIcon,
  SparkleIcon,
  RepeatIcon,
  CheckCircleIcon,
} from "@/components/icons";

export const metadata = {
  title: "About | CareKar",
  description: "Learn about the CareKar doorstep car cleaning platform.",
};

const components = [
  {
    icon: UsersIcon,
    title: "Customer App",
    description:
      "Account, cars, booking, subscriptions, payments, service history, notifications and support.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Cleaning Expert App",
    description:
      "Assigned jobs, customer and location details, service checklist, before/after photos and job completion.",
  },
  {
    icon: CarIcon,
    title: "Admin Panel",
    description:
      "Customers, vehicles, experts, services, pricing, plans, bookings, coupons, payments and reports.",
  },
];

const rules = [
  {
    icon: CarIcon,
    title: "Multiple Cars",
    description:
      "One customer account can contain multiple personal and family vehicles.",
  },
  {
    icon: RepeatIcon,
    title: "Plan Per Car",
    description:
      "Monthly subscription and its benefits are linked to the selected subscribed car.",
  },
  {
    icon: SparkleIcon,
    title: "Free Foam Wash",
    description:
      "2 free foam washes are granted per active subscribed car, every month.",
  },
  {
    icon: CheckCircleIcon,
    title: "No Carry Forward",
    description:
      "Unused free foam washes expire at the end of the applicable month.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-1 flex-col">
      <section className="bg-grid bg-gradient-to-b from-blue-50 via-white to-white px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-xs font-semibold text-blue-700">
            About CareKar
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Doorstep Car Cleaning, Reimagined
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            CareKar is a customer-focused, doorstep car cleaning platform.
            Customers can add their own vehicles and family members&apos;
            vehicles, choose a cleaning service, pick one-time, daily or
            monthly frequency, schedule a preferred slot, and get the
            service delivered at their selected location.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-blue-600">
              The Platform
            </span>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
              Three Apps, One Experience
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {components.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-blue-100 bg-white p-7 shadow-sm shadow-blue-50 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-100"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-slate-900">
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

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-blue-600">
              How It&apos;s Structured
            </span>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
              Core Business Rules
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {rules.map((rule) => {
              const Icon = rule.icon;
              return (
                <div
                  key={rule.title}
                  className="flex gap-4 rounded-2xl bg-white p-6 shadow-sm shadow-blue-50"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-slate-900">
                      {rule.title}
                    </h3>
                    <p className="text-sm text-slate-500">{rule.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 text-center">
        <div className="mx-auto max-w-2xl rounded-3xl bg-gradient-to-br from-blue-600 to-blue-700 px-8 py-12 text-white shadow-xl shadow-blue-200">
          <h2 className="text-2xl font-bold sm:text-3xl">
            &ldquo;Your Car. Your Place. Our Cleaning.&rdquo;
          </h2>
          <p className="mt-3 text-blue-100">
            A platform built around convenience, recurring care, and
            transparent service execution.
          </p>
        </div>
      </section>
    </div>
  );
}
