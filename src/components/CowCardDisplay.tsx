import type { CowCard } from '../types';
import './CowCardDisplay.css';

type CowCardDisplayProps = {
  card: CowCard;
};

export function CowCardDisplay({ card }: CowCardDisplayProps) {
  return (
    <article className="cow-card">
      <div className="cow-card__image-wrapper">
        <img
          src={card.imageSrc}
          alt={card.alt ?? 'A picture of a cow'}
          className="cow-card__image"
          loading="eager"
        />
      </div>
      <p className="cow-card__question">Does Mak like this picture of a cow?</p>
    </article>
  );
}
