import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-cream-100"
    >
      {/* Jemn\u00e9 dekorativn\u00ed pozad\u00ed \u2013 teplé krémov\u00e9 odst\u00edny s hloubkou */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        {/* M\u011bkk\u00fd p\u0159echod shora dolu */}
        <div className="absolute inset-0 bg-gradient-to-b from-cream-50 via-cream-100 to-cream-200" />

        {/* Teplá zá\u0159 vpravo naho\u0159e */}
        <div className="absolute -top-40 right-0 h-[40rem] w-[40rem] rounded-full bg-gold-400/10 blur-[120px]" />

        {/* Chladn\u011bj\u0161\u00ed nasv\u00edcen\u00ed vlevo dole */}
        <div className="absolute -bottom-32 -left-32 h-[36rem] w-[36rem] rounded-full bg-navy-200/40 blur-[120px]" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center gap-10 px-6 pb-16 pt-16 md:grid md:min-h-[92vh] md:grid-cols-[1.1fr_1fr] md:gap-16 md:pb-20 md:pt-24 lg:px-8">
        {/* Textová část */}
        <div className="order-2 w-full text-center md:order-1 md:text-left">
          {/* Drobn\u00fd label se zlat\u00fdm akcentem */}
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-10 bg-gold-500" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-navy-600">
              Nezávislý finanční poradce
            </span>
          </div>

          <h1 className="mt-6 font-serif text-[2.5rem] font-medium leading-[1.1] tracking-tight text-navy-900 sm:text-5xl md:text-[3.75rem] lg:text-[4.5rem]">
            Pomohu vám
            <br className="hidden sm:block" />{" "}
            od financí získat{" "}
            <span className="italic text-gold-600">maximum</span>.
          </h1>

          <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-navy-700 md:mx-0 md:text-lg">
            Srozumitelně, férově a bez tlaku. Společně najdeme řešení,
            které dává smysl právě vám – ať už plánujete rodinu, bydlení
            nebo budoucnost v klidu.
          </p>

          {/* Trust ukazatele \u2013 elegantn\u011bj\u0161\u00ed proveden\u00ed */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-navy-700 md:justify-start">
            <TrustItem>Bez skrytých poplatků</TrustItem>
            <span className="hidden h-1 w-1 rounded-full bg-navy-300 sm:inline-block" />
            <TrustItem>Osobní přístup</TrustItem>
            <span className="hidden h-1 w-1 rounded-full bg-navy-300 sm:inline-block" />
            <TrustItem>Dlouhodobá hodnota</TrustItem>
          </div>
        </div>

        {/* Fotka s dekorativn\u00edm pozad\u00edm */}
        <div className="order-1 w-full md:order-2">
          <div className="relative mx-auto aspect-[4/5] w-[280px] sm:w-[340px] md:w-full md:max-w-[480px] lg:max-w-[520px]">
            {/* Dekorativn\u00ed tmav\u011b-navy pl\u00e1t na pozad\u00ed fotky \u2013 posunut\u00fd */}
            <div
              aria-hidden="true"
              className="absolute inset-y-6 right-0 left-6 rounded-[2rem] bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 shadow-2xl shadow-navy-900/20"
            />

            {/* Zlatá linka akcent */}
            <div
              aria-hidden="true"
              className="absolute -left-2 top-16 hidden h-16 w-1 rounded-full bg-gold-500 md:block"
            />

            {/* M\u011bkk\u00e1 z\u00e1\u0159 za postavou */}
            <div
              aria-hidden="true"
              className="absolute inset-x-8 top-8 bottom-0 rounded-[2rem]"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 40%, rgba(93,120,160,0.55) 0%, rgba(47,71,108,0.25) 50%, transparent 75%)",
                filter: "blur(8px)",
              }}
            />

            {/* Postava \u2013 s m\u011bkk\u00fdm fade do navy panelu */}
            <div
              className="absolute inset-0"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 0%, black 88%, transparent 100%)",
                maskImage:
                  "linear-gradient(to bottom, black 0%, black 88%, transparent 100%)",
              }}
            >
              <Image
                src="/poradce.png"
                alt="Portrét finančního poradce"
                fill
                priority
                sizes="(max-width: 768px) 340px, 520px"
                className="object-contain object-bottom drop-shadow-[0_25px_45px_rgba(13,24,42,0.35)]"
              />
            </div>

            {/* Mal\u00fd rá\u010dkov\u00fd r\u00e1mecek v pravém horn\u00edm rohu */}
            <div
              aria-hidden="true"
              className="absolute right-0 top-6 hidden h-14 w-14 rounded-tr-[2rem] border-r-2 border-t-2 border-gold-500/70 md:block"
            />
            {/* a v lev\u00e9m spodn\u00edm */}
            <div
              aria-hidden="true"
              className="absolute bottom-6 left-6 hidden h-14 w-14 rounded-bl-[2rem] border-b-2 border-l-2 border-gold-500/70 md:block"
            />
          </div>
        </div>
      </div>

      {/* P\u0159irozen\u00fd jemn\u00fd p\u0159echod ze spodu */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-cream-200"
      />
    </section>
  );
}

function TrustItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2">
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        fill="none"
        className="h-4 w-4 text-gold-600"
      >
        <path
          d="M5 10.5l3.5 3.5 7-8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="font-medium">{children}</span>
    </div>
  );
}
