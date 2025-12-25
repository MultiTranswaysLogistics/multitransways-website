import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Quick Contact */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary">Multi Transways Logistics LLP</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <p className="text-background/90">
                  A-232,233,234, Steel Chamber, Secotr AWC
                  <br />
                  Kalamboli, Panvel, Navi Mumbai, 410218
                </p>
              </div>
              <div className="flex items-center gap-3">
  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
  <p className="text-background/90">
    {["+91 9820626363", "+91 9871201818"].map((num, i, arr) => (
      <span key={i}>
        <a
          href={`tel:${num.replace(/\s+/g, "")}`}
          className="hover:text-primary transition-colors"
        >
          {num}
        </a>
        {i < arr.length - 1 && " / "}
      </span>
    ))}
  </p>
</div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="&#x68;&#x74;&#x74;&#x70;&#x73;&#x3A;&#x2F;&#x2F;&#x6D;&#x61;&#x69;&#x6C;&#x2E;&#x67;&#x6F;&#x6F;&#x67;&#x6C;&#x65;&#x2E;&#x63;&#x6F;&#x6D;&#x2F;&#x6D;&#x61;&#x69;&#x6C;&#x2F;&#x3F;&#x76;&#x69;&#x65;&#x77;&#x3D;&#x63;&#x6D;&#x26;&#x66;&#x73;&#x3D;&#x31;&#x26;&#x74;&#x6F;&#x3D;&#x69;&#x6E;&#x66;&#x6F;&#x40;&#x6D;&#x75;&#x6C;&#x74;&#x69;&#x74;&#x72;&#x61;&#x6E;&#x73;&#x77;&#x61;&#x79;&#x73;&#x2E;&#x63;&#x6F;&#x6D;"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/90 hover:text-primary transition-colors"
                >
                  info@multitransways.com
                </a>
                /
                <a
                  href="&#x68;&#x74;&#x74;&#x70;&#x73;&#x3A;&#x2F;&#x2F;&#x6D;&#x61;&#x69;&#x6C;&#x2E;&#x67;&#x6F;&#x6F;&#x67;&#x6C;&#x65;&#x2E;&#x63;&#x6F;&#x6D;&#x2F;&#x6D;&#x61;&#x69;&#x6C;&#x2F;&#x3F;&#x76;&#x69;&#x65;&#x77;&#x3D;&#x63;&#x6D;&#x26;&#x66;&#x73;&#x3D;&#x31;&#x26;&#x74;&#x6F;&#x3D;&#x61;&#x6D;&#x69;&#x74;&#x62;&#x61;&#x72;&#x70;&#x6C;&#x40;&#x6D;&#x61;&#x69;&#x6C;&#x2E;&#x63;&#x6F;&#x6D;"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/90 hover:text-primary transition-colors"
                >
                  amitbarpl@mail.com
                </a>
              </div>
            </div>
          </div>

          {/* Branch Summary */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Our Presence</h3>
            <p className="text-background/90 mb-4">
              With offices across major cities in India, we ensure seamless logistics support nationwide.
            </p>
            <div className="grid grid-cols-2 gap-3 text-background/90">
              <div>• Mumbai (Head Office)</div>
              <div>• Delhi</div>
              <div>• Baruch</div>
              <div>• Vapi</div>
              <div>• Bengaluru</div>
              <div>• Chennai</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/70">
          <p>&copy; {new Date().getFullYear()} Multi Transways Logistics. All rights reserved.</p>
          <p className="mt-2 text-sm">Your trusted partner in freight transportation and logistics</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
