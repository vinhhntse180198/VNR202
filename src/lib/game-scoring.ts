import { GAME_POINTS_FULL, GAME_POINTS_HINT, GAME_QUESTIONS, type GameQuestion } from "@/data/game";

export const GAME_NAME = "Giải mã dấu ấn thời gian";
export const GAME_MAX_SCORE = GAME_QUESTIONS.length * GAME_POINTS_FULL;

export interface AnswerRecord {
  questionId: string;
  droppedYear: number;
  correct: boolean;
  usedHint: boolean;
  points: number;
}

/** Đúng không dùng gợi ý: 10 điểm · Đúng có dùng gợi ý: 7 điểm · Sai: 0 điểm */
export function scoreAnswer(
  question: GameQuestion,
  droppedYear: number,
  usedHint: boolean,
): AnswerRecord {
  const correct = droppedYear === question.year;
  return {
    questionId: question.id,
    droppedYear,
    correct,
    usedHint,
    points: correct ? (usedHint ? GAME_POINTS_HINT : GAME_POINTS_FULL) : 0,
  };
}

export function totalScore(answers: AnswerRecord[]) {
  return answers.reduce((sum, a) => sum + a.points, 0);
}

export function rankFor(score: number) {
  const ratio = score / GAME_MAX_SCORE;
  if (ratio >= 0.9) return "Nhà sử học xuất sắc";
  if (ratio >= 0.7) return "Người giữ dấu ấn thời gian";
  if (ratio >= 0.5) return "Người khám phá lịch sử";
  return "Người tập sự";
}
