/**
 * Share appeal text and cow image using Web Share API when available.
 * Opens the native share sheet so the user can send to a contact of their choice.
 * Falls back to copying text to clipboard if Web Share is unavailable.
 */

export type ShareResult = 'shared' | 'copied';

export async function shareAppeal(appealText: string, imageUrl?: string): Promise<ShareResult> {
  const title = 'Appeal to Mak About This Cow';
  const body = `I'm hoofing it over to Mak with an appeal about this cow.\n\n${appealText}`;

  if (navigator.share) {
    try {
      const shareData: ShareData = {
        title,
        text: body,
      };

      if (imageUrl && typeof navigator.canShare === 'function') {
        try {
          const response = await fetch(imageUrl);
          const blob = await response.blob();
          const ext = blob.type?.includes('png') ? 'png' : 'jpg';
          const file = new File([blob], `cow.${ext}`, { type: blob.type || 'image/jpeg' });
          if (navigator.canShare({ ...shareData, files: [file] })) {
            shareData.files = [file];
          }
        } catch {
          // Image fetch failed, share text only
        }
      }

      await navigator.share(shareData);
      return 'shared';
    } catch (err) {
      if ((err as Error).name === 'AbortError') throw err;
      // Fall through to clipboard
    }
  }

  await navigator.clipboard.writeText(`${title}\n\n${body}`);
  return 'copied';
}
