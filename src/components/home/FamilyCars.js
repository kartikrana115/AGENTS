import Image from "next/image";
import { SparkleIcon } from "@/components/icons";

const cars = [
  {
    name: "Honda City",
    plate: "DL 10 AB 1234",
    plan: "Monthly Plan",
    status: "2 Free Washes Available",
    image:
      "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=700&h=500&fit=crop&q=80",
  },
  {
    name: "Hyundai Creta",
    plate: "DL 8C EF 5678",
    plan: "Monthly Plan",
    status: "1 Free Wash Available",
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=700&h=500&fit=crop&q=80",
  },
  {
    name: "Toyota Fortuner",
    plate: "DL 12 GH 9012",
    plan: "One-Time Service",
    status: "Service Scheduled",
    image:
      "https://images.unsplash.com/photo-1519245659620-e859806a8d3b?w=700&h=500&fit=crop&q=80",
  },
];

export default function FamilyCars() {
  return (
    <section className="bg-[#F8FAFC] px-6 py-20 sm:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-xl text-center">
          <span className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-[#1677E8]">
            Made for Your Family
          </span>
          <h2 className="mt-2 text-[32px] font-extrabold leading-tight tracking-tight text-[#101828] sm:text-[38px]">
            One Account. Every Car.
          </h2>
          <p className="mt-3 text-[15px] leading-6 text-[#667085]">
            Manage your car and your family&apos;s vehicles from one simple
            account.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cars.map((car) => (
            <div
              key={car.name}
              className="overflow-hidden rounded-[20px] border border-[#E5E7EB] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_-18px_rgba(16,24,40,0.18)]"
            >
              <div className="relative h-[130px] w-full">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-[14.5px] font-semibold text-[#101828]">{car.name}</h3>
                <p className="mt-0.5 text-[12px] text-[#667085]">{car.plate}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-[#374151]">{car.plan}</span>
                  <span className="flex items-center gap-1 rounded-full bg-[#EAF4FF] px-2 py-1 text-[10px] font-semibold text-[#1677E8]">
                    <SparkleIcon className="h-3 w-3" />
                    {car.status}
                  </span>
                </div>
              </div>
            </div>
          ))}

          <button
            type="button"
            className="flex flex-col items-center justify-center gap-2 rounded-[20px] border-2 border-dashed border-[#BFDBFE] bg-white py-10 text-[#1677E8] transition-colors hover:bg-[#EAF4FF]"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EAF4FF] text-2xl leading-none">
              +
            </span>
            <span className="text-[13px] font-semibold">Add Another Car</span>
          </button>
        </div>
      </div>
    </section>
  );
}
