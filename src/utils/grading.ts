export type PerformanceTier = 'excellent' | 'good' | 'medium' | 'poor';

export function getGrade(percentage: number): string {
  if (percentage >= 95) return 'A+';
  if (percentage >= 90) return 'A';
  if (percentage >= 80) return 'B';
  if (percentage >= 70) return 'C';
  if (percentage >= 60) return 'D';
  return 'F';
}

export function getPerformanceTier(percentage: number): PerformanceTier {
  if (percentage >= 90) return 'excellent';
  if (percentage >= 80) return 'good';
  if (percentage >= 70) return 'medium';
  return 'poor';
}

const EXCELLENT_MESSAGES = [
  "Un-bull-ievable! You really know Mak's herd.",
  "You udderly crushed it. Mak would trust your cow judgment.",
  'Grade A pasture instincts. A-moo-zing!',
];

const GOOD_MESSAGES = [
  "Strong work. You know your way around Mak-approved cows.",
  'A respectable showing from the field. No bull!',
  "You've got solid herd awareness. Cow-gratulations!",
];

const MEDIUM_MESSAGES = [
  'Not bad. Some hits, some misses. A mixed pasture.',
  "You're grazing in the right direction. Keep moo-ving!",
  'Promising instincts, but a few cows got past you.',
];

const POOR_MESSAGES = [
  'This was a moooving learning experience.',
  'Mak may need to supervise your cow picks more closely.',
  'Back to the barn for a little more study. Don\'t have a cow!',
];

export function getResultMessage(tier: PerformanceTier): string {
  const messages =
    tier === 'excellent'
      ? EXCELLENT_MESSAGES
      : tier === 'good'
        ? GOOD_MESSAGES
        : tier === 'medium'
          ? MEDIUM_MESSAGES
          : POOR_MESSAGES;
  return messages[Math.floor(Math.random() * messages.length)];
}
