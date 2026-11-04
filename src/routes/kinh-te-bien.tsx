import { createFileRoute, Link } from "@tanstack/react-router";
import { Gamepad2 } from "lucide-react";

import { Story } from "@/components/Story";
import { PageShell } from "@/components/PageShell";
import { MARINE_DECK } from "@/data/presentation";

export const Route = createFileRoute("/kinh-te-bien")({
  head: () => ({
    meta: [
      { title: "Kinh tế biển Việt Nam – Thuyết trình VNR202" },
      {
        name: "description",
        content:
          "Tiềm năng, Nghị quyết 09-NQ/TW và 36-NQ/TW, thực trạng, sáu nhóm giải pháp và trách nhiệm sinh viên với kinh tế biển Việt Nam.",
      },
      { property: "og:title", content: "Kinh tế biển Việt Nam – Thuyết trình VNR202" },
      {
        property: "og:description",
        content:
          "Quốc gia mạnh về biển, giàu từ biển: tiềm năng, thực trạng và sáu nhóm giải pháp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MarineDeck,
});

function MarineDeck() {
  return (
    <PageShell>
      <Story
        parts={MARINE_DECK}
        theme="maritime"
        intro={{
          kicker: "Kinh tế biển · VNR202",
          title: "Quốc gia mạnh về biển, giàu từ biển",
          text: "Tiềm năng, thực trạng, sáu nhóm giải pháp và trách nhiệm của sinh viên.",
          image: "hero_halong",
        }}
        ending={
          <Link to="/games" className="deck-btn deck-btn-primary">
            <Gamepad2 className="h-4 w-4" /> Tiếp tục: Trò chơi
          </Link>
        }
      />
    </PageShell>
  );
}
