import { useEffect, useState, useCallback } from "react";
import { ALL_ANCHORS } from "@/data/presentation-timeline";

/** Hook quản lý mốc đang hoạt động và tiến trình cuộn của timeline */
export function useTimelineTracker() {
  const [activeId, setActiveId] = useState<string>("moc-2001");
  const [progress, setProgress] = useState<number>(0);

  const calculateState = useCallback(() => {
    const ids = ALL_ANCHORS.map((m) => m.id);
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;
    const triggerPoint = scrollY + viewportHeight * 0.35;

    let current = ids[0] ?? "moc-2001";
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) {
        const top = el.offsetTop;
        if (triggerPoint >= top) {
          current = id;
        }
      }
    }
    setActiveId(current);

    // Tính % tiến độ nối giữa mốc đầu tiên và mốc cuối cùng
    const firstEl = document.getElementById(ids[0]!);
    const lastEl = document.getElementById(ids[ids.length - 1]!);
    if (firstEl && lastEl) {
      const start = firstEl.offsetTop - 120;
      const end = lastEl.offsetTop + lastEl.offsetHeight - viewportHeight * 0.5;
      const total = Math.max(end - start, 1);
      const currentPos = scrollY - start;
      const p = Math.min(Math.max(currentPos / total, 0), 1);
      setProgress(p);
    }
  }, []);

  useEffect(() => {
    calculateState();
    window.addEventListener("scroll", calculateState, { passive: true });
    window.addEventListener("resize", calculateState);
    return () => {
      window.removeEventListener("scroll", calculateState);
      window.removeEventListener("resize", calculateState);
    };
  }, [calculateState]);

  return { activeId, progress };
}
