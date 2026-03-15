import './AnswerButtons.css';

type AnswerButtonsProps = {
  disabled: boolean;
  onAnswer: (liked: boolean) => void;
};

export function AnswerButtons({ disabled, onAnswer }: AnswerButtonsProps) {
  return (
    <div className="answer-buttons">
      <button
        type="button"
        className="answer-btn answer-btn--yes"
        onClick={() => onAnswer(true)}
        disabled={disabled}
      >
        Yes, Mak Likes It
      </button>
      <button
        type="button"
        className="answer-btn answer-btn--no"
        onClick={() => onAnswer(false)}
        disabled={disabled}
      >
        No, Not Mak-Approved
      </button>
    </div>
  );
}
