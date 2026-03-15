export type CardType = 'cow' | 'mumford';

export type CowCard = {
  id: string;
  imageSrc: string;
  type: CardType;
  liked?: boolean;
  alt?: string;
};
