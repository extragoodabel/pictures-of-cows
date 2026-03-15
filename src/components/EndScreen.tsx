import { useMemo } from 'react';
import {
  getGrade,
  getPerformanceTier,
  getResultMessage,
} from '../utils/grading';
import './EndScreen.css';

const TROPHY_COWS: Record<string, string> = {
  'A+': '/images/trophy-cows/A.PNG',
  A: '/images/trophy-cows/A.PNG',
  B: '/images/trophy-cows/B.PNG',
  C: '/images/trophy-cows/C.PNG',
  D: '/images/trophy-cows/D-F.PNG',
  F: '/images/trophy-cows/D-F.PNG',
};

const HEADLINES = [
  'The Final Udder',
  "Mak's Cow Judgment Is In",
  'Report Card from the Pasture',
  'Udderly Complete!',
];

type EndScreenProps = {
  score: number;
  total: number;
  onReplay: () => void;
};

function getHeadline(seed: number): string {
  return HEADLINES[seed % HEADLINES.length];
}

export function EndScreen({ score, total, onReplay }: EndScreenProps) {
  const { grade, resultMessage, headline } = useMemo(() => {
    const pct = total > 0 ? Math.round((score / total) * 100) : 0;
    const tier = getPerformanceTier(pct);
    return {
      grade: getGrade(pct),
      resultMessage: getResultMessage(tier),
      headline: getHeadline(score + total),
    };
  }, [score, total]);

  const trophyCowSrc = TROPHY_COWS[grade];

  return (
    <div className="end-screen">
      <div className="end-screen__card">
        <h2 className="end-screen__headline">{headline}</h2>
        <p className="end-screen__score">
          You got {score} out of {total} cow-rect
        </p>
        <div className="end-screen__grade" aria-label={`Grade: ${grade}`}>
          {grade}
        </div>
        <div className="end-screen__cow">
          <img
            src={trophyCowSrc}
            alt=""
            className="end-screen__trophy-cow"
          />
        </div>
        <div className="end-screen__speech-bubble">
          <p className="end-screen__result-message">{resultMessage}</p>
        </div>
        <button
          type="button"
          className="end-screen__btn"
          onClick={onReplay}
        >
          Play A-moo-gain
        </button>
      </div>
    </div>
  );
}
