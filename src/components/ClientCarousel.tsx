import basfLogo from "../assets/clients/basf.jpg";
import sikaLogo from "../assets/clients/sika.jpg";
import precisionLogo from "../assets/clients/precision.jpg";
import eftecLogo from "../assets/clients/eftec.jpg";
import kayceeLogo from "../assets/clients/kaycee.jpg";
import elkemLogo from "../assets/clients/elkem.jpg";
import doverLogo from "../assets/clients/dover.jpg";
import tokheimLogo from "../assets/clients/tokheim.jpg";

const clients = [
  { name: "BASF India", logo: basfLogo },
  { name: "Sika India", logo: sikaLogo },
  { name: "Precision Wires India", logo: precisionLogo },
  { name: "Eftec India", logo: eftecLogo },
  { name: "Kaycee Agencies", logo: kayceeLogo },
  { name: "Elkem India", logo: elkemLogo },
  { name: "Dover India", logo: doverLogo },
  { name: "Tokheim India", logo: tokheimLogo },
];

const ClientCarousel = () => {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">
            OUR ESTEEMED CLIENTS
          </h2>
        </div>

        {/* ✅ Mobile: show ALL clients in a grid (no cut-off) */}
        <div className="md:hidden grid grid-cols-2 gap-6">
          {clients.map((client, index) => (
            <div
              key={`mobile-${index}`}
              className="flex flex-col items-center justify-center group"
            >
              <div className="w-28 h-28 flex items-center justify-center bg-white rounded-lg shadow-md p-4">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <span className="mt-3 text-xs font-medium text-muted-foreground text-center">
                {client.name}
              </span>
            </div>
          ))}
        </div>

        {/* 💻 Desktop / Tablet: animated horizontal marquee */}
        <div className="hidden md:block">
          <div className="relative">
            <div className="flex w-max animate-scroll-horizontal">
              {/* First set */}
              {clients.map((client, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 mx-8 flex flex-col items-center justify-center group transition-transform duration-300 hover:scale-110"
                >
                  <div className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center bg-white rounded-lg shadow-md p-6 transition-shadow duration-300 group-hover:shadow-xl">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <span className="mt-3 text-sm font-medium text-muted-foreground text-center whitespace-nowrap">
                    {client.name}
                  </span>
                </div>
              ))}

              {/* Duplicate set for seamless loop */}
              {clients.map((client, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 mx-8 flex flex-col items-center justify-center group transition-transform duration-300 hover:scale-110"
                >
                  <div className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center bg-white rounded-lg shadow-md p-6 transition-shadow duration-300 group-hover:shadow-xl">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <span className="mt-3 text-sm font-medium text-muted-foreground text-center whitespace-nowrap">
                    {client.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientCarousel;
