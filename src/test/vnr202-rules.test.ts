import { describe, expect, it } from "vitest";

import { GAME_QUESTIONS } from "@/data/game";
import { LESSONS } from "@/data/lessons";
import { IMAGES } from "@/lib/assets";
import { GAME_MAX_SCORE, GAME_NAME, scoreAnswer } from "@/lib/game-scoring";

describe("VNR202 game rules", () => {
  it("has exactly 10 questions", () => {
    expect(GAME_QUESTIONS).toHaveLength(10);
  });

  it("is named Giải mã dấu ấn thời gian", () => {
    expect(GAME_NAME).toBe("Giải mã dấu ấn thời gian");
  });

  it("gives every question 4 ascending timeline slots containing the right year", () => {
    for (const q of GAME_QUESTIONS) {
      expect(q.slotYears).toHaveLength(4);
      expect([...q.slotYears].sort((a, b) => a - b)).toEqual(q.slotYears);
      expect(q.slotYears.filter((y) => y === q.year)).toHaveLength(1);
    }
  });

  it("scores 10 for a correct drop, 7 with a hint, 0 when wrong", () => {
    const q = GAME_QUESTIONS[0]!;
    const wrongYear = q.slotYears.find((y) => y !== q.year)!;
    expect(scoreAnswer(q, q.year, false).points).toBe(10);
    expect(scoreAnswer(q, q.year, true).points).toBe(7);
    expect(scoreAnswer(q, wrongYear, false).points).toBe(0);
    expect(GAME_MAX_SCORE).toBe(100);
  });
});

describe("VNR202 lessons", () => {
  it("has exactly the 5 required topics in order", () => {
    expect(LESSONS.map((l) => l.title)).toEqual([
      "Đại hội đại biểu toàn quốc lần thứ IX (2001)",
      "Đại hội đại biểu toàn quốc lần thứ X (2006)",
      "Chiến lược phát triển kinh tế biển Việt Nam",
      "Sáu giải pháp phát triển kinh tế biển bền vững",
      "Trách nhiệm của sinh viên trong bảo vệ và phát triển biển đảo Việt Nam",
    ]);
  });

  it("only references photos that exist in the project", () => {
    const keys = new Set(Object.keys(IMAGES));
    for (const l of LESSONS) {
      expect(keys.has(l.heroImage)).toBe(true);
      for (const s of l.sections) if (s.image) expect(keys.has(s.image)).toBe(true);
    }
    for (const q of GAME_QUESTIONS) expect(keys.has(q.photo)).toBe(true);
  });
});
