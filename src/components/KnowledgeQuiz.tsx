import { useState } from "react";
import { CheckCircle2, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { KnowledgeQuestion } from "@/data/exhibition-quizzes";

export function KnowledgeQuiz({ questions }: { questions: KnowledgeQuestion[] }) {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const completed = questions.every((q) => answers[q.id] !== undefined);
  return (
    <section aria-label="Câu hỏi ôn tập" className="border-t border-border py-12">
      <p className="text-xs font-semibold text-primary">CỦNG CỐ KIẾN THỨC</p>
      <h2 className="mt-3 font-display text-3xl font-bold">Bạn còn nhớ?</h2>
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        {questions.map((q, index) => (
          <fieldset key={q.id} className="min-w-0">
            <legend className="text-base font-semibold leading-7">
              {index + 1}. {q.question}
            </legend>
            <div className="mt-4 space-y-2">
              {q.options.map((option, i) => (
                <label
                  key={option}
                  className={`flex cursor-pointer items-start gap-3 rounded-md border p-3 text-sm leading-6 ${answers[q.id] === i ? "border-primary bg-accent" : "border-border bg-card"}`}
                >
                  <input
                    type="radio"
                    name={q.id}
                    value={i}
                    checked={answers[q.id] === i}
                    disabled={answers[q.id] !== undefined}
                    onChange={() => setAnswers((prev) => ({ ...prev, [q.id]: i }))}
                    className="mt-1.5 accent-primary"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
            {answers[q.id] !== undefined && (
              <p role="status" className="mt-4 text-sm leading-7">
                <strong
                  className={answers[q.id] === q.answer ? "text-success" : "text-destructive"}
                >
                  {answers[q.id] === q.answer ? "Chính xác. " : "Chưa chính xác. "}
                </strong>
                {q.explanation}
              </p>
            )}
          </fieldset>
        ))}
      </div>
      {completed && (
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <p className="flex items-center gap-2 text-sm">
            <CheckCircle2 className="h-4 w-4 text-success" />
            {questions.filter((q) => answers[q.id] === q.answer).length}/{questions.length} câu đúng
          </p>
          <Button variant="outline" onClick={() => setAnswers({})}>
            <RotateCcw />
            Ôn tập lại
          </Button>
        </div>
      )}
    </section>
  );
}
