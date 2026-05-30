import ProductCard from "./ProductCard"
import { products } from "./data"

export default function ProductsSection() {
  return (
    <section id="productos" className="relative py-32 px-6">

      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-yellow-300 mb-5">
              — Colección destacada
            </p>

            <h2 className="font-display text-5xl md:text-6xl max-w-xl text-white">
              Fragancias que dejan huella
            </h2>
          </div>

          <a
            href="https://wa.me/5493517071420"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-[0.2em] text-yellow-300 border-b border-yellow-400/40 pb-1 hover:border-yellow-300 transition"
          >
            Consultá el catálogo completo →
          </a>

        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}

        </div>

      </div>

    </section>
  )
}
