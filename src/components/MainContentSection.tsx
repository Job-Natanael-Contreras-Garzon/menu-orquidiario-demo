'use client';

export function MainContentSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-amber-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-24">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-none mb-8">
            INGREDIENTES
          </h2>
          <h3 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-none mb-8">
            EXQUISITOS, PLATOS
          </h3>
          <h4 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-none mb-16">
            MEMORABLES.
          </h4>

          {/* Description */}
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-lg md:text-xl leading-relaxed text-gray-300">
              Exquisitos manjares imbuidos de una herencia única. Nuestra cocina 
              fusiona los dones efímeros de nuestra finca en Cabrera de Mar, 
              donde florecen ingredientes de estación con la riqueza que otorga el 
              Mar Mediterráneo, junto a la excelencia de granjas locales. Cada 
              creación se erige en una sinfonía que venera, magnifica y ennoblecer 
              los matices de los sabores más auténticos de la naturaleza.
            </p>
          </div>

          {/* Central Image */}
          <div className="relative max-w-4xl mx-auto mb-16">
            <div className="relative h-96 md:h-[500px] overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=2070&auto=format&fit=crop"
                alt="Exquisite seafood dish"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
