import { MapPin, Phone } from "lucide-react";
import { toast } from "sonner";

const branches = [
  {
    name: "Head Office - Mumbai",
    address:
      "A-232,233,234 Steel Chamber Tower, Sector AWC, Kalamboli, Panvel, Navi Mumbai, Maharashtra 410218",
    phone: "+91 9820626363/+91 9871201818",
  },
  {
    name: "Delhi Branch",
    address: "94 KHANNA MARKET, TIS HAZARI, DELHI, India - 110054",
    phone: "+91 9820626363/+91 9871201818",
  },
  {
    name: "Bharuch Branch",
    address: (
      <>
        Office No S4, Second Floor, Yash Kamal Complex,
        <br />
        Shrawan Chokdi, Dahej Road, Bharuch 392001
      </>
    ),
    phone: "+91 9820626363/+91 9871201818",
  },
  {
    name: "Vapi Branch",
    address: "502, Skylon Building, GIDC, Vapi",
    phone: "+91 9820626363/+91 9871201818",
  },
  {
    name: "Bengaluru Branch",
    address:
      "No.303, 3rd Floor, Sai Godavari, Madanayakanahalli, Madavara Post, Bengaluru-562162",
    phone: "+91 9820626363/+91 9871201818",
  },
];

const ContactSection = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Thank you for contacting us! We'll get back to you soon.");
        form.reset(); // ✅ Auto reset
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Network error. Please try again later.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get in touch with us for all your logistics needs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="animate-slide-in-left">
            <div className="bg-card rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Web3Forms Key */}
                <input
                  type="hidden"
                  name="access_key"
                  value="08018da7-e177-4b08-9d40-19954d84a1e5"
                />

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full border px-3 py-2 rounded"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full border px-3 py-2 rounded"
                />

                <input
                  type="text"
                  name="phone"
                  placeholder="Your Phone"
                  className="w-full border px-3 py-2 rounded"
                />

                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  className="w-full border px-3 py-2 rounded min-h-[120px]"
                />

                <button
                  type="submit"
                  className="px-6 py-2 rounded bg-orange-500 text-white font-medium hover:bg-orange-600 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Branch Info + Map */}
          <div className="space-y-8 animate-slide-in-right">
            {/* Branches */}
            <div className="bg-card rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Our Branches
              </h3>

              <div className="space-y-6">
                {branches.map((branch, index) => (
                  <div key={index} className="border-l-4 border-primary pl-4">
                    <h4 className="font-bold text-foreground mb-2">
                      {branch.name}
                    </h4>

                    <div className="flex items-start gap-2 text-muted-foreground mb-2">
                      <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                      <p className="text-sm">{branch.address}</p>
                    </div>

                    {/* Clickable phone numbers */}
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Phone className="w-4 h-4" />
                      <p className="text-sm">
                        {branch.phone.split("/").map((num, i, arr) => (
                          <span key={i}>
                            <a
                              href={`tel:${num.replace(/\s+/g, "")}`}
                              className="hover:text-primary transition-colors"
                            >
                              {num.trim()}
                            </a>
                            {i < arr.length - 1 && " / "}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Google Map */}
            <div className="bg-card rounded-xl shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.790880155313!2d73.1037795752492!3d19.028934382165982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e9d0072fd3db%3A0x83596087895e2849!2sSteel%20Chamber!5e0!3m2!1sen!2sin!4v1764289285776"
                width="100%"
                height="400"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Multi Transways Logistics Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
