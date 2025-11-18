import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Row from './components/Row'
import './index.css'

function App() {
  const [featured, setFeatured] = useState(null)
  const [rows, setRows] = useState([])
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    const init = async () => {
      try {
        // Ensure seed exists
        await fetch(`${baseUrl}/seed`, { method: 'POST' })

        const titlesRes = await fetch(`${baseUrl}/titles`)
        const titles = await titlesRes.json()
        setFeatured(titles[0])

        const rowsRes = await fetch(`${baseUrl}/rows`)
        const rowsData = await rowsRes.json()
        setRows(rowsData)
      } catch (e) {
        console.error('Init error', e)
      }
    }
    init()
  }, [baseUrl])

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <Hero featured={featured} />
      <main className="relative z-10 -mt-20">
        {rows.map((r) => (
          <Row key={r._id} title={r.title} query={{ genre: r.genre }} />)
        )}
      </main>
    </div>
  )
}

export default App
