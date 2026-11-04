import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  BookMarked,
  CalendarDays,
  CheckCircle2,
  Circle,
  Clock,
  ImageIcon,
  Flag,
  GraduationCap,
  Lightbulb,
  ListOrdered,
} from "lucide-react";

import { PageShell } from "@/components/PageShell";
import { COURSE_DOCUMENT, getLesson, LESSONS, type LessonSection } from "@/data/lessons";
import { useProgress } from "@/hooks/use-progress";
import { img } from "@/lib/assets";
import { eventsForLesson } from "@/data/history-timeline";
import { Button } from "@/components/ui/button";
import { MarineMap } from "@/components/MarineMap";

export const Route = createFileRoute("/learning/$slug")({
  loader: ({ params }) => {
    const lesson = getLesson(params.slug);
    if (!lesson) throw notFound();
    return { slug: lesson.slug };
  },
  head: ({ loaderData }) => {
    const lesson = loaderData ? getLesson(loaderData.slug) : undefined;
    const title = lesson ? `${lesson.title} – VNR202` : "Bài học – VNR202";
    const description = lesson?.subtitle ?? "Bài học VNR202";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: LessonNotFound,
  component: LessonPage,
});

function LessonNotFound() {
  return (
    <PageShell>
      <div className="mx-auto max-w-xl px-4 py-32 text-center">
        <h1 className="font-display text-4xl font-bold text-foreground">Không tìm thấy bài học</h1>
        <p className="mt-3 text-muted-foreground">
          Chủ đề bạn tìm không tồn tại hoặc đã được đổi tên.
        </p>
        <Link
          to="/learning"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-history px-5 py-3 text-sm font-semibold text-primary-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Về trang học tập
        </Link>
      </div>
    </PageShell>
  );
}

function LessonPage() {
  const { slug } = Route.useLoaderData();
  const lesson = getLesson(slug);
  const index = LESSONS.findIndex((l) => l.slug === slug);
  const prev = index > 0 ? LESSONS[index - 1] : undefined;
  const next = index < LESSONS.length - 1 ? LESSONS[index + 1] : undefined;
  const { progress, toggleLessonCompleted } = useProgress();
  const completed = progress.completedLessons.includes(slug);
  if (!lesson) return <LessonNotFound />;
  const hero = img(lesson.heroImage);
  const studentLesson = getLesson("trach-nhiem-sinh-vien");

  const photoSources = Array.from(
    new Map(
      lesson.sections.flatMap((s) =>
        s.image ? [[s.image, { alt: img(s.image).alt, caption: s.imageCaption }] as const] : [],
      ),
    ).values(),
  );

  return (
    <PageShell>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src={hero.url}
          alt={hero.alt}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="hero-overlay absolute inset-0 -z-10" />
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-12">
          <Link
            to="/learning"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-foreground/80 hover:text-gold"
          >
            <ArrowLeft className="h-4 w-4" /> Tất cả chủ đề
          </Link>
          <p className="mt-10 text-xs font-semibold uppercase tracking-[0.24em] text-gold">
            {lesson.chapterLabel} / {LESSONS.length}
          </p>
          <h1 className="mt-3 max-w-4xl font-display text-3xl font-bold leading-tight text-primary-foreground md:text-5xl">
            {lesson.title}
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-primary-foreground/85">{lesson.subtitle}</p>
          <div className="mt-8 flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-foreground/15 px-3 py-1.5 text-sm text-primary-foreground backdrop-blur">
              <Clock className="h-4 w-4" /> {lesson.minutes} phút đọc
            </span>
            {completed && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-success px-3 py-1.5 text-sm font-semibold text-success-foreground">
                <CheckCircle2 className="h-4 w-4" /> Đã học
              </span>
            )}
          </div>
        </div>
      </section>

      <section className="paper-band border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-gold-deep">
            <CalendarDays className="h-4 w-4" /> Dòng thời gian của chủ đề
          </h2>
          {eventsForLesson(slug).length > 0 ? (
            <ol className="mt-8 max-w-3xl border-l-2 border-gold/50 pl-5">
              {eventsForLesson(slug).map((event) => (
                <li key={event.id} className="relative pb-6 last:pb-0">
                  <span className="absolute -left-[27px] top-5 h-3 w-3 rounded-full border-2 border-background bg-history" />
                  <Button
                    asChild
                    variant="outline"
                    className="h-auto w-full justify-start whitespace-normal py-4 text-left"
                  >
                    <Link to="/learning/events/$event" params={{ event: event.id }}>
                      <span className="flex-1">
                        <span className="block text-xs font-semibold text-history">
                          {event.date}
                        </span>
                        <span className="mt-2 block font-display text-xl font-bold">
                          {event.title}
                        </span>
                        <span className="mt-2 block text-xs text-muted-foreground">
                          Khám phá chi tiết
                        </span>
                      </span>
                      <ArrowRight />
                    </Link>
                  </Button>
                </li>
              ))}
            </ol>
          ) : (
            <ol className="relative mt-8 flex gap-4 overflow-x-auto pb-4">
              <div
                className="timeline-axis absolute left-0 right-0 top-[7px] h-1 rounded-full"
                aria-hidden="true"
              />
              {lesson.milestones.map((m) => (
                <li key={m.date + m.text} className="relative min-w-40 flex-1 pt-7">
                  <span className="absolute left-0 top-0 h-[18px] w-[18px] rounded-full border-4 border-background bg-history" />
                  <p className="font-display text-lg font-bold text-history">{m.date}</p>
                  <p className="mt-1 text-sm leading-snug text-muted-foreground">{m.text}</p>
                </li>
              ))}
            </ol>
          )}
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 lg:grid-cols-[minmax(0,1fr)_320px]">
        {/* Main content */}
        <article className="min-w-0">
          {slug === "chien-luoc-bien" && <MarineMap />}
          {lesson.sections.map((section, i) => (
            <LessonSectionBlock
              key={section.heading}
              section={section}
              number={i + 1}
              id={`muc-${i + 1}`}
            />
          ))}

          {slug !== "trach-nhiem-sinh-vien" && studentLesson && (
            <Link
              to="/learning/$slug"
              params={{ slug: studentLesson.slug }}
              className="history-band group mt-12 flex flex-wrap items-center gap-4 rounded-lg p-5 text-primary-foreground shadow-card transition-transform hover:-translate-y-0.5 md:gap-6 md:p-8"
            >
              <GraduationCap className="h-12 w-12 shrink-0 text-gold" />
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  Vai trò, trách nhiệm của sinh viên
                </p>
                <p className="mt-2 font-display text-2xl font-bold">{studentLesson.title}</p>
                <p className="mt-1 text-sm text-primary-foreground/80">{studentLesson.subtitle}</p>
              </div>
              <ArrowRight className="h-6 w-6 shrink-0 text-gold transition-transform group-hover:translate-x-1" />
            </Link>
          )}

          {/* References */}
          <section className="mt-16 rounded-2xl border border-border bg-parchment p-8">
            <h2 className="flex items-center gap-2 font-display text-2xl font-bold text-foreground">
              <BookMarked className="h-6 w-6 text-history" /> Nguồn tham khảo
            </h2>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground">
              <li>
                <span className="font-semibold text-foreground">Tài liệu chính: </span>
                {COURSE_DOCUMENT}
              </li>
              <li>
                <span className="font-semibold text-foreground">Phần tương ứng: </span>
                {lesson.docSection}.
              </li>
            </ul>
            {photoSources.length > 0 && (
              <>
                <h3 className="mt-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-foreground">
                  <ImageIcon className="h-4 w-4 text-history" /> Ảnh tư liệu trong bài
                </h3>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-muted-foreground">
                  {photoSources.map((p) => (
                    <li key={p.alt}>
                      <span className="text-foreground">{p.alt}</span>
                      {p.caption ? ` – ${p.caption}` : ""}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-xs text-muted-foreground">
                  Ảnh tư liệu thực tế từ Wikimedia Commons (giấy phép Creative Commons).
                </p>
              </>
            )}
          </section>

          {/* Prev / next */}
          <nav className="mt-10 grid grid-cols-2 gap-4" aria-label="Điều hướng bài học">
            {prev ? (
              <Link
                to="/learning/$slug"
                params={{ slug: prev.slug }}
                className="group rounded-2xl border border-border bg-card p-5 shadow-card transition-all hover:-translate-y-0.5 hover:border-history"
              >
                <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  <ArrowLeft className="h-3.5 w-3.5" /> Bài trước
                </span>
                <p className="mt-2 font-display text-lg font-bold text-foreground group-hover:text-history">
                  {prev.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                to="/learning/$slug"
                params={{ slug: next.slug }}
                className="group rounded-2xl border border-border bg-card p-5 text-right shadow-card transition-all hover:-translate-y-0.5 hover:border-history"
              >
                <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Bài tiếp theo <ArrowRight className="h-3.5 w-3.5" />
                </span>
                <p className="mt-2 font-display text-lg font-bold text-foreground group-hover:text-history">
                  {next.title}
                </p>
              </Link>
            ) : (
              <Link
                to="/games"
                className="history-band group rounded-2xl p-5 text-right text-primary-foreground shadow-card transition-all hover:-translate-y-0.5"
              >
                <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-gold">
                  Hoàn thành chương trình <ArrowRight className="h-3.5 w-3.5" />
                </span>
                <p className="mt-2 font-display text-lg font-bold">Chơi Giải mã dấu ấn thời gian</p>
              </Link>
            )}
          </nav>
        </article>

        {/* Sidebar */}
        <aside className="space-y-6">
          <div className="sticky top-24 space-y-6">
            <Button
              type="button"
              onClick={() => toggleLessonCompleted(slug)}
              aria-pressed={completed}
              className={`flex h-auto w-full items-center justify-center gap-2 whitespace-normal rounded-lg px-5 py-4 text-sm font-bold shadow-card transition-all hover:-translate-y-0.5 ${
                completed
                  ? "bg-success text-success-foreground"
                  : "bg-history text-primary-foreground hover:bg-history-deep"
              }`}
            >
              {completed ? <CheckCircle2 className="h-5 w-5" /> : <Circle className="h-5 w-5" />}
              {completed ? "Đã học – bấm để bỏ đánh dấu" : "Đánh dấu đã học"}
            </Button>

            <nav
              className="rounded-2xl border border-border bg-card p-6 shadow-card"
              aria-label="Mục lục bài"
            >
              <h2 className="flex items-center gap-2 font-display text-xl font-bold text-foreground">
                <ListOrdered className="h-5 w-5 text-history" /> Các phần trưng bày
              </h2>
              <ol className="mt-4 space-y-2">
                {lesson.sections.map((sec, i) => {
                  const kind = sectionKind(sec.heading);
                  return (
                    <li key={sec.heading}>
                      <a
                        href={`#muc-${i + 1}`}
                        className="flex gap-2 text-sm leading-snug text-muted-foreground hover:text-history"
                      >
                        <span className="font-display font-bold text-gold-deep">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span>
                          <span className="block text-[10px] font-semibold uppercase tracking-wider text-history">
                            {kind}
                          </span>
                          {sec.heading}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ol>
            </nav>

            <div className="rounded-2xl border border-gold/40 bg-accent p-6">
              <h2 className="flex items-center gap-2 font-display text-xl font-bold text-accent-foreground">
                <Lightbulb className="h-5 w-5 text-gold-deep" /> Ghi nhớ
              </h2>
              <ul className="mt-4 space-y-3">
                {lesson.keyFacts.map((f) => (
                  <li key={f} className="flex gap-2 text-sm leading-snug text-accent-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-deep" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </PageShell>
  );
}

/** Nhãn phân loại phần nội dung, suy ra từ tiêu đề có sẵn trong tài liệu. */
function sectionKind(heading: string) {
  const h = heading.toLowerCase();
  if (h.startsWith("kết luận")) return "Kết luận";
  if (h.includes("bối cảnh") || h.includes("tiềm năng")) return "Bối cảnh lịch sử";
  if (h.includes("hạn chế"))
    return h.includes("kết quả") ? "Kết quả · Hạn chế · Ý nghĩa" : "Hạn chế & thách thức";
  if (h.includes("kết quả") || h.includes("thực trạng")) return "Kết quả đạt được";
  if (h.includes("ý nghĩa")) return "Ý nghĩa";
  if (h.includes("bài học")) return "Bài học kinh nghiệm";
  if (h.startsWith("giải pháp")) return "Giải pháp";
  if (h.includes("triển khai")) return "Quá trình triển khai";
  if (h.includes("sinh viên")) return "Vai trò sinh viên";
  return "Nội dung & quyết sách";
}

function LessonSectionBlock({
  section,
  number,
  id,
}: {
  section: LessonSection;
  number: number;
  id: string;
}) {
  const photo = section.image ? img(section.image) : undefined;
  return (
    <section
      id={id}
      className="scroll-mt-24 border-b border-border py-10 first:pt-0 last:border-b-0"
    >
      <p className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent-foreground">
        <Flag className="h-3 w-3 text-gold-deep" /> {sectionKind(section.heading)}
      </p>
      <h2 className="flex items-baseline gap-3 font-display text-3xl font-bold leading-snug text-foreground">
        <span className="font-display text-lg text-gold-deep">
          {String(number).padStart(2, "0")}
        </span>
        {section.heading}
      </h2>
      {section.paragraphs?.map((p) => (
        <p key={p} className="mt-4 text-[17px] leading-8 text-foreground/90">
          {p}
        </p>
      ))}
      {section.bullets && (
        <ul className="mt-5 space-y-3">
          {section.bullets.map((b) => (
            <li key={b} className="flex gap-3 text-[16px] leading-7 text-foreground/90">
              <span className="mt-2.5 h-2 w-2 shrink-0 rotate-45 bg-history" />
              {b}
            </li>
          ))}
        </ul>
      )}
      {section.note && (
        <div className="mt-6 rounded-r-xl border-l-4 border-gold bg-accent/70 px-5 py-4 text-[15px] leading-7 text-accent-foreground">
          {section.note.startsWith("Ví dụ thực tiễn:") ? (
            <>
              <span className="font-semibold">Ví dụ thực tiễn:</span>
              {section.note.slice("Ví dụ thực tiễn:".length)}
            </>
          ) : (
            <>
              <span className="font-semibold">Phân tích: </span>
              {section.note}
            </>
          )}
        </div>
      )}
      {photo && (
        <figure className="mt-8">
          <div className="exhibit-frame overflow-hidden rounded-lg bg-card">
            <img
              src={photo.url}
              alt={photo.alt}
              loading="lazy"
              className="max-h-[480px] w-full object-cover"
            />
          </div>
          <figcaption className="mt-4 flex gap-2 text-sm italic leading-relaxed text-muted-foreground">
            <ImageIcon className="mt-0.5 h-4 w-4 shrink-0 not-italic text-gold-deep" />
            {section.imageCaption ?? photo.alt}
          </figcaption>
        </figure>
      )}
    </section>
  );
}
