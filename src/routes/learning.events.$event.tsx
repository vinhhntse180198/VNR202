import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CalendarDays, Waves } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { eventSections, eventsForLesson, getHistoryEvent } from "@/data/history-timeline";
import { getLesson } from "@/data/lessons";
import { img } from "@/lib/assets";

export const Route = createFileRoute("/learning/events/$event")({
  loader: ({ params }) => {
    const event = getHistoryEvent(params.event);
    if (!event) throw notFound();
    return { eventId: event.id };
  },
  head: ({ loaderData }) => {
    const event = loaderData ? getHistoryEvent(loaderData.eventId) : undefined;
    const title = event ? `${event.title} · ${event.date} – VNR202` : "Sự kiện lịch sử – VNR202";
    const description = event?.summary ?? "Sự kiện trên dòng thời gian lịch sử VNR202.";
    const photo = event?.image ? img(event.image) : undefined;
    return {
      meta: [
        ...(photo
          ? [
              { property: "og:image", content: photo.url },
              { name: "twitter:image", content: photo.url },
            ]
          : []),
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: () => (
    <PageShell>
      <div className="mx-auto max-w-3xl px-5 py-20">
        <h1 className="font-display text-3xl">Không tìm thấy sự kiện</h1>
        <Button asChild variant="link" className="mt-6">
          <Link to="/learning">
            <ArrowLeft /> Về dòng thời gian
          </Link>
        </Button>
      </div>
    </PageShell>
  ),
  component: EventPage,
});

function EventPage() {
  const { eventId } = Route.useLoaderData();
  const event = getHistoryEvent(eventId);
  if (!event) return null;
  const lesson = getLesson(event.lessonSlug);
  const events = eventsForLesson(event.lessonSlug);
  const index = events.findIndex((item) => item.id === event.id);
  const previous = events[index - 1];
  const next = events[index + 1];
  const photo = event.image ? img(event.image) : undefined;
  return (
    <PageShell>
      <div className="learning-exhibition">
        <article className="mx-auto max-w-4xl px-5 py-10 md:py-16">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-xs leading-6 text-muted-foreground"
          >
            <Link to="/">Trang chủ</Link>
            <span>/</span>
            <Link to="/learning">Học tập</Link>
            <span>/</span>
            <Link to="/learning" hash={event.lessonSlug}>
              {event.lessonSlug === "dai-hoi-ix" ? "Đại hội IX" : "Đại hội X"}
            </Link>
            <span>/</span>
            <span aria-current="page" className="text-exhibition-ink">
              {event.title}
            </span>
          </nav>
          <p className="mt-10 flex items-center gap-2 text-sm font-semibold text-history">
            <CalendarDays className="h-4 w-4" />
            {event.date}
          </p>
          <h1 className="mt-4 font-display text-3xl font-bold leading-tight md:text-5xl">
            {event.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">{event.summary}</p>
          <Button asChild variant="link" className="mt-4 px-0">
            <Link to="/learning" hash={event.id}>
              <ArrowLeft /> Quay lại dòng thời gian
            </Link>
          </Button>
          {photo && (
            <figure className="mt-10">
              <img
                src={photo.url}
                alt={photo.alt}
                className="max-h-[500px] w-full rounded-lg object-contain"
              />
              <figcaption className="mt-3 text-sm leading-7 text-muted-foreground">
                {event.caption}
              </figcaption>
            </figure>
          )}
          <section className="mt-12 border-t border-border pt-8">
            <h2 className="font-display text-2xl font-bold">Bối cảnh lịch sử</h2>
            <p className="mt-4 text-base leading-8">{lesson?.sections[0]?.paragraphs?.[0]}</p>
          </section>
          {eventSections(event).map((section, i) => (
            <section key={`${section.heading}-${i}`} className="mt-10 border-t border-border pt-8">
              <h2 className="font-display text-2xl font-bold leading-snug">{section.heading}</h2>
              {section.paragraphs?.map((text) => (
                <p key={text} className="mt-4 text-base leading-8">
                  {text}
                </p>
              ))}
              {section.bullets && (
                <ul className="mt-4 list-disc space-y-3 pl-5 text-base leading-8 marker:text-history">
                  {section.bullets.map((text) => (
                    <li key={text}>{text}</li>
                  ))}
                </ul>
              )}
              {section.note && (
                <p className="mt-5 border-l-2 border-gold pl-5 text-base leading-8 text-muted-foreground">
                  {section.note}
                </p>
              )}
            </section>
          ))}
          <section className="mt-10 border-t border-border pt-8">
            <h2 className="font-display text-2xl font-bold">Ý nghĩa và định hướng</h2>
            <p className="mt-4 text-base leading-8">{event.meaning}</p>
          </section>
          <section className="mt-10 border-t border-border pt-8">
            <h2 className="font-display text-2xl font-bold">Nội dung liên quan</h2>
            <Button asChild variant="link" className="mt-4 h-auto whitespace-normal px-0 text-left">
              <Link to="/learning/$slug" params={{ slug: event.lessonSlug }}>
                Toàn bộ nội dung {event.lessonSlug === "dai-hoi-ix" ? "Đại hội IX" : "Đại hội X"}{" "}
                <ArrowRight />
              </Link>
            </Button>
            {event.maritime && (
              <div>
                <Button
                  asChild
                  variant="link"
                  className="mt-2 h-auto whitespace-normal px-0 text-exhibition-teal"
                >
                  <Link to="/kinh-te-bien">
                    <Waves /> Liên hệ thực tiễn – Kinh tế biển
                  </Link>
                </Button>
                <Button asChild variant="link" className="mt-2 h-auto whitespace-normal px-0">
                  <Link to="/learning/$slug" params={{ slug: "chien-luoc-bien" }} hash="muc-2">
                    Nội dung Chiến lược biển Việt Nam <ArrowRight />
                  </Link>
                </Button>
              </div>
            )}
          </section>
          <section className="mt-10 border-t border-border pt-8 text-sm leading-7 text-muted-foreground">
            <h2 className="font-display text-xl font-bold text-exhibition-ink">Nguồn tham khảo</h2>
            <p className="mt-3">VNR202.docx do bạn cung cấp · {lesson?.docSection}.</p>
            {photo && (
              <p>
                Ảnh: {photo.alt}. Nguồn Wikimedia Commons theo ghi chú hiện có; tác giả và giấy phép
                của từng ảnh chưa được đối chiếu.
              </p>
            )}
          </section>
          <nav
            aria-label="Điều hướng sự kiện"
            className="mt-12 grid gap-4 border-t border-border pt-8 sm:grid-cols-2"
          >
            {previous ? (
              <Button
                asChild
                variant="outline"
                className="h-auto min-h-16 justify-start whitespace-normal py-4 text-left"
              >
                <Link to="/learning/events/$event" params={{ event: previous.id }}>
                  <ArrowLeft />
                  <span>
                    <span className="block text-xs text-muted-foreground">
                      Mốc trước · {previous.date}
                    </span>
                    {previous.title}
                  </span>
                </Link>
              </Button>
            ) : (
              <div />
            )}
            {next && (
              <Button
                asChild
                variant="outline"
                className="h-auto min-h-16 justify-end whitespace-normal py-4 text-right"
              >
                <Link to="/learning/events/$event" params={{ event: next.id }}>
                  <span>
                    <span className="block text-xs text-muted-foreground">
                      Mốc tiếp theo · {next.date}
                    </span>
                    {next.title}
                  </span>
                  <ArrowRight />
                </Link>
              </Button>
            )}
          </nav>
        </article>
      </div>
    </PageShell>
  );
}
