import Link from "next/link";
import Image from "next/image";
import { InstagramIcon, FacebookIcon, LinkedinIcon } from "@/components/icons";
import StoreBadges from "@/components/StoreBadges";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Why CareKar", href: "/#why-carekar" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Exterior Wash", href: "/services/exterior-car-wash" },
      { label: "Interior Cleaning", href: "/services/interior-cleaning" },
      { label: "Full Car Cleaning", href: "/services/full-car-cleaning" },
      { label: "Subscription Plans", href: "/#subscription" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "/contact" },
      { label: "Complaints", href: "/contact" },
      { label: "Terms", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#062B55] text-white">
      <div className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center">
              <Image
                src="/logocarekar.png"
                alt="CareKar"
                width={160}
                height={48}
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-6 text-[#AFC6DE]">
              Your Car. Your Place. Our Cleaning.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-4 text-sm font-semibold text-white">
                {column.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#AFC6DE] transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Download</h3>
            <div className="flex flex-col gap-3">
              <StoreBadges stacked />
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-[#AFC6DE] sm:flex-row">
          <p>&copy; 2026 CareKar. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Instagram" className="text-[#AFC6DE] transition-colors hover:text-white">
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Facebook" className="text-[#AFC6DE] transition-colors hover:text-white">
              <FacebookIcon className="h-5 w-5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-[#AFC6DE] transition-colors hover:text-white">
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}


