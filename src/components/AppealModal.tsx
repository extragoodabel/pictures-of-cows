import { useState, useEffect, useCallback } from 'react';
import './AppealModal.css';

const MAX_CHARS = 500;

type AppealModalProps = {
  isOpen: boolean;
  onShare: (appealText: string) => Promise<'shared' | 'copied'>;
  onNextCow: () => void;
};

export function AppealModal({
  isOpen,
  onShare,
  onNextCow,
}: AppealModalProps) {
  const [appealText, setAppealText] = useState('');
  const [toast, setToast] = useState<string | null>(null);

  const handleShare = async () => {
    try {
      const result = await onShare(appealText);
      setToast(result === 'shared' ? 'Shared!' : 'Copied to clipboard!');
    } catch (err) {
      setToast('Something went wrong. Try again.');
    }
  };

  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onNextCow();
      }
    },
    [onNextCow]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleEscape]);

  if (!isOpen) return null;

  return (
    <div
      className="appeal-modal__backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="appeal-modal-title"
    >
      <div className="appeal-modal">
        <h2 id="appeal-modal-title" className="appeal-modal__title">
          Make Your Case to Mak
        </h2>
        <p className="appeal-modal__helper">
          Explain why Mak should re-herd this cow. No bull!
        </p>
        <textarea
          id="appeal-modal-text"
          className="appeal-modal__textarea"
          value={appealText}
          onChange={(e) => setAppealText(e.target.value.slice(0, MAX_CHARS))}
          placeholder="Type your appeal here..."
          maxLength={MAX_CHARS}
          autoFocus
        />
        <div className="appeal-modal__char-count">
          {appealText.length} / {MAX_CHARS}
        </div>
        <div className="appeal-modal__actions">
          <button
            type="button"
            className="appeal-modal__btn appeal-modal__btn--share"
            onClick={handleShare}
          >
            Share
          </button>
        </div>
        {toast && <p className="appeal-modal__toast">{toast}</p>}
        <button
          type="button"
          className="appeal-modal__btn appeal-modal__btn--primary"
          onClick={onNextCow}
        >
          Next Cow
        </button>
      </div>
    </div>
  );
}
