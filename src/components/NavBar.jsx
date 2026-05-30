import { useEffect, useState } from "react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`
        fixed inset-x-0 top-0 z-50 transition-all duration-500
        ${scrolled ? "py-3 bg-black/40 backdrop-blur-md border-b border-white/10" : "py-6 bg-transparent"}
      `}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <a href="#top" className="flex items-center gap-2">
          <span className="font-display text-2xl tracking-tight text-transparent bg-linear-to-r from-yellow-400 to-yellow-200 bg-clip-text">
            Ar
          </span>
          <span className="text-xs uppercase tracking-[0.3em] text-white/70">
            Fragance
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            ["#about", "Nosotros"],
            ["#productos", "Productos"],
            ["#reviews", "Reseñas"],
            ["#ubicacion", "Ubicación"],
            ["#contacto", "Contacto"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="text-xs uppercase tracking-[0.2em] text-white/60 hover:text-yellow-300 transition"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#productos"
          className="hidden md:inline-flex text-xs uppercase tracking-[0.2em] border border-yellow-500/50 text-yellow-300 px-5 py-2.5 hover:bg-yellow-400 hover:text-black transition"
        >
          Ver catálogo
        </a>

        {/* Mobile button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 6h16" />
            <path d="M4 12h16" />
            <path d="M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-6 pt-4 pb-6 bg-black/90 backdrop-blur-md border-t border-white/10">
          <div className="flex flex-col gap-4">
            {[
              ["#about", "Nosotros"],
              ["#productos", "Productos"],
              ["#reviews", "Reseñas"],
              ["#ubicacion", "Ubicación"],
              ["#contacto", "Contacto"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.2em] text-white/70 hover:text-yellow-300 transition"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
