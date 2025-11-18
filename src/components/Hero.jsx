export default function Hero({ featured }) {
  const image = featured?.backdrop || 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=1600&auto=format&fit=crop'
  return (
    <section id="home" className="relative h-[70vh] md:h-[80vh] w-full">
      <div className="absolute inset-0">
        <img src={image} alt={featured?.name || 'Featured'} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 md:pt-56">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow">
            {featured?.name || 'Featured Title'}
          </h1>
          <p className="mt-4 text-slate-200/90 line-clamp-3">
            {featured?.description || 'A gripping story that hooks you from the very first minute.'}
          </p>
          <div className="mt-6 flex gap-3">
            <a href={featured?.trailer || '#'} target="_blank" className="px-5 py-2 rounded bg-white text-slate-900 font-semibold hover:bg-slate-200">Play</a>
            <button className="px-5 py-2 rounded bg-slate-700/70 text-white hover:bg-slate-700">More Info</button>
          </div>
        </div>
      </div>
    </section>
  )
}
