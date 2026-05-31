import { features } from "../sections/data"

export default function WhyChooseUs() {
  return (
    <section className="relative py-32 px-6 border-white/10">

      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">

          <p className="text-xs uppercase tracking-[0.3em] text-yellow-300 mb-5">
            — Por qué elegirnos
          </p>

          <h2 className="font-display text-4xl md:text-5xl">
            La esencia del buen perfume
          </h2>

        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {features.map((feature) => {
            const Icon = feature.icon

            return (
              <div
                key={feature.number}
                className="group relative glass p-8 transition-all duration-500 hover:bg-white/5 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(212,175,55,0.08)]"
              >

                {/* Top line */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Icon */}
                <div className="mb-8 inline-flex items-center justify-center w-14 h-14 border border-yellow-400/30 text-yellow-300 transition-all group-hover:border-yellow-400 group-hover:bg-yellow-400/5">

                  <Icon size={22} strokeWidth={1.4} />

                </div>

                {/* Title */}
                <h3 className="font-display text-2xl mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-white/60 leading-relaxed font-light">
                  {feature.description}
                </p>

                {/* Number */}
                <div className="mt-6 text-[10px] tracking-[0.3em] text-yellow-300/60">
                  {feature.number}
                </div>

              </div>
            )
          })}

        </div>

      </div>

    </section>
  )
}

