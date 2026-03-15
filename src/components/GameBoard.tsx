import { useState, useCallback } from 'react';
import type { CowCard } from '../types';
import type { FeedbackType } from './FeedbackCow';
import { shuffle } from '../utils/shuffle';
import { shareAppeal } from '../utils/share';
import { CowCardDisplay } from './CowCardDisplay';
import { AnswerButtons } from './AnswerButtons';
import { FeedbackCow } from './FeedbackCow';
import { AppealModal } from './AppealModal';
import { ScoreBoard } from './ScoreBoard';
import { EndScreen } from './EndScreen';
import './GameBoard.css';

type GameBoardProps = {
  initialCards: CowCard[];
};

export function GameBoard({ initialCards }: GameBoardProps) {
  const [deck, setDeck] = useState(() => shuffle(initialCards));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [feedbackVisible, setFeedbackVisible] = useState(false);
  const [appealOpen, setAppealOpen] = useState(false);

  const currentCard = deck[currentIndex];
  const totalCards = deck.length;
  const totalAnswered = answered ? currentIndex + 1 : currentIndex;
  const isGameOver = currentIndex >= totalCards;

  const getFeedbackType = useCallback(
    (card: CowCard, playerSaidLiked: boolean): FeedbackType => {
      const actuallyLiked = card.liked;
      if (playerSaidLiked && actuallyLiked) return 'correct-liked';
      if (!playerSaidLiked && !actuallyLiked) return 'correct-not-liked';
      if (!playerSaidLiked && actuallyLiked) return 'incorrect-said-no';
      return 'incorrect-said-yes';
    },
    []
  );

  const [feedbackType, setFeedbackType] = useState<FeedbackType>('correct-liked');

  const handleAnswer = useCallback(
    (liked: boolean) => {
      if (!currentCard || answered) return;
      setAnswered(true);
      const isCorrect = liked === currentCard.liked;
      setCorrect(isCorrect);
      if (isCorrect) setScore((s) => s + 1);
      setFeedbackType(getFeedbackType(currentCard, liked));
      setFeedbackVisible(true);
    },
    [currentCard, answered, getFeedbackType]
  );

  const handleNext = useCallback(() => {
    setFeedbackVisible(false);
    setAppealOpen(false);
    setAnswered(false);
    setCurrentIndex((i) => i + 1);
  }, []);

  const handleAppealClick = useCallback(() => {
    setFeedbackVisible(false);
    setAppealOpen(true);
  }, []);

  const handleShare = useCallback(
    async (appealText: string) => {
      const imageUrl = currentCard ? `${window.location.origin}${currentCard.imageSrc}` : undefined;
      return shareAppeal(appealText, imageUrl);
    },
    [currentCard]
  );

  const handleReplay = useCallback(() => {
    setDeck(shuffle(initialCards));
    setCurrentIndex(0);
    setScore(0);
      setAnswered(false);
      setFeedbackVisible(false);
    setAppealOpen(false);
  }, [initialCards]);

  if (isGameOver) {
    return (
      <EndScreen
        score={score}
        total={totalCards}
        onReplay={handleReplay}
      />
    );
  }

  return (
    <div className="game-board">
      <ScoreBoard
        score={score}
        totalAnswered={totalAnswered}
        totalCards={totalCards}
      />
      {currentCard && (
        <>
          <CowCardDisplay card={currentCard} />
          <AnswerButtons disabled={answered} onAnswer={handleAnswer} />
          {feedbackVisible && !appealOpen && (
            <FeedbackCow
              feedbackType={feedbackType}
              onNext={handleNext}
              onAppeal={handleAppealClick}
              showAppealButton={!correct}
            />
          )}
          {appealOpen && !correct && (
            <AppealModal
              isOpen={true}
              onShare={handleShare}
              onNextCow={handleNext}
            />
          )}
        </>
      )}
    </div>
  );
}
