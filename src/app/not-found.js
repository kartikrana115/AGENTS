import Link from "next/link";
import { ArrowRightIcon, CarIcon } from "@/components/icons";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-5 bg-gradient-to-b from-blue-50 via-white to-white px-6 py-32 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
        <CarIcon className="h-8 w-8" />
      </div>
      <h1 className="text-4xl font-bold text-slate-900">404 - Page Not Found</h1>
      <p className="max-w-md text-slate-500">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="flex h-12 items-center justify-center gap-2 rounded-full bg-blue-600 px-6 font-semibold text-white shadow-md shadow-blue-200 transition-all hover:bg-blue-700 hover:shadow-lg"
      >
        Go back home
        <ArrowRightIcon className="h-4 w-4" />
      </Link>
    </div>
  );
}
