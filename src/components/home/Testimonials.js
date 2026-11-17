"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { StarIcon } from "@/components/icons";

function TestimonialCard({ testimonial }) {
  return (
    <div className="h-full rounded-[20px] border border-[#E5E7EB] bg-white p-6 shadow-[0_8px_24px_-16px_rgba(16,24,40,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_-16px_rgba(16,24,40,0.18)]">
      <div className="flex items-center gap-3">
        <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
          <Image src={testimonial.avatar} alt={testimonial.name} fill sizes="40px" className="object-cover" />
        </span>
        <div>
          <p className="text-[14px] font-semibold text-[#101828]">{testimonial.name}</p>
          <div className="flex items-center gap-1.5">
            <span className="flex text-[#F5B700]">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-3.5 w-3.5 fill-current" />
              ))}
            </span>
            <span className="text-[11px] text-[#98A2B3]">{testimonial.city}</span>
          </div>
        </div>
      </div>
      <p className="mt-4 text-[13.5px] leading-6 text-[#374151]">&ldquo;{testimonial.review}&rdquo;</p>
    </div>
  );
}

const testimonials = [
  {
    name: "Amit Sharma",
    city: "Delhi",
    avatar:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop&crop=faces",
    review:
      "Super convenient! The team was on time and did an amazing job. My car looks brand new.",
  },
  {
    name: "Priya Mehta",
    city: "Mumbai",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=faces",
    review:
      "The monthly plan is a great value. Love the two free foam washes every month.",
  },
  {
    name: "Karan Verma",
    city: "Bengaluru",
    avatar:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100&h=100&fit=crop&crop=faces",
    review:
      "Professional, polite and high quality service. Highly recommended!",
  },
  {
    name: "Ritika Singh",
    city: "Gurugram",
    avatar:
      "https://images.unsplash.com/photo-1520810627419-35e362c5dc07?w=100&h=100&fit=crop&crop=faces",
    review:
      "Bahut hi badhiya service hai! Ghar baithe car saaf ho jaati hai, time bhi bachta hai.",
  },
  {
    name: "Vikram Rathore",
    city: "Jaipur",
    avatar:
      "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?w=100&h=100&fit=crop&crop=faces",
    review:
      "Do gaadiyon ka monthly plan liya hai, dono ke free foam wash bhi milte hain. Paisa vasool!",
  },
  {
    name: "Ananya Iyer",
    city: "Chennai",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=faces",
    review:
      "Booking was quick and the before/after photos gave me full confidence in the service.",
  },
  {
    name: "Rohit Nair",
    city: "Pune",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
    review:
      "Expert time pe aaya, kaam bhi neat tha. Ab har mahine yahi book karta hoon.",
  },
  {
    name: "Simran Kaur",
    city: "Chandigarh",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=faces",
    review:
      "Great app experience and the cleaning quality is consistently good every single time.",
  },
];

const GROUP_SIZE = 4;

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(testimonials.length / GROUP_SIZE);

  function goTo(nextPage) {
    const clamped = (nextPage + totalPages) % totalPages;
    setPage(clamped);
  }

  // Desktop (lg+) shows a single row of GROUP_SIZE cards for the current
  // page. Below that breakpoint all testimonials are shown in a
  // horizontally scrollable strip instead.
  const visibleTestimonials = testimonials.slice(
    page * GROUP_SIZE,
    page * GROUP_SIZE + GROUP_SIZE
  );

  return (
    <section className="px-6 py-20 sm:py-24">
      <div className="container-page">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <span className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-[#1677E8]">
              Customer Love
            </span>
            <h2 className="mt-2 text-[32px] font-extrabold leading-tight tracking-tight text-[#101828] sm:text-[38px]">
              What Car Owners Say
            </h2>
          </Reveal>

          <div className="hidden items-center gap-2 sm:flex">
            <button
              type="button"
              onClick={() => goTo(page - 1)}
              aria-label="Previous testimonials"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E7EB] text-[#101828] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1677E8] hover:bg-[#EAF4FF] hover:text-[#1677E8]"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => goTo(page + 1)}
              aria-label="Next testimonials"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E7EB] text-[#101828] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1677E8] hover:bg-[#EAF4FF] hover:text-[#1677E8]"
            >
              →
            </button>
          </div>
        </div>

        {/* Mobile/tablet: horizontally scrollable strip with every testimonial */}
        <div className="mt-12 flex gap-5 overflow-x-auto pb-2 no-scrollbar scroll-smooth lg:hidden">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 60} className="min-w-[260px]">
              <TestimonialCard testimonial={testimonial} />
            </Reveal>
          ))}
        </div>

        {/* Desktop: exactly one row of GROUP_SIZE cards, paged via arrows */}
        <div className="mt-12 hidden lg:grid lg:grid-cols-4 lg:gap-5">
          {visibleTestimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 80}>
              <TestimonialCard testimonial={testimonial} />
            </Reveal>
          ))}
        </div>

        {/* Mobile pagination dots */}
        <div className="mt-6 flex items-center justify-center gap-2 sm:hidden">
          {Array.from({ length: totalPages }).map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === page ? "w-6 bg-[#1677E8]" : "w-1.5 bg-[#E5E7EB]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
