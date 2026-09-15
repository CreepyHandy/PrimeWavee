import svgPaths from "../../assets/LandingPage/svg-3j8ehv7zw6";

function FooterLogoIcon() {
  return (
    <div className="relative shrink-0 size-[28px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="28" viewBox="0 0 28 28" width="28">
        <path d={svgPaths.p2419cb00} fill="url(#flg1)" stroke="url(#flg2)" strokeWidth="0.205655" />
        <path d={svgPaths.p8b10b80} fill="#121212" stroke="url(#flg3)" strokeWidth="0.116329" />
        <line stroke="url(#flg4)" strokeWidth="0.205655" x1="19.6542" x2="14.5128" y1="13.8316" y2="5.19405" />
        <line stroke="url(#flg5)" strokeWidth="0.205655" x1="6.07863" x2="10.914" y1="17.8086" y2="8.87304" />
        <line stroke="url(#flg6)" strokeWidth="0.205655" x1="13.4815" x2="8.15887" y1="22.8479" y2="13.9131" />
        <line stroke="url(#flg7)" strokeWidth="0.205655" x1="21.3884" x2="11.1493" y1="18.8175" y2="18.9511" />
        <line stroke="url(#flg8)" strokeWidth="0.205655" x1="21.761" x2="16.8509" y1="9.84825" y2="18.883" />
        <line stroke="url(#flg9)" strokeWidth="0.205655" x1="16.7009" x2="6.86283" y1="8.89887" y2="8.72422" />
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="flg1" x1="10.0668" x2="17.9332" y1="0" y2="28"><stop stopColor="#239CFF"/><stop offset="1" stopColor="#005BE3"/></linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="flg2" x1="10.0668" x2="17.9332" y1="0" y2="28"><stop stopColor="#239CFF"/><stop offset="1" stopColor="#005BE3"/></linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="flg3" x1="12.3377" x2="17.4968" y1="6.34538" y2="20.676"><stop stopColor="#239CFF"/><stop offset="1" stopColor="#005BE3"/></linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="flg4" x1="19.7426" x2="21.3435" y1="13.779" y2="12.5967"><stop stopColor="#239CFF"/><stop offset="1" stopColor="#005BE3"/></linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="flg5" x1="6.16907" x2="8.00396" y1="17.8576" y2="18.6288"><stop stopColor="#239CFF"/><stop offset="1" stopColor="#005BE3"/></linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="flg6" x1="13.5699" x2="15.1748" y1="22.7952" y2="21.6173"><stop stopColor="#239CFF"/><stop offset="1" stopColor="#005BE3"/></linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="flg7" x1="21.3871" x2="21.1678" y1="18.7147" y2="16.7363"><stop stopColor="#239CFF"/><stop offset="1" stopColor="#005BE3"/></linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="flg8" x1="21.6707" x2="19.8379" y1="9.79915" y2="9.02238"><stop stopColor="#239CFF"/><stop offset="1" stopColor="#005BE3"/></linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="flg9" x1="16.7027" x2="16.5367" y1="8.79606" y2="6.81325"><stop stopColor="#239CFF"/><stop offset="1" stopColor="#005BE3"/></linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export function Footer({ onNav }: { onNav: (s: string) => void }) {
  return (
    <footer id="contact" className="bg-[#0f0d0b] px-4 md:px-[60px] py-10 md:py-[120px] flex flex-col items-center gap-[10px] overflow-hidden">
      {/* Card */}
      <div className="bg-[#161412] rounded-[8px] w-full max-w-[1120px] flex flex-col">
        {/* Top content */}
        <div className="flex-1 flex flex-col items-center gap-4 px-6 pt-10 md:pt-[40px] pb-6 md:pb-8">
          {/* Logo */}
          <div className="flex items-center gap-1.5">
            <FooterLogoIcon />
            <span className="font-['General_Sans:Medium',sans-serif] text-white text-[20px] leading-normal">PrimeWavee</span>
          </div>

          {/* Heading + body + CTA */}
          <div className="flex flex-col items-center gap-4 max-w-[451px] text-center">
            <div className="font-['Cal_Sans:Regular',sans-serif] text-[clamp(32px,6vw,48px)] tracking-[-0.3px] leading-[1.2]">
              <p className="text-[#b5ada4]">Your next big</p>
              <p className="text-[#fcfaf5]">idea starts here.</p>
            </div>
            <p className="font-['General_Sans:Regular',sans-serif] text-[#b5ada4] text-[16px] leading-[1.4]">
              We partner with ambitious teams to turn bold ideas into exceptional experiences.
            </p>
            <button
              onClick={() => onNav("contact")}
              className="px-6 py-3 md:px-4 md:py-2 rounded-[30px] bg-gradient-to-r from-[#239cff] to-[#005be3] text-white font-['General_Sans:Medium',sans-serif] text-[14px] leading-[22px] hover:opacity-90 transition-opacity"
            >
              Let's build together
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mx-6 flex flex-col md:flex-row md:items-center md:justify-between gap-1 md:gap-0 items-center py-4 md:py-3 text-center md:text-left">
          {/* Desktop: copyright left | Mobile: URL first, then copyright */}
          <span className="font-['Cal_Sans:Regular',sans-serif] text-[#6b6b6b] text-[12px] tracking-[0.5px] order-2 md:order-1">©2026 Primewavee</span>
          <span className="font-['Cal_Sans:Regular',sans-serif] text-[#fcfaf5] text-[14px] order-1 md:order-2">primewavee.online</span>
        </div>
      </div>

      {/* Watermark */}
      <div className="select-none pointer-events-none w-full max-w-[1120px] flex justify-center">
        <p className="font-['Cal_Sans:Regular',sans-serif] text-[#161412] text-[clamp(60px,10vw,120px)] tracking-[-2px] leading-[1.2] whitespace-nowrap text-center">
          PrimeWavee
        </p>
      </div>
    </footer>
  );
}
