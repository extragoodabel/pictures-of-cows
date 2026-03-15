# Pictures of Cows that Mak Likes

A lightweight, playful browser game where you guess whether Mak likes each cow picture.

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## Adding Cow Images

### Mak-approved images (liked: true)

1. Place image files in `/public/images/mak-liked/`
2. Edit `src/data/cowData.ts` and add entries:

```ts
{
  id: 'cow-unique-id',
  imageSrc: '/images/mak-liked/your-filename.png',
  liked: true,
  alt: 'Description of the cow for accessibility',
},
```

### Other cow images (liked: false)

1. Place image files in `/public/images/other-cows/`
2. Edit `src/data/cowData.ts` and add entries:

```ts
{
  id: 'other-unique-id',
  imageSrc: '/images/other-cows/your-filename.png',
  liked: false,
  alt: 'Description of the cow for accessibility',
},
```

## Editing the Dataset

All cow data lives in `src/data/cowData.ts`. Each card has:

- `id` – unique string
- `imageSrc` – path from `/public` (e.g. `/images/mak-liked/photo.png`)
- `liked` – `true` if Mak likes it, `false` otherwise
- `alt` – optional accessibility text for the image

## Running Locally

- **Dev:** `npm run dev` – starts Vite dev server
- **Build:** `npm run build` – outputs to `dist/`
- **Preview:** `npm run preview` – serves the built app
