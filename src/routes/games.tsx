import { createFileRoute } from "@tanstack/react-router";
import { Gamepad2 } from "lucide-react";

import { PageShell } from "@/components/PageShell";
import { TimelineGame } from "@/components/TimelineGame";
import { img } from "@/lib/assets";
import { GAME_NAME } from "@/lib/game-scoring";

export const Route = createFileRoute("/games")({
  head: () => ({
    meta: [
      { title: `${GAME_NAME} – Trò chơi VNR202` },
      {
        name: "description",
        content:
          "Trò chơi Giải mã dấu ấn thời gian: kéo thả 10 sự kiện lịch sử vào đúng mốc năm trên dòng thời gian.",
      },
      { property: "og:title", content: `${GAME_NAME} – Trò chơi VNR202` },
      {
        property: "og:description",
        content: "10 câu kéo thả sự kiện vào dòng thời gian, có gợi ý, giải thích và lưu điểm.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GamesPage,
});

function GamesPage() {
  const banner = img("map_vietnam");
  return (
    <PageShell>
      <section className="history-band relative isolate overflow-hidden">
        <img
          src={banner.url}
          alt=""
          aria-hidden="true"
          className="absolute -right-20 -top-40 -z-10 w-[520px] rotate-6 opacity-15"
        />
        <div className="mx-auto max-w-6xl px-4 py-16">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-gold">
            <Gamepad2 className="h-4 w-4" /> Trò chơi VNR202
          </p>
          <h1 className="mt-4 font-display text-5xl font-bold text-primary-foreground">
            {GAME_NAME}
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-primary-foreground/85">
            Đặt mỗi sự kiện lịch sử về đúng vị trí của nó trên dòng thời gian.
          </p>
        </div>
      </section>
      <TimelineGame />
    </PageShell>
  );
}
