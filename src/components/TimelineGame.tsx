import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  GripVertical,
  Hourglass,
  Lightbulb,
  RotateCcw,
  Trophy,
  XCircle,
} from "lucide-react";
import { useEffect, useRef, useState, type DragEvent } from "react";

import { GAME_POINTS_FULL, GAME_POINTS_HINT, GAME_QUESTIONS } from "@/data/game";
import { useProgress } from "@/hooks/use-progress";
import { img } from "@/lib/assets";
import {
  GAME_MAX_SCORE,
  GAME_NAME,
  rankFor,
  scoreAnswer,
  totalScore,
  type AnswerRecord,
} from "@/lib/game-scoring";

type Phase = "intro" | "playing" | "finished";

export function TimelineGame() {
  const { progress, recordGameResult } = useProgress();
  const [phase, setPhase] = useState<Phase>("intro");
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [hintShown, setHintShown] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [hoverYear, setHoverYear] = useState<number | null>(null);
  const savedRef = useRef(false);

  const question = GAME_QUESTIONS[Math.min(index, GAME_QUESTIONS.length - 1)]!;
  const current = answers.find((a) => a.questionId === question?.id);
  const score = totalScore(answers);
  const answeredCount = answers.length;
  const progressPercent = Math.round((answeredCount / GAME_QUESTIONS.length) * 100);

  useEffect(() => {
    if (phase === "finished" && !savedRef.current) {
      savedRef.current = true;
      recordGameResult({
        score,
        correct: answers.filter((a) => a.correct).length,
        total: GAME_QUESTIONS.length,
      });
    }
  }, [phase, score, answers, recordGameResult]);

  function start() {
    savedRef.current = false;
    setAnswers([]);
    setIndex(0);
    setHintShown(false);
    setPhase("playing");
  }

  function placeOn(year: number) {
    if (!question || current) return;
    setAnswers((prev) => [...prev, scoreAnswer(question, year, hintShown)]);
    setHoverYear(null);
    setDragging(false);
  }

  function nextQuestion() {
    if (index + 1 >= GAME_QUESTIONS.length) {
      setPhase("finished");
      return;
    }
    setIndex((i) => i + 1);
    setHintShown(false);
  }

  function onDragStart(e: DragEvent<HTMLDivElement>) {
    e.dataTransfer.setData("text/plain", question.id);
    e.dataTransfer.effectAllowed = "move";
    setDragging(true);
  }

  if (phase === "intro") {
    return (
      <IntroScreen onStart={start} bestScore={progress.bestScore} plays={progress.plays.length} />
    );
  }

  if (phase === "finished") {
    return <ResultScreen answers={answers} score={score} onReplay={start} plays={progress.plays} />;
  }

  const photo = img(question.photo);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      {/* Progress */}
      <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
        <div className="flex items-center justify-between text-sm">
          <p className="font-semibold text-foreground">
            Câu <span className="text-history">{index + 1}</span>/{GAME_QUESTIONS.length}
          </p>
          <p className="text-muted-foreground">
            Điểm: <span className="font-display text-xl font-bold text-history">{score}</span>/
            {GAME_MAX_SCORE}
          </p>
        </div>
        <div
          className="mt-3 h-3 overflow-hidden rounded-full bg-muted"
          role="progressbar"
          aria-label="Tiến độ trò chơi"
          aria-valuenow={answeredCount}
          aria-valuemin={0}
          aria-valuemax={GAME_QUESTIONS.length}
        >
          <div
            className="timeline-axis h-full rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <div className="mt-3 flex gap-1.5">
          {GAME_QUESTIONS.map((q, i) => {
            const a = answers.find((x) => x.questionId === q.id);
            return (
              <span
                key={q.id}
                className={`h-1.5 flex-1 rounded-full ${
                  a
                    ? a.correct
                      ? "bg-success"
                      : "bg-destructive"
                    : i === index
                      ? "bg-gold"
                      : "bg-border"
                }`}
              />
            );
          })}
        </div>
      </div>

      <div className="mt-8 grid grid-cols-[380px_minmax(0,1fr)] gap-8">
        {/* Event card */}
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
            Thẻ sự kiện
          </p>
          {!current ? (
            <div
              draggable
              onDragStart={onDragStart}
              onDragEnd={() => {
                setDragging(false);
                setHoverYear(null);
              }}
              data-testid="event-card"
              aria-label={`Thẻ sự kiện: ${question.eventTitle}`}
              className={`animate-pop cursor-grab overflow-hidden rounded-2xl border-2 bg-card shadow-lift transition-all active:cursor-grabbing ${
                dragging ? "rotate-1 border-gold opacity-70" : "border-gold/60 hover:-translate-y-1"
              }`}
            >
              <EventCardBody question={question} photoUrl={photo.url} photoAlt={photo.alt} />
            </div>
          ) : (
            <div className="flex h-full min-h-[300px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border bg-muted/40 p-6 text-center text-sm text-muted-foreground">
              Thẻ đã được đặt lên dòng thời gian.
            </div>
          )}

          {!current && (
            <div className="mt-4">
              {hintShown ? (
                <div className="animate-pop rounded-xl border border-gold/50 bg-accent p-4 text-sm leading-relaxed text-accent-foreground">
                  <p className="flex items-center gap-1.5 font-semibold">
                    <Lightbulb className="h-4 w-4 text-gold-deep" /> Gợi ý
                  </p>
                  <p className="mt-1">{question.hint}</p>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setHintShown(true)}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-gold/60 bg-card px-4 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent"
                >
                  <Lightbulb className="h-4 w-4 text-gold-deep" /> Xem gợi ý (câu đúng còn{" "}
                  {GAME_POINTS_HINT} điểm)
                </button>
              )}
            </div>
          )}
        </div>

        {/* Timeline */}
        <div className="flex flex-col">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
            Dòng thời gian
          </p>
          <div className="sea-surface rounded-2xl border border-border p-8 shadow-card">
            <p className="text-sm text-muted-foreground">
              Kéo thả thẻ sự kiện hoặc{" "}
              <span className="font-semibold text-foreground">bấm chọn trực tiếp</span> vào đúng mốc
              năm trên dòng thời gian.
            </p>
            <div className="relative mt-10">
              <div
                className="timeline-axis absolute left-0 right-0 top-1/2 h-1.5 -translate-y-1/2 rounded-full"
                aria-hidden="true"
              />
              <div className="relative grid grid-cols-4 gap-4">
                {question.slotYears.map((year) => {
                  const isDropped = current?.droppedYear === year;
                  const isCorrectSlot = current && year === question.year;
                  let tone =
                    "border-border bg-card text-foreground cursor-pointer hover:border-gold hover:shadow-md";
                  if (current) {
                    if (isCorrectSlot)
                      tone = "border-success bg-success text-success-foreground cursor-default";
                    else if (isDropped)
                      tone =
                        "border-destructive bg-destructive text-destructive-foreground cursor-default";
                    else tone = "border-border bg-card/70 text-muted-foreground cursor-default";
                  } else if (hoverYear === year) {
                    tone = "scale-105 border-gold bg-accent text-accent-foreground cursor-pointer";
                  } else if (dragging) {
                    tone = "border-dashed border-gold bg-card text-foreground cursor-pointer";
                  }
                  return (
                    <div
                      key={year}
                      data-testid={`slot-${year}`}
                      role="button"
                      tabIndex={current ? -1 : 0}
                      aria-label={`Mốc năm ${year}`}
                      onClick={() => !current && placeOn(year)}
                      onDragOver={(e) => {
                        if (current) return;
                        e.preventDefault();
                        e.dataTransfer.dropEffect = "move";
                        if (hoverYear !== year) setHoverYear(year);
                      }}
                      onDragLeave={() => setHoverYear((y) => (y === year ? null : y))}
                      onDrop={(e) => {
                        e.preventDefault();
                        placeOn(year);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          placeOn(year);
                        }
                      }}
                      className={`flex min-h-[132px] flex-col items-center justify-center rounded-2xl border-2 p-4 text-center shadow-card transition-all select-none ${tone}`}
                    >
                      <span className="font-display text-3xl font-bold">{year}</span>
                      {isDropped && <span className="mt-2 text-xs font-semibold">Thẻ của bạn</span>}
                      {current && isCorrectSlot && !isDropped && (
                        <span className="mt-2 text-xs font-semibold">Mốc đúng</span>
                      )}
                      {!current && (
                        <span className="mt-2 text-xs opacity-70">Thả hoặc bấm chọn</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Feedback */}
          {current && (
            <div
              role="status"
              className={`animate-pop mt-6 rounded-2xl border-2 p-6 ${
                current.correct
                  ? "border-success bg-success/10"
                  : "border-destructive bg-destructive/10"
              }`}
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p
                    className={`flex items-center gap-2 font-display text-2xl font-bold ${
                      current.correct ? "text-success" : "text-destructive"
                    }`}
                  >
                    {current.correct ? (
                      <CheckCircle2 className="h-7 w-7" />
                    ) : (
                      <XCircle className="h-7 w-7" />
                    )}
                    {current.correct ? "Chính xác!" : "Chưa đúng!"}
                    <span className="ml-2 rounded-full bg-card px-3 py-0.5 text-sm font-semibold text-foreground">
                      +{current.points} điểm
                    </span>
                  </p>
                  <p className="mt-3 text-sm font-semibold text-foreground">
                    {question.eventTitle} ·{" "}
                    <span className="text-history">{question.dateLabel}</span>
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/85">
                    <span className="font-semibold">Giải thích: </span>
                    {question.explanation}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={nextQuestion}
                  className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-history px-5 py-3 text-sm font-bold text-primary-foreground shadow-card transition-transform hover:-translate-y-0.5"
                >
                  {index + 1 >= GAME_QUESTIONS.length ? "Xem kết quả" : "Câu tiếp theo"}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function EventCardBody({
  question,
  photoUrl,
  photoAlt,
}: {
  question: (typeof GAME_QUESTIONS)[number];
  photoUrl: string;
  photoAlt: string;
}) {
  return (
    <>
      <div className="relative">
        <img
          src={photoUrl}
          alt={photoAlt}
          draggable={false}
          className="aspect-[16/10] w-full object-cover"
        />
        <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-history-deep/80 px-2.5 py-1 text-xs font-semibold text-gold backdrop-blur">
          <GripVertical className="h-3.5 w-3.5" /> Kéo thẻ
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-display text-xl font-bold leading-snug text-foreground">
          {question.eventTitle}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{question.eventDetail}</p>
        <p className="mt-3 text-xs italic text-muted-foreground">{question.photoCaption}</p>
      </div>
    </>
  );
}

function IntroScreen({
  onStart,
  bestScore,
  plays,
}: {
  onStart: () => void;
  bestScore: number;
  plays: number;
}) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid grid-cols-[1.2fr_1fr] gap-10">
        <div className="rounded-3xl border border-border bg-card p-10 shadow-card">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-gold-deep">
            <Hourglass className="h-4 w-4" /> Luật chơi
          </p>
          <ol className="mt-6 space-y-4 text-[15px] leading-relaxed text-foreground/90">
            {[
              `Trò chơi gồm ${GAME_QUESTIONS.length} câu. Mỗi câu là một thẻ sự kiện lịch sử có ảnh tư liệu.`,
              "Kéo thẻ sự kiện và thả vào đúng mốc năm trên dòng thời gian (4 mốc).",
              `Đúng ngay: ${GAME_POINTS_FULL} điểm · Đúng sau khi xem gợi ý: ${GAME_POINTS_HINT} điểm · Sai: 0 điểm.`,
              "Sau mỗi câu, bạn nhận thông báo đúng/sai kèm lời giải thích.",
              "Kết quả được lưu trên trình duyệt để bạn theo dõi thành tích.",
            ].map((rule, i) => (
              <li key={rule} className="flex gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-history font-display text-sm font-bold text-gold">
                  {i + 1}
                </span>
                {rule}
              </li>
            ))}
          </ol>
          <button
            type="button"
            onClick={onStart}
            className="mt-10 inline-flex items-center gap-2 rounded-xl bg-history px-7 py-4 text-base font-bold text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5"
          >
            Bắt đầu {GAME_NAME} <ArrowRight className="h-5 w-5" />
          </button>
        </div>
        <div className="flex flex-col gap-6">
          <div className="history-band rounded-3xl p-8 text-primary-foreground shadow-card">
            <Trophy className="h-9 w-9 text-gold" />
            <p className="mt-4 text-sm text-primary-foreground/80">Điểm cao nhất của bạn</p>
            <p className="font-display text-5xl font-bold text-gold">
              {bestScore}
              <span className="text-2xl text-primary-foreground/70">/{GAME_MAX_SCORE}</span>
            </p>
            <p className="mt-2 text-sm text-primary-foreground/80">{plays} lượt đã chơi</p>
          </div>
          <div className="rounded-3xl border border-gold/40 bg-accent p-8 text-accent-foreground">
            <p className="font-semibold">Mẹo</p>
            <p className="mt-2 text-sm leading-relaxed">
              Ôn lại phần “Mốc thời gian” trong từng bài học trước khi chơi để đạt điểm tối đa.
            </p>
            <Link
              to="/learning"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-history hover:underline"
            >
              <BookOpen className="h-4 w-4" /> Đến trang học tập
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function ResultScreen({
  answers,
  score,
  onReplay,
  plays,
}: {
  answers: AnswerRecord[];
  score: number;
  onReplay: () => void;
  plays: { date: string; score: number; correct: number; total: number }[];
}) {
  const correct = answers.filter((a) => a.correct).length;
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="history-band animate-pop rounded-3xl p-12 text-center text-primary-foreground shadow-lift">
        <Trophy className="mx-auto h-14 w-14 text-gold" />
        <p className="mt-4 text-sm font-semibold uppercase tracking-[0.24em] text-gold">
          Hoàn thành {GAME_NAME}
        </p>
        <p className="mt-3 font-display text-7xl font-bold text-gold" data-testid="final-score">
          {score}
          <span className="text-3xl text-primary-foreground/70">/{GAME_MAX_SCORE}</span>
        </p>
        <p className="mt-3 text-lg">
          Đúng {correct}/{answers.length} câu · Danh hiệu:{" "}
          <span className="font-semibold text-gold">{rankFor(score)}</span>
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <button
            type="button"
            onClick={onReplay}
            className="inline-flex items-center gap-2 rounded-xl bg-gold px-6 py-3.5 text-sm font-bold text-history-deep transition-transform hover:-translate-y-0.5"
          >
            <RotateCcw className="h-4 w-4" /> Chơi lại
          </button>
          <Link
            to="/learning"
            className="inline-flex items-center gap-2 rounded-xl border border-primary-foreground/40 px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-primary-foreground/10"
          >
            <BookOpen className="h-4 w-4" /> Ôn tập bài học
          </Link>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-[minmax(0,1fr)_320px] gap-8">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
          <h2 className="font-display text-2xl font-bold text-foreground">Xem lại từng câu</h2>
          <ul className="mt-4 divide-y divide-border">
            {GAME_QUESTIONS.map((q, i) => {
              const a = answers.find((x) => x.questionId === q.id);
              return (
                <li key={q.id} className="flex items-center gap-4 py-3 text-sm">
                  <span className="w-6 font-display font-bold text-muted-foreground">{i + 1}</span>
                  {a?.correct ? (
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-success" />
                  ) : (
                    <XCircle className="h-5 w-5 shrink-0 text-destructive" />
                  )}
                  <span className="flex-1 text-foreground">{q.eventTitle}</span>
                  <span className="text-muted-foreground">
                    Bạn chọn <b className="text-foreground">{a?.droppedYear ?? "–"}</b> · Đúng{" "}
                    <b className="text-history">{q.dateLabel}</b>
                  </span>
                  <span className="w-14 text-right font-semibold text-foreground">
                    +{a?.points ?? 0}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
          <h2 className="font-display text-xl font-bold text-foreground">Lịch sử lượt chơi</h2>
          {plays.length === 0 ? (
            <p className="mt-3 text-sm text-muted-foreground">Chưa có lượt chơi nào được lưu.</p>
          ) : (
            <ul className="mt-4 space-y-2.5">
              {plays.slice(0, 8).map((p) => (
                <li key={p.date} className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">
                    {new Date(p.date).toLocaleString("vi-VN", {
                      dateStyle: "short",
                      timeStyle: "short",
                    })}
                  </span>
                  <span className="font-semibold text-foreground">
                    {p.score} điểm · {p.correct}/{p.total}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
