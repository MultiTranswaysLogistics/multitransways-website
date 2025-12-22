import { useState, useEffect, useRef } from "react";
import { Phone, Mail } from "lucide-react";

const FloatingActions = () => {
  const [showPhonePopup, setShowPhonePopup] = useState(false);
  const [showWhatsappPopup, setShowWhatsappPopup] = useState(false);

  const phoneRef = useRef<HTMLDivElement>(null);
  const whatsappRef = useRef<HTMLDivElement>(null);

  // Close popups when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        !phoneRef.current?.contains(target) &&
        !whatsappRef.current?.contains(target)
      ) {
        setShowPhonePopup(false);
        setShowWhatsappPopup(false);
      }
    };

    if (showPhonePopup || showWhatsappPopup) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showPhonePopup, showWhatsappPopup]);

  return (
    <>
      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
        {/* PHONE BUTTON */}
        <button
          onClick={() => {
            setShowPhonePopup((p) => !p);
            setShowWhatsappPopup(false);
          }}
          className="w-14 h-14 rounded-full bg-primary text-white shadow-lg
                     flex items-center justify-center
                     transition-transform duration-150
                     active:scale-95 motion-reduce:transition-none"
        >
          <Phone className="w-6 h-6" />
        </button>

        {/* WHATSAPP BUTTON */}
        <button
          onClick={() => {
            setShowWhatsappPopup((p) => !p);
            setShowPhonePopup(false);
          }}
          className="w-14 h-14 rounded-full bg-green-500 text-white shadow-lg
                     flex items-center justify-center
                     transition-transform duration-150
                     active:scale-95 motion-reduce:transition-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="28"
            height="28"
            fill="currentColor"
          >
            <path d="M16.027 3C9.383 3 4 8.384 4 15.027c0 2.647.861 5.093 2.327 7.078L4 29l7.137-2.299A11.94 11.94 0 0 0 16.027 27C22.67 27 28.053 21.616 28.053 14.973 28.053 8.33 22.67 3 16.027 3zm6.31 17.297c-.267.75-1.543 1.46-2.117 1.553-.573.094-1.267.133-2.047-.133-.475-.151-1.086-.353-1.87-.693-3.289-1.426-5.43-4.773-5.596-4.993-.166-.22-1.333-1.773-1.333-3.386 0-1.613.84-2.41 1.14-2.736.3-.327.66-.41.88-.41.22 0 .44.007.633.012.205.005.48-.078.753.573.267.652.907 2.25.987 2.414.08.166.133.36.027.58-.107.22-.16.353-.32.54-.16.187-.34.42-.487.567-.16.16-.327.333-.14.653.187.327.827 1.36 1.773 2.207 1.213 1.08 2.234 1.42 2.56 1.58.327.16.513.133.7-.08.187-.213.807-.94 1.02-1.267.214-.327.44-.267.747-.16.307.106 1.94.914 2.273 1.08.333.166.553.247.633.387.08.14.08.773-.187 1.52z" />
          </svg>
        </button>

        {/* EMAIL BUTTON */}
        <a
          href="mailto:info@multitransways.com?cc=amitbarpl@mail.com"
          className="w-14 h-14 rounded-full bg-foreground text-background shadow-lg
                     flex items-center justify-center
                     transition-transform duration-150
                     active:scale-95 motion-reduce:transition-none"
        >
          <Mail className="w-6 h-6" />
        </a>
      </div>

      {/* PHONE POPUP */}
      {showPhonePopup && (
        <div
          ref={phoneRef}
          className="fixed bottom-32 right-6 z-50 bg-card border border-border
                     shadow-lg rounded-xl p-4 w-64
                     transition-all duration-200
                     opacity-100 translate-y-0
                     will-change-transform"
        >
          <h4 className="font-semibold text-foreground mb-3">
            Call Our Directors
          </h4>

          <div className="flex flex-col gap-2">
            <a href="tel:+919820626363" className="text-primary font-medium">
              📞 Amit Agarwal <br />— +91 9820626363
            </a>

            <a href="tel:+919871201818" className="text-primary font-medium">
              📞 Rohit Aggarwal <br />— +91 9871201818
            </a>
          </div>
        </div>
      )}

      {/* WHATSAPP POPUP */}
      {showWhatsappPopup && (
        <div
          ref={whatsappRef}
          className="fixed bottom-52 right-6 z-50 bg-card border border-border
                     shadow-lg rounded-xl p-4 w-64
                     transition-all duration-200
                     opacity-100 translate-y-0
                     will-change-transform"
        >
          <h4 className="font-semibold text-foreground mb-3">
            WhatsApp Support
          </h4>

          <div className="flex flex-col gap-2">
            <a
              href="https://wa.me/919820626363"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 font-medium"
            >
              💬 WhatsApp Amit Agarwal — +91 9820626363
            </a>

            <a
              href="https://wa.me/919871201818"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 font-medium"
            >
              💬 WhatsApp Rohit Aggarwal — +91 9871201818
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingActions;
