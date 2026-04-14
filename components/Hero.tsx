import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-navy-900 text-white">
      {/* Jemné dekorativní kruhy v pozadí */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-navy-700/40 blur-3xl" />
        <div className="absolute top-1/3 -right-32 h-[26rem] w-[26rem] rounded-full bg-navy-600/30 blur-3xl" />
      </div>

      <div className="relative mx-auto grid min-h-[92vh] max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-32 pt-20 md:grid-cols-2 md:gap-12 md:pb-40 md:pt-28 lg:px-8">
        {/* Textová část */}
        <div className="relative z-10 text-center md:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium tracking-wide text-navy-100 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Nezávislý finanční poradce
          </span>

          <h1 className="mt-8 font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-[4.25rem] lg:text-[4.75rem]">
            Pomohu vám
            <br />
            od financí
            <br />
            získat <span className="italic text-navy-100">maximum</span>
          </h1>

          <p className="mx-auto mt-8 max-w-lg text-base leading-relaxed text-navy-200 md:mx-0 md:text-lg">
            Srozumitelně, férově a bez tlaku. Společně najdeme řešení,
            které dává smysl právě vám – ať už plánujete rodinu, bydlení
            nebo budoucnost v klidu.
          </p>

          <div className="mt-10 flex flex-col items-center gap-5 text-sm text-navy-200 sm:flex-row sm:gap-8 md:justify-start">
            <div className="flex items-center gap-2">
              <CheckIcon />
              Bez skrytých poplatků
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon />
              Osobní přístup
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon />
              Dlouhodobá hodnota
            </div>
          </div>
        </div>

        {/* Fotka bez pozadí */}
        <div className="relative flex items-end justify-center md:justify-end">
          <div className="relative h-[460px] w-[360px] sm:h-[540px] sm:w-[420px] md:h-[620px] md:w-[480px] lg:h-[680px] lg:w-[520px]">
            {/* Jemná z\u00e1\u0159e za postavou */}
            <div
              aria-hidden="true"
              className="absolute inset-x-6 bottom-0 top-10 rounded-full bg-gradient-to-t from-navy-600/40 to-transparent blur-3xl"
            />
            <Image
              src="/poradce.png"
              alt="Portrét finančního poradce"
              fill
              priority
              sizes="(max-width: 768px) 420px, 520px"
              className="relative object-contain object-bottom drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Dekorativn\u00ed vlna dole */}
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 leading-[0]">
        <svg
          viewBox="0 0 1440 140"
          preserveAspectRatio="none"
          className="h-16 w-full md:h-24"
        >
          <path
            d="M0,80 C240,140 480,20 720,60 C960,100 1200,140 1440,80 L1440,140 L0,140 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-4 w-4 text-emerald-400"
    >
      <path
        fillRule="evenodd"
        d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.07 7.138a1 1 0 0 1-1.42.005L3.29 8.91a1 1 0 1 1 1.42-1.41l3.22 3.247 6.36-6.423a1 1 0 0 1 1.414-.034z"
        clipRule="evenodd"
      />
    </svg>
  );
}
