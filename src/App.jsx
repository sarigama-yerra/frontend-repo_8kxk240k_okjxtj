import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProjectCard from './components/ProjectCard'
import Footer from './components/Footer'

const projects = [
  {
    title: 'Playful Brand System',
    tags: ['Identity', 'Illustration', 'Guidelines'],
    image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1600&auto=format&fit=crop',
    link: 'https://example.com'
  },
  {
    title: 'Motion Typography Reel',
    tags: ['Motion', 'After Effects'],
    image: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1600&auto=format&fit=crop',
    link: 'https://example.com'
  },
  {
    title: 'Experimental Posters',
    tags: ['Print', 'Poster Series'],
    image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1600&auto=format&fit=crop',
    link: 'https://example.com'
  },
  {
    title: 'Web Visuals Pack',
    tags: ['UI', '3D', 'Icons'],
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1600&auto=format&fit=crop',
    link: 'https://example.com'
  }
]

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />

        <section id="work" className="relative py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-end justify-between">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold">Selected Work</h2>
                <p className="text-slate-600 mt-2">A mix of branding, motion, and web experiments</p>
              </div>
              <a href="#" className="hidden sm:inline text-indigo-600 hover:text-indigo-700 font-medium">View all</a>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((p) => (
                <ProjectCard key={p.title} {...p} />
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
        </section>

        <section id="about" className="py-20 bg-gradient-to-b from-white to-indigo-50/40">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl sm:text-4xl font-bold">About</h2>
            <p className="mt-4 text-lg text-slate-700">
              I’m a designer focused on creating lively visual systems for brands and products. My process blends strategic thinking with playful exploration, always looking for the small details that make work feel human.
            </p>
            <div className="mt-8 grid sm:grid-cols-3 gap-6">
              {["Brand Identity", "Motion Design", "Web Visuals"].map((s) => (
                <div key={s} className="rounded-2xl border border-slate-200 bg-white p-6">
                  <h3 className="font-semibold">{s}</h3>
                  <p className="text-sm text-slate-600 mt-2">Concept to delivery with strong typography and color.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  )
}

export default App
