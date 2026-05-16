import {
  Navbar,
  Hero,
  Problems,
  DemandHeatmapSection,
  MenuIntelligence,
  RevenueDynamics,
  PricingPolicyCorrection,
  Scenarios,
  SignalLayer,
  GuestBehaviorSection,
  Footer,
  CursorGlow,
  FloatingOrbs,
  ThreeBackground,
  NetworkGrid,
  ParticleNetwork,
  EnterpriseSection,
  VisionSection,
  CinematicClosing,
  DynamicCommandOverlay,
} from '@/components'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="top" className="bg-arrie-bg text-arrie-text relative overflow-x-hidden">
        <div
          className="fixed inset-0 pointer-events-none z-0"
          aria-hidden
          style={{
            background: `
            radial-gradient(ellipse 60% 50% at 78% 28%, rgba(244, 210, 140, 0.1), transparent 58%),
            radial-gradient(ellipse 50% 40% at 12% 18%, rgba(214, 161, 74, 0.08), transparent 52%),
            linear-gradient(180deg, #0b0b0c 0%, #0e0e10 40%, #111113 100%)
          `,
          }}
        />
        <CursorGlow />
        <ThreeBackground />
        <FloatingOrbs />
        <NetworkGrid />
        <ParticleNetwork />

        <div className="relative z-10">
          <Hero />
          <Problems />
          <DemandHeatmapSection />
          <MenuIntelligence />
          <RevenueDynamics />
          <PricingPolicyCorrection />
          <Scenarios />
          <SignalLayer />
          <GuestBehaviorSection />
          <EnterpriseSection />
          <VisionSection />
          <CinematicClosing />
          <Footer />
          <DynamicCommandOverlay />
        </div>
      </main>
    </>
  )
}
