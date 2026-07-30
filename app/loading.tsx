export default function Loading() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center pt-[72px]">
      <div className="flex gap-1.5" role="status" aria-label="Loading">
        <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-signalCyan [animation-delay:-0.3s]" />
        <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-signalViolet [animation-delay:-0.15s]" />
        <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-ieeeBlue" />
      </div>
    </div>
  );
}
