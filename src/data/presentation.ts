import { LESSONS, type LessonMilestone, type LessonSection } from "@/data/lessons";
import type { ImageKey } from "@/lib/assets";

/**
 * Bài thuyết trình được ghép từ nội dung có sẵn trong lessons.ts (VNR202.docx).
 * File này chỉ sắp xếp mạch trình bày, không viết thêm nội dung học thuật.
 */
export type SlideKind =
  "cover" | "content" | "timeline" | "compare" | "facts" | "map" | "quiz" | "message";

export interface Slide {
  id: string;
  kind: SlideKind;
  kicker: string;
  title: string;
  subtitle?: string;
  image?: ImageKey;
  section?: LessonSection;
  milestones?: LessonMilestone[];
  facts?: string[];
  columns?: { title: string; subtitle: string; facts: string[]; image: ImageKey }[];
  quiz?: "history" | "marine";
}

export interface DeckPart {
  id: string;
  label: string;
  title: string;
  slides: Slide[];
}

function lesson(slug: string) {
  const found = LESSONS.find((l) => l.slug === slug);
  if (!found) throw new Error(`Missing lesson ${slug}`);
  return found;
}

function sec(slug: string, i: number): LessonSection {
  const found = lesson(slug).sections[i];
  if (!found) throw new Error(`Missing section ${slug}#${i}`);
  return found;
}

function sections(slug: string, indexes: number[], kicker: string): Slide[] {
  return indexes.map((i) => ({
    id: `${slug}-${i}`,
    kind: "content" as const,
    kicker,
    title: sec(slug, i).heading,
    section: sec(slug, i),
  }));
}

function cover(
  id: string,
  kicker: string,
  title: string,
  subtitle: string,
  image: ImageKey,
): Slide {
  return { id, kind: "cover", kicker, title, subtitle, image };
}

const IX = lesson("dai-hoi-ix");
const X = lesson("dai-hoi-x");
const SEA = lesson("chien-luoc-bien");
const SOLUTIONS = lesson("giai-phap-kinh-te-bien");

/* ---------------- Học tập: Đại hội IX, Đại hội X, so sánh ---------------- */
export const LEARNING_DECK: DeckPart[] = [
  {
    id: "ix",
    label: "A",
    title: "Đại hội IX (2001)",
    slides: [
      cover("ix-cover", "Phần A · 19 – 22/4/2001", IX.title, IX.subtitle, IX.heroImage),
      ...sections("dai-hoi-ix", [0, 1, 2], "A.1 · Bối cảnh lịch sử"),
      ...sections("dai-hoi-ix", [3, 4, 5, 6, 7], "A.2 · Nội dung cơ bản"),
      {
        id: "ix-timeline",
        kind: "timeline",
        kicker: "A.3 · Triển khai 2001–2005",
        title: "Các mốc triển khai Nghị quyết Đại hội IX",
        milestones: IX.milestones,
      },
      ...sections("dai-hoi-ix", [8], "A.3 · Triển khai 2001–2005"),
      ...sections("dai-hoi-ix", [9], "A.4 · Kết quả, hạn chế, ý nghĩa"),
      {
        id: "ix-facts",
        kind: "facts",
        kicker: "A · Ý chính cần nhớ",
        title: "Đại hội IX – những điểm nổi bật",
        facts: IX.keyFacts,
      },
    ],
  },
  {
    id: "x",
    label: "B",
    title: "Đại hội X (2006)",
    slides: [
      cover("x-cover", "Phần B · 18 – 25/4/2006", X.title, X.subtitle, X.heroImage),
      ...sections("dai-hoi-x", [0], "B.1 · Bối cảnh lịch sử"),
      ...sections("dai-hoi-x", [1, 2, 3, 4], "B.2 · Nội dung cơ bản"),
      {
        id: "x-timeline",
        kind: "timeline",
        kicker: "B.3 · Triển khai 2006–2010",
        title: "Các mốc triển khai Nghị quyết Đại hội X",
        milestones: X.milestones,
      },
      ...sections("dai-hoi-x", [5], "B.3 · Triển khai 2006–2010"),
      ...sections("dai-hoi-x", [6], "B.4 · Thành tựu, hạn chế, ý nghĩa"),
      {
        id: "x-facts",
        kind: "facts",
        kicker: "B · Ý chính cần nhớ",
        title: "Đại hội X – những điểm nổi bật",
        facts: X.keyFacts,
      },
    ],
  },
  {
    id: "compare",
    label: "C",
    title: "So sánh IX và X",
    slides: [
      {
        id: "compare-columns",
        kind: "compare",
        kicker: "Phần C · Đối chiếu",
        title: "Đại hội IX và Đại hội X",
        columns: [
          {
            title: "Đại hội IX (2001)",
            subtitle: IX.subtitle,
            facts: IX.keyFacts,
            image: IX.heroImage,
          },
          {
            title: "Đại hội X (2006)",
            subtitle: X.subtitle,
            facts: X.keyFacts,
            image: X.heroImage,
          },
        ],
      },
      {
        id: "compare-timeline",
        kind: "timeline",
        kicker: "Phần C · Dấu mốc 2001–2010",
        title: "Các dấu mốc quan trọng giai đoạn 2001–2010",
        milestones: [...IX.milestones, ...X.milestones].filter((m) => /20(0\d|10)/.test(m.date)),
      },
    ],
  },
];

/* ---------------- Kinh tế biển ---------------- */
export const MARINE_DECK: DeckPart[] = [
  {
    id: "potential",
    label: "A",
    title: "Tiềm năng & cơ sở",
    slides: [
      cover("sea-cover", "Phần A · Tiềm năng và cơ sở", SEA.title, SEA.subtitle, SEA.heroImage),
      ...sections("chien-luoc-bien", [0], "A.1 · Tiềm năng và lợi thế"),
      {
        id: "sea-map",
        kind: "map",
        kicker: "A.1 · Không gian kinh tế biển",
        title: "Bản đồ các trung tâm kinh tế biển",
      },
      ...sections("chien-luoc-bien", [1], "A.2 · Chủ trương của Đảng"),
      {
        id: "sea-timeline",
        kind: "timeline",
        kicker: "A.3 · Nghị quyết 09-NQ/TW & 36-NQ/TW",
        title: "Từ Chiến lược biển 2007 đến tầm nhìn 2045",
        milestones: [...SEA.milestones, ...SOLUTIONS.milestones].filter(
          (m, i, all) => all.findIndex((o) => o.date === m.date) === i,
        ),
      },
    ],
  },
  {
    id: "status",
    label: "B",
    title: "Thực trạng",
    slides: [
      cover(
        "status-cover",
        "Phần B · Thực trạng",
        "Thực trạng kinh tế biển Việt Nam",
        "Đánh giá toàn diện những kết quả đạt được cùng các tồn tại, hạn chế và thách thức lớn",
        "haiphong_port",
      ),
      ...sections("chien-luoc-bien", [2], "B.1 · Kết quả đạt được"),
      ...sections("chien-luoc-bien", [3], "B.2 · Hạn chế và thách thức"),
    ],
  },
  {
    id: "solutions",
    label: "C",
    title: "Sáu nhóm giải pháp",
    slides: [
      cover(
        "solutions-cover",
        "Phần C · Sáu nhóm giải pháp",
        SOLUTIONS.title,
        SOLUTIONS.subtitle,
        SOLUTIONS.heroImage,
      ),
      ...SOLUTIONS.sections.map((s, i) => ({
        id: `solution-${i + 1}`,
        kind: "content" as const,
        kicker: `Giải pháp ${i + 1} / ${SOLUTIONS.sections.length}`,
        title: s.heading.replace(/^Giải pháp \d+:\s*/, ""),
        section: s,
      })),
      {
        id: "solutions-facts",
        kind: "facts",
        kicker: "Phần C · Ví dụ thực tiễn",
        title: "Sáu giải pháp – tóm tắt",
        facts: SOLUTIONS.keyFacts,
      },
    ],
  },
  {
    id: "student",
    label: "D",
    title: "Trách nhiệm sinh viên",
    slides: [
      cover(
        "student-cover",
        "Phần D · Trách nhiệm sinh viên",
        "Trách nhiệm của thế hệ trẻ",
        "Hành động thiết thực của sinh viên vì mục tiêu quốc gia mạnh về biển, giàu từ biển",
        "phuquoc",
      ),
      ...sections("trach-nhiem-sinh-vien", [0, 1], "Phần D · Trách nhiệm sinh viên"),
    ],
  },
];

/* ---------------- Kết luận ---------------- */
const IX_RESULT = sec("dai-hoi-ix", 9);
const X_RESULT = sec("dai-hoi-x", 6);
const CONCLUSION = sec("trach-nhiem-sinh-vien", 2);
const para = (s: LessonSection, i: number) => s.paragraphs?.[i];

export const CONCLUSION_DECK: DeckPart[] = [
  {
    id: "meaning",
    label: "1",
    title: "Ý nghĩa hai kỳ Đại hội",
    slides: [
      cover(
        "end-cover",
        "Kết luận",
        "Nhìn lại chặng đường 2001 – 2010",
        para(CONCLUSION, 0) ?? "",
        "hero_halong",
      ),
      {
        id: "end-ix",
        kind: "content",
        kicker: "Ý nghĩa của Đại hội IX",
        title: "Đại hội IX (2001)",
        section: {
          heading: "Đại hội IX – Khẳng định mô hình kinh tế & chiến lược 10 năm",
          paragraphs: [
            para(CONCLUSION, 1) ?? "",
            ...(IX_RESULT.paragraphs ?? []).filter((p) => p.startsWith("Ý nghĩa")),
          ],
          image: "badinh_hall",
          imageCaption: "Hội trường Ba Đình, Hà Nội – Đại hội đại biểu toàn quốc lần thứ IX",
        },
      },
      {
        id: "end-x",
        kind: "content",
        kicker: "Ý nghĩa của Đại hội X",
        title: "Đại hội X (2006)",
        section: {
          heading: "Đại hội X – Đẩy mạnh toàn diện công cuộc đổi mới",
          paragraphs: [para(CONCLUSION, 2) ?? "", ...(X_RESULT.paragraphs ?? [])],
          image: X_RESULT.image ?? "badinh_interior",
          imageCaption: "Toàn cảnh Đại hội X tại Hội trường Ba Đình, Hà Nội",
        },
      },
    ],
  },
  {
    id: "sea",
    label: "2",
    title: "Định hướng biển",
    slides: [
      {
        id: "end-09",
        kind: "content",
        kicker: "Vai trò của Nghị quyết 09-NQ/TW",
        title: "Biển trong chiến lược phát triển",
        section: {
          heading: "Nghị quyết số 09-NQ/TW năm 2007",
          paragraphs: [para(CONCLUSION, 3) ?? ""],
          image: "haiphong_port",
          imageCaption: "Cảng Hải Phòng – cửa ngõ thông thương hàng hải quốc tế",
        },
      },
      {
        id: "end-direction",
        kind: "content",
        kicker: "Định hướng & Giải pháp",
        title: "Quốc gia mạnh về biển, giàu từ biển",
        section: {
          heading: "Định hướng phát triển bền vững",
          paragraphs: [para(CONCLUSION, 4) ?? "", para(CONCLUSION, 5) ?? ""],
          image: "wind",
          imageCaption: "Cánh đồng điện gió Bạc Liêu – khai thác tiềm năng biển bền vững",
        },
      },
    ],
  },
  {
    id: "youth",
    label: "3",
    title: "Thế hệ trẻ",
    slides: [
      {
        id: "end-youth",
        kind: "content",
        kicker: "Trách nhiệm của thế hệ trẻ",
        title: "Hành động của sinh viên",
        section: { ...sec("trach-nhiem-sinh-vien", 1), heading: "Thế hệ trẻ" },
      },
      {
        id: "end-message",
        kind: "message",
        kicker: "Thông điệp",
        title: "Phát huy tiềm năng biển – Phát triển bền vững – Bảo vệ chủ quyền Việt Nam.",
        image: "sovereignty",
      },
    ],
  },
];

export function flatten(deck: DeckPart[]) {
  return deck.flatMap((part, partIndex) =>
    part.slides.map((slide) => ({ slide, part, partIndex })),
  );
}
