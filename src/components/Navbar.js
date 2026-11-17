"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MenuIcon, CloseIcon } from "@/components/icons";

const links = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#subscription", label: "Plans" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#why-carekar", label: "Why CareKar" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[#E5E7EB] bg-white">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/logocarekar.png"
            alt="CareKar"
            width={160}
            height={48}
            className="h-11 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {links.map((link) => {
              const active = link.href === pathname;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-[14.5px] transition-colors ${
                      active ? "font-semibold text-[#101828]" : "text-[#374151] hover:text-[#101828]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden shrink-0 lg:block">
          <Link
            href="/contact"
            className="inline-flex h-10 items-center rounded-full border border-[#1677E8] px-6 text-[14px] font-medium text-[#1677E8] transition-all duration-300 hover:bg-[#1677E8] hover:text-white"
          >
            Download App
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-[#101828] lg:hidden"
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[#E5E7EB] bg-white px-5 py-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-[15px] font-medium text-[#374151] hover:bg-[#EAF4FF] hover:text-[#1677E8]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 flex h-11 items-center justify-center rounded-full border border-[#1677E8] text-[14px] font-medium text-[#1677E8]"
          >
            Download App
          </Link>
        </div>
      )}
    </header>
  );
}
