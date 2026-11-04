import { describe, expect, it } from "vitest";
import { TIMELINE_MILESTONES, ALL_ANCHORS } from "@/data/presentation-timeline";
import { EXHIBITION_NAV } from "@/data/exhibition-navigation";

describe("VNR202 Learning Presentation & Timeline Requirements", () => {
  it("maintains the exact 5 top-level navigation items", () => {
    expect(EXHIBITION_NAV.map((n) => n.label)).toEqual([
      "Trang chủ",
      "Học tập",
      "Kinh tế biển",
      "Trò chơi",
      "Kết luận",
    ]);
  });

  it("has exactly the 6 required historical timeline milestones in chronological order", () => {
    expect(TIMELINE_MILESTONES.map((m) => m.year)).toEqual([
      "2001",
      "2001–2005",
      "2006",
      "2006–2010",
      "2007",
      "2010",
    ]);

    expect(TIMELINE_MILESTONES.map((m) => m.title)).toEqual([
      "Đại hội đại biểu toàn quốc lần thứ IX",
      "Quá trình triển khai Nghị quyết Đại hội IX",
      "Đại hội đại biểu toàn quốc lần thứ X",
      "Quá trình triển khai Nghị quyết Đại hội X",
      "Nghị quyết 09-NQ/TW về Chiến lược biển Việt Nam đến năm 2020",
      "Tổng kết giai đoạn thực hiện Nghị quyết Đại hội X",
    ]);
  });

  it("provides valid unique anchor IDs for smooth scrolling navigation", () => {
    const ids = ALL_ANCHORS.map((m) => m.id);
    expect(new Set(ids).size).toBe(ids.length);
    expect(ids).toContain("moc-2001");
    expect(ids).toContain("moc-2001-2005");
    expect(ids).toContain("moc-2006");
    expect(ids).toContain("moc-2006-2010");
    expect(ids).toContain("moc-2007");
    expect(ids).toContain("moc-2010");
    expect(ids).toContain("so-sanh-danh-gia");
  });

  it("associates the 2007 milestone with marine strategy and Congress X implementation", () => {
    const m2007 = TIMELINE_MILESTONES.find((m) => m.year === "2007");
    expect(m2007).toBeDefined();
    expect(m2007?.category).toBe("sea");
    expect(
      m2007?.keyPoints.some((k) => k.includes("Nghị quyết 09-NQ/TW") || k.includes("NQ 09-NQ/TW")),
    ).toBe(true);
    expect(m2007?.keyPoints.some((k) => k.includes("WTO"))).toBe(true);
  });
});
