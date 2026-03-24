declare global {
  interface Window {
    ym?: (...args: any[]) => void;
  }
}

const METRIKA_ID = 90522062;

export function reachGoal(goal: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && typeof window.ym === 'function') {
    window.ym(METRIKA_ID, 'reachGoal', goal, params);
  }
}