import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/PageShell";
import { LearningPresentation } from "@/components/LearningPresentation";

export const Route = createFileRoute("/learning/")({
  head: () => ({
    meta: [
      { title: "Học tập: Đại hội IX và Đại hội X – Thuyết trình VNR202" },
      {
        name: "description",
        content:
          "Bài thuyết trình tương tác về bối cảnh, nội dung, quá trình triển khai và ý nghĩa của Đại hội IX (2001) và Đại hội X (2006).",
      },
      { property: "og:title", content: "Đại hội IX và Đại hội X – Thuyết trình VNR202" },
      {
        property: "og:description",
        content: "Mốc thời gian, ảnh tư liệu và ý chính của hai kỳ Đại hội 2001 và 2006.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LearningPage,
});

function LearningPage() {
  return (
    <PageShell>
      <LearningPresentation />
    </PageShell>
  );
}
