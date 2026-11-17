import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-white">
      <div className="relative aspect-[16/9] w-full sm:aspect-[16/7] lg:aspect-[16/6]">
        <Image
          src="/Hero/heroimage.png"
          alt="CareKar premium doorstep car wash"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
