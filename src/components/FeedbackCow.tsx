import { useState } from 'react';
import './FeedbackCow.css';

export type FeedbackType =
  | 'correct-liked'      // Correct: guessed liked cow correctly
  | 'correct-not-liked'  // Correct: guessed non-liked cow correctly
  | 'incorrect-said-no'  // Incorrect: said no but Mak likes it
  | 'incorrect-said-yes'; // Incorrect: said yes but Mak doesn't like it

type FeedbackCowProps = {
  feedbackType: FeedbackType;
  onNext: () => void;
  onAppeal?: () => void;
  showAppealButton: boolean;
};

const FEEDBACK_IMAGES: Record<FeedbackType, [string, string]> = {
  'correct-liked': ['/images/feedback-cows/like%20correct.png', '/images/feedback-cows/like%20correct%20flip.png'],
  'correct-not-liked': ['/images/feedback-cows/doont%20like%20correct.png', '/images/feedback-cows/doont%20like%20correct%20flip.png'],
  'incorrect-said-no': ['/images/feedback-cows/like%20incorrect.png', '/images/feedback-cows/like%20incorrect%20flip.png'],
  'incorrect-said-yes': ['/images/feedback-cows/dont%20like%20incorrect.png', '/images/feedback-cows/dont%20like%20incorrect%20flip.png'],
};

const MESSAGES: Record<FeedbackType, string> = {
  'correct-liked': 'Cow-rect! Mak likes this photo of a cow!',
  'correct-not-liked': 'Cow-rect! Mak does not like this picture of a cow.',
  'incorrect-said-no':
    'It behooves me that you did not know Mak likes this picture of a cow',
  'incorrect-said-yes': 'No, Mak udderly does not like this picture of a cow',
};

export function FeedbackCow({
  feedbackType,
  onNext,
  onAppeal,
  showAppealButton,
}: FeedbackCowProps) {
  const message = MESSAGES[feedbackType];
  const [imageSrc] = useState(() => {
    const options = FEEDBACK_IMAGES[feedbackType];
    return options[Math.random() < 0.5 ? 0 : 1];
  });
  const [alignRight] = useState(() => Math.random() < 0.5);

  return (
    <div className="feedback-cow" role="dialog" aria-labelledby="feedback-message">
      <div className="feedback-cow__card">
        <div
          className={`feedback-cow__character ${alignRight ? 'feedback-cow__character--right' : 'feedback-cow__character--left'}`}
        >
          <img
            src={imageSrc}
            alt=""
            className="feedback-cow__image"
          />
        </div>
        <div className="feedback-cow__content">
          <p id="feedback-message" className="feedback-cow__message">
            {message}
          </p>
        <div className="feedback-cow__actions">
          <button
            type="button"
            className="feedback-cow__btn feedback-cow__btn--primary"
            onClick={onNext}
          >
            Next Cow
          </button>
          {showAppealButton && onAppeal && (
            <button
              type="button"
              className="feedback-cow__btn feedback-cow__btn--secondary"
              onClick={onAppeal}
            >
              Appeal
            </button>
          )}
        </div>
        </div>
      </div>
    </div>
  );
}
