import { createFileRoute, Link } from "@tanstack/react-router";
import { Home } from "lucide-react";

import { Deck } from "@/components/Deck";
import { PageShell } from "@/components/PageShell";
import { CONCLUSION_DECK } from "@/data/presentation";

export const Route = createFileRoute("/ket-luan")({
  validateSearch: (search: Record<string, unknown>): { s?: number } => {
    const n = Number(search["s"]);
    return Number.isInteger(n) && n > 0 ? { s: n } : {};
  },
  head: () => ({
    meta: [
      { title: "Kết luận – Thuyết trình VNR202" },
      {
        name: "description",
        content:
          "Ý nghĩa Đại hội IX, Đại hội X, vai trò Nghị quyết 09-NQ/TW và trách nhiệm của thế hệ trẻ với biển đảo Việt Nam.",
      },
      { property: "og:title", content: "Kết luận – Thuyết trình VNR202" },
      {
        property: "og:description",
        content: "Phát huy tiềm năng biển – Phát triển bền vững – Bảo vệ chủ quyền Việt Nam.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ConclusionDeck,
});

function ConclusionDeck() {
  const { s = 0 } = Route.useSearch();
  const navigate = Route.useNavigate();
  return (
    <PageShell>
      <Deck
        parts={CONCLUSION_DECK}
        index={s}
        theme="history"
        onIndex={(i) => navigate({ search: i ? { s: i } : {}, replace: true, resetScroll: false })}
        ending={
          <Link to="/" className="deck-btn deck-btn-primary">
            <Home className="h-4 w-4" /> Về trang mở đầu
          </Link>
        }
      />
    </PageShell>
  );
}
