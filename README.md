# Finanční poradce – webová prezentace

Moderní jednostránkový web finančního poradce postavený na Next.js (App Router), TypeScriptu a Tailwind CSS. Projekt je připravený k nasazení na Vercel.

## Spuštění lokálně

```bash
npm install
npm run dev
```

Web běží na `http://localhost:3000`.

## Produkční build

```bash
npm run build
npm run start
```

## Struktura

- `app/` – App Router (layout, hlavní stránka)
- `components/` – jednotlivé sekce webu (Hero, …)
- `public/` – statické soubory (fotografie poradce)

## Deploy na Vercel

1. Nahrát repozitář na GitHub.
2. V [Vercelu](https://vercel.com) → New Project → vybrat repozitář.
3. Výchozí nastavení Next.js – pouze potvrdit Deploy.
