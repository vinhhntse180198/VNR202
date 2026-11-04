import { describe, expect, it } from "vitest";
import {
  HISTORY_EVENTS,
  LEARNING_PARTS,
  MARITIME_TOPICS,
  eventSections,
  eventsForLesson,
  getHistoryEvent,
} from "@/data/history-timeline";
import { IMAGES } from "@/lib/assets";
import { MARINE_PLACES } from "@/data/marine-map";
describe("Learning exhibition rules", () => {
  it("places maritime applications after Congress IX and X", () => {
    expect(LEARNING_PARTS).toEqual(["dai-hoi-ix", "dai-hoi-x", "kinh-te-bien"]);
  });
  it("orders Congress IX milestones chronologically", () => {
    expect(eventsForLesson("dai-hoi-ix").map((e) => e.date)).toEqual([
      "19–22/04/2001",
      "24/09/2001",
      "12/03/2003",
      "26/03/2004",
      "2001–2005",
    ]);
  });
  it("orders Congress X milestones chronologically including youth before intellectuals", () => {
    expect(eventsForLesson("dai-hoi-x").map((e) => e.date)).toEqual([
      "18–25/04/2006",
      "21/08/2006",
      "11/01/2007",
      "05/02/2007",
      "09/02/2007",
      "30/07/2007",
      "25/07/2008",
      "06/08/2008",
      "2006–2010",
    ]);
  });
  it("resolves every event to existing content and valid image keys", () => {
    expect(new Set(HISTORY_EVENTS.map((e) => e.id)).size).toBe(HISTORY_EVENTS.length);
    for (const event of HISTORY_EVENTS) {
      expect(getHistoryEvent(event.id)).toBe(event);
      expect(eventSections(event).length).toBeGreaterThan(0);
      expect(event.summary.length).toBeGreaterThan(0);
      if (event.image) expect(IMAGES[event.image]).toBeDefined();
    }
    expect(getHistoryEvent("missing")).toBeUndefined();
  });
  it("links the 2007 marine strategy to practical applications", () => {
    expect(getHistoryEvent("x-chien-luoc-bien")?.maritime).toBe(true);
    expect(MARITIME_TOPICS).toHaveLength(6);
    expect(MARITIME_TOPICS[1]?.date).toBe("09/02/2007 · Nghị quyết 09-NQ/TW");
    expect(MARITIME_TOPICS[2]?.date).toBe("22/10/2018 · Nghị quyết 36-NQ/TW");
  });
  it("provides existing-source marine places and photos", () => {
    expect(MARINE_PLACES.map((p) => p.name)).toEqual([
      "Hải Phòng",
      "Hạ Long",
      "Đà Nẵng",
      "Nha Trang",
      "Phú Quốc",
      "Cà Mau",
    ]);
    for (const place of MARINE_PLACES) expect(IMAGES[place.image]).toBeDefined();
  });
});
