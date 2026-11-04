import { getLesson, type LessonSection } from "@/data/lessons";
import type { ImageKey } from "@/lib/assets";
import { DOCUMENT_EVENT_DETAILS } from "@/data/history-document";

export interface HistoryEvent {
  id: string;
  lessonSlug: "dai-hoi-ix" | "dai-hoi-x";
  date: string;
  year: string;
  sortDate: string;
  title: string;
  summary: string;
  meaning: string;
  image?: ImageKey;
  caption?: string;
  sectionIndexes: number[];
  bulletIndexes?: number[];
  maritime?: boolean;
}

// Dates checked against the user's VNR202.docx; extra detail is extracted without adding dates.
const ix = getLesson("dai-hoi-ix");
const x = getLesson("dai-hoi-x");
function bullet(lesson: typeof ix, section: number, index: number) {
  return lesson?.sections[section]?.bullets?.[index] ?? "";
}
export const HISTORY_EVENTS: HistoryEvent[] = [
  {
    id: "ix-2001",
    lessonSlug: "dai-hoi-ix",
    date: "19–22/04/2001",
    year: "2001",
    sortDate: "2001-04-19",
    title: "Đại hội đại biểu toàn quốc lần thứ IX",
    summary: ix?.subtitle ?? "",
    meaning: ix?.sections[6]?.note ?? "",
    image: "badinh_hall",
    caption: "Hội trường Ba Đình, Hà Nội — ảnh địa điểm, không phải ảnh chụp Đại hội.",
    sectionIndexes: [0, 1, 2, 3, 4, 5, 6, 7],
  },
  {
    id: "ix-doanh-nghiep",
    lessonSlug: "dai-hoi-ix",
    date: "24/09/2001",
    year: "2001",
    sortDate: "2001-09-24",
    title: "Đổi mới doanh nghiệp nhà nước",
    summary: bullet(ix, 8, 0),
    meaning: "Tiếp tục sắp xếp, đổi mới, phát triển và nâng cao hiệu quả doanh nghiệp nhà nước.",
    sectionIndexes: [8],
    bulletIndexes: [0],
  },
  {
    id: "ix-dai-doan-ket",
    lessonSlug: "dai-hoi-ix",
    date: "12/03/2003",
    year: "2003",
    sortDate: "2003-03-12",
    title: "Đại đoàn kết · Dân tộc · Tôn giáo",
    summary: bullet(ix, 8, 3),
    meaning: ix?.sections[7]?.paragraphs?.[0] ?? "",
    sectionIndexes: [8],
    bulletIndexes: [3],
  },
  {
    id: "ix-kieu-bao",
    lessonSlug: "dai-hoi-ix",
    date: "26/03/2004",
    year: "2004",
    sortDate: "2004-03-26",
    title: "Công tác đối với người Việt Nam ở nước ngoài",
    summary: bullet(ix, 8, 4),
    meaning: "Cộng đồng kiều bào là bộ phận không tách rời của cộng đồng dân tộc Việt Nam.",
    sectionIndexes: [8],
    bulletIndexes: [4],
  },
  {
    id: "ix-ket-qua",
    lessonSlug: "dai-hoi-ix",
    date: "2001–2005",
    year: "2005",
    sortDate: "2005-12-31",
    title: "Kết quả, hạn chế và ý nghĩa",
    summary: ix?.sections[9]?.paragraphs?.[0] ?? "",
    meaning: ix?.sections[9]?.paragraphs?.[2] ?? "",
    image: "modernization",
    caption: "Hà Nội hiện đại — ảnh liên hệ thực tiễn, không phải ảnh giai đoạn 2001–2005.",
    sectionIndexes: [9],
  },
  {
    id: "x-2006",
    lessonSlug: "dai-hoi-x",
    date: "18–25/04/2006",
    year: "2006",
    sortDate: "2006-04-18",
    title: "Đại hội đại biểu toàn quốc lần thứ X",
    summary: x?.subtitle ?? "",
    meaning: x?.sections[2]?.note ?? "",
    image: "badinh_interior",
    caption: "Nội thất Hội trường Ba Đình, Hà Nội — ảnh địa điểm, không phải ảnh chụp Đại hội.",
    sectionIndexes: [0, 1, 2, 3, 4],
  },
  {
    id: "x-chong-tham-nhung",
    lessonSlug: "dai-hoi-x",
    date: "21/08/2006",
    year: "2006",
    sortDate: "2006-08-21",
    title: "Phòng, chống tham nhũng, lãng phí",
    summary: bullet(x, 5, 0),
    meaning: "Tăng cường sự lãnh đạo của Đảng đối với công tác phòng, chống tham nhũng, lãng phí.",
    sectionIndexes: [5],
    bulletIndexes: [0],
  },
  {
    id: "x-wto",
    lessonSlug: "dai-hoi-x",
    date: "11/01/2007",
    year: "2007",
    sortDate: "2007-01-11",
    title: "Việt Nam chính thức gia nhập WTO",
    summary: bullet(x, 5, 4),
    meaning: "Chủ động và tích cực hội nhập kinh tế quốc tế.",
    image: "wto_geneva",
    caption: "Trụ sở WTO tại Geneva, Thụy Sĩ — ảnh địa điểm, không phải ảnh lễ gia nhập.",
    sectionIndexes: [5],
    bulletIndexes: [4, 5],
  },
  {
    id: "x-hoi-nhap",
    lessonSlug: "dai-hoi-x",
    date: "05/02/2007",
    year: "2007",
    sortDate: "2007-02-05",
    title: "Phát triển kinh tế trong thời kỳ hội nhập",
    summary: bullet(x, 5, 5),
    meaning: "Nền kinh tế phát triển nhanh và bền vững khi Việt Nam là thành viên WTO.",
    sectionIndexes: [5],
    bulletIndexes: [5],
  },
  {
    id: "x-chien-luoc-bien",
    lessonSlug: "dai-hoi-x",
    date: "09/02/2007",
    year: "2007",
    sortDate: "2007-02-09",
    title: "Chiến lược biển Việt Nam đến năm 2020",
    summary: bullet(x, 5, 6),
    meaning: "Phấn đấu đưa Việt Nam trở thành quốc gia mạnh về biển, làm giàu từ biển.",
    image: "map_vietnam",
    caption: "Bản đồ địa hình Việt Nam — không gian biển, đảo trong chiến lược phát triển.",
    sectionIndexes: [5],
    bulletIndexes: [6],
    maritime: true,
  },
  {
    id: "x-kiem-tra",
    lessonSlug: "dai-hoi-x",
    date: "30/07/2007",
    year: "2007",
    sortDate: "2007-07-30",
    title: "Kiểm tra, giám sát và phương thức lãnh đạo",
    summary: bullet(x, 5, 1),
    meaning: "Tăng cường công tác kiểm tra, giám sát và đổi mới phương thức lãnh đạo của Đảng.",
    sectionIndexes: [5],
    bulletIndexes: [1],
  },
  {
    id: "x-thanh-nien",
    lessonSlug: "dai-hoi-x",
    date: "25/07/2008",
    year: "2008",
    sortDate: "2008-07-25",
    title: "Công tác thanh niên",
    summary: "Nghị quyết số 25-NQ/TW ngày 25/7/2008 về công tác thanh niên.",
    meaning: "Nghị quyết số 25-NQ/TW về công tác thanh niên.",
    sectionIndexes: [5],
    bulletIndexes: [2],
  },
  {
    id: "x-tri-thuc",
    lessonSlug: "dai-hoi-x",
    date: "06/08/2008",
    year: "2008",
    sortDate: "2008-08-06",
    title: "Xây dựng đội ngũ trí thức",
    summary: "Nghị quyết số 27-NQ/TW ngày 6/8/2008 về xây dựng đội ngũ trí thức.",
    meaning: "Nghị quyết số 27-NQ/TW về xây dựng đội ngũ trí thức.",
    sectionIndexes: [5],
    bulletIndexes: [2],
  },
  {
    id: "x-ket-qua",
    lessonSlug: "dai-hoi-x",
    date: "2006–2010",
    year: "2010",
    sortDate: "2010-12-31",
    title: "Kết quả và những vấn đề đặt ra",
    summary: "Việt Nam ra khỏi nhóm nước nghèo từ năm 2008.",
    meaning: x?.sections[6]?.note ?? "",
    image: "modernization",
    caption: "Hà Nội hiện đại — ảnh liên hệ thực tiễn, không phải ảnh giai đoạn 2006–2010.",
    sectionIndexes: [6],
  },
];

export const LEARNING_PARTS = ["dai-hoi-ix", "dai-hoi-x", "kinh-te-bien"] as const;
export function getHistoryEvent(id: string) {
  return HISTORY_EVENTS.find((event) => event.id === id);
}
export function eventsForLesson(slug: string) {
  return HISTORY_EVENTS.filter((event) => event.lessonSlug === slug);
}
export function eventSections(event: HistoryEvent): LessonSection[] {
  const lesson = getLesson(event.lessonSlug);
  if (!lesson) return [];
  const sections = event.sectionIndexes.flatMap((index) => {
    const section = lesson.sections[index];
    if (!section) return [];
    const { image, imageCaption, ...content } = section;
    if (event.bulletIndexes && content.bullets)
      content.bullets = content.bullets.filter((_, i) => event.bulletIndexes?.includes(i));
    return [content];
  });
  return [...sections, ...(DOCUMENT_EVENT_DETAILS[event.id] ?? [])];
}

export const MARITIME_TOPICS = [
  {
    title: "Cơ sở hình thành và tiềm năng",
    slug: "chien-luoc-bien",
    section: 1,
    image: "map_vietnam",
  },
  {
    title: "Chiến lược biển đến năm 2020",
    slug: "chien-luoc-bien",
    section: 2,
    image: "haiphong_port",
    date: "09/02/2007 · Nghị quyết 09-NQ/TW",
  },
  {
    title: "Phát triển bền vững đến 2030, tầm nhìn 2045",
    slug: "chien-luoc-bien",
    section: 2,
    image: "wind",
    date: "22/10/2018 · Nghị quyết 36-NQ/TW",
  },
  { title: "Thành tựu và thách thức", slug: "chien-luoc-bien", section: 3, image: "fishing" },
  {
    title: "Sáu nhóm giải pháp phát triển bền vững",
    slug: "giai-phap-kinh-te-bien",
    section: 1,
    image: "mangrove",
  },
  {
    title: "Trách nhiệm của sinh viên",
    slug: "trach-nhiem-sinh-vien",
    section: 1,
    image: "phuquoc",
  },
] satisfies { title: string; slug: string; section: number; image: ImageKey; date?: string }[];
