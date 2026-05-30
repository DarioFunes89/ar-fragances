export default function ProductCard({ product }) {
  return (
    <article className="group relative overflow-hidden bg-white/5 border border-white/10 transition-all duration-700 hover:border-yellow-400/40">

      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden bg-black">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover opacity-90 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.3em] text-yellow-300/90 bg-black/40 backdrop-blur px-3 py-1.5 border border-yellow-400/30">
          Original
        </div>
      </div>

      {/* Content */}
      <div className="p-7">

        <div className="text-[10px] uppercase tracking-[0.3em] text-yellow-300/70 mb-2">
          {product.brand}
        </div>

        <h3 className="font-display text-3xl mb-3 text-white">
          {product.name}
        </h3>

        <p className="text-xs text-white/60 tracking-wide">
          {product.notes}
        </p>

        <div className="mt-6 flex items-center justify-between pt-5 border-t border-white/10">

          <span className="text-xs uppercase tracking-[0.2em] text-white/50">
            {/* Eau de Parfum */}
          </span>

          <a
            href="https://wa.me/5493510000000"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-[0.2em] text-yellow-300 hover:text-yellow-200 inline-flex items-center gap-2"
          >
            Consultar

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>

          </a>

        </div>

      </div>
    </article>
  )
}
