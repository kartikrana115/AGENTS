import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "CareKar — Doorstep Car Cleaning & Subscription Platform",
  description:
    "Professional car cleaning at your home or preferred location. Book instantly, choose one-time, daily or monthly plans, and get 2 free foam washes every month.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`}>
      <body
        className="flex min-h-full flex-col bg-white text-[#111827]"
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
