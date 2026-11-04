import { useEffect, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

import { KnowledgeQuiz } from "@/components/KnowledgeQuiz";
import { MarineMap } from "@/components/MarineMap";
import { HISTORY_QUIZ, MARINE_QUIZ } from "@/data/exhibition-quizzes";
import type { DeckPart, Slide } from "@/data/presentation";
import { img } from "@/lib/assets";
import { cn } from "@/lib/utils";

/** Trang cuộn dọc nhiều cảnh: mỗi phần là một cảnh lớn, mỗi nội dung là một cảnh ngắn gọn. */
export function Story({
  parts,
  theme,
  intro,
  ending,
}: {
  parts: DeckPart[];
  theme: "history" | "maritime";
  intro: { kicker: string; title: string; text: string; image: Parameters<typeof img>[0] };
  ending?: ReactNode;
}) {
  const [active, setActive] = useState(parts[0]?.id ?? "");

  useEffect(() => {
    const els = parts
      .map((p) => document.getElementById(`part-${p.id}`))
      .filter((e): e is HTMLElement => !!e);
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id.replace("part-", ""))),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [parts]);

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".story-scene");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.setAttribute("data-shown", "true")),
      { rootMargin: "0px 0px -12% 0px" },
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);

  const hero = img(intro.image);

  return (
    <div className={cn("story", theme === "maritime" ? "deck-maritime" : "deck-history")}>
      {/* Cảnh mở đầu */}
      <header className="relative isolate flex min-h-[calc(92svh-4rem)] items-end overflow-hidden">
        <img
          src={hero.url}
          alt={hero.alt}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="story-overlay absolute inset-0 -z-10" />
        <div className="mx-auto w-full max-w-6xl px-5 pb-16 md:pb-24">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
            {intro.kicker}
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.05] text-story-on-image md:text-7xl">
            {intro.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-story-on-image/85">{intro.text}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            {parts.map((p) => (
              <a key={p.id} href={`#part-${p.id}`} className="story-chip">
                <span className="font-display text-gold">{p.label}</span> {p.title}
              </a>
            ))}
          </div>
        </div>
        <ChevronDown className="absolute bottom-6 left-1/2 h-6 w-6 -translate-x-1/2 animate-bounce text-story-on-image/70" />
      </header>

      {/* Mục lục bám theo khi cuộn */}
      <nav aria-label="Mục lục" className="story-toc">
        {parts.map((p) => (
          <a
            key={p.id}
            href={`#part-${p.id}`}
            aria-current={active === p.id ? "location" : undefined}
            className="story-toc-item"
          >
            <span className="story-toc-dot">{p.label}</span>
            <span className="story-toc-label">{p.title}</span>
          </a>
        ))}
      </nav>

      {/* Thanh điều hướng bám theo trên mobile */}
      <nav
        aria-label="Mục lục di động"
        className="lg:hidden sticky top-16 z-30 border-b border-deck-line bg-deck/95 backdrop-blur-md px-3 py-2 flex items-center gap-2 overflow-x-auto no-scrollbar shadow-xs"
      >
        {parts.map((p) => (
          <a
            key={p.id}
            href={`#part-${p.id}`}
            className={cn(
              "shrink-0 rounded-full px-3 py-1 text-xs font-semibold transition-colors flex items-center gap-1.5",
              active === p.id
                ? "bg-deck-accent text-white shadow-xs"
                : "bg-deck-card text-deck-muted border border-deck-line hover:text-deck-foreground",
            )}
          >
            <span className="font-display font-bold">{p.label}.</span>
            <span>{p.title}</span>
          </a>
        ))}
      </nav>

      {parts.map((part) => {
        const [first, ...rest] = part.slides;
        const coverSlide = first?.kind === "cover" ? first : null;
        const scenes = coverSlide ? rest : part.slides;
        const bg = img(
          coverSlide?.image ?? scenes.find((s) => s.section?.image)?.section?.image ?? intro.image,
        );
        return (
          <section key={part.id} id={`part-${part.id}`} className="scroll-mt-16">
            {/* Cảnh chương */}
            <div className="relative isolate flex min-h-[70svh] items-center overflow-hidden">
              <img
                src={bg.url}
                alt={bg.alt}
                loading="lazy"
                className="story-parallax absolute inset-0 -z-20 h-full w-full object-cover"
              />
              <div className="story-overlay absolute inset-0 -z-10" />
              <div className="mx-auto w-full max-w-6xl px-5 py-20">
                <p className="font-display text-8xl font-bold leading-none text-gold/90 md:text-[10rem]">
                  {part.label}
                </p>
                <h2 className="mt-2 max-w-3xl font-display text-3xl font-bold leading-tight text-story-on-image md:text-5xl">
                  {coverSlide?.title ?? part.title}
                </h2>
                {coverSlide?.subtitle && (
                  <p className="mt-4 max-w-xl text-lg text-story-on-image/80">
                    {coverSlide.subtitle}
                  </p>
                )}
              </div>
            </div>

            <div className="mx-auto max-w-6xl px-5">
              {scenes.map((slide, i) => (
                <Scene key={slide.id} slide={slide} flip={i % 2 === 1} />
              ))}
            </div>
          </section>
        );
      })}

      {ending && (
        <div className="mx-auto flex max-w-6xl justify-end border-t border-deck-line px-5 py-12">
          {ending}
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

/** Câu đầu tiên của đoạn văn – làm câu dẫn ngắn gọn */
function lead(text?: string) {
  if (!text) return "";
  const m = text.match(/^.+?[.!?](\s|$)/);
  return (m ? m[0] : text).trim();
}

function Scene({ slide, flip }: { slide: Slide; flip: boolean }) {
  const base = "story-scene border-t border-deck-line py-16 md:py-24 first:border-t-0";
  switch (slide.kind) {
    case "content": {
      const s = slide.section;
      if (!s) return null;
      const photo = s.image ? img(s.image) : null;
      const paragraphs = s.paragraphs ?? [];
      const primaryParagraphs = paragraphs.slice(0, 2);
      const extraParagraphs = paragraphs.slice(2);
      return (
        <article className={base}>
          <div
            className={cn(
              "grid items-center gap-10 md:gap-16",
              photo && "md:grid-cols-2",
              photo && flip && "md:[&>*:first-child]:order-2",
            )}
          >
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
            <div className={cn(!photo && "max-w-3xl")}>
              <Kicker>{slide.kicker}</Kicker>
              <h3 className="mt-3 font-display text-3xl font-bold leading-tight md:text-4xl">
                {slide.title}
              </h3>
              {primaryParagraphs.map((p, i) => (
                <p
                  key={i}
                  className={cn(
                    "mt-4 leading-relaxed",
                    i === 0 ? "text-lg text-deck-foreground/95" : "text-base text-deck-muted",
                  )}
                >
                  {p}
                </p>
              ))}
              {extraParagraphs.length > 0 && (
                <details className="story-more mt-4">
                  <summary>Xem phân tích chi tiết</summary>
                  <div className="mt-3 space-y-3 text-sm leading-relaxed text-deck-muted">
                    {extraParagraphs.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>
                </details>
              )}
            </div>
          </div>

          {s.bullets && (
            <ul
              className={cn(
                "mt-10 grid gap-4",
                s.bullets.length > 2 && "sm:grid-cols-2",
                s.bullets.length > 4 && "lg:grid-cols-3",
              )}
            >
              {s.bullets.map((b, i) => (
                <li key={b} className="deck-point">
                  <span className="deck-point-n">{i + 1}</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}

          {s.note && (
            <blockquote className="story-quote mt-10">
              <span className="block text-xs font-bold uppercase tracking-wider text-deck-accent not-italic mb-1">
                Ý nghĩa & Phân tích
              </span>
              {s.note}
            </blockquote>
          )}
        </article>
      );
    }
    case "timeline":
      return (
        <div className={base}>
          <Kicker>{slide.kicker}</Kicker>
          <h3 className="mt-3 font-display text-3xl font-bold md:text-4xl">{slide.title}</h3>
          <ol className="deck-timeline mt-12">
            {slide.milestones?.map((m, i) => (
              <li key={m.date + i} className="deck-timeline-item">
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
        <div className={base}>
          <Kicker>{slide.kicker}</Kicker>
          <h3 className="mt-3 font-display text-3xl font-bold md:text-4xl">{slide.title}</h3>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {slide.facts?.map((f, i) => (
              <div key={f} className="deck-card">
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
        <div className={base}>
          <Kicker>{slide.kicker}</Kicker>
          <h3 className="mt-3 font-display text-3xl font-bold md:text-4xl">{slide.title}</h3>
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
                    <h4 className="font-display text-2xl font-bold">{c.title}</h4>
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
        <div className={base}>
          <Kicker>{slide.kicker}</Kicker>
          <h3 className="mt-3 font-display text-3xl font-bold md:text-4xl">{slide.title}</h3>
          <MarineMap />
        </div>
      );
    case "quiz":
      return (
        <div className={cn(base, "mx-auto max-w-4xl")}>
          <Kicker>{slide.kicker}</Kicker>
          <h3 className="mt-3 font-display text-3xl font-bold md:text-4xl">{slide.title}</h3>
          <KnowledgeQuiz questions={slide.quiz === "marine" ? MARINE_QUIZ : HISTORY_QUIZ} />
        </div>
      );
    default:
      return null;
  }
}
