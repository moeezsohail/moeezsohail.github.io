/**
 * Single fixed mesh behind the whole page so scroll doesn’t reveal mismatched
 * gradient layers (no hero feather / body radial fighting).
 */
export function AmbientBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <div
        className="absolute -left-[20%] top-[-12%] h-[min(38rem,92vw)] w-[min(38rem,92vw)] rounded-full blur-[100px]"
        style={{ background: "var(--hero-mesh-1)" }}
      />
      <div
        className="absolute -right-[18%] top-[8%] h-[min(34rem,82vw)] w-[min(34rem,82vw)] rounded-full blur-[100px]"
        style={{ background: "var(--warm-glow)" }}
      />
      <div
        className="absolute left-[10%] top-[38%] h-[min(28rem,70vw)] w-[min(28rem,70vw)] rounded-full blur-[100px] opacity-70"
        style={{ background: "var(--accent-glow)" }}
      />
      <div
        className="absolute -right-[15%] top-[48%] h-[min(26rem,65vw)] w-[min(26rem,65vw)] rounded-full blur-[100px] opacity-60"
        style={{ background: "var(--warm-glow)" }}
      />
      <div
        className="absolute -left-[18%] bottom-[-8%] h-[min(34rem,80vw)] w-[min(34rem,80vw)] rounded-full blur-[100px]"
        style={{ background: "var(--hero-mesh-1)" }}
      />
      <div
        className="absolute -right-[12%] bottom-[5%] h-[min(30rem,72vw)] w-[min(30rem,72vw)] rounded-full blur-[100px] opacity-80"
        style={{ background: "var(--warm-glow)" }}
      />
      {/* Breaks up 8-bit radial banding on some displays */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
