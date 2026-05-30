export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">

      {/* Background image */}
      <img
        src="/assets/hero.jpg"
        alt="Perfumes de lujo Ar Fragance Córdoba"
        className="absolute inset-0 h-full w-full object-cover scale-105"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>

      {/* Radial overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.85)_100%)]"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center">

        {/* Top label */}
        <div className="reveal" style={{ animationDelay: "0.1s" }}>
          <p className="text-xs uppercase tracking-[0.3em] text-yellow-300/80 mb-6">
            Perfumería · Córdoba, Argentina
          </p>
        </div>

        {/* Title */}
        <h1
          className="reveal font-display text-6xl sm:text-7xl md:text-[8.5rem] leading-[0.95] tracking-tight"
          style={{ animationDelay: "0.25s" }}
        >
          <span className="text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text">
            Ar Fragance
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="reveal mt-8 max-w-xl text-base sm:text-lg text-white/80 font-light"
          style={{ animationDelay: "0.45s" }}
        >
          Perfumes originales, excelente atención y los mejores precios.
        </p>

        {/* Buttons */}
        <div
          className="reveal mt-12 flex flex-col sm:flex-row items-center gap-4"
          style={{ animationDelay: "0.65s" }}
        >

          {/* Primary CTA */}
          <a
            href="#productos"
            className="group inline-flex items-center gap-3 bg-yellow-500 text-black px-9 py-4 text-xs uppercase tracking-[0.25em] transition hover:bg-yellow-400"
          >
            Ver Productos

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:translate-x-1"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>

          {/* Secondary CTA */}
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Av.+Monse%C3%B1or+Pablo+Cabrera+3413,+C%C3%B3rdoba,+Argentina"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-white/30 px-9 py-4 text-xs uppercase tracking-[0.25em] text-white/90 transition hover:border-yellow-400 hover:text-yellow-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
              <circle cx="12" cy="10" r="3" />
            </svg>

            Cómo Llegar
          </a>

        </div>

        {/* Scroll indicator */}
        <div
          className="reveal absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-white/50"
          style={{ animationDelay: "1s" }}
        >
          <div className="flex flex-col items-center gap-3">
            <span>Descubrí</span>
            <span className="h-12 w-px bg-gradient-to-b from-yellow-400/60 to-transparent"></span>
          </div>
        </div>

      </div>
    </section>
  )
}
