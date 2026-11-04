import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Expand,
  LayoutGrid,
  Minimize,
  Quote,
  X as Close,
} from "lucide-react";

import { KnowledgeQuiz } from "@/components/KnowledgeQuiz";
import { MarineMap } from "@/components/MarineMap";
import { HISTORY_QUIZ, MARINE_QUIZ } from "@/data/exhibition-quizzes";
import { flatten, type DeckPart, type Slide } from "@/data/presentation";
import { img } from "@/lib/assets";
import { cn } from "@/lib/utils";

interface DeckProps {
  parts: DeckPart[];
  index: number;
  onIndex: (index: number) => void;
  theme: "history" | "maritime";
  /** Thanh điều hướng cuối bài (sang trang khác) */
  ending?: ReactNode;
}

export function Deck({ parts, index, onIndex, theme, ending }: DeckProps) {
  const slides = flatten(parts);
  const total = slides.length;
  const current = Math.min(Math.max(index, 0), total - 1);
  const { slide, partIndex } = slides[current] ?? slides[0]!;
  const rootRef = useRef<HTMLDivElement>(null);
  const [overview, setOverview] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

  const go = useCallback(
    (i: number) => onIndex(Math.min(Math.max(i, 0), total - 1)),
    [onIndex, total],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("input, textarea, button[role='radio'], [contenteditable]")) return;
      if (e.key === "ArrowRight" || e.key === "PageDown" || (e.key === " " && fullscreen)) {
        e.preventDefault();
        go(current + 1);
      }
      if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        go(current - 1);
      }
      if (e.key === "Escape") setOverview(false);
      if (e.key.toLowerCase() === "g") setOverview((v) => !v);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current, go, fullscreen]);

  useEffect(() => {
    const onChange = () => setFullscreen(document.fullscreenElement === rootRef.current);
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  const touchX = useRef<number | null>(null);
  const toggleFullscreen = () => {
    if (document.fullscreenElement) void document.exitFullscreen();
    else void rootRef.current?.requestFullscreen?.();
  };

  const firstOfPart = (p: number) => slides.findIndex((s) => s.partIndex === p);

  return (
    <div
      ref={rootRef}
      className={cn(
        "deck",
        theme === "maritime" ? "deck-maritime" : "deck-history",
        fullscreen && "deck-fullscreen",
      )}
    >
      {/* Mạch thuyết trình */}
      <div className="deck-rail">
        <nav
          aria-label="Các phần của bài thuyết trình"
          className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto px-4 py-3"
        >
          {parts.map((part, p) => (
            <button
              key={part.id}
              type="button"
              onClick={() => go(firstOfPart(p))}
              aria-current={p === partIndex ? "step" : undefined}
              className="deck-part"
            >
              <span className="deck-part-label">{part.label}</span>
              <span className="whitespace-nowrap">{part.title}</span>
            </button>
          ))}
          <div className="ml-auto flex shrink-0 items-center gap-1">
            <button
              type="button"
              onClick={() => setOverview(true)}
              className="deck-icon"
              aria-label="Xem tổng quan các trang (G)"
            >
              <LayoutGrid className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={toggleFullscreen}
              className="deck-icon"
              aria-label={fullscreen ? "Thoát toàn màn hình" : "Trình chiếu toàn màn hình"}
            >
              {fullscreen ? <Minimize className="h-4 w-4" /> : <Expand className="h-4 w-4" />}
            </button>
          </div>
        </nav>
        <div
          className="deck-progress"
          style={{ ["--deck-p" as string]: `${((current + 1) / total) * 100}%` }}
        />
      </div>

      {/* Sân khấu */}
      <section
        aria-live="polite"
        aria-label={`Trang ${current + 1} trên ${total}: ${slide.title}`}
        className="deck-stage"
        onTouchStart={(e) => (touchX.current = e.touches[0]?.clientX ?? null)}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = (e.changedTouches[0]?.clientX ?? touchX.current) - touchX.current;
          if (Math.abs(dx) > 60) go(current + (dx < 0 ? 1 : -1));
          touchX.current = null;
        }}
      >
        <div key={slide.id} className="deck-slide mx-auto w-full max-w-7xl px-5 md:px-10">
          <SlideView slide={slide} />
        </div>
      </section>

      {/* Điều khiển */}
      <div className="deck-controls">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3">
          <button
            type="button"
            onClick={() => go(current - 1)}
            disabled={current === 0}
            className="deck-btn"
          >
            <ArrowLeft className="h-4 w-4" /> <span className="hidden sm:inline">Quay lại</span>
          </button>
          <p className="text-center text-xs text-deck-muted">
            <span className="font-semibold text-deck-foreground">{current + 1}</span> / {total}
            <span className="hidden md:inline">
              {" "}
              · {parts[partIndex]?.title} · phím ← → để chuyển
            </span>
          </p>
          {current < total - 1 ? (
            <button
              type="button"
              onClick={() => go(current + 1)}
              className="deck-btn deck-btn-primary"
            >
              <span className="hidden sm:inline">Tiếp tục</span> <ArrowRight className="h-4 w-4" />
            </button>
          ) : (
            (ending ?? <span />)
          )}
        </div>
      </div>

      {overview && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Tổng quan bài thuyết trình"
          className="deck-overview"
        >
          <div className="mx-auto max-w-7xl px-5 py-8">
            <div className="flex items-center justify-between">
              <p className="font-display text-2xl font-bold">Tổng quan</p>
              <button
                type="button"
                onClick={() => setOverview(false)}
                className="deck-icon"
                aria-label="Đóng"
              >
                <Close className="h-5 w-5" />
              </button>
            </div>
            {parts.map((part, p) => (
              <div key={part.id} className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-deck-accent">
                  Phần {part.label} · {part.title}
                </p>
                <div className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-5">
                  {slides.map((s, i) =>
                    s.partIndex !== p ? null : (
                      <button
                        key={s.slide.id}
                        type="button"
                        onClick={() => {
                          go(i);
                          setOverview(false);
                        }}
                        aria-current={i === current ? "true" : undefined}
                        className="deck-thumb"
                      >
                        <span className="text-xs text-deck-muted">{i + 1}</span>
                        <span className="mt-1 line-clamp-3 text-sm font-semibold leading-snug">
                          {s.slide.title}
                        </span>
                      </button>
                    ),
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function Kicker({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-deck-accent">{children}</p>
  );
}

function SlideView({ slide }: { slide: Slide }) {
  switch (slide.kind) {
    case "cover": {
      const photo = img(slide.image ?? "hero_halong");
      return (
        <div className="deck-cover">
          <img
            src={photo.url}
            alt={photo.alt}
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />
          <div className="hero-overlay absolute inset-0 -z-10" />
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-gold">
            {slide.kicker}
          </p>
          <h2 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.08] text-primary-foreground md:text-6xl">
            {slide.title}
          </h2>
          {slide.subtitle && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/85">
              {slide.subtitle}
            </p>
          )}
        </div>
      );
    }
    case "content":
      return <ContentSlide slide={slide} />;
    case "timeline":
      return (
        <div>
          <Kicker>{slide.kicker}</Kicker>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
            {slide.title}
          </h2>
          <ol className="deck-timeline mt-12">
            {slide.milestones?.map((m, i) => (
              <li
                key={m.date + i}
                className="deck-timeline-item"
                style={{ animationDelay: `${i * 90}ms` }}
              >
                <span className="deck-timeline-dot" />
                <p className="font-display text-xl font-bold text-deck-accent">{m.date}</p>
                <p className="mt-2 text-sm leading-relaxed">{m.text}</p>
              </li>
            ))}
          </ol>
        </div>
      );
    case "facts":
      return (
        <div>
          <Kicker>{slide.kicker}</Kicker>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
            {slide.title}
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {slide.facts?.map((f, i) => (
              <div
                key={f}
                className="deck-card deck-rise"
                style={{ animationDelay: `${i * 90}ms` }}
              >
                <p className="font-display text-4xl font-bold text-deck-accent">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 text-lg leading-relaxed">{f}</p>
              </div>
            ))}
          </div>
        </div>
      );
    case "compare":
      return (
        <div>
          <Kicker>{slide.kicker}</Kicker>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
            {slide.title}
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {slide.columns?.map((c) => {
              const photo = img(c.image);
              return (
                <div key={c.title} className="deck-card overflow-hidden p-0">
                  <img
                    src={photo.url}
                    alt={photo.alt}
                    loading="lazy"
                    className="aspect-[16/7] w-full object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-display text-2xl font-bold">{c.title}</h3>
                    <p className="mt-2 text-sm italic text-deck-muted">{c.subtitle}</p>
                    <ul className="mt-5 space-y-3">
                      {c.facts.map((f) => (
                        <li key={f} className="deck-bullet">
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    case "map":
      return (
        <div>
          <Kicker>{slide.kicker}</Kicker>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
            {slide.title}
          </h2>
          <MarineMap />
        </div>
      );
    case "quiz":
      return (
        <div className="mx-auto max-w-4xl">
          <Kicker>{slide.kicker}</Kicker>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
            {slide.title}
          </h2>
          <KnowledgeQuiz questions={slide.quiz === "marine" ? MARINE_QUIZ : HISTORY_QUIZ} />
        </div>
      );
    case "message": {
      const photo = img(slide.image ?? "hero_halong");
      return (
        <div className="deck-cover items-center text-center">
          <img
            src={photo.url}
            alt={photo.alt}
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />
          <div className="hero-overlay absolute inset-0 -z-10" />
          <Quote className="mx-auto h-10 w-10 text-gold" />
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            {slide.kicker}
          </p>
          <h2 className="mx-auto mt-6 max-w-4xl font-display text-3xl font-bold leading-snug text-primary-foreground md:text-5xl">
            {slide.title}
          </h2>
        </div>
      );
    }
  }
}

function ContentSlide({ slide }: { slide: Slide }) {
  const s = slide.section;
  if (!s) return null;
  const photo = s.image ? img(s.image) : null;
  const longText = (s.paragraphs?.join(" ").length ?? 0) > 700;
  return (
    <div className={cn("grid items-start gap-10", photo && "lg:grid-cols-[1.15fr_1fr]")}>
      <div>
        <Kicker>{slide.kicker}</Kicker>
        <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-[2.75rem]">
          {slide.title}
        </h2>
        <div className={cn("mt-6 space-y-4 leading-relaxed", longText ? "text-base" : "text-lg")}>
          {s.paragraphs?.map((p) => (
            <p key={p.slice(0, 50)}>{p}</p>
          ))}
        </div>
        {s.bullets && (
          <ul className={cn("mt-6 grid gap-3", !photo && s.bullets.length > 3 && "md:grid-cols-2")}>
            {s.bullets.map((b, i) => (
              <li
                key={b}
                className="deck-point deck-rise"
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <span className="deck-point-n">{i + 1}</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      {(photo || s.note) && (
        <div className="space-y-5">
          {photo && (
            <figure className="deck-figure">
              <img
                src={photo.url}
                alt={photo.alt}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              {s.imageCaption && (
                <figcaption className="px-4 py-3 text-xs text-deck-muted">
                  {s.imageCaption}
                </figcaption>
              )}
            </figure>
          )}
          {s.note && (
            <aside className="deck-note">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-deck-accent">
                Ý nghĩa · Nhận định
              </p>
              <p className="mt-2 leading-relaxed">{s.note}</p>
            </aside>
          )}
        </div>
      )}
    </div>
  );
}
