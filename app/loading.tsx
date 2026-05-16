export default function Loading() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <div className="text-5xl tracking-[0.5em] font-light mb-6">ARRIE</div>
        <div className="w-64 h-[1px] bg-white/10 overflow-hidden rounded-full">
          <div className="h-full w-1/2 bg-white animate-pulse" />
        </div>
      </div>
    </main>
  )
}