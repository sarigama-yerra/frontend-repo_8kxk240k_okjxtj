import { ExternalLink, ArrowUpRight } from 'lucide-react'

export default function ProjectCard({ title, tags = [], image, link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white hover:shadow-xl transition-all">
      <div className="aspect-[16/10] w-full overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        ) : (
          <div className="h-full w-full grid place-items-center bg-gradient-to-br from-indigo-100 via-white to-pink-100">
            <ExternalLink className="w-10 h-10 text-indigo-500" />
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-slate-700" />
        </div>
        {tags?.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span key={t} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-700">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </a>
  )
}
