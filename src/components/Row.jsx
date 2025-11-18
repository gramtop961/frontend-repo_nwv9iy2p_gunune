import { useEffect, useState } from 'react'

export default function Row({ title, query }) {
  const [items, setItems] = useState([])
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    const load = async () => {
      try {
        const url = new URL(`${baseUrl}/titles`)
        if (query?.genre) url.searchParams.set('genre', query.genre)
        const res = await fetch(url)
        const data = await res.json()
        setItems(data)
      } catch (e) {
        console.error(e)
      }
    }
    load()
  }, [query, baseUrl])

  return (
    <section className="mt-6">
      <h2 className="text-lg md:text-2xl font-semibold text-white mb-3 px-6">{title}</h2>
      <div className="overflow-x-auto pl-6">
        <div className="flex gap-3 pb-4">
          {items.map((it) => (
            <div key={it._id} className="w-40 md:w-48 flex-shrink-0">
              <div className="aspect-[2/3] rounded-md overflow-hidden bg-slate-800/60 border border-white/10">
                <img src={it.poster} alt={it.name} className="w-full h-full object-cover" />
              </div>
              <p className="mt-2 text-xs md:text-sm text-slate-200 truncate">{it.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
