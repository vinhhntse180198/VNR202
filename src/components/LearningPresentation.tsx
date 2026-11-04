import { useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  Award,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Compass,
  FileText,
  Globe2,
  Landmark,
  Layers,
  Lightbulb,
  Scale,
  Shield,
  Sparkles,
  TrendingUp,
  Users,
  Waves,
} from "lucide-react";

import {
  InteractiveTimelineBoard,
  StickyDesktopTimelineRail,
  StickyMobileTimeline,
} from "@/components/InteractiveTimeline";
import { scrollToMilestone } from "@/data/presentation-timeline";
import { getLesson } from "@/data/lessons";
import { DOCUMENT_EVENT_DETAILS } from "@/data/history-document";
import { img, type ImageKey } from "@/lib/assets";
import { cn } from "@/lib/utils";

const IX = getLesson("dai-hoi-ix")!;
const X = getLesson("dai-hoi-x")!;

function SectionBadge({ children, icon: Icon }: { children: ReactNode; icon?: typeof Landmark }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-history/25 bg-history/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-history">
      {Icon && <Icon className="h-3.5 w-3.5" />}
      {children}
    </span>
  );
}

function ArchivalPhoto({
  imageKey,
  caption,
  aspect = "aspect-[16/9]",
}: {
  imageKey: ImageKey;
  caption: string;
  aspect?: string;
}) {
  const photo = img(imageKey);
  return (
    <figure className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card">
      <div className={cn("overflow-hidden", aspect)}>
        <img
          src={photo.url}
          alt={photo.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <figcaption className="border-t border-border/80 bg-card/90 px-4 py-2.5 text-xs leading-relaxed text-muted-foreground">
        <span className="font-semibold text-foreground/80">Ảnh tư liệu: </span>
        {caption}
      </figcaption>
    </figure>
  );
}

function AnalysisNote({
  title = "Ý nghĩa & Phân tích lý luận",
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <div className="mt-6 rounded-xl border-l-4 border-gold bg-gold/5 dark:bg-gold/10 p-5 shadow-xs">
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold-deep dark:text-gold mb-1.5">
        <Lightbulb className="h-4 w-4" />
        {title}
      </div>
      <div className="text-sm leading-relaxed text-foreground/90 font-medium">{children}</div>
    </div>
  );
}

function DeepDiveSection({
  title,
  details,
}: {
  title: string;
  details?: { heading: string; paragraphs?: string[]; bullets?: string[]; note?: string }[];
}) {
  const [open, setOpen] = useState(false);
  if (!details || details.length === 0) return null;

  return (
    <div className="mt-5 pt-3 border-t border-border/60">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-history hover:text-gold-deep transition-colors cursor-pointer"
        aria-expanded={open}
      >
        <FileText className="h-3.5 w-3.5" />
        {open ? "Thu gọn phân tích chuyên sâu" : title}
        <ChevronDown
          className={cn("h-3.5 w-3.5 transition-transform duration-200", open && "rotate-180")}
        />
      </button>

      {open && (
        <div className="mt-4 space-y-4 rounded-xl border border-border/80 bg-muted/30 p-4 text-xs leading-relaxed text-muted-foreground animate-pop">
          {details.map((d, i) => (
            <div key={i} className="space-y-2">
              <p className="font-semibold text-foreground text-sm">{d.heading}</p>
              {d.paragraphs?.map((p, pIdx) => (
                <p key={pIdx}>{p}</p>
              ))}
              {d.bullets && (
                <ul className="space-y-1.5 pl-4 list-disc text-foreground/85">
                  {d.bullets.map((b, bIdx) => (
                    <li key={bIdx}>{b}</li>
                  ))}
                </ul>
              )}
              {d.note && (
                <p className="italic text-foreground/80 border-l-2 border-gold pl-2.5 mt-2">
                  {d.note}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function LearningPresentation() {
  const heroPhoto = img("badinh_hall");

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ================================================================
          PHẦN A: GIỚI THIỆU ĐẠI HỘI IX VÀ ĐẠI HỘI X
          ================================================================ */}
      <header id="gioi-thieu" className="relative isolate overflow-hidden border-b border-border">
        <img
          src={heroPhoto.url}
          alt={heroPhoto.alt}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="hero-overlay absolute inset-0 -z-10" />

        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28 text-primary-foreground">
          <p className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-gold/40 bg-history-deep/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-gold">
            <Landmark className="h-3.5 w-3.5" /> Phần A · Giới thiệu chủ đề · VNR202
          </p>

          <h1 className="animate-fade-up mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.08] text-white md:text-6xl lg:text-7xl">
            Đại hội IX và Đại hội X
          </h1>

          <p className="animate-fade-up mt-4 max-w-3xl font-display text-xl md:text-2xl text-gold">
            Hai chặng đường tiếp tục đổi mới (2001 – 2010): bối cảnh, nội dung, triển khai và ý
            nghĩa
          </p>

          <p className="animate-fade-up mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-primary-foreground/90">
            Từ thời khắc bước vào thế kỷ XXI (2001) đến mốc tổng kết 20 năm Đổi mới (2006) và Chiến
            lược biển (2007) – hành trình hoàn thiện nhận thức lý luận, giải phóng sức sản xuất và
            chủ động hội nhập quốc tế.
          </p>

          {/* 4 Nút điều hướng mạch thuyết trình nhanh */}
          <div className="animate-fade-up mt-10 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => scrollToMilestone("timeline-2001-2010")}
              className="story-chip cursor-pointer"
            >
              <span className="font-display text-gold">B.</span> Timeline lịch sử 2001–2010
            </button>
            <button
              type="button"
              onClick={() => scrollToMilestone("dai-hoi-ix")}
              className="story-chip cursor-pointer"
            >
              <span className="font-display text-gold">C.</span> Đại hội IX (2001)
            </button>
            <button
              type="button"
              onClick={() => scrollToMilestone("dai-hoi-x")}
              className="story-chip cursor-pointer"
            >
              <span className="font-display text-gold">D.</span> Đại hội X (2006)
            </button>
            <button
              type="button"
              onClick={() => scrollToMilestone("so-sanh-danh-gia")}
              className="story-chip cursor-pointer"
            >
              <span className="font-display text-gold">E.</span> So sánh & Đánh giá
            </button>
          </div>
        </div>
      </header>

      {/* ================================================================
          PHẦN B: TIMELINE LỊCH SỬ 2001–2010 (ĐƯỢC ĐẶT NGAY SAU PHẦN GIỚI THIỆU)
          ================================================================ */}
      <InteractiveTimelineBoard />

      {/* Sticky Mobile Timeline Bar (Hiển thị cố định trên điện thoại) */}
      <StickyMobileTimeline />

      {/* ================================================================
          KHU VỰC THUYẾT TRÌNH CHI TIẾT (C, D, E) KÈM STICKY RAIL DỌC TRÊN DESKTOP
          ================================================================ */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 md:py-20 lg:flex lg:gap-12">
        {/* Sticky Desktop Timeline Rail bám theo cuộn trang */}
        <StickyDesktopTimelineRail />

        {/* Nội dung chi tiết các phần */}
        <main className="min-w-0 flex-1 space-y-24 md:space-y-32">
          {/* ============================================================
              PHẦN C: ĐẠI HỘI IX (2001)
              ============================================================ */}
          <section id="dai-hoi-ix" className="scroll-mt-24 space-y-16">
            {/* Header Phần C */}
            <div className="border-b border-border pb-8">
              <SectionBadge icon={Landmark}>Phần C · Đại hội IX (2001)</SectionBadge>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-foreground md:text-5xl">
                Đại hội đại biểu toàn quốc lần thứ IX
              </h2>
              <p className="mt-3 text-lg font-medium text-history">
                19 – 22/4/2001 · Hội trường Ba Đình, Hà Nội
              </p>
              <p className="mt-3 max-w-3xl text-base text-muted-foreground leading-relaxed">
                Đại hội diễn ra vào thời khắc mở đầu thế kỷ XXI, sau 15 năm thực hiện đường lối Đổi
                mới, xác định mô hình kinh tế tổng quát và Chiến lược phát triển kinh tế – xã hội 10
                năm (2001–2010).
              </p>
            </div>

            {/* C.1: Bối cảnh quốc tế và trong nước */}
            <article id="ix-boi-canh" className="scroll-mt-24 space-y-8">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-history text-white font-display text-sm font-bold">
                  C.1
                </span>
                <h3 className="font-display text-2xl font-bold md:text-3xl">
                  Bối cảnh quốc tế và trong nước
                </h3>
              </div>

              <div className="grid gap-8 md:grid-cols-2 items-center">
                <ArchivalPhoto
                  imageKey="congress_hall"
                  caption="Hội trường Ba Đình, Hà Nội – nơi diễn ra Đại hội đại biểu toàn quốc lần thứ IX (tháng 4/2001)."
                />
                <div className="space-y-4">
                  <p className="text-lg font-medium leading-relaxed text-foreground">
                    Đại hội IX được tổ chức khi đất nước đứng trước những thời cơ và thách thức mới
                    của công cuộc công nghiệp hóa, hiện đại hóa sau 15 năm Đổi mới (1986–2001).
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Tình hình thế giới biến đổi nhanh chóng với cuộc cách mạng khoa học – công nghệ
                    và xu thế toàn cầu hóa, đòi hỏi Đảng ta phải có bước phát triển lý luận để định
                    hình con đường đi lên của dân tộc.
                  </p>
                </div>
              </div>

              {/* So sánh Bối cảnh Quốc tế vs Trong nước */}
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-border bg-card p-6 shadow-xs">
                  <div className="flex items-center gap-2 text-history font-display font-bold text-lg">
                    <Globe2 className="h-5 w-5" /> Bối cảnh quốc tế
                  </div>
                  <ul className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/85">
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1 h-2 w-2 rounded-full bg-history shrink-0" />
                      <span>
                        <strong>Cách mạng KH-CN & kinh tế tri thức:</strong> Phát triển mạnh mẽ,
                        thúc đẩy quá trình toàn cầu hóa sâu rộng trong mọi lĩnh vực.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1 h-2 w-2 rounded-full bg-history shrink-0" />
                      <span>
                        <strong>Khu vực châu Á – Thái Bình Dương:</strong> Trở thành động lực kinh
                        tế năng động nhưng vẫn tiềm ẩn nhân tố bất ổn.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1 h-2 w-2 rounded-full bg-history shrink-0" />
                      <span>
                        <strong>Thời cơ & Áp lực:</strong> Tạo điều kiện mở rộng quan hệ quốc tế,
                        thu hút vốn và công nghệ; nhưng gia tăng sức ép cạnh tranh gay gắt.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-border bg-card p-6 shadow-xs">
                  <div className="flex items-center gap-2 text-gold-deep font-display font-bold text-lg">
                    <Landmark className="h-5 w-5" /> Bối cảnh trong nước
                  </div>
                  <ul className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/85">
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1 h-2 w-2 rounded-full bg-gold shrink-0" />
                      <span>
                        <strong>Thành tựu 15 năm Đổi mới:</strong> Nền kinh tế từng bước chuyển sang
                        cơ chế thị trường có sự quản lý của Nhà nước, đời sống nhân dân cải thiện rõ
                        nét.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1 h-2 w-2 rounded-full bg-gold shrink-0" />
                      <span>
                        <strong>Ổn định chính trị – xã hội:</strong> Giữ vững chủ quyền, an ninh
                        quốc phòng, quan hệ đối ngoại ngày càng mở rộng.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1 h-2 w-2 rounded-full bg-gold shrink-0" />
                      <span>
                        <strong>Hạn chế còn tồn tại:</strong> Một số chỉ tiêu Đại hội VIII chưa đạt;
                        chất lượng tăng trưởng, hiệu quả nguồn lực và sức cạnh tranh còn thấp.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </article>

            {/* C.2: Nội dung cơ bản của Đại hội IX */}
            <article id="moc-2001" className="scroll-mt-24 space-y-8 pt-10 border-t border-border">
              <div id="ix-2001" className="scroll-mt-24" />
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-history text-white font-display text-sm font-bold">
                  C.2
                </span>
                <div>
                  <h3 className="font-display text-2xl font-bold md:text-3xl">
                    Nội dung cơ bản của Đại hội IX
                  </h3>
                  <p className="text-xs font-semibold text-history uppercase tracking-wider mt-0.5">
                    Dấu mốc 2001: Xác lập mô hình kinh tế thị trường định hướng XHCN
                  </p>
                </div>
              </div>

              {/* Mục tiêu chiến lược 10 năm (2001–2010) */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <div className="flex items-center justify-between pb-4 border-b border-border">
                  <h4 className="font-display text-xl font-bold">
                    Chiến lược phát triển kinh tế – xã hội 10 năm (2001–2010)
                  </h4>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-gold/15 text-gold-deep border border-gold/30">
                    Kế hoạch 10 năm
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Chiến lược thể hiện bước chuyển trọng yếu từ nhiệm vụ chủ yếu là ổn định kinh tế
                  sang đẩy mạnh tăng trưởng và công nghiệp hóa, hiện đại hóa đất nước.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="rounded-xl border border-border bg-muted/20 p-4">
                    <p className="font-display text-2xl font-bold text-history">Mục tiêu 1</p>
                    <p className="mt-2 text-xs leading-relaxed text-foreground font-medium">
                      Đưa Việt Nam ra khỏi tình trạng kém phát triển.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-muted/20 p-4">
                    <p className="font-display text-2xl font-bold text-history">Gấp đôi GDP</p>
                    <p className="mt-2 text-xs leading-relaxed text-foreground font-medium">
                      Phấn đấu GDP năm 2010 tăng gấp đôi so với năm 2000.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-muted/20 p-4">
                    <p className="font-display text-2xl font-bold text-history">Đời sống</p>
                    <p className="mt-2 text-xs leading-relaxed text-foreground font-medium">
                      Nâng cao rõ rệt đời sống vật chất và tinh thần của nhân dân.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-muted/20 p-4">
                    <p className="font-display text-2xl font-bold text-history">Tầm nhìn 2020</p>
                    <p className="mt-2 text-xs leading-relaxed text-foreground font-medium">
                      Tạo nền tảng để cơ bản trở thành nước công nghiệp theo hướng hiện đại.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mô hình kinh tế thị trường định hướng XHCN */}
              <div className="rounded-2xl border-2 border-history/40 bg-card p-6 md:p-8 shadow-card">
                <div className="flex items-center gap-3">
                  <Scale className="h-6 w-6 text-history" />
                  <div>
                    <h4 className="font-display text-2xl font-bold text-foreground">
                      Kinh tế thị trường định hướng xã hội chủ nghĩa
                    </h4>
                    <p className="text-xs font-semibold text-history uppercase tracking-wider">
                      Mô hình kinh tế tổng quát của Việt Nam trong thời kỳ quá độ
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Đại hội IX xác định thực hiện nhất quán và lâu dài nền kinh tế thị trường định
                  hướng xã hội chủ nghĩa, với 4 đặc trưng rường cột:
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="deck-point">
                    <span className="deck-point-n">01</span>
                    <div>
                      <p className="font-bold text-sm text-foreground">Nhiều hình thức sở hữu</p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Sở hữu toàn dân, sở hữu tập thể, sở hữu tư nhân, sở hữu hỗn hợp.
                      </p>
                    </div>
                  </div>
                  <div className="deck-point">
                    <span className="deck-point-n">02</span>
                    <div>
                      <p className="font-bold text-sm text-foreground">Nhiều thành phần kinh tế</p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Kinh tế nhà nước giữ vai trò chủ đạo, bình đẳng trước pháp luật.
                      </p>
                    </div>
                  </div>
                  <div className="deck-point">
                    <span className="deck-point-n">03</span>
                    <div>
                      <p className="font-bold text-sm text-foreground">Nhiều hình thức phân phối</p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Phân phối theo kết quả lao động, hiệu quả kinh tế và mức đóng góp vốn.
                      </p>
                    </div>
                  </div>
                  <div className="deck-point">
                    <span className="deck-point-n">04</span>
                    <div>
                      <p className="font-bold text-sm text-foreground">
                        Vận hành theo cơ chế thị trường có quản lý
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Nhà nước quản lý định hướng tới các mục tiêu xã hội chủ nghĩa.
                      </p>
                    </div>
                  </div>
                </div>

                <AnalysisNote>
                  Đây là một trong những nội dung có ý nghĩa đột phá lớn nhất của Đại hội IX. Đại
                  hội đã khắc phục triệt để quan niệm sai lầm coi kinh tế thị trường chỉ thuộc về
                  chủ nghĩa tư bản, khẳng định kinh tế thị trường là phương tiện khách quan để phát
                  triển lực lượng sản xuất phục vụ mục tiêu XHCN.
                </AnalysisNote>
              </div>

              {/* Văn hóa, đại đoàn kết và đối ngoại */}
              <div className="grid gap-6 md:grid-cols-2 items-center">
                <div className="space-y-4">
                  <h4 className="font-display text-xl font-bold">
                    Văn hóa, đại đoàn kết và đường lối đối ngoại
                  </h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Đại hội khẳng định xây dựng nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân
                    tộc là nền tảng tinh thần của xã hội, vừa là mục tiêu vừa là động lực thúc đẩy
                    phát triển kinh tế – xã hội.
                  </p>
                  <blockquote className="story-quote">
                    "Việt Nam sẵn sàng là bạn, là đối tác tin cậy của các nước trong cộng đồng quốc
                    tế, phấn đấu vì hòa bình, độc lập và phát triển."
                  </blockquote>
                </div>
                <ArchivalPhoto
                  imageKey="modernization"
                  caption="Hà Nội hôm nay – sự chuyển mình mạnh mẽ bắt đầu từ các đột phá đường lối tại Đại hội IX."
                />
              </div>
            </article>

            {/* C.3: Quá trình triển khai thực hiện 2001–2005 */}
            <article
              id="moc-2001-2005"
              className="scroll-mt-24 space-y-8 pt-10 border-t border-border"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-history text-white font-display text-sm font-bold">
                  C.3
                </span>
                <div>
                  <h3 className="font-display text-2xl font-bold md:text-3xl">
                    Quá trình triển khai thực hiện Nghị quyết Đại hội IX (2001–2005)
                  </h3>
                  <p className="text-xs font-semibold text-history uppercase tracking-wider mt-0.5">
                    Dấu mốc 2001–2005: Ban hành các nghị quyết then chốt về thể chế
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {/* Mốc 1: DNNN */}
                <div
                  id="ix-doanh-nghiep"
                  className="scroll-mt-24 rounded-2xl border border-border bg-card p-6 shadow-xs"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-display text-base font-bold text-history">
                      24/09/2001 · Hội nghị Trung ương 3 khóa IX
                    </span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-history/10 text-history font-semibold">
                      Nghị quyết số 05-NQ/TW
                    </span>
                  </div>
                  <h4 className="mt-2 text-base font-bold text-foreground">
                    Sắp xếp, đổi mới, phát triển và nâng cao hiệu quả doanh nghiệp nhà nước
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Tập trung vào việc đổi mới tổ chức, phương thức quản lý và hoạt động của DNNN,
                    từng bước nâng cao hiệu quả sử dụng vốn và các nguồn lực sản xuất, khẳng định
                    vai trò chủ đạo của kinh tế nhà nước trong nền kinh tế thị trường.
                  </p>
                  <DeepDiveSection
                    title="Xem chi tiết Nghị quyết 05-NQ/TW"
                    details={DOCUMENT_EVENT_DETAILS["ix-doanh-nghiep"]}
                  />
                </div>

                {/* Mốc 2: Kinh tế tư nhân & Kinh tế tập thể */}
                <div className="rounded-2xl border border-border bg-card p-6 shadow-xs">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-display text-base font-bold text-history">
                      Hội nghị Trung ương 5 khóa IX
                    </span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-gold/20 text-gold-deep font-semibold">
                      Kinh tế tập thể & Tư nhân
                    </span>
                  </div>
                  <h4 className="mt-2 text-base font-bold text-foreground">
                    Đổi mới kinh tế tập thể & khẳng định ba nội dung chiến lược về kinh tế tư nhân
                  </h4>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-3 text-xs leading-relaxed text-foreground/85">
                    <li className="rounded-lg bg-muted/40 p-3">
                      <strong>(1) Bộ phận cấu thành:</strong> Kinh tế tư nhân là bộ phận cấu thành
                      quan trọng của nền kinh tế quốc dân.
                    </li>
                    <li className="rounded-lg bg-muted/40 p-3">
                      <strong>(2) Chiến lược lâu dài:</strong> Phát triển kinh tế tư nhân là vấn đề
                      chiến lược lâu dài trong phát triển KTTT định hướng XHCN.
                    </li>
                    <li className="rounded-lg bg-muted/40 p-3">
                      <strong>(3) Cơ chế chính sách:</strong> Cần đổi mới cơ chế, tạo môi trường
                      thuận lợi để kinh tế tư nhân yên tâm đầu tư phát triển.
                    </li>
                  </ul>
                </div>

                {/* Mốc 3: Đất đai */}
                <div className="rounded-2xl border border-border bg-card p-6 shadow-xs">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-display text-base font-bold text-history">
                      Hội nghị Trung ương 7 khóa IX
                    </span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-muted text-foreground font-semibold">
                      Chính sách đất đai
                    </span>
                  </div>
                  <h4 className="mt-2 text-base font-bold text-foreground">
                    Thống nhất nhận thức và chính sách đất đai trong thời kỳ công nghiệp hóa
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Xác lập 4 nguyên tắc chỉ đạo: Đất đai là tài nguyên quốc gia quý giá, tư liệu
                    sản xuất đặc biệt; quyền sử dụng đất là hàng hóa đặc biệt; đất đai thuộc sở hữu
                    toàn dân do Nhà nước đại diện chủ sở hữu; Nhà nước thống nhất quản lý, giao đất
                    và cho thuê đất theo luật định.
                  </p>
                </div>

                {/* Mốc 4: Đại đoàn kết, Dân tộc, Tôn giáo */}
                <div
                  id="ix-dai-doan-ket"
                  className="scroll-mt-24 rounded-2xl border border-border bg-card p-6 shadow-xs"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-display text-base font-bold text-history">
                      12/03/2003 · Hội nghị Trung ương 7 khóa IX
                    </span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-history/10 text-history font-semibold">
                      Bộ ba Nghị quyết 23, 24, 25-NQ/TW
                    </span>
                  </div>
                  <h4 className="mt-2 text-base font-bold text-foreground">
                    Đại đoàn kết toàn dân tộc · Công tác dân tộc · Công tác tôn giáo
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Khẳng định sức mạnh đại đoàn kết toàn dân tộc là động lực chủ yếu để phát triển
                    đất nước; củng cố sự đồng thuận xã hội, thực hiện bình đẳng đoàn kết tương trợ
                    giữa các dân tộc và tôn trọng tự do tín ngưỡng tôn giáo của nhân dân.
                  </p>
                  <DeepDiveSection
                    title="Xem chi tiết bộ ba Nghị quyết TW 7"
                    details={DOCUMENT_EVENT_DETAILS["ix-dai-doan-ket"]}
                  />
                </div>

                {/* Mốc 5: Kiều bào */}
                <div
                  id="ix-kieu-bao"
                  className="scroll-mt-24 rounded-2xl border border-border bg-card p-6 shadow-xs"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-display text-base font-bold text-history">
                      26/03/2004 · Bộ Chính trị khóa IX
                    </span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-gold/20 text-gold-deep font-semibold">
                      Nghị quyết số 36-NQ/TW
                    </span>
                  </div>
                  <h4 className="mt-2 text-base font-bold text-foreground">
                    Công tác đối với người Việt Nam ở nước ngoài
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Khẳng định cộng đồng người Việt Nam ở nước ngoài là bộ phận không thể tách rời
                    và là một nguồn lực quan trọng của cộng đồng dân tộc Việt Nam; mở rộng chính
                    sách thu hút kiều bào hướng về quê hương đất nước.
                  </p>
                  <DeepDiveSection
                    title="Xem chi tiết Nghị quyết 36-NQ/TW"
                    details={DOCUMENT_EVENT_DETAILS["ix-kieu-bao"]}
                  />
                </div>
              </div>
            </article>

            {/* C.4: Kết quả, hạn chế và ý nghĩa của Đại hội IX */}
            <article
              id="ix-ket-qua"
              className="scroll-mt-24 space-y-8 pt-10 border-t border-border"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-history text-white font-display text-sm font-bold">
                  C.4
                </span>
                <h3 className="font-display text-2xl font-bold md:text-3xl">
                  Kết quả, hạn chế và ý nghĩa của Đại hội IX
                </h3>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-2xl border border-border bg-card p-6 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-display font-bold text-lg">
                      <TrendingUp className="h-5 w-5" /> Kết quả đạt được
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/90">
                      Tạo chuyển biến sâu sắc trong hoàn thiện nhận thức về nền kinh tế thị trường
                      định hướng XHCN; giải phóng năng lực sản xuất của các thành phần kinh tế; thúc
                      đẩy quá trình hội nhập quốc tế mở rộng.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-border text-xs text-muted-foreground">
                    Kinh tế duy trì đà tăng trưởng khá (bình quân trên 7%/năm giai đoạn 2001–2005).
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-card p-6 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-display font-bold text-lg">
                      <Shield className="h-5 w-5" /> Hạn chế tồn tại
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/90">
                      Chất lượng tăng trưởng, hiệu quả sử dụng vốn và năng lực cạnh tranh còn thấp;
                      việc hoàn thiện thể chế kinh tế thị trường chưa thực sự đồng bộ; bộ máy hành
                      chính còn cồng kềnh, lãng phí.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-border text-xs text-muted-foreground">
                    Yêu cầu tiếp tục đẩy mạnh cải cách thể chế và nâng cao năng lực cạnh tranh.
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-card p-6 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-history font-display font-bold text-lg">
                      <Award className="h-5 w-5" /> Ý nghĩa lịch sử
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/90">
                      Đại hội IX có ý nghĩa đặc biệt quan trọng trong việc hoàn thiện nhận thức lý
                      luận của Đảng về mô hình kinh tế và con đường quá độ, tạo tiền đề vững chắc để
                      Đại hội X đẩy mạnh toàn diện công cuộc đổi mới.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-border text-xs text-muted-foreground">
                    Cột mốc tư duy kinh tế đầu thế kỷ XXI của cách mạng Việt Nam.
                  </div>
                </div>
              </div>

              {/* Tóm tắt các điểm then chốt Đại hội IX */}
              <div className="rounded-2xl border border-border bg-muted/20 p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-history mb-3">
                  Tóm tắt điểm cốt lõi cần nhớ về Đại hội IX
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {IX.keyFacts.map((fact, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs leading-relaxed text-foreground/90"
                    >
                      <CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                      <span>{fact}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </section>

          {/* ============================================================
              PHẦN D: ĐẠI HỘI X (2006)
              ============================================================ */}
          <section id="dai-hoi-x" className="scroll-mt-24 space-y-16">
            {/* Header Phần D */}
            <div className="border-b border-border pb-8">
              <SectionBadge icon={Landmark}>Phần D · Đại hội X (2006)</SectionBadge>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-foreground md:text-5xl">
                Đại hội đại biểu toàn quốc lần thứ X
              </h2>
              <p className="mt-3 text-lg font-medium text-history">
                18 – 25/4/2006 · Hội trường Ba Đình, Hà Nội
              </p>
              <p className="mt-3 max-w-3xl text-base text-muted-foreground leading-relaxed">
                Đại hội đánh dấu cột mốc tròn 20 năm Đổi mới (1986–2006), đề ra nhiệm vụ đẩy mạnh
                toàn diện công cuộc đổi mới, đúc kết 5 bài học lớn và tạo bước đột phá lịch sử cho
                phép đảng viên làm kinh tế tư nhân.
              </p>
            </div>

            {/* D.1: Bối cảnh quốc tế và trong nước */}
            <article id="x-boi-canh" className="scroll-mt-24 space-y-8">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-history text-white font-display text-sm font-bold">
                  D.1
                </span>
                <h3 className="font-display text-2xl font-bold md:text-3xl">
                  Bối cảnh quốc tế và trong nước
                </h3>
              </div>

              <div className="grid gap-8 md:grid-cols-2 items-center">
                <ArchivalPhoto
                  imageKey="badinh_interior"
                  caption="Nội thất Hội trường Ba Đình, Hà Nội – nơi diễn ra Đại hội đại biểu toàn quốc lần thứ X (tháng 4/2006)."
                />
                <div className="space-y-4">
                  <p className="text-lg font-medium leading-relaxed text-foreground">
                    Sau 20 năm Đổi mới, đất nước có sự chuyển biến căn bản và toàn diện: nền kinh tế
                    tăng trưởng khá, đời sống nhân dân nâng cao, vị thế đối ngoại mở rộng; nhưng
                    cũng đứng trước ngưỡng cửa hội nhập toàn cầu với nhiều sức ép.
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Tình hình thế giới diễn biến phức tạp, khó lường; cạnh tranh thương mại gay gắt
                    song tạo thời cơ lớn khi Việt Nam chuẩn bị gia nhập Tổ chức Thương mại Thế giới
                    (WTO).
                  </p>
                </div>
              </div>

              {/* So sánh Bối cảnh */}
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-border bg-card p-6 shadow-xs">
                  <div className="flex items-center gap-2 text-history font-display font-bold text-lg">
                    <Globe2 className="h-5 w-5" /> Tình hình quốc tế
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/85">
                    Quá trình toàn cầu hóa và hội nhập kinh tế quốc tế phát triển với quy mô và tốc
                    độ chưa từng có. Các quốc gia vừa mở rộng hợp tác vừa cạnh tranh quyết liệt.
                    Việt Nam đứng trước yêu cầu phải chuẩn hóa thể chế theo chuẩn mực quốc tế khi
                    tiến trình đàm phán gia nhập WTO bước vào giai đoạn quyết định.
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-card p-6 shadow-xs">
                  <div className="flex items-center gap-2 text-gold-deep font-display font-bold text-lg">
                    <Landmark className="h-5 w-5" /> Thế và lực trong nước
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/85">
                    Đất nước đạt được những thành tựu to lớn, có ý nghĩa lịch sử sau 20 năm đổi mới.
                    Thế và lực được nâng lên rõ rệt. Tuy nhiên, nguy cơ tụt hậu xa hơn về kinh tế so
                    với nhiều nước trong khu vực vẫn là thách thức lớn; tình trạng tham nhũng, lãng
                    phí và suy thoái tư tưởng chính trị đặt ra yêu cầu chỉnh đốn Đảng cấp thiết.
                  </p>
                </div>
              </div>
            </article>

            {/* D.2: Nội dung cơ bản của Đại hội X */}
            <article id="moc-2006" className="scroll-mt-24 space-y-8 pt-10 border-t border-border">
              <div id="x-2006" className="scroll-mt-24" />
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-history text-white font-display text-sm font-bold">
                  D.2
                </span>
                <div>
                  <h3 className="font-display text-2xl font-bold md:text-3xl">
                    Nội dung cơ bản của Đại hội X
                  </h3>
                  <p className="text-xs font-semibold text-history uppercase tracking-wider mt-0.5">
                    Dấu mốc 2006: Đột phá lý luận và 5 bài học kinh nghiệm 20 năm Đổi mới
                  </p>
                </div>
              </div>

              {/* Chủ đề và mục tiêu */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <h4 className="font-display text-xl font-bold">Chủ đề và mục tiêu Đại hội X</h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  Đồng chí Nông Đức Mạnh tiếp tục được bầu làm Tổng Bí thư Ban Chấp hành Trung ương
                  Đảng.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="rounded-xl border border-border bg-muted/20 p-4">
                    <span className="text-xs font-bold text-history uppercase">Trọng tâm 1</span>
                    <p className="mt-2 text-sm font-bold text-foreground">
                      Nâng cao năng lực lãnh đạo
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Và sức chiến đấu của toàn Đảng.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-muted/20 p-4">
                    <span className="text-xs font-bold text-history uppercase">Trọng tâm 2</span>
                    <p className="mt-2 text-sm font-bold text-foreground">
                      Phát huy sức mạnh dân tộc
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Đại đoàn kết toàn dân tộc là động lực.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-muted/20 p-4">
                    <span className="text-xs font-bold text-history uppercase">Trọng tâm 3</span>
                    <p className="mt-2 text-sm font-bold text-foreground">
                      Đẩy mạnh toàn diện đổi mới
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Đồng bộ cả kinh tế và hệ thống chính trị.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-muted/20 p-4">
                    <span className="text-xs font-bold text-history uppercase">Trọng tâm 4</span>
                    <p className="mt-2 text-sm font-bold text-foreground">
                      Sớm thoát kém phát triển
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Mục tiêu đưa Việt Nam khỏi nhóm nước nghèo.
                    </p>
                  </div>
                </div>
              </div>

              {/* 5 Bài học lớn sau 20 năm Đổi mới */}
              <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-card">
                <h4 className="font-display text-2xl font-bold">
                  Năm bài học kinh nghiệm lớn sau 20 năm Đổi mới
                </h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  Tổng kết thực tiễn 1986–2006, định hình kim chỉ nam hành động cho công cuộc phát
                  triển:
                </p>

                <div className="mt-6 space-y-3">
                  {[
                    "Bài học thứ nhất: Kiên định mục tiêu độc lập dân tộc và chủ nghĩa xã hội trên nền tảng chủ nghĩa Mác – Lênin và tư tưởng Hồ Chí Minh.",
                    "Bài học thứ hai: Đổi mới toàn diện, đồng bộ, có kế thừa, có bước đi, hình thức và cách làm phù hợp.",
                    "Bài học thứ ba: Đổi mới phải vì lợi ích của nhân dân, dựa vào nhân dân, xuất phát từ thực tiễn và nhạy bén với cái mới.",
                    "Bài học thứ tư: Phát huy nội lực, kết hợp với ngoại lực, sức mạnh dân tộc với sức mạnh thời đại trong điều kiện mới.",
                    "Bài học thứ năm: Nâng cao năng lực lãnh đạo và sức chiến đấu của Đảng, không ngừng đổi mới hệ thống chính trị, bảo đảm quyền lực thuộc về nhân dân.",
                  ].map((lesson, idx) => (
                    <div key={idx} className="deck-point">
                      <span className="deck-point-n">0{idx + 1}</span>
                      <span className="text-sm font-medium leading-relaxed">{lesson}</span>
                    </div>
                  ))}
                </div>

                <AnalysisNote>
                  Năm bài học cho thấy công cuộc đổi mới phải được thực hiện đồng bộ, kiên định về
                  nguyên tắc chiến lược nhưng mềm dẻo, linh hoạt về sách lược, luôn gắn liền với
                  thực tiễn và lấy lợi ích thiết thực của nhân dân làm thước đo cao nhất.
                </AnalysisNote>
              </div>

              {/* Ba nhiệm vụ then chốt & Đột phá lý luận */}
              <div className="rounded-2xl border-2 border-history/40 bg-card p-6 md:p-8 shadow-card">
                <h4 className="font-display text-2xl font-bold">
                  Ba nhiệm vụ then chốt & Đột phá lý luận của Đại hội X
                </h4>

                <div className="mt-6 grid gap-6 md:grid-cols-3">
                  <div className="rounded-xl border border-border bg-muted/20 p-5 space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-history">
                      Nhiệm vụ 1
                    </span>
                    <h5 className="font-display text-lg font-bold">Xây dựng, chỉnh đốn Đảng</h5>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      Nâng cao năng lực lãnh đạo và sức chiến đấu; đấu tranh kiên quyết chống tiêu
                      cực, tham nhũng và suy thoái.
                    </p>
                    <div className="rounded-lg bg-history/10 border border-history/20 p-3 text-xs font-semibold text-history leading-relaxed">
                      ★ Đột phá lịch sử: Lần đầu tiên Đảng chính thức cho phép đảng viên làm kinh tế
                      tư nhân, kể cả kinh tế tư bản tư nhân.
                    </div>
                  </div>

                  <div className="rounded-xl border border-border bg-muted/20 p-5 space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-gold-deep">
                      Nhiệm vụ 2
                    </span>
                    <h5 className="font-display text-lg font-bold">Phát huy sức mạnh dân tộc</h5>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      Đoàn kết trên cơ sở mục tiêu độc lập dân tộc và CNXH; xóa bỏ mặc cảm, định
                      kiến quá khứ; tôn trọng những ý kiến khác nhau không trái với lợi ích chung
                      của quốc gia, dân tộc.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-muted/20 p-5 space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-sea">
                      Nhiệm vụ 3
                    </span>
                    <h5 className="font-display text-lg font-bold">Đẩy mạnh toàn diện đổi mới</h5>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      Hoàn thiện thể chế kinh tế thị trường định hướng XHCN; đẩy mạnh CNH-HĐH gắn
                      với phát triển kinh tế tri thức; chủ động và tích cực hội nhập kinh tế quốc tế
                      sâu rộng.
                    </p>
                  </div>
                </div>

                {/* 6 đặc trưng XHCN bổ sung */}
                <div className="mt-6 rounded-xl border border-border bg-card p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-gold-deep mb-3">
                    Bổ sung và phát triển nhận thức về CNXH: 6 đặc trưng mô hình
                  </p>
                  <div className="grid gap-2 sm:grid-cols-2 text-xs leading-relaxed text-foreground/85">
                    <div className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                      <span>
                        Xã hội dân giàu, nước mạnh, <strong>dân chủ</strong>, công bằng, văn minh
                        (bổ sung từ "dân chủ").
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                      <span>Do nhân dân làm chủ.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                      <span>
                        Có nền kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại và quan
                        hệ sản xuất tiến bộ phù hợp.
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                      <span>Có nền văn hóa tiên tiến, đậm đà bản sắc dân tộc.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                      <span>
                        Con người có cuộc sống ấm no, tự do, hạnh phúc, có điều kiện phát triển toàn
                        diện.
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                      <span>
                        Có Nhà nước pháp quyền XHCN của nhân dân, do nhân dân, vì nhân dân dưới sự
                        lãnh đạo của Đảng.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* D.3: Quá trình triển khai thực hiện 2006–2010 */}
            <article
              id="moc-2006-2010"
              className="scroll-mt-24 space-y-8 pt-10 border-t border-border"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-history text-white font-display text-sm font-bold">
                  D.3
                </span>
                <div>
                  <h3 className="font-display text-2xl font-bold md:text-3xl">
                    Quá trình triển khai thực hiện Nghị quyết Đại hội X (2006–2010)
                  </h3>
                  <p className="text-xs font-semibold text-history uppercase tracking-wider mt-0.5">
                    Dấu mốc 2006–2010: Xây dựng Đảng, phòng chống tham nhũng và chính sách xã hội
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {/* NQ 04: Chống tham nhũng */}
                <div
                  id="x-chong-tham-nhung"
                  className="scroll-mt-24 rounded-2xl border border-border bg-card p-6 shadow-xs"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-display text-base font-bold text-history">
                      21/08/2006 · Hội nghị Trung ương 3 khóa X
                    </span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-history/10 text-history font-semibold">
                      Nghị quyết số 04-NQ/TW
                    </span>
                  </div>
                  <h4 className="mt-2 text-base font-bold text-foreground">
                    Tăng cường sự lãnh đạo của Đảng đối với công tác phòng, chống tham nhũng, lãng
                    phí
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Xác định phòng chống tham nhũng, lãng phí là nhiệm vụ trọng tâm, cấp bách hàng
                    đầu; nâng cao trách nhiệm của người đứng đầu và hoàn thiện cơ chế kiểm soát
                    quyền lực, bảo đảm sự liêm chính của bộ máy.
                  </p>
                  <DeepDiveSection
                    title="Xem chi tiết Nghị quyết 04-NQ/TW"
                    details={DOCUMENT_EVENT_DETAILS["x-chong-tham-nhung"]}
                  />
                </div>

                {/* NQ 14 & 15: Kiểm tra giám sát & Đổi mới phương thức lãnh đạo */}
                <div
                  id="x-kiem-tra"
                  className="scroll-mt-24 rounded-2xl border border-border bg-card p-6 shadow-xs"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-display text-base font-bold text-history">
                      30/07/2007 · Hội nghị Trung ương 5 khóa X
                    </span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-gold/20 text-gold-deep font-semibold">
                      Nghị quyết số 14 & 15-NQ/TW
                    </span>
                  </div>
                  <h4 className="mt-2 text-base font-bold text-foreground">
                    Kiểm tra, giám sát và đổi mới phương thức lãnh đạo của Đảng
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Khắc phục tình trạng Đảng bao biện, làm thay hoặc buông lỏng lãnh đạo; mở rộng
                    thực hành dân chủ trong xã hội, đẩy mạnh phân cấp phân quyền và nêu cao trách
                    nhiệm cá nhân người đứng đầu.
                  </p>
                  <DeepDiveSection
                    title="Xem chi tiết Nghị quyết 14 & 15-NQ/TW"
                    details={DOCUMENT_EVENT_DETAILS["x-kiem-tra"]}
                  />
                </div>

                {/* NQ 20, 25, 27: Công nhân, Thanh niên, Trí thức */}
                <div
                  id="x-thanh-nien"
                  className="scroll-mt-24 rounded-2xl border border-border bg-card p-6 shadow-xs"
                >
                  <div id="x-tri-thuc" className="scroll-mt-24" />
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-display text-base font-bold text-history">
                      Năm 2008 · Hội nghị Trung ương 6 & 7 khóa X
                    </span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-muted text-foreground font-semibold">
                      Công nhân · Thanh niên · Trí thức
                    </span>
                  </div>
                  <h4 className="mt-2 text-base font-bold text-foreground">
                    Phát huy vai trò của các lực lượng xã hội trong thời kỳ CNH-HĐH
                  </h4>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-3 text-xs leading-relaxed text-foreground/85">
                    <li className="rounded-lg bg-muted/40 p-3">
                      <strong>NQ 20-NQ/TW:</strong> Giai cấp công nhân – lực lượng đi đầu trong sự
                      nghiệp CNH-HĐH đất nước.
                    </li>
                    <li className="rounded-lg bg-muted/40 p-3">
                      <strong>NQ 25-NQ/TW (25/7/2008):</strong> Tăng cường công tác thanh niên thời
                      kỳ đẩy mạnh CNH-HĐH.
                    </li>
                    <li className="rounded-lg bg-muted/40 p-3">
                      <strong>NQ 27-NQ/TW (06/8/2008):</strong> Xây dựng đội ngũ trí thức trong thời
                      kỳ đổi mới.
                    </li>
                  </ul>
                  <DeepDiveSection
                    title="Xem chi tiết công tác thanh niên & trí thức"
                    details={[
                      ...(DOCUMENT_EVENT_DETAILS["x-thanh-nien"] ?? []),
                      ...(DOCUMENT_EVENT_DETAILS["x-tri-thuc"] ?? []),
                    ]}
                  />
                </div>

                {/* NQ 21 & Tam nông */}
                <div className="rounded-2xl border border-border bg-card p-6 shadow-xs">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-display text-base font-bold text-history">
                      Hội nghị Trung ương 6 & 7 khóa X
                    </span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-sea/15 text-sea-deep font-semibold">
                      Thể chế KTTT & Tam nông
                    </span>
                  </div>
                  <h4 className="mt-2 text-base font-bold text-foreground">
                    Nghị quyết số 21-NQ/TW & Chủ trương giải quyết đồng bộ vấn đề Tam nông
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Tiếp tục hoàn thiện thể chế kinh tế thị trường định hướng XHCN, bảo đảm thị
                    trường vận hành thông suốt; đồng thời ban hành Nghị quyết số 26-NQ/TW về nông
                    nghiệp, nông dân, nông thôn (tam nông) – cơ sở nền tảng của khối liên minh công
                    – nông.
                  </p>
                </div>
              </div>
            </article>

            {/* D.4: Dấu mốc chiến lược 2007: WTO & Nghị quyết 09-NQ/TW */}
            <article
              id="moc-2007"
              className="scroll-mt-24 space-y-8 pt-10 border-t-2 border-sea/50 bg-sea/5 dark:bg-sea/10 -mx-4 sm:-mx-6 px-4 sm:px-6 py-8 rounded-3xl"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-sea text-white font-display text-sm font-bold">
                  D.4
                </span>
                <div>
                  <h3 className="font-display text-2xl font-bold md:text-3xl text-foreground">
                    Dấu mốc lịch sử 2007: WTO và Nghị quyết 09-NQ/TW về Chiến lược biển
                  </h3>
                  <p className="text-xs font-semibold text-sea uppercase tracking-wider mt-0.5">
                    Dấu mốc 2007: Hội nhập toàn cầu và khát vọng vươn ra biển lớn
                  </p>
                </div>
              </div>

              {/* Khối WTO */}
              <div
                id="x-wto"
                className="scroll-mt-24 grid gap-6 md:grid-cols-2 items-center rounded-2xl border border-border bg-card p-6 shadow-card"
              >
                <div id="x-hoi-nhap" className="scroll-mt-24 space-y-4">
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-history uppercase tracking-wider">
                    <Globe2 className="h-4 w-4" /> 11/01/2007 · Dấu mốc toàn cầu
                  </div>
                  <h4 className="font-display text-2xl font-bold">
                    Việt Nam chính thức là thành viên WTO
                  </h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Sau 11 năm đàm phán kiên trì, ngày 11/01/2007, Việt Nam chính thức trở thành
                    thành viên thứ 150 của Tổ chức Thương mại Thế giới (WTO).
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Ngày 05/02/2007, Hội nghị Trung ương 4 khóa X ban hành{" "}
                    <strong>Nghị quyết số 08-NQ/TW</strong> về những chủ trương, chính sách lớn để
                    nền kinh tế phát triển nhanh và bền vững khi Việt Nam là thành viên WTO.
                  </p>
                </div>
                <ArchivalPhoto
                  imageKey="wto_geneva"
                  caption="Trụ sở WTO tại Geneva, Thụy Sĩ – Việt Nam chính thức gia nhập WTO ngày 11/01/2007."
                />
              </div>

              {/* Khối Nghị quyết 09-NQ/TW về Chiến lược biển */}
              <div
                id="x-chien-luoc-bien"
                className="scroll-mt-24 rounded-2xl border-2 border-sea bg-card p-6 md:p-8 shadow-lift"
              >
                <div className="grid gap-8 md:grid-cols-[1fr_320px] items-start">
                  <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 rounded-full bg-sea/15 px-3 py-1 text-xs font-bold text-sea-deep uppercase tracking-wider">
                      <Waves className="h-3.5 w-3.5" /> 09/02/2007 · Hội nghị Trung ương 4 khóa X
                    </div>

                    <h4 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                      Nghị quyết số 09-NQ/TW về Chiến lược biển Việt Nam đến năm 2020
                    </h4>

                    <p className="text-base font-medium leading-relaxed text-foreground/90">
                      Đại hội X đã tạo ra bước ngoặt tư duy chiến lược mang tính thời đại: Không
                      gian sinh tồn và phát triển của dân tộc gắn chặt với biển đảo Tổ quốc.
                    </p>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-xl border border-border bg-muted/20 p-4">
                        <p className="text-xs font-bold uppercase tracking-wider text-sea">
                          Mục tiêu bao trùm
                        </p>
                        <p className="mt-1.5 text-sm font-bold text-foreground">
                          Quốc gia mạnh về biển, giàu từ biển
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          Phát huy tối đa mọi tiềm năng từ kinh tế biển.
                        </p>
                      </div>

                      <div className="rounded-xl border border-border bg-muted/20 p-4">
                        <p className="text-xs font-bold uppercase tracking-wider text-sea">
                          Mục tiêu định lượng 2020
                        </p>
                        <p className="mt-1.5 text-sm font-bold text-foreground">
                          53–55% GDP & 55–60% Xuất khẩu
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          Kinh tế biển và ven biển đóng góp chủ lực.
                        </p>
                      </div>
                    </div>

                    <ul className="space-y-2 text-sm leading-relaxed text-foreground/85">
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-sea shrink-0 mt-0.5" />
                        <span>
                          Xác định biển vừa là không gian sinh tồn kinh tế chiến lược, vừa là tiền
                          tiêu an ninh quốc phòng trọng yếu.
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-sea shrink-0 mt-0.5" />
                        <span>
                          Kết hợp chặt chẽ giữa phát triển kinh tế biển với bảo đảm quốc phòng, an
                          ninh và bảo vệ toàn vẹn chủ quyền biển đảo.
                        </span>
                      </li>
                    </ul>

                    <DeepDiveSection
                      title="Xem chi tiết mục tiêu & nội dung Nghị quyết 09-NQ/TW"
                      details={DOCUMENT_EVENT_DETAILS["x-chien-luoc-bien"]}
                    />
                  </div>

                  <ArchivalPhoto
                    imageKey="map_vietnam"
                    caption="Bản đồ địa hình Việt Nam – không gian biển, đảo rộng lớn trong tầm nhìn Chiến lược biển 2020."
                    aspect="aspect-[3/4]"
                  />
                </div>
              </div>
            </article>

            {/* D.5: Tổng kết giai đoạn 2010 */}
            <article id="moc-2010" className="scroll-mt-24 space-y-8 pt-10 border-t border-border">
              <div id="x-ket-qua" className="scroll-mt-24" />
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-history text-white font-display text-sm font-bold">
                  D.5
                </span>
                <div>
                  <h3 className="font-display text-2xl font-bold md:text-3xl">
                    Tổng kết giai đoạn thực hiện Nghị quyết Đại hội X (2010)
                  </h3>
                  <p className="text-xs font-semibold text-history uppercase tracking-wider mt-0.5">
                    Dấu mốc 2010: Thành tựu vượt khủng hoảng và đưa Việt Nam thoát nghèo
                  </p>
                </div>
              </div>

              {/* 5 Thẻ số liệu KPI nổi bật */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                <div className="rounded-2xl border border-border bg-card p-5 text-center shadow-xs">
                  <p className="font-display text-3xl md:text-4xl font-bold text-history">~7%</p>
                  <p className="mt-2 text-xs font-semibold text-foreground uppercase tracking-wider">
                    Tăng trưởng GDP/năm
                  </p>
                  <p className="mt-1 text-[11px] text-muted-foreground">
                    Duy trì đà tăng trưởng cao dù có khủng hoảng tài chính toàn cầu 2008.
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-card p-5 text-center shadow-xs">
                  <p className="font-display text-3xl md:text-4xl font-bold text-gold-deep">
                    1.168
                  </p>
                  <p className="mt-2 text-xs font-semibold text-foreground uppercase tracking-wider">
                    USD / người / năm
                  </p>
                  <p className="mt-1 text-[11px] text-muted-foreground">
                    GDP bình quân đầu người năm 2010, tăng vượt bậc so với 2005.
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-card p-5 text-center shadow-xs">
                  <p className="font-display text-3xl md:text-4xl font-bold text-emerald-600 dark:text-emerald-400">
                    2008
                  </p>
                  <p className="mt-2 text-xs font-semibold text-foreground uppercase tracking-wider">
                    Ra khỏi nhóm nghèo
                  </p>
                  <p className="mt-1 text-[11px] text-muted-foreground">
                    Việt Nam chính thức bước vào nhóm nước đang phát triển có thu nhập trung bình.
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-card p-5 text-center shadow-xs">
                  <p className="font-display text-3xl md:text-4xl font-bold text-sea">~230</p>
                  <p className="mt-2 text-xs font-semibold text-foreground uppercase tracking-wider">
                    Đối tác thương mại
                  </p>
                  <p className="mt-1 text-[11px] text-muted-foreground">
                    Mở rộng giao thương toàn cầu; Hoa Kỳ và Trung Quốc là hai bạn hàng lớn nhất.
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-card p-5 text-center shadow-xs">
                  <p className="font-display text-3xl md:text-4xl font-bold text-history">19.88</p>
                  <p className="mt-2 text-xs font-semibold text-foreground uppercase tracking-wider">
                    Tỷ USD FDI (2010)
                  </p>
                  <p className="mt-1 text-[11px] text-muted-foreground">
                    Tăng gần gấp 3 lần so với mức 6,84 tỷ USD của năm 2005.
                  </p>
                </div>
              </div>

              {/* Hạn chế & Ý nghĩa 2010 */}
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-border bg-card p-6 shadow-xs">
                  <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-display font-bold text-lg">
                    <Shield className="h-5 w-5" /> Những hạn chế và thách thức
                  </div>
                  <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-foreground/85">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-500 shrink-0" />
                      <span>
                        Chất lượng tăng trưởng, hiệu quả và sức cạnh tranh của nền kinh tế chưa
                        tương xứng với tiềm năng.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-500 shrink-0" />
                      <span>
                        Hiệu quả sử dụng các nguồn lực xã hội còn lãng phí; nền kinh tế chịu tác
                        động tiêu cực từ khủng hoảng kinh tế toàn cầu 2008.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-500 shrink-0" />
                      <span>
                        Yêu cầu phát triển bền vững và bảo vệ tài nguyên môi trường biển ngày càng
                        trở nên cấp thiết.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-border bg-card p-6 shadow-xs">
                  <div className="flex items-center gap-2 text-history font-display font-bold text-lg">
                    <Award className="h-5 w-5" /> Ý nghĩa của giai đoạn Đại hội X
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/90">
                    Đại hội X và quá trình triển khai thực hiện (2006–2010) đã tiếp tục đẩy mạnh
                    toàn diện công cuộc đổi mới, giữ vững ổn định kinh tế vĩ mô trong bối cảnh thế
                    giới nhiều biến động, đưa Việt Nam vững vàng bước vào vị thế một quốc gia đang
                    phát triển và định hình chiến lược biển lâu dài.
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground border-l-2 border-gold pl-3">
                    Đặc biệt, Nghị quyết 09-NQ/TW mở ra thời kỳ mới: Khai thác kinh tế biển song
                    hành bảo vệ chủ quyền quốc gia.
                  </p>
                </div>
              </div>
            </article>
          </section>

          {/* ============================================================
              PHẦN E: SO SÁNH VÀ ĐÁNH GIÁ HAI KỲ ĐẠI HỘI
              ============================================================ */}
          <section id="so-sanh-danh-gia" className="scroll-mt-24 space-y-16">
            {/* Header Phần E */}
            <div className="border-b border-border pb-8">
              <SectionBadge icon={Scale}>Phần E · So sánh & Đánh giá</SectionBadge>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-foreground md:text-5xl">
                So sánh và đánh giá hai kỳ Đại hội
              </h2>
              <p className="mt-3 text-lg font-medium text-history">
                Tính kế thừa · Những điểm phát triển mới · Vai trò của Nghị quyết 09-NQ/TW năm 2007
              </p>
              <p className="mt-3 max-w-3xl text-base text-muted-foreground leading-relaxed">
                Đại hội IX và Đại hội X là hai chặng đường tiếp nối hữu cơ trong một thập kỷ bản lề
                của lịch sử Đổi mới: Đại hội IX xác lập mô hình và nền tảng lý luận; Đại hội X kế
                thừa và đẩy mạnh toàn diện với những đột phá lịch sử.
              </p>
            </div>

            {/* E.1: Những điểm kế thừa */}
            <article className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-history text-white font-display text-sm font-bold">
                  E.1
                </span>
                <h3 className="font-display text-2xl font-bold md:text-3xl">
                  Những điểm kế thừa xuyên suốt giữa hai kỳ Đại hội
                </h3>
              </div>

              <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
                <div className="divide-y divide-border">
                  <div className="p-5 sm:grid sm:grid-cols-[220px_1fr] sm:gap-6 items-start">
                    <span className="font-display font-bold text-sm text-history">
                      Mục tiêu lý tưởng
                    </span>
                    <p className="text-sm leading-relaxed text-foreground/90 mt-1 sm:mt-0">
                      Cả hai kỳ Đại hội đều kiên định con đường độc lập dân tộc gắn liền với chủ
                      nghĩa xã hội trên nền tảng chủ nghĩa Mác – Lênin và tư tưởng Hồ Chí Minh; kiên
                      quyết không chao đảo trước biến động thế giới.
                    </p>
                  </div>

                  <div className="p-5 sm:grid sm:grid-cols-[220px_1fr] sm:gap-6 items-start">
                    <span className="font-display font-bold text-sm text-history">
                      Mô hình kinh tế
                    </span>
                    <p className="text-sm leading-relaxed text-foreground/90 mt-1 sm:mt-0">
                      Tiếp tục khẳng định kinh tế thị trường định hướng XHCN là mô hình kinh tế tổng
                      quát; kiên trì đường lối phát triển nền kinh tế nhiều hình thức sở hữu, nhiều
                      thành phần kinh tế, trong đó kinh tế nhà nước giữ vai trò chủ đạo.
                    </p>
                  </div>

                  <div className="p-5 sm:grid sm:grid-cols-[220px_1fr] sm:gap-6 items-start">
                    <span className="font-display font-bold text-sm text-history">
                      Chiến lược 10 năm
                    </span>
                    <p className="text-sm leading-relaxed text-foreground/90 mt-1 sm:mt-0">
                      Cùng thực hiện và hoàn thành Chiến lược phát triển kinh tế – xã hội 10 năm
                      (2001–2010); kiên trì mục tiêu sớm đưa Việt Nam ra khỏi tình trạng kém phát
                      triển, tạo nền tảng để cơ bản trở thành nước công nghiệp hiện đại.
                    </p>
                  </div>

                  <div className="p-5 sm:grid sm:grid-cols-[220px_1fr] sm:gap-6 items-start">
                    <span className="font-display font-bold text-sm text-history">
                      Đường lối đối ngoại
                    </span>
                    <p className="text-sm leading-relaxed text-foreground/90 mt-1 sm:mt-0">
                      Giữ vững đường lối đối ngoại độc lập, tự chủ, hòa bình, hợp tác và phát triển;
                      đa phương hóa, đa dạng hóa quan hệ quốc tế; là bạn, là đối tác tin cậy và
                      thành viên có trách nhiệm của cộng đồng quốc tế.
                    </p>
                  </div>

                  <div className="p-5 sm:grid sm:grid-cols-[220px_1fr] sm:gap-6 items-start">
                    <span className="font-display font-bold text-sm text-history">
                      Đại đoàn kết & Văn hóa
                    </span>
                    <p className="text-sm leading-relaxed text-foreground/90 mt-1 sm:mt-0">
                      Coi đại đoàn kết toàn dân tộc là nguồn lực chủ yếu, động lực chủ yếu; xây dựng
                      nền văn hóa tiên tiến, đậm đà bản sắc dân tộc là nền tảng tinh thần của xã
                      hội.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* E.2: Những điểm phát triển mới */}
            <article className="space-y-6 pt-10 border-t border-border">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-history text-white font-display text-sm font-bold">
                  E.2
                </span>
                <h3 className="font-display text-2xl font-bold md:text-3xl">
                  Những điểm phát triển mới – Bước đột phá của Đại hội X
                </h3>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {/* Đột phá 1: Kinh tế tư nhân */}
                <div className="rounded-2xl border-2 border-history/40 bg-card p-6 shadow-card space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-history uppercase tracking-wider">
                      Đột phá thứ nhất
                    </span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-history/10 text-history">
                      Kinh tế tư nhân
                    </span>
                  </div>
                  <h4 className="font-display text-xl font-bold text-foreground">
                    Cho phép đảng viên làm kinh tế tư nhân
                  </h4>
                  <div className="space-y-2 text-xs leading-relaxed">
                    <div className="rounded-lg bg-muted/40 p-3">
                      <strong>Đại hội IX (2001):</strong> Khẳng định kinh tế tư nhân là bộ phận cấu
                      thành quan trọng, khuyến khích phát triển nhưng đảng viên chưa được trực tiếp
                      làm kinh tế tư nhân.
                    </div>
                    <div className="rounded-lg bg-history/10 border border-history/20 p-3 text-history">
                      <strong>Đại hội X (2006):</strong> Đột phá lý luận căn bản: Lần đầu tiên chính
                      thức cho phép đảng viên làm kinh tế tư nhân, kể cả kinh tế tư bản tư nhân. Đây
                      là bước cởi trói tư duy lớn nhất của Đảng.
                    </div>
                  </div>
                </div>

                {/* Đột phá 2: Hội nhập quốc tế */}
                <div className="rounded-2xl border-2 border-history/40 bg-card p-6 shadow-card space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-history uppercase tracking-wider">
                      Đột phá thứ hai
                    </span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-history/10 text-history">
                      Hội nhập quốc tế
                    </span>
                  </div>
                  <h4 className="font-display text-xl font-bold text-foreground">
                    Từ chủ động hội nhập đến gia nhập WTO
                  </h4>
                  <div className="space-y-2 text-xs leading-relaxed">
                    <div className="rounded-lg bg-muted/40 p-3">
                      <strong>Đại hội IX (2001):</strong> Xác định chủ động hội nhập kinh tế quốc
                      tế, từng bước tiếp cận và chuẩn bị các điều kiện.
                    </div>
                    <div className="rounded-lg bg-history/10 border border-history/20 p-3 text-history">
                      <strong>Đại hội X (2006):</strong> Nâng lên mức "Chủ động và tích cực hội nhập
                      kinh tế quốc tế sâu rộng"; đưa Việt Nam chính thức gia nhập WTO (11/01/2007)
                      và ban hành NQ 08-NQ/TW chỉ đạo hội nhập toàn diện.
                    </div>
                  </div>
                </div>

                {/* Đột phá 3: Đặc trưng XHCN */}
                <div className="rounded-2xl border border-border bg-card p-6 shadow-card space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-gold-deep uppercase tracking-wider">
                      Đột phá thứ ba
                    </span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-gold/15 text-gold-deep">
                      Nhận thức CNXH
                    </span>
                  </div>
                  <h4 className="font-display text-xl font-bold text-foreground">
                    Bổ sung từ "Dân chủ" vào mục tiêu tổng quát
                  </h4>
                  <div className="space-y-2 text-xs leading-relaxed">
                    <div className="rounded-lg bg-muted/40 p-3">
                      <strong>Đại hội IX:</strong> "Dân giàu, nước mạnh, xã hội công bằng, văn
                      minh".
                    </div>
                    <div className="rounded-lg bg-gold/15 border border-gold/30 p-3 text-gold-deep font-medium">
                      <strong>Đại hội X:</strong> Bổ sung chữ "dân chủ" lên trước công bằng:{" "}
                      <strong>"Dân giàu, nước mạnh, dân chủ, công bằng, văn minh"</strong>; đặt
                      quyền làm chủ thực chất của người dân vào trung tâm.
                    </div>
                  </div>
                </div>

                {/* Đột phá 4: Phòng chống tham nhũng */}
                <div className="rounded-2xl border border-border bg-card p-6 shadow-card space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-gold-deep uppercase tracking-wider">
                      Đột phá thứ tư
                    </span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-gold/15 text-gold-deep">
                      Chỉnh đốn Đảng
                    </span>
                  </div>
                  <h4 className="font-display text-xl font-bold text-foreground">
                    Chống tham nhũng thành nhiệm vụ sống còn
                  </h4>
                  <div className="space-y-2 text-xs leading-relaxed">
                    <div className="rounded-lg bg-muted/40 p-3">
                      <strong>Đại hội IX:</strong> Đấu tranh chống tiêu cực, củng cố sự đoàn kết
                      nhất trí trong nội bộ.
                    </div>
                    <div className="rounded-lg bg-gold/15 border border-gold/30 p-3 text-gold-deep font-medium">
                      <strong>Đại hội X:</strong> Nâng công tác phòng chống tham nhũng, lãng phí
                      thành nhiệm vụ sống còn; ban hành Nghị quyết riêng (NQ 04-NQ/TW), lập Ban Chỉ
                      đạo Trung ương về phòng chống tham nhũng.
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* E.3: Vai trò của Nghị quyết 09-NQ/TW năm 2007 */}
            <article className="space-y-6 pt-10 border-t border-border">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-sea text-white font-display text-sm font-bold">
                  E.3
                </span>
                <div>
                  <h3 className="font-display text-2xl font-bold md:text-3xl">
                    Vai trò lịch sử của Nghị quyết 09-NQ/TW năm 2007
                  </h3>
                  <p className="text-xs font-semibold text-sea uppercase tracking-wider mt-0.5">
                    Cột mốc chuyển mình sang tư duy quốc gia biển
                  </p>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-2xl border border-sea/30 bg-card p-6 shadow-xs flex flex-col justify-between">
                  <div>
                    <span className="font-display text-3xl font-bold text-sea">01</span>
                    <h4 className="mt-3 font-display text-lg font-bold text-foreground">
                      Chuyển dịch tư duy phát triển
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      Chuyển từ tư duy khai thác tài nguyên ven bờ sang tư duy kinh tế biển toàn
                      diện, khẳng định biển là không gian sinh tồn và nguồn lực chiến lược hàng đầu
                      của Tổ quốc.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-sea/30 bg-card p-6 shadow-xs flex flex-col justify-between">
                  <div>
                    <span className="font-display text-3xl font-bold text-sea">02</span>
                    <h4 className="mt-3 font-display text-lg font-bold text-foreground">
                      Mục tiêu hành động rõ ràng
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      Xác lập mục tiêu đưa Việt Nam trở thành quốc gia mạnh về biển, làm giàu từ
                      biển; phấn đấu đến năm 2020 kinh tế biển đóng góp 53–55% GDP và 55–60% xuất
                      khẩu cả nước.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-sea/30 bg-card p-6 shadow-xs flex flex-col justify-between">
                  <div>
                    <span className="font-display text-3xl font-bold text-sea">03</span>
                    <h4 className="mt-3 font-display text-lg font-bold text-foreground">
                      Gắn kết Kinh tế - Quốc phòng
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      Gắn kết hữu cơ giữa khai thác tiềm năng biển với củng cố thế trận quốc phòng
                      toàn dân và an ninh nhân dân trên biển, bảo vệ vững chắc chủ quyền và lợi ích
                      quốc gia.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-sea/30 bg-card p-6 shadow-xs flex flex-col justify-between">
                  <div>
                    <span className="font-display text-3xl font-bold text-sea">04</span>
                    <h4 className="mt-3 font-display text-lg font-bold text-foreground">
                      Bản lề tiếp nối lịch sử
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      Là tiền đề nền tảng để Trung ương ban hành Nghị quyết số 36-NQ/TW (năm 2018)
                      về Chiến lược phát triển bền vững kinh tế biển Việt Nam đến năm 2030, tầm nhìn
                      đến năm 2045.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Nút chuyển trang kết thúc mục Học tập */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-10 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Hoàn thành nội dung Học tập: Đại hội IX & Đại hội X.
              </p>
              <Link
                to="/kinh-te-bien"
                className="deck-btn deck-btn-primary w-full sm:w-auto justify-center"
              >
                <Waves className="h-4 w-4" /> Tiếp tục: Kinh tế biển{" "}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
