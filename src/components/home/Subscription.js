import Image from "next/image";
import Link from "next/link";
import { CheckCircleIcon } from "@/components/icons";

const benefits = [
  "Regular cleaning at lower cost",
  "2 Free Foam Washes every month",
  "Track remaining services",
  "Pause or cancel anytime",
];

export default function Subscription() {
  return (
    <section id="subscription" className="relative z-10 overflow-hidden py-14 sm:py-16">
      {/* Full-section background image */}
      <div className="absolute inset-0">
        <Image
          src="/Home/subscription.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        {/* Fade so the left-side text stays readable over the photo */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/75 to-white/15 lg:from-white lg:via-white/70 lg:to-transparent" />
      </div>

      <div className="container-page relative grid items-center gap-16 px-6 lg:grid-cols-2">
        <div className="flex flex-col gap-6 rounded-[24px] p-6 backdrop-blur-md sm:bg-white/40 sm:p-8 lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
          <span className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-[#1677E8]">
            Subscription
          </span>
          <h2 className="text-[32px] font-extrabold leading-tight tracking-tight text-[#101828] sm:text-[38px]">
            Recurring Care.
            <br />
            More Savings.
          </h2>
          <p className="max-w-md text-[15px] leading-7 text-[#374151]">
            Choose a monthly plan and get 2 free foam washes every month for
            each subscribed car.
          </p>
          <Link
            href="/services"
            className="inline-flex h-12 w-fit items-center gap-2 rounded-[12px] bg-[#1677E8] px-6 text-[15px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0f5fc7] hover:shadow-lg hover:shadow-[#1677E8]/20"
          >
            View Plans
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="relative mx-auto flex w-full max-w-md justify-center lg:justify-end">
          <div className="w-[260px] rounded-[20px] border border-[#E5E7EB] bg-white p-5 shadow-[0_24px_56px_-16px_rgba(16,24,40,0.22)] sm:w-[300px] sm:p-6">
            <span className="inline-flex items-center rounded-full bg-[#EAF4FF] px-2.5 py-1 text-[10px] font-bold tracking-wide text-[#1677E8]">
              2 FREE FOAM WASHES
            </span>
            <h3 className="mt-3 text-[15px] font-semibold text-[#101828]">
              Monthly Plan Benefits
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2.5 text-[13px] leading-5 text-[#374151]">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1677E8] text-white">
                    <CheckCircleIcon className="h-3 w-3" />
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
