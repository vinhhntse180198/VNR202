import { CalendarDays, ChevronRight, ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { TIMELINE_MILESTONES, ALL_ANCHORS, scrollToMilestone } from "@/data/presentation-timeline";
import { useTimelineTracker } from "@/hooks/use-timeline-tracker";

/** Section B: Bảng Timeline Trình Tự Lịch Sử 2001–2010 */
export function InteractiveTimelineBoard() {
  const { activeId } = useTimelineTracker();

  return (
    <section
      id="timeline-2001-2010"
      className="scroll-mt-24 py-16 md:py-24 border-b border-border bg-card/40"
    >
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-10 border-b border-border">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep dark:text-gold">
              <CalendarDays className="h-3.5 w-3.5" /> Phần B · Trình tự lịch sử
            </div>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-foreground md:text-5xl">
              Dòng thời gian lịch sử <span className="text-history">2001 – 2010</span>
            </h2>
            <p className="mt-3 max-w-2xl text-base text-muted-foreground leading-relaxed">
              Tổng quan 6 dấu mốc trọng yếu từ Đại hội IX đến Đại hội X và bước ngoặt Chiến lược
              biển. Nhấn vào mốc để cuộn trực tiếp tới nội dung thuyết trình.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <span className="flex h-2.5 w-2.5 rounded-full bg-history animate-pulse" />
            <span>Mốc đang xem được tự động làm nổi bật khi cuộn</span>
          </div>
        </div>

        {/* Grid 6 mốc lịch sử */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TIMELINE_MILESTONES.map((m, index) => {
            const isActive = activeId === m.id;
            const categoryBadge =
              m.category === "sea"
                ? "bg-sea/15 text-sea-deep border-sea/30"
                : m.category === "ix"
                  ? "bg-history/10 text-history border-history/25"
                  : "bg-gold/20 text-gold-deep border-gold/40";

            return (
              <div
                key={m.id}
                className={cn(
                  "group relative flex flex-col justify-between rounded-2xl border p-6 transition-all duration-300",
                  isActive
                    ? "border-history bg-card shadow-lift ring-2 ring-gold/40 -translate-y-1"
                    : "border-border bg-card/80 hover:border-gold/60 hover:bg-card hover:shadow-card hover:-translate-y-0.5",
                )}
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-display text-2xl font-bold text-history tracking-tight">
                      {m.year}
                    </span>
                    <span
                      className={cn(
                        "text-[11px] font-semibold px-2.5 py-0.5 rounded-full border",
                        categoryBadge,
                      )}
                    >
                      {m.category === "sea"
                        ? "Biển đảo"
                        : m.category === "ix"
                          ? "Đại hội IX"
                          : "Đại hội X"}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-xl font-bold leading-snug text-foreground group-hover:text-history transition-colors">
                    {m.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.summary}</p>

                  <ul className="mt-4 space-y-2 border-t border-border/60 pt-3">
                    {m.keyPoints.slice(0, 2).map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs leading-relaxed text-foreground/85"
                      >
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-border/70 flex items-center justify-between">
                  <span className="text-xs font-mono font-medium text-muted-foreground">
                    Mốc 0{index + 1} / 06
                  </span>
                  <button
                    type="button"
                    onClick={() => scrollToMilestone(m.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-history hover:text-gold-deep transition-colors cursor-pointer"
                  >
                    Xem chi tiết{" "}
                    <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/** Sticky Vertical Timeline trên Desktop */
export function StickyDesktopTimelineRail() {
  const { activeId, progress } = useTimelineTracker();

  return (
    <aside
      aria-label="Điều hướng mốc lịch sử"
      className="hidden lg:block sticky top-20 z-20 w-72 xl:w-80 shrink-0 self-start max-h-[calc(100vh-6rem)] overflow-y-auto pr-4 py-2"
    >
      <div className="rounded-2xl border border-border bg-card/90 backdrop-blur-md p-5 shadow-card">
        <div className="flex items-center justify-between pb-4 border-b border-border">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-history">
              Trình tự thuyết trình
            </p>
            <p className="font-display text-base font-bold text-foreground">
              Tiến trình 2001 – 2010
            </p>
          </div>
          <span className="text-xs font-mono font-bold text-gold-deep">
            {Math.round(progress * 100)}%
          </span>
        </div>

        {/* Thanh tiến độ tổng quan */}
        <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-muted">
          <div
            className="h-full bg-gradient-to-r from-gold via-history to-gold-deep transition-all duration-300"
            style={{ width: `${progress * 100}%` }}
          />
        </div>

        {/* Danh sách mốc có trục nối dọc */}
        <ol className="relative mt-6 space-y-4 before:absolute before:bottom-3 before:left-[15px] before:top-3 before:w-[2px] before:bg-border">
          {/* Lớp line tiến trình động */}
          <div
            className="absolute left-[15px] top-3 w-[2px] bg-gradient-to-b from-gold via-history to-gold-deep transition-all duration-300"
            style={{ height: `${Math.min(progress * 100, 100)}%` }}
          />

          {ALL_ANCHORS.map((m) => {
            const isActive = activeId === m.id;
            return (
              <li key={m.id} className="relative pl-9">
                {/* Nút điểm nối */}
                <button
                  type="button"
                  onClick={() => scrollToMilestone(m.id)}
                  className="group flex flex-col items-start text-left w-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-history rounded-lg p-1 -ml-1 transition-colors"
                >
                  <span
                    className={cn(
                      "absolute left-2 top-1.5 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border-2 transition-all duration-300",
                      isActive
                        ? "border-history bg-history ring-4 ring-gold/40 scale-125"
                        : "border-border bg-background group-hover:border-gold group-hover:scale-110",
                    )}
                  >
                    <span
                      className={cn(
                        "h-1.5 w-1.5 rounded-full transition-colors",
                        isActive ? "bg-white" : "bg-transparent group-hover:bg-gold",
                      )}
                    />
                  </span>

                  <span className="flex items-center gap-2">
                    <span
                      className={cn(
                        "font-display text-xs font-bold transition-colors",
                        isActive
                          ? "text-history text-sm"
                          : "text-muted-foreground group-hover:text-foreground",
                      )}
                    >
                      {m.year}
                    </span>
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-history animate-ping" />
                    )}
                  </span>

                  <span
                    className={cn(
                      "text-xs leading-snug transition-colors line-clamp-1",
                      isActive
                        ? "font-semibold text-foreground"
                        : "text-muted-foreground group-hover:text-foreground",
                    )}
                  >
                    {m.shortLabel}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>

        <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-[11px] text-muted-foreground">
          <span>Bấm mốc để chuyển cảnh</span>
          <ChevronRight className="h-3 w-3 text-gold" />
        </div>
      </div>
    </aside>
  );
}

/** Sticky Horizontal Timeline trên Mobile */
export function StickyMobileTimeline() {
  const { activeId, progress } = useTimelineTracker();

  return (
    <nav
      aria-label="Điều hướng mốc trên di động"
      className="lg:hidden sticky top-16 z-30 border-b border-border bg-background/95 backdrop-blur-md px-3 py-2.5 shadow-xs"
    >
      <div className="flex items-center justify-between pb-1.5 px-1 text-[11px] text-muted-foreground">
        <span className="font-semibold text-history uppercase tracking-wider">
          Mốc lịch sử 2001–2010
        </span>
        <span className="font-mono">{Math.round(progress * 100)}%</span>
      </div>

      {/* Thanh tiến độ mỏng */}
      <div className="h-1 w-full rounded-full bg-muted overflow-hidden mb-2">
        <div
          className="h-full bg-gradient-to-r from-gold via-history to-gold-deep transition-all duration-300"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar scroll-smooth py-0.5">
        {ALL_ANCHORS.map((m) => {
          const isActive = activeId === m.id;
          return (
            <button
              key={m.id}
              type="button"
              onClick={() => scrollToMilestone(m.id)}
              className={cn(
                "shrink-0 rounded-full px-3 py-1 text-xs font-semibold transition-all duration-200 cursor-pointer",
                isActive
                  ? "bg-history text-primary-foreground shadow-xs ring-2 ring-gold/40 scale-105"
                  : "bg-muted text-muted-foreground hover:bg-accent hover:text-foreground",
              )}
            >
              <span>{m.year}</span>
              <span className="ml-1 opacity-80 hidden sm:inline">· {m.shortLabel}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
