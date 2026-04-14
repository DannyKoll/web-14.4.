import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden text-white"
    >
      {/* V\u00edcevrstv\u00e9 pozad\u00ed s hloubkou */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        {/* Z\u00e1kladn\u00ed barevn\u00fd gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />

        {/* Velk\u00e9 rozmazan\u00e9 kruhy pro hloubku */}
        <div className="absolute -top-1/4 -left-1/4 h-[60rem] w-[60rem] rounded-full bg-navy-600/30 blur-[140px]" />
        <div className="absolute top-1/4 -right-1/4 h-[55rem] w-[55rem] rounded-full bg-navy-700/40 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 h-[40rem] w-[40rem] rounded-full bg-navy-500/20 blur-[130px]" />

        {/* Jemn\u00e1 textura/grain pro eleganci */}
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.12] mix-blend-overlay"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.9"
              numOctaves="2"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>

        {/* Jemn\u00e1 m\u0159\u00ed\u017eka pro profesion\u00e1ln\u00ed n\u00e1dech */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />

        {/* Vinetace pro hloubku */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(13,24,42,0.6)_100%)]" />

        {/* P\u0159irozen\u00fd p\u0159echod do dal\u0161\u00ed sekce dole */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-navy-950/90" />
      </div>

      <div className="relative mx-auto grid min-h-[100vh] max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-20 pt-20 md:grid-cols-[1.05fr_1fr] md:gap-12 md:pt-28 lg:px-8">
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

        {/* Fotka – zasazen\u00e1 do prostoru, s m\u011bkk\u00fdm p\u0159echodem do pozad\u00ed */}
        <div className="relative flex h-full items-end justify-center md:justify-end">
          <div className="relative h-[520px] w-full max-w-[460px] sm:h-[600px] md:h-[700px] md:max-w-[520px] lg:h-[760px] lg:max-w-[560px]">
            {/* M\u011bkk\u00e1 elipsovit\u00e1 z\u00e1\u0159 za postavou */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-[18%] h-[70%] w-[85%] -translate-x-1/2 rounded-full bg-gradient-radial from-navy-400/40 via-navy-500/20 to-transparent blur-3xl"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(93,120,160,0.45) 0%, rgba(47,71,108,0.25) 40%, transparent 70%)",
              }}
            />

            {/* Jemn\u00fd podsv\u00edcen\u00fd halo obrys za hlavou */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-[8%] h-40 w-48 -translate-x-1/2 rounded-full bg-white/10 blur-3xl"
            />

            {/* Samotn\u00e1 postava – s m\u011bkk\u00fdm fade out dolu, aby splynula s pozad\u00edm */}
            <div
              className="absolute inset-0"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 0%, black 82%, transparent 100%)",
                maskImage:
                  "linear-gradient(to bottom, black 0%, black 82%, transparent 100%)",
              }}
            >
              <Image
                src="/poradce.png"
                alt="Portrét finančního poradce"
                fill
                priority
                sizes="(max-width: 768px) 460px, 560px"
                className="object-contain object-bottom drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)]"
              />
            </div>

            {/* Jemn\u00fd stín pod postavou na zemi */}
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-1/2 h-10 w-[70%] -translate-x-1/2 rounded-[50%] bg-black/40 blur-2xl"
            />
          </div>
        </div>
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
