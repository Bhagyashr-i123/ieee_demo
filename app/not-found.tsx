import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center pt-[72px] text-center">
      <p className="font-mono text-sm text-signalCyan">404</p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-ink">Signal lost</h1>
      <p className="mt-2 text-mist">We couldn't find that page.</p>
      <Link href="/" className="mt-6 rounded-full bg-ieeeBlue px-6 py-3 text-sm font-semibold text-white">
        Back to home
      </Link>
    </div>
  );
}
