import { Mail, Instagram, Dribbble, Github } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()
  const socials = [
    { name: 'Email', href: '#contact', icon: Mail },
    { name: 'Instagram', href: 'https://instagram.com', icon: Instagram },
    { name: 'Dribbble', href: 'https://dribbble.com', icon: Dribbble },
    { name: 'GitHub', href: 'https://github.com', icon: Github },
  ]

  return (
    <footer id="contact" className="border-t border-slate-200 bg-white/60 backdrop-blur py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">Let’s create something great</h3>
            <p className="text-slate-600 mt-1">Available for branding, motion, and web visuals</p>
          </div>
          <a href="mailto:hello@studiografika.com" className="inline-flex rounded-full bg-indigo-600 text-white px-5 py-3 font-medium shadow-lg shadow-indigo-600/30 hover:bg-indigo-500">
            hello@studiografika.com
          </a>
        </div>

        <div className="mt-8 flex items-center gap-4">
          {socials.map(({ name, href, icon: Icon }) => (
            <a key={name} href={href} className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900">
              <Icon className="w-4 h-4" />
              <span className="text-sm">{name}</span>
            </a>
          ))}
        </div>

        <p className="mt-8 text-xs text-slate-500">© {year} Studio Grafika. All rights reserved.</p>
      </div>
    </footer>
  )
}
