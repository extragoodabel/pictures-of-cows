import type { CowCard } from '../types';

/**
 * Cow card dataset for "Pictures of Cows that Mak Likes"
 *
 * TO ADD MAK-APPROVED IMAGES:
 * 1. Place images in /public/images/mak-liked/
 * 2. Add entries below with liked: true
 * 3. Use imageSrc: "/images/mak-liked/your-filename.png"
 *
 * TO ADD OTHER COW IMAGES (Mak does NOT like):
 * 1. Place images in /public/images/other-cows/
 * 2. Add entries below with liked: false
 * 3. Use imageSrc: "/images/other-cows/your-filename.png"
 */

export const cowCards: CowCard[] = [
  // ========== MAK-APPROVED COWS (liked: true) ==========
  // These are the exact cow photos Mak likes. Only these count as "liked".
  {
    id: 'cow-1',
    imageSrc: '/images/mak-liked/IMG_9143-970facd3-4713-4c3d-8855-9ded024b3827.png',
    liked: true,
    alt: 'A black and white cow standing in the shallow ocean water with gentle waves breaking around it, under a pale, overcast sky.',
  },
  {
    id: 'cow-2',
    imageSrc: '/images/mak-liked/IMG_9144-826d701c-2302-4bb3-a65b-2a60e4c6ad3e.png',
    liked: true,
    alt: 'A black and white cow appearing to wear a yellow toy car, observed by a brown cow in a grassy field.',
  },
  {
    id: 'cow-3',
    imageSrc: '/images/mak-liked/IMG_9145-684294fa-19c5-4063-872b-2a31fd48152d.png',
    liked: true,
    alt: 'A brown cow wearing a bright pink bra over its eyes like a blindfold, resting in a barn.',
  },
  {
    id: 'cow-4',
    imageSrc: '/images/mak-liked/IMG_9146-189592a0-a13f-46a1-be45-a845348c9676.png',
    liked: true,
    alt: 'A black and white cow with long, blonde hair blowing in the wind, looking surprised.',
  },
  {
    id: 'cow-5',
    imageSrc: '/images/mak-liked/IMG_9147-07ecdfe5-d502-4c04-b70a-a1ed118bdb59.png',
    liked: true,
    alt: 'A brown and white cow appears to be flying across a cloudy sky above a rural road and bare trees.',
  },
  {
    id: 'cow-6',
    imageSrc: '/images/mak-liked/IMG_9148-dad521fb-a45f-47a7-a359-a58d23d95076.png',
    liked: true,
    alt: 'A black and white Holstein cow wearing black wellington boots on all four legs, walking on grass.',
  },
  {
    id: 'cow-7',
    imageSrc: '/images/mak-liked/IMG_9149-d0ade027-17e1-4332-8a05-10047670a9fd.png',
    liked: true,
    alt: 'Close-up side profile of a light brown cow\'s face, with its muzzle gently pressed against a wooden barn wall.',
  },
  {
    id: 'cow-8',
    imageSrc: '/images/mak-liked/IMG_9150-326110ea-620f-4fa8-971b-29008a9437e8.png',
    liked: true,
    alt: 'A brown and white cow wearing a bell standing on a sloped shingled roof, looking down at a silver ladder.',
  },
  {
    id: 'cow-9',
    imageSrc: '/images/mak-liked/IMG_9151-982429ee-29b3-4b17-bec2-0090978695ae.png',
    liked: true,
    alt: 'A brown and white cow with a wide-eyed expression peeks around a corrugated grey metal wall.',
  },
  {
    id: 'cow-10',
    imageSrc: '/images/mak-liked/IMG_9152-88140b5e-347c-4b5f-b545-31ae3ed44085.png',
    liked: true,
    alt: 'A black and white cow appears to be floating or flying against a dark, cloudy, overcast sky.',
  },
  {
    id: 'cow-11',
    imageSrc: '/images/mak-liked/IMG_9153-3c59b88b-f3b6-4f6b-a576-1da5fb7db27c.png',
    liked: true,
    alt: 'A brown cow standing in a swimming pool, looking at the viewer.',
  },
  {
    id: 'cow-12',
    imageSrc: '/images/mak-liked/IMG_9154-aec5c766-a9da-4b49-bdef-73164959fac2.png',
    liked: true,
    alt: 'A black and white cow parachuting in the sky.',
  },
  {
    id: 'cow-13',
    imageSrc: '/images/mak-liked/IMG_9133-f779e43f-2836-4bcb-a57d-0b8b0ee752b5.png',
    liked: true,
    alt: 'A fantastical cow-shark hybrid with a cow\'s head and cowbell, flying over green mountains and meadows.',
  },

  // ========== OTHER COWS (liked: false) ==========
  // Cows that Mak does NOT like.
  {
    id: 'other-1',
    imageSrc: '/images/other-cows/patrick-baum-hB9vo06o9z8-unsplash-2479014f-7774-45a5-b543-a1e266760616.png',
    liked: false,
    alt: 'A light brown cow with a white heart-shaped marking on its forehead, looking at the camera.',
  },
  {
    id: 'other-2',
    imageSrc: '/images/other-cows/jorien-loman-00YD5QLyaGU-unsplash-7a3f4112-01b4-46e9-b6d6-22c9f374f53f.png',
    liked: false,
    alt: 'Three black and white Holstein cows in a vibrant green field with farm buildings in the background.',
  },
  {
    id: 'other-3',
    imageSrc: '/images/other-cows/luke-stackpoole-RxHhxWnXmNs-unsplash-b7a3f274-5056-455b-96a3-769a8a4ca1ff.png',
    liked: false,
    alt: 'Close-up of a black and white cow named Natalie with a pink spotted nose and yellow ear tags.',
  },
  {
    id: 'other-4',
    imageSrc: '/images/other-cows/megumi-nachev-8rVSeXEJG1g-unsplash-3408ac3c-449a-4c94-ad3b-4eb82a273394.png',
    liked: false,
    alt: 'A light brown cow with horns standing on a rural road under a blue sky.',
  },
  {
    id: 'other-5',
    imageSrc: '/images/other-cows/wolfgang-hasselmann-CY6MLcLvdX0-unsplash-57513042-5cf8-4ac1-a5a9-34dae98cf8a4.png',
    liked: false,
    alt: 'Close-up of the rear underside of a black and white cow in a pasture.',
  },
  {
    id: 'other-6',
    imageSrc: '/images/other-cows/anand-thakur-oguy915eU3s-unsplash-9ee4d939-2e78-4b1f-bd9e-b1fdaf20c3cc.png',
    liked: false,
    alt: 'A black and white cow standing in a calm pond with its reflection in the water.',
  },
  {
    id: 'other-7',
    imageSrc: '/images/other-cows/megumi-nachev-qkQR-OrvZic-unsplash-85227154-5621-4e15-aad1-2836042f7891.png',
    liked: false,
    alt: 'A brown and white cow with its tongue out and yellow ear tags in a green pasture.',
  },
  {
    id: 'other-8',
    imageSrc: '/images/other-cows/marco-ceschi-edB6BlQrMik-unsplash-86b31689-6c5d-4a11-b664-ba0e402b6e0e.png',
    liked: false,
    alt: 'A light brown cow with a white heart-shaped patch on its forehead and short horns.',
  },
  {
    id: 'other-9',
    imageSrc: '/images/other-cows/daniil-korbut-oPovFHR5T3A-unsplash-c0a41305-e2b6-435c-99a8-6c8b54b9d3ab.png',
    liked: false,
    alt: 'A light-colored cow with horns at sunrise or sunset with mountains in the background.',
  },
  {
    id: 'other-10',
    imageSrc: '/images/other-cows/kseniya-konovets-rB734RW4xdE-unsplash-3565e5d5-5c52-4b2b-9900-c7d1b0f41d72.png',
    liked: false,
    alt: 'Multiple brown and white cows resting on a vibrant green hillside under a blue sky.',
  },
  {
    id: 'other-11',
    imageSrc: '/images/other-cows/leo-manjarrez-_jdB5skW6W8-unsplash-45888dab-a29e-4232-a2a5-86c4ceb03988.png',
    liked: false,
    alt: 'A row of black and white Holstein cows eating hay in a barn.',
  },
  {
    id: 'other-12',
    imageSrc: '/images/other-cows/quaritsch-photography-N8A0Dwp9_CI-unsplash-cf8f4173-ba70-4794-8299-4011c1890ce3.png',
    liked: false,
    alt: 'A light cream cow with an ear tag standing in tall golden-brown grass.',
  },
  {
    id: 'other-13',
    imageSrc: '/images/other-cows/suvrajit-s-slDCGrK8LOM-unsplash-71c114dc-e254-4f36-9b0a-17595d32f1c7.png',
    liked: false,
    alt: 'A reddish-brown and white cow on a green hillside under a cloudy sky.',
  },
  {
    id: 'other-14',
    imageSrc: '/images/other-cows/daniel-j-schwarz-GHaP0MGSRLA-unsplash-3dff50b2-f076-4a64-a484-a716bb11a2dd.png',
    liked: false,
    alt: 'A black and white Holstein cow in a sunny green field with yellow flowers under a blue sky.',
  },
  {
    id: 'other-15',
    imageSrc: '/images/other-cows/gabriel-porras-nUCt1PjRNHE-unsplash-ffe35295-5a0c-4390-ad31-3f4e3cd0735b.png',
    liked: false,
    alt: 'A black and white calf wearing a green coat and ear tag in a barn.',
  },
  {
    id: 'other-16',
    imageSrc: '/images/other-cows/jean-carlo-emer-G_oWb_hcfx8-unsplash-22bcef4c-efd9-4e1b-b218-fd53a5ada766.png',
    liked: false,
    alt: 'A brown cow with a bell collar resting in a mountain pasture with a waterfall in the background.',
  },
  {
    id: 'other-17',
    imageSrc: '/images/other-cows/amber-kipp-Mm_D_kbvTUM-unsplash-f5ba7e3a-d8c3-4257-8a75-61a2b13fa02f.png',
    liked: false,
    alt: 'A cow in a grassy field.',
  },
  {
    id: 'other-18',
    imageSrc: '/images/other-cows/michele-de-pascalis-HLTIQgM0OZY-unsplash-64eb8685-94ec-493a-bd8b-dfbe942c5656.png',
    liked: false,
    alt: 'A cow in a rural landscape.',
  },
];
