type CarouselEdgeFadeTone = "cream" | "elevated" | "background";

const TONE_COLOR: Record<CarouselEdgeFadeTone, string> = {
  cream: "var(--studio-cream)",
  elevated: "var(--background-elevated)",
  background: "var(--background)",
};

type CarouselEdgeFadeProps = {
  tone?: CarouselEdgeFadeTone;
  className?: string;
  showLeft?: boolean;
  showRight?: boolean;
};

export function CarouselEdgeFade({
  tone = "elevated",
  className = "",
  showLeft = true,
  showRight = true,
}: CarouselEdgeFadeProps) {
  const color = TONE_COLOR[tone];

  return (
    <>
      {showLeft ? (
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-10 sm:block sm:w-14 lg:w-16 ${className}`}
          style={{
            background: `linear-gradient(to right, ${color} 0%, ${color} 18%, transparent 100%)`,
          }}
        />
      ) : null}
      {showRight ? (
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-10 sm:block sm:w-14 lg:w-16 ${className}`}
          style={{
            background: `linear-gradient(to left, ${color} 0%, ${color} 18%, transparent 100%)`,
          }}
        />
      ) : null}
    </>
  );
}
