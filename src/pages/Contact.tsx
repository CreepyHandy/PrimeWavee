import contactSvg from "../assets/ContactUsPage/svg-1dmcysa7y9";
import { Footer } from "../components/common/Footer";

function ContactIcon({ path, viewBox }: { path: string; viewBox: string }) {
  return (
    <div className="w-5 h-5 shrink-0 mt-0.5">
      <svg
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <path d={path} fill="#b5ada4" />
      </svg>
    </div>
  );
}

export function ContactPage({ onNav }: { onNav: (s: string) => void }) {
  return (
    <div className="bg-[#0f0d0b] min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 pt-[clamp(80px,12vh,140px)] pb-24">
        <div className="max-w-[1120px] mx-auto">
          <div className="flex flex-col md:flex-row gap-16 md:gap-20">
            {/* Left — heading + description + CTA */}
            <div className="md:flex-[1] flex flex-col gap-10">
              <div>
                <h1 className="font-['Cal_Sans:Regular',sans-serif] text-[clamp(36px,5vw,64px)] tracking-[-1px] leading-[1.15]">
                  <span className="text-[#b5ada4]">Contact Us.</span>
                  <br />
                  <span className="text-[#fcfaf5]">Bring your vision.</span>
                  <br />
                  <span className="text-[#fcfaf5]">We'll help shape it.</span>
                </h1>
              </div>
              <div className="flex flex-col gap-6">
                <p className="font-['General_Sans:Regular',sans-serif] text-[#b5ada4] text-[18px] leading-[1.6] max-w-[460px]">
                  Whether you're launching a startup or refreshing your brands,
                  we'd love to hear about your vision. Tell us what you're
                  building, and let's explore how we can help.
                </p>
                <div>
                  <button
                    onClick={() => onNav("contact")}
                    className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#239cff] to-[#005be3] text-white font-['General_Sans:Medium',sans-serif] text-[14px] hover:opacity-90 transition-opacity duration-200 shadow-lg shadow-[#239cff]/25"
                  >
                    Let's build together
                  </button>
                </div>
              </div>
            </div>

            {/* Right — contact items */}
            <div className="md:flex-[1] flex flex-col gap-10 md:pt-2">
              {/* Email */}
              <div className="flex gap-4 items-start">
                <ContactIcon
                  path={contactSvg.p10821740}
                  viewBox="0 0 19.4952 14.9963"
                />
                <div className="flex flex-col gap-1">
                  <span className="font-['General_Sans:Regular',sans-serif] text-[#fcfaf5] text-[20px] leading-[1.3]">
                    Email Us
                  </span>
                  <span className="font-['General_Sans:Regular',sans-serif] text-[#b5ada4] text-[16px] leading-[1.4]">
                    Our team will get back to you within 24 hours.
                  </span>
                  <a
                    href="mailto:primewavee1@gmail.com"
                    className="font-['General_Sans:Regular',sans-serif] text-[#239cff] text-[16px] hover:underline"
                  >
                    primewavee1@gmail.com
                  </a>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/10" />

              {/* Phone */}
              <div className="flex gap-4 items-start">
                <ContactIcon
                  path={contactSvg.p836c280}
                  viewBox="0 0 18.7452 18.7452"
                />
                <div className="flex flex-col gap-1">
                  <span className="font-['General_Sans:Regular',sans-serif] text-[#fcfaf5] text-[20px] leading-[1.3]">
                    Talk to Team
                  </span>
                  <span className="font-['General_Sans:Regular',sans-serif] text-[#b5ada4] text-[16px] leading-[1.4]">
                    We're available Monday–Friday..
                  </span>
                  <a
                    href="tel:+2347043239289"
                    className="font-['General_Sans:Regular',sans-serif] text-[#239cff] text-[16px] hover:underline"
                  >
                    +234 704 323 9289
                  </a>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/10" />

              {/* Visit / Web */}
              <div className="flex gap-4 items-start">
                <ContactIcon path={contactSvg.p26abea00} viewBox="0 0 23 23" />
                <div className="flex flex-col gap-1">
                  <span className="font-['General_Sans:Regular',sans-serif] text-[#fcfaf5] text-[20px] leading-[1.3]">
                    Visit Us
                  </span>
                  <span className="font-['General_Sans:Regular',sans-serif] text-[#b5ada4] text-[16px] leading-[1.4]">
                    We're available Monday–Friday.
                  </span>
                  <a
                    href="https://www.primewavee.online"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-['General_Sans:Regular',sans-serif] text-[#239cff] text-[16px] hover:underline"
                  >
                    www.primewavee.online
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer onNav={onNav} />
    </div>
  );
}
