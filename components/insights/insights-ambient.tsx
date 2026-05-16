export function InsightsAmbient() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden
      style={{
        background: `
          radial-gradient(ellipse 60% 50% at 20% 10%, rgba(244, 210, 140, 0.08), transparent 55%),
          radial-gradient(ellipse 45% 40% at 85% 30%, rgba(214, 161, 74, 0.06), transparent 50%),
          radial-gradient(ellipse 50% 35% at 50% 100%, rgba(255, 255, 255, 0.03), transparent 45%),
          linear-gradient(180deg, #0b0b0c 0%, #0e0e10 45%, #0b0b0c 100%)
        `,
      }}
    />
  )
}
