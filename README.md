# Izabel Usheva — Portfolio

React + TypeScript + Tailwind CSS portfolio site.

## Stack

- **React 18** + **TypeScript**
- **Tailwind CSS** за стилове
- **Vite** за build

## Стартиране

```bash
npm install
npm run dev
```

## Build за production

```bash
npm run build
npm run preview
```

## Добавяне на снимка

1. Сложи снимката си в `/public/photo.jpg`
2. Отвори `src/components/Hero.tsx`
3. Намери закоментирания `<img>` таг и го разкоментирай:

```tsx
// Преди (изтрий):
<span className="font-cormorant text-8xl font-light text-white/40">IU</span>

// След (добави):
<img
  src="/photo.jpg"
  alt="Izabel Usheva"
  className="w-full h-full object-cover object-top"
/>
```

## Обновяване на съдържанието

Цялото съдържание е в **`src/data/portfolio.ts`** — там се редактират:
- `skills` — технически умения и нива
- `experiences` — проекти и работен опит
- `education` — образование
- `certificates` — сертификати
- `languages` — езици

## Deploy на Vercel

```bash
npm install -g vercel
vercel
```

Или просто качи папката в [vercel.com](https://vercel.com) — автоматично разпознава Vite проект.
