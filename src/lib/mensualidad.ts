// Illustrative only — NOT a real financial calculation. No rates involved.
export const DOWN_SHARE = { bajo: 0.1, medio: 0.25, alto: 0.4 } as const;

export function illustrativeMonthly(
  price: number,
  down: keyof typeof DOWN_SHARE,
  months: number,
): number {
  const pending = price * (1 - DOWN_SHARE[down]);
  // Simple educational factor: longer periods add to the total paid.
  const total = pending * (1 + months / 150);
  return Math.round(total / months / 100) * 100;
}
