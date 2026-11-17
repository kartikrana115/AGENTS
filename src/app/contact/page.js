import ContactForm from "@/components/ContactForm";
import { MailIcon, PhoneIcon, ClockIcon } from "@/components/icons";

export const metadata = {
  title: "Contact | CareKar",
  description: "Get in touch with the CareKar team.",
};

const contactDetails = [
  { icon: MailIcon, title: "Email", value: "support@carekar.com" },
  { icon: PhoneIcon, title: "Phone", value: "+91 90000 00000" },
  { icon: ClockIcon, title: "Hours", value: "Mon – Sun, 8:00 AM – 8:00 PM" },
];

export default function ContactPage() {
  return (
    <div className="flex flex-1 flex-col">
      <section className="bg-grid bg-gradient-to-b from-blue-50 via-white to-white px-6 py-20 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-xs font-semibold text-blue-700">
          Contact Us
        </span>
        <h1 className="mx-auto mt-4 max-w-2xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          We&apos;d Love to Hear From You
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
          Have a question about CareKar or want to book a service? Send us a
          message and our team will get back to you.
        </p>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-5xl gap-10 sm:grid-cols-[1.2fr_1fr]">
          <div className="rounded-2xl border border-blue-100 bg-white p-8 shadow-sm shadow-blue-50">
            <ContactForm />
          </div>

          <div className="flex flex-col gap-5">
            {contactDetails.map((detail) => {
              const Icon = detail.icon;
              return (
                <div
                  key={detail.title}
                  className="flex items-start gap-4 rounded-2xl bg-slate-50 p-5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-slate-900">
                      {detail.title}
                    </h2>
                    <p className="text-sm text-slate-500">{detail.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
