import { useCallback, useEffect, useState } from "react";

export interface GamePlayRecord {
  date: string;
  score: number;
  correct: number;
  total: number;
}

export interface VnrProgress {
  completedLessons: string[];
  answeredCorrect: number;
  answeredTotal: number;
  bestScore: number;
  plays: GamePlayRecord[];
}

const STORAGE_KEY = "vnr202-progress-v1";

const EMPTY: VnrProgress = {
  completedLessons: [],
  answeredCorrect: 0,
  answeredTotal: 0,
  bestScore: 0,
  plays: [],
};

function load(): VnrProgress {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...EMPTY };
    const parsed = JSON.parse(raw) as Partial<VnrProgress>;
    return {
      completedLessons: Array.isArray(parsed.completedLessons) ? parsed.completedLessons : [],
      answeredCorrect: typeof parsed.answeredCorrect === "number" ? parsed.answeredCorrect : 0,
      answeredTotal: typeof parsed.answeredTotal === "number" ? parsed.answeredTotal : 0,
      bestScore: typeof parsed.bestScore === "number" ? parsed.bestScore : 0,
      plays: Array.isArray(parsed.plays) ? parsed.plays.slice(0, 30) : [],
    };
  } catch {
    return { ...EMPTY };
  }
}

function save(progress: VnrProgress) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    window.dispatchEvent(new Event("vnr-progress-updated"));
  } catch {
    // ignore quota errors
  }
}

export function useProgress() {
  // Start empty on both server and client, then read LocalStorage after mount
  // so the first client render matches the server HTML.
  const [progress, setProgress] = useState<VnrProgress>(() => ({ ...EMPTY }));

  useEffect(() => {
    const sync = () => setProgress(load());
    sync();
    window.addEventListener("vnr-progress-updated", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("vnr-progress-updated", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const toggleLessonCompleted = useCallback((slug: string) => {
    setProgress((prev) => {
      const completed = prev.completedLessons.includes(slug)
        ? prev.completedLessons.filter((s) => s !== slug)
        : [...prev.completedLessons, slug];
      const next = { ...prev, completedLessons: completed };
      save(next);
      return next;
    });
  }, []);

  const recordGameResult = useCallback(
    (result: { score: number; correct: number; total: number }) => {
      setProgress((prev) => {
        const record: GamePlayRecord = {
          date: new Date().toISOString(),
          score: result.score,
          correct: result.correct,
          total: result.total,
        };
        const next = {
          ...prev,
          answeredCorrect: prev.answeredCorrect + result.correct,
          answeredTotal: prev.answeredTotal + result.total,
          bestScore: Math.max(prev.bestScore, result.score),
          plays: [record, ...prev.plays].slice(0, 30),
        };
        save(next);
        return next;
      });
    },
    [],
  );

  return { progress, toggleLessonCompleted, recordGameResult };
}
