import { useState } from 'react'
import { Menu, X, Palette, Mail, User, Images } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { name: 'Work', href: '#work', icon: Images },
    { name: 'About', href: '#about', icon: User },
    { name: 'Contact', href: '#contact', icon: Mail },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/60 border-b border-white/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2 font-semibold text-slate-800">
            <Palette className="w-5 h-5 text-indigo-600" />
            <span>Studio Grafika</span>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map(({ name, href }) => (
              <a key={name} href={href} className="text-slate-700 hover:text-slate-900 transition-colors">
                {name}
              </a>
            ))}
            <a href="#contact" className="ml-2 inline-flex items-center rounded-full bg-indigo-600 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-indigo-500 transition-colors">
              Let’s talk
            </a>
          </nav>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md border border-slate-200 bg-white/70">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/30 bg-white/70 backdrop-blur">
          <div className="px-4 py-3 space-y-2">
            {navItems.map(({ name, href, icon: Icon }) => (
              <a key={name} href={href} className="flex items-center gap-3 p-2 rounded-md hover:bg-white/70">
                <Icon className="w-4 h-4 text-indigo-600" />
                <span className="text-slate-800">{name}</span>
              </a>
            ))}
            <a href="#contact" className="block text-center w-full rounded-md bg-indigo-600 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-indigo-500">
              Let’s talk
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
