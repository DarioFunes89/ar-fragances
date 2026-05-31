export default function About() {

return (
    <section id="about" className="relative py-32 px-6">
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent pointer-events-none" />
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Imagen */}
        <div className="relative aspect-[5/6] overflow-hidden">
          <img src="assets/about.jpg" alt="Interior boutique Ar Fragance" 
          className="h-full w-full object-cover transition-transform duration-[1500ms] hover:scale-105"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-yellow-400/20" />
        </div>

        {/* Texto */}
        <div>
            <p className="text-xs uppercase tracking-[0.3em] text-yellow-300 mb-6">
                — Nuestra Casa
            </p>
            <h2 className="font-display text-5xl md:text-6xl leading-tight mb-8">
                Un ritual{" "}
                <em className="not-italic text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text">
                  olfativo
                </em>
                {" "}en el corazón de Córdoba.
            </h2>
            <p className="text-white/75 text-lg leading-relaxed mb-6 font-light">
                Ar Fragance es una perfumería ubicada en Córdoba
                especializada en perfumes y fragancias de excelente calidad.
            </p>
            <p className="text-white/65 leading-relaxed mb-10 font-light">
                Nos destacamos por nuestra atención personalizada,
                gran variedad de productos y precios accesibles.

                Cada visita es una experiencia:
                te ayudamos a encontrar la fragancia que mejor expresa quién sos.
            </p>

        {/* Estadisticas */}
            <div className="flex items-center gap-8 pt-8 border-t border-white/10">

                <div>
                    <div className="font-display text-4xl text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text">
                        5.0
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-white/50 mt-1">
                        Google Reviews
                    </div>
                </div>
                <div className="h-12 w-px bg-white/10" />
                <div>
                    <div className="font-display text-4xl text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text">
                        100%
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-white/50 mt-1">
                        Originales
                    </div>
                </div>
                </div>

            </div>

        </div>
    </section>
)
}
