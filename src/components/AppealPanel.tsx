import { useState } from 'react';
import './AppealPanel.css';

const MAX_CHARS = 500;

type AppealPanelProps = {
  onShare: (appealText: string) => Promise<'shared' | 'copied'>;
  onClose?: () => void;
};

export function AppealPanel({ onShare, onClose }: AppealPanelProps) {
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

  return (
    <div className="appeal-panel">
      <label htmlFor="appeal-text" className="appeal-panel__label">
        Make Your Case to Mak
      </label>
      <p className="appeal-panel__helper">
        Explain why Mak should reconsider this cow.
      </p>
      <textarea
        id="appeal-text"
        className="appeal-panel__textarea"
        value={appealText}
        onChange={(e) => setAppealText(e.target.value.slice(0, MAX_CHARS))}
        placeholder="Type your appeal here..."
        maxLength={MAX_CHARS}
      />
      <div className="appeal-panel__char-count">
        {appealText.length} / {MAX_CHARS}
      </div>
      <div className="appeal-panel__actions">
        <button
          type="button"
          className="appeal-panel__btn appeal-panel__btn--share"
          onClick={handleShare}
        >
          Share
        </button>
        {onClose && (
          <button
            type="button"
            className="appeal-panel__btn appeal-panel__btn--cancel"
            onClick={onClose}
          >
            Close
          </button>
        )}
      </div>
      {toast && <p className="appeal-panel__toast">{toast}</p>}
    </div>
  );
}
