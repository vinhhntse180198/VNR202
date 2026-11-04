import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Compass,
  Gamepad2,
  Globe2,
  Landmark,
  MapPin,
  Scale,
  Sparkles,
  TrendingUp,
  Waves,
} from "lucide-react";

import { PageShell } from "@/components/PageShell";
import { img } from "@/lib/assets";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VNR202 – Đại hội IX, Đại hội X và kinh tế biển Việt Nam" },
      {
        name: "description",
        content:
          "Website thuyết trình tương tác môn Lịch sử Đảng: Đại hội IX (2001), Đại hội X (2006) và định hướng phát triển kinh tế biển Việt Nam.",
      },
      { property: "og:title", content: "VNR202 – Thuyết trình tương tác Lịch sử Đảng" },
      {
        property: "og:description",
        content: "Đại hội IX, Đại hội X và định hướng phát triển kinh tế biển Việt Nam.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

/** Mốc lịch sử – lấy nguyên từ tài liệu VNR202.docx */
const TIMELINE = [
  { year: "2001", text: "Đại hội IX · 19 – 22/4/2001" },
  { year: "2006", text: "Đại hội X · 18 – 25/4/2006" },
  { year: "2007", text: "Gia nhập WTO · Nghị quyết 09-NQ/TW" },
  { year: "2018", text: "Nghị quyết 36-NQ/TW" },
  { year: "2045", text: "Quốc gia biển mạnh" },
];

const AGENDA = [
  {
    n: "01",
    to: "/learning",
    title: "Học tập",
    text: "Đại hội IX, Đại hội X và so sánh hai kỳ Đại hội",
  },
  {
    n: "02",
    to: "/kinh-te-bien",
    title: "Kinh tế biển",
    text: "Tiềm năng, thực trạng, sáu nhóm giải pháp",
  },
  { n: "03", to: "/games", title: "Trò chơi", text: "Giải mã dấu ấn thời gian" },
  { n: "04", to: "/ket-luan", title: "Kết luận", text: "Ý nghĩa và thông điệp" },
] as const;

const MODULES = [
  {
    num: "01",
    title: "Học tập: Đại hội IX và Đại hội X",
    desc: "Khám phá bối cảnh lịch sử, con đường quá độ, mô hình kinh tế thị trường định hướng XHCN, đột phá cho phép đảng viên làm kinh tế tư nhân và bảng so sánh toàn diện.",
    to: "/learning",
    badge: "Lý luận & Thực tiễn",
    icon: BookOpen,
    color: "text-history border-history/30 bg-history/10",
    bullets: [
      "Chiến lược phát triển kinh tế – xã hội 10 năm (2001–2010)",
      "Đột phá lịch sử: Đảng viên làm kinh tế tư nhân tại Đại hội X",
      "Dòng thời gian tương tác 2001–2010 sticky theo cuộn trang",
    ],
  },
  {
    num: "02",
    title: "Kinh tế biển: Khát vọng biển lớn",
    desc: "Phân tích tiềm năng địa chính trị của hơn 3.260 km bờ biển, Nghị quyết 09-NQ/TW (2007), thực trạng, bản đồ tương tác các vùng kinh tế và 6 nhóm giải pháp bền vững.",
    to: "/kinh-te-bien",
    badge: "Chiến lược quốc gia",
    icon: Waves,
    color: "text-sea-deep border-sea/30 bg-sea/15",
    bullets: [
      "Chiến lược biển Việt Nam đến năm 2020 & Tầm nhìn đến 2045",
      "Bản đồ số hóa các trung tâm kinh tế biển trọng điểm",
      "Sáu nhóm giải pháp đồng bộ và trách nhiệm sinh viên",
    ],
  },
  {
    num: "03",
    title: "Trò chơi: Giải mã dấu ấn thời gian",
    desc: "Mini game tương tác kéo thả hoặc bấm chọn 10 sự kiện lịch sử then chốt vào đúng mốc năm, tính điểm theo thời gian thực và ghi nhận xếp hạng người chơi.",
    to: "/games",
    badge: "Tương tác khán giả",
    icon: Gamepad2,
    color: "text-gold-deep border-gold/40 bg-gold/15",
    bullets: [
      "10 câu hỏi thử thách sự kiện lịch sử 2001–2010",
      "Chế độ kéo thả và bấm chọn mượt mà trên cả máy tính & điện thoại",
      "Có gợi ý giải thích chi tiết và bảng thành tích trực tiếp",
    ],
  },
  {
    num: "04",
    title: "Kết luận: Tầm nhìn & Trách nhiệm",
    desc: "Tổng kết chặng đường 2001 – 2010, thông điệp hành động và trách nhiệm cụ thể của thế hệ sinh viên trong bảo vệ chủ quyền và phát triển kinh tế biển.",
    to: "/ket-luan",
    badge: "Thông điệp tuổi trẻ",
    icon: Landmark,
    color: "text-emerald-700 dark:text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
    bullets: [
      "Ý nghĩa lịch sử của hai kỳ Đại hội bản lề đầu thế kỷ XXI",
      "Định hướng đưa Việt Nam trở thành quốc gia mạnh về biển",
      "Trách nhiệm và hành động thiết thực của thế hệ sinh viên",
    ],
  },
];

function HomePage() {
  const hero = img("hero_halong");

  return (
    <PageShell>
      {/* Hero Section */}
      <section className="relative isolate flex min-h-[calc(100svh-4rem)] flex-col overflow-hidden">
        <img
          src={hero.url}
          alt={hero.alt}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="hero-overlay absolute inset-0 -z-10" />

        <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-5 py-16 md:py-24">
          <p className="animate-fade-up inline-flex w-fit items-center gap-2 rounded-full border border-gold/40 bg-history-deep/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-gold">
            <Landmark className="h-3.5 w-3.5" /> Thuyết trình Lịch sử Đảng · VNR202
          </p>

          <h1 className="animate-fade-up mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.08] text-primary-foreground md:text-6xl lg:text-7xl">
            Đại hội IX, Đại hội X và định hướng phát triển{" "}
            <span className="text-gold-gradient">kinh tế biển</span> Việt Nam
          </h1>

          <p className="animate-fade-up mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/90">
            Từ đường lối đổi mới năm 2001 và 2006 đến khát vọng đưa Việt Nam trở thành quốc gia mạnh
            về biển, giàu từ biển – trình bày qua ảnh tư liệu, dòng thời gian tương tác và các luận
            điểm sắc bén.
          </p>

          <div className="animate-fade-up mt-9 flex flex-wrap items-center gap-4">
            <Link
              to="/learning"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-history-deep shadow-lift transition-transform hover:-translate-y-0.5"
            >
              Bắt đầu bài học <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/kinh-te-bien"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 backdrop-blur px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/20"
            >
              <Waves className="h-4 w-4 text-gold" /> Chuyên đề Kinh tế biển
            </Link>
          </div>

          {/* Dòng thời gian 5 mốc chính trên Hero */}
          <ol className="mt-14 max-w-4xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 border-t border-primary-foreground/25 pt-6">
            {TIMELINE.map((t) => (
              <li key={t.year} className="space-y-1">
                <p className="font-display text-2xl font-bold text-gold">{t.year}</p>
                <p className="text-xs leading-snug text-primary-foreground/80">{t.text}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Thanh chuyển hướng nhanh 4 phần dưới Hero */}
        <nav
          aria-label="Mạch thuyết trình"
          className="border-t border-primary-foreground/20 bg-history-deep/65 backdrop-blur-md"
        >
          <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
            {AGENDA.map((a) => (
              <Link
                key={a.to}
                to={a.to}
                className="group border-primary-foreground/15 p-5 text-primary-foreground transition-colors hover:bg-primary-foreground/10 md:border-l md:first:border-l-0"
              >
                <p className="font-display text-sm text-gold">{a.n}</p>
                <p className="mt-1 flex items-center gap-2 font-semibold text-sm">
                  {a.title}{" "}
                  <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                </p>
                <p className="mt-1 text-xs text-primary-foreground/75 line-clamp-1">{a.text}</p>
              </Link>
            ))}
          </div>
        </nav>
      </section>

      {/* ================================================================
          KHUNG SỐ LIỆU & THÀNH TỰU NỔI BẬT GIAI ĐOẠN 2001 – 2010
          ================================================================ */}
      <section className="border-b border-border bg-card/60 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep dark:text-gold">
              <TrendingUp className="h-3.5 w-3.5" /> Dấu ấn thập niên 2001 – 2010
            </span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-foreground">
              Những con số khẳng định bước chuyển mình của đất nước
            </h2>
            <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">
              Mười năm thực hiện Chiến lược phát triển kinh tế – xã hội (2001–2010) qua hai kỳ Đại
              hội IX và X đã đưa Việt Nam ra khỏi khủng hoảng, chính thức gia nhập WTO và định hình
              chiến lược biển lâu dài.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-xs hover:border-gold/50 transition-colors">
              <p className="font-display text-4xl font-bold text-history">~7%/năm</p>
              <h3 className="mt-3 text-sm font-bold uppercase tracking-wider text-foreground">
                Tốc độ tăng trưởng GDP bình quân
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Kinh tế duy trì đà tăng trưởng cao liên tục, đứng vững và phục hồi nhanh trước tác
                động của cuộc khủng hoảng tài chính toàn cầu năm 2008.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-xs hover:border-gold/50 transition-colors">
              <p className="font-display text-4xl font-bold text-gold-deep">1.168 USD</p>
              <h3 className="mt-3 text-sm font-bold uppercase tracking-wider text-foreground">
                GDP bình quân đầu người (2010)
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Tăng gấp gần 3 lần so với năm 2000, đưa mức sống và thu nhập của người dân cải thiện
                rõ rệt cả ở thành thị và nông thôn.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-xs hover:border-gold/50 transition-colors">
              <p className="font-display text-4xl font-bold text-emerald-600 dark:text-emerald-400">
                Năm 2008
              </p>
              <h3 className="mt-3 text-sm font-bold uppercase tracking-wider text-foreground">
                Ra khỏi nhóm nước nghèo
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Dấu mốc lịch sử hoàn thành sớm mục tiêu đưa Việt Nam bước vào nhóm nước đang phát
                triển có thu nhập trung bình.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-xs hover:border-gold/50 transition-colors">
              <p className="font-display text-4xl font-bold text-sea">~230</p>
              <h3 className="mt-3 text-sm font-bold uppercase tracking-wider text-foreground">
                Đối tác thương mại toàn cầu
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Gia nhập WTO (11/01/2007) mở toang cánh cửa hội nhập sâu rộng, thiết lập quan hệ
                giao thương với hầu hết các nền kinh tế trên thế giới.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-xs hover:border-gold/50 transition-colors">
              <p className="font-display text-4xl font-bold text-history">19.88 tỷ USD</p>
              <h3 className="mt-3 text-sm font-bold uppercase tracking-wider text-foreground">
                Thu hút vốn FDI năm 2010
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Tăng gần gấp 3 lần so với mức 6,84 tỷ USD năm 2005, khẳng định niềm tin mạnh mẽ của
                cộng đồng quốc tế vào môi trường đầu tư tại Việt Nam.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-xs hover:border-gold/50 transition-colors">
              <p className="font-display text-4xl font-bold text-sea">53–55%</p>
              <h3 className="mt-3 text-sm font-bold uppercase tracking-wider text-foreground">
                Đóng góp GDP từ kinh tế biển
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Mục tiêu đề ra tại Nghị quyết số 09-NQ/TW (năm 2007), biến biển thành động lực tăng
                trưởng hàng đầu và không gian sinh tồn chiến lược của Tổ quốc.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          CÁC CHUYÊN ĐỀ THUYẾT TRÌNH TRỌNG TÂM (MODULES)
          ================================================================ */}
      <section className="py-16 md:py-24 border-b border-border bg-background">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-10 border-b border-border">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-history">
                Cấu trúc nội dung
              </span>
              <h2 className="mt-2 font-display text-3xl md:text-5xl font-bold text-foreground">
                Bốn phần thuyết trình tương tác
              </h2>
            </div>
            <p className="max-w-md text-sm text-muted-foreground leading-relaxed">
              Thiết kế chuyên biệt cho buổi báo cáo Lịch sử Đảng VNR202 với ảnh tư liệu, số liệu
              trực quan và mini game thử thách khán giả.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {MODULES.map((m) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.num}
                  className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-8 shadow-card transition-all duration-300 hover:border-gold/60 hover:-translate-y-1 hover:shadow-lift"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-display text-3xl font-bold text-gold tracking-tight">
                        {m.num}
                      </span>
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full border ${m.color}`}
                      >
                        {m.badge}
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-2xl font-bold text-foreground group-hover:text-history transition-colors">
                      {m.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.desc}</p>

                    <ul className="mt-6 space-y-2.5 border-t border-border/70 pt-4">
                      {m.bullets.map((b, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-xs text-foreground/85 leading-relaxed"
                        >
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-5 border-t border-border/80">
                    <Link
                      to={m.to}
                      className="inline-flex items-center gap-2 text-sm font-bold text-history hover:text-gold-deep transition-colors"
                    >
                      Khám phá chuyên đề{" "}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================
          BANNER KÊU GỌI BẮT ĐẦU BUỔI BÁO CÁO
          ================================================================ */}
      <section className="history-band text-primary-foreground py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-gold">
            Học phần VNR202 · Lịch sử Đảng Cộng sản Việt Nam
          </p>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold text-white leading-tight">
            Sẵn sàng bước vào hành trình lịch sử 2001 – 2010
          </h2>
          <p className="mt-4 text-base md:text-lg text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Hệ thống timeline trực quan, các luận điểm lý luận cốt lõi và câu hỏi tương tác đã sẵn
            sàng cho một buổi thuyết trình thành công và ấn tượng.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/learning"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-base font-bold text-history-deep shadow-lift transition-transform hover:-translate-y-0.5"
            >
              Bắt đầu thuyết trình ngay <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/games"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 bg-history-deep/40 px-7 py-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-history-deep/60"
            >
              <Gamepad2 className="h-4 w-4 text-gold" /> Trò chơi tương tác
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
