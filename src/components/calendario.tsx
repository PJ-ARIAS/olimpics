import calendario2 from "../../images/CALENDARIO2.webp";
import calendario1 from "../../images/calenDARIO1.webp";

export function Calendary() {
  return (
    <section id="calendar" className="py-24 bg-card-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabecera opcional para dar contexto */}
        <div className="text-center mb-12">
          <span className="text-foreground font-bold text-sm uppercase tracking-[0.3em]">
            Schedule
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-muted mt-2 uppercase italic">
            Gay Games Calendar
          </h2>
        </div>

        {/* CONTENEDOR DE IMÁGENES */}
        {/* grid-cols-1: Una debajo de otra en móvil */}
        {/* md:grid-cols-2: Una al lado de otra en escritorio */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          <div className="overflow-hidden rounded-[2rem] border border-border shadow-xl bg-card">
            <img
              src={calendario1}
              alt="Gay Games Schedule Part 1"
              className="w-full h-auto object-cover "
            />
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-border shadow-xl bg-card">
            <img
              src={calendario2}
              alt="Gay Games Schedule Part 2"
              className="w-full h-auto object-cover "
            />
          </div>
        </div>

        {/* Nota al pie para el usuario */}
        <p className="mt-8 text-center text-muted-foreground italic text-sm">
          * Times and locations are subject to change by the organization.
        </p>
      </div>
    </section>
  );
}
