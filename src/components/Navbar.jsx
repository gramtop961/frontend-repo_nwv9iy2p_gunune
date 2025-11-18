import { useState } from 'react'
import { Search, Bell, User } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  if (typeof window !== 'undefined') {
    window.onscroll = () => {
      setScrolled(window.scrollY > 10)
    }
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors ${scrolled ? 'bg-slate-900/80 backdrop-blur border-b border-white/10' : 'bg-gradient-to-b from-slate-900/70 to-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a href="/" className="text-red-500 font-extrabold text-2xl tracking-tight">Flix</a>
          <nav className="hidden md:flex items-center gap-4 text-sm text-slate-200/80">
            <a className="hover:text-white" href="#home">Home</a>
            <a className="hover:text-white" href="#series">TV Shows</a>
            <a className="hover:text-white" href="#movies">Movies</a>
            <a className="hover:text-white" href="#new">New & Popular</a>
            <a className="hover:text-white" href="#mylist">My List</a>
          </nav>
        </div>
        <div className="flex items-center gap-4 text-slate-200">
          <button className="p-2 hover:text-white">
            <Search size={20} />
          </button>
          <button className="p-2 hover:text-white">
            <Bell size={20} />
          </button>
          <button className="p-1 rounded-full border border-white/20 hover:border-white/40">
            <User size={20} className="m-1" />
          </button>
        </div>
      </div>
    </header>
  )
}
