import { clsx } from "clsx";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div
      className={clsx(
        "max-w-2xl",
        align === "center" && "mx-auto text-center"
      )}
    >
      {eyebrow && (
        <p
          className={clsx(
            "mb-3 font-mono text-xs uppercase tracking-[0.2em]",
            light ? "text-signalCyan" : "text-ieeeBlue"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={clsx(
          "font-display text-3xl font-semibold tracking-tight md:text-4xl",
          light ? "text-white" : "text-ink"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={clsx("mt-3 text-base", light ? "text-mist" : "text-mist")}>
          {description}
        </p>
      )}
    </div>
  );
}
