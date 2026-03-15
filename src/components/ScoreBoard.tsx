import './ScoreBoard.css';

type ScoreBoardProps = {
  score: number;
  totalAnswered: number;
  totalCards: number;
};

export function ScoreBoard({ score, totalAnswered, totalCards }: ScoreBoardProps) {
  return (
    <div className="score-board" role="status" aria-live="polite">
      <span className="score-board__score">
        Score: {score} / {totalAnswered}
      </span>
      <span className="score-board__progress">
        Cow {Math.min(totalAnswered + 1, totalCards)} of {totalCards}
      </span>
    </div>
  );
}
