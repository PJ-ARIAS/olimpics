import { MapPin, Users, Coffee, Check, Compass } from "lucide-react";
import meeting from "../../images/meetingpoint.webp";
// import { Button } from "./ui/button";
import { cn } from "../../lib/utils";

// TEAM IMAGES
import team1 from "../../images/LUIS TBOV DIRECTOR .jpg";
import team2 from "../../images/PABLO ACTIVITIES COORDINATOR.jpg";
import team3 from "../../images/STUART COORDINATOR.jpg";

export function AboutSection() {
  const meetingPointFeatures = [
    "Start experiences",
    "Meet other travelers",
    "Organize activities",
    "Receive assistance",
    "Discover Valencia with locals",
  ];

  // 1. TRANSFORM TEAM IMAGES ARRAY INTO AN ARRAY OF OBJECTS (image + description)
  const teamMembers = [
    {
      id: "luis",
      image: team1,
      name: "Luis",
      title: "General Manager & Experience Coordination",
      description:
        "Originally from Valencia, Luis combines an international profile with a true passion for his city and Mediterranean lifestyle. Based at our TBOV Meeting Point office in El Carmen, he coordinates the local team and experiences while helping travelers feel welcomed and enjoy Valencia like a local friend.",
    },
    {
      id: "pablo",
      image: team2,
      name: "Pablo",
      title: "Local Lifestyle & Experiences Host",
      description:
        "Originally from Valencia, Pablo combines an international profile with a true passion for his city, local lifestyle, and Mediterranean atmosphere. He accompanies experiences and helps travelers discover the most authentic and social side of Valencia during the Gay Games.",
    },
    {
      id: "stuart",
      image: team3,
      name: "Stuart",
      title: "International & Experiences Host",
      description:
        "With an international background and experience living in different countries, Stuart finally chose Valencia as home. Based in the Cabañal neighborhood, he helps travelers discover the city’s beaches, nightlife, Mediterranean lifestyle, and authentic local atmosphere during the Gay Games.",
    },
  ];

  return (
    <section id="about" className="py-10 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Us Intro */}
        <div className="text-center mb-16">
          <span className="text-primary font-bold text-sm uppercase tracking-[0.2em]">
            About us
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground mt-2 mb-4 uppercase italic">
            Local LGBTQ+ Mediterranean Lifestyle Hosts
          </h3>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto">
            At The Best of Valencia, we are more than a travel agency. We are a
            local incoming travel and lifestyle agency based in Valencia&apos;s
            historic center.
          </p>
        </div>
        {/* ======================================================= */}
        {/* MEET OUR TEAM SECTION                                  */}
        {/* ======================================================= */}
        <div className="max-w-7xl mx-auto px-4 mb-24">
          <p className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-12">
            Meet Our Team
          </p>

          {/* Grid setup for mobile (horizontal tier) and Desktop (grid of cards) */}
          <div className="flex gap-4 overflow-x-auto pb-6 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0 scrollbar-none">
            {/* 2. MAP OVER THE teamMembers OBJECT ARRAY, NOT JUST THE IMAGES */}
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className={cn(
                  "relative rounded-3xl bg-card-foreground border border-border group shadow-sm hover:shadow-lg transition-all duration-500",
                  "flex-[0_0_240px] md:flex-none md:w-full md:h-auto", // Fixed box on mobile, responsive on desktop
                )}
              >
                {/* Image container */}
                <div className="aspect-[4/3] w-full p-3 overflow-hidden rounded-t-3xl">
                  <img
                    src={member.image}
                    alt={`${member.name}, TBOV ${member.title}`}
                    className="h-90 w-450 rounded-2xl object-fill transition-transform "
                    loading="lazy"
                  />
                </div>

                {/* Text Description Container */}
                <div className="p-5 space-y-3">
                  <h4 className="text-lg font-extrabold text-foreground uppercase italic tracking-tight">
                    {member.name}{" "}
                    <span className="block text-muted font-bold text-xs uppercase tracking-widest mt-1">
                      {member.title}
                    </span>
                  </h4>
                  <p className="text-sm text-foreground leading-relaxed italic text-pretty">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* ======================================================= */}
        {/* MEETING POINT SECTION                                */}
        {/* ======================================================= */}
        <div className="mt-3 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-card rounded-[2.5rem] overflow-hidden border border-border shadow-2xl">
            {/* LADO IZQUIERDO: IMAGEN FORMATO TARJETA */}
            <div className="relative h-[400px] lg:h-auto min-h-[500px] overflow-hidden group">
              <img
                src={meeting}
                alt="TBOV Meeting Point in El Carmen"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
              />
              {/* Badge flotante igual al de la sección Group */}
              <div className="absolute top-8 left-8 bg-muted text-white px-4 py-2 rounded-full text-[10px] font-black uppercase italic tracking-widest shadow-lg">
                Official HQ
              </div>

              {/* Overlay gradiente suave */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent lg:hidden" />
            </div>

            {/* LADO DERECHO: CONTENIDO E INFORMACIÓN */}
            <div className="flex flex-col justify-center p-8 md:p-16 lg:p-20 bg-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-muted/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-muted" />
                </div>
                <span className="text-muted font-bold text-sm uppercase tracking-[0.3em]">
                  Location
                </span>
              </div>

              <h3 className="text-4xl md:text-5xl font-black text-foreground mb-2 uppercase italic leading-[0.9] tracking-tighter">
                TBOV <br />
                <span className="text-muted-foreground text-2xl md:text-3xl not-italic font-bold normal-case tracking-tight">
                  Meeting Point
                </span>
              </h3>

              <p className="text-muted font-bold text-xs uppercase tracking-[0.2em] mb-8">
                El Carmen Historic Center
              </p>

              <div className="space-y-6 mb-10">
                <p className="md:text-lg text-foreground leading-relaxed  font-semibold">
                  Local LGBTQ+ Mediterranean Lifestyle Hosts. At The Best of
                  Valencia, we are more than a travel agency. We are a local
                  incoming travel and lifestyle agency based in Valencia's
                  historic center.
                </p>

                {/* Lista de beneficios con el mismo estilo de la tarjeta Group */}
              </div>

              {/* Botón de acción final para cerrar la sección */}
              <div className="">
                <p className="text-lg text-foreground mb-5 font-semibold max-w-md">
                  Our office in El Carmen becomes the official TBOV meeting
                  point during the Gay Games.
                </p>
                <div className="flex items-center gap-2 text-muted font-black uppercase italic text-sm tracking-widest">
                  <span>See you in El Carmen</span>
                  <div className="h-[2px] w-8 bg-muted"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
