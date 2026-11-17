import { CarIcon, SparkleIcon } from "@/components/icons";

/**
 * Dedicated, self-contained phone mockup component for the app-showcase
 * section. Kept isolated from layout/section components so its size,
 * rotation and animation can be reused or tweaked without touching the
 * page section that hosts it.
 */
function PhoneFrame({ children, className = "" }) {
  return (
    <div
      className={`relative h-[420px] w-[210px] shrink-0 rounded-[30px] border-[5px] border-[#101828] bg-white shadow-[0_24px_48px_-18px_rgba(16,24,40,0.35)] ${className}`}
    >
      <div className="absolute left-1/2 top-0 h-4 w-20 -translate-x-1/2 rounded-b-xl bg-[#101828]" />
      <div className="h-full w-full overflow-hidden rounded-[25px]">{children}</div>
    </div>
  );
}

function HomeScreen() {
  return (
    <div className="flex h-full flex-col bg-[#F8FAFC] px-4 pb-4 pt-8">
      <div className="flex items-center justify-between">
        <span className="text-[13px] font-extrabold text-[#101828]">
          Care<span className="text-[#1677E8]">Kar</span>
        </span>
        <span className="h-6 w-6 rounded-full bg-[#EAF4FF]" />
      </div>
      <p className="mt-3 text-[15px] font-semibold text-[#101828]">Hello, Rohit</p>

      <div className="mt-3 rounded-2xl bg-white p-3 shadow-sm ring-1 ring-[#E5E7EB]">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#EAF4FF] text-[#1677E8]">
            <CarIcon className="h-4 w-4" />
          </span>
          <div>
            <p className="text-[12px] font-semibold text-[#101828]">Honda City</p>
            <p className="text-[10px] text-[#667085]">DL 10 AB 1234</p>
          </div>
        </div>
        <button className="mt-3 w-full rounded-lg bg-[#1677E8] py-2 text-[11px] font-semibold text-white">
          Book Service
        </button>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2">
        {["Exterior", "Interior", "Full Clean"].map((label) => (
          <div
            key={label}
            className="flex flex-col items-center gap-1.5 rounded-xl bg-white py-3 ring-1 ring-[#E5E7EB]"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EAF4FF] text-[#1677E8]">
              <SparkleIcon className="h-3.5 w-3.5" />
            </span>
            <span className="text-center text-[9px] font-medium text-[#374151]">
              {label}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-3 rounded-2xl bg-[#0B3B73] p-3 text-white">
        <p className="text-[11px] font-semibold">Monthly Plan</p>
        <p className="mt-0.5 text-[10px] text-[#BFDBFE]">Get 2 Free Foam Washes</p>
      </div>

      <div className="mt-auto flex items-center justify-between rounded-2xl bg-white px-3 py-2.5 ring-1 ring-[#E5E7EB]">
        {["Home", "Bookings", "Plans", "Profile"].map((label, i) => (
          <span
            key={label}
            className={`text-[9px] font-medium ${i === 0 ? "text-[#1677E8]" : "text-[#98A2B3]"}`}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

function SubscriptionScreen() {
  return (
    <div className="flex h-full flex-col bg-white px-4 pb-4 pt-8">
      <p className="text-[15px] font-semibold text-[#101828]">Monthly Plan</p>

      <div className="mt-3 rounded-2xl bg-[#F8FAFC] p-3 ring-1 ring-[#E5E7EB]">
        <div className="flex items-center justify-between">
          <p className="text-[12px] font-semibold text-[#101828]">Honda City</p>
          <span className="rounded-full bg-[#DCFCE7] px-2 py-0.5 text-[9px] font-semibold text-[#16803C]">
            Active
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-[11px] text-[#667085]">Free Foam Washes</p>
          <p className="text-[11px] font-semibold text-[#101828]">1 / 2 used</p>
        </div>
        <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-[#E5E7EB]">
          <div className="h-full w-1/2 rounded-full bg-[#1677E8]" />
        </div>
        <p className="mt-1 text-[10px] text-[#1677E8]">1 remaining</p>
      </div>

      <div className="mt-3 rounded-2xl bg-[#F8FAFC] p-3 ring-1 ring-[#E5E7EB]">
        <p className="text-[10px] text-[#667085]">Next Cleaning</p>
        <p className="mt-0.5 text-[12px] font-semibold text-[#101828]">
          30 Sep 2026 &bull; 10:00 AM
        </p>
      </div>

      <div className="mt-auto flex flex-col gap-2">
        <button className="w-full rounded-lg bg-[#1677E8] py-2.5 text-[11px] font-semibold text-white">
          Book Foam Wash
        </button>
        <button className="w-full rounded-lg border border-[#E5E7EB] py-2.5 text-[11px] font-semibold text-[#101828]">
          Manage Plan
        </button>
      </div>
    </div>
  );
}

/**
 * Renders the two overlapping phone mockups (home screen + subscription
 * screen) used in the Mobile App showcase section.
 */
export default function PhoneMockup() {
  return (
    <div className="relative z-20 flex justify-center">
      <PhoneFrame className="-mr-14 rotate-[-4deg] animate-float-soft">
        <HomeScreen />
      </PhoneFrame>
      <PhoneFrame className="z-10 ml-[-1.5rem] mt-8 rotate-[4deg] animate-float-soft-delayed">
        <SubscriptionScreen />
      </PhoneFrame>
    </div>
  );
}
