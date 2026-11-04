export interface TimelineMilestone {
  id: string;
  year: string;
  title: string;
  shortLabel: string;
  category: "ix" | "x" | "sea" | "compare";
  summary: string;
  keyPoints: string[];
  docAnchor?: string;
}

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    id: "moc-2001",
    year: "2001",
    shortLabel: "Đại hội IX",
    title: "Đại hội đại biểu toàn quốc lần thứ IX",
    category: "ix",
    summary:
      "Diễn ra từ 19–22/4/2001 tại Hà Nội. Mở đầu thế kỷ XXI, xác lập mô hình kinh tế thị trường định hướng XHCN là mô hình kinh tế tổng quát.",
    keyPoints: [
      "Chiến lược phát triển KT-XH 10 năm 2001–2010: mục tiêu GDP 2010 gấp đôi năm 2000",
      "Kinh tế thị trường định hướng XHCN: 4 đặc trưng cốt lõi (sở hữu, thành phần, phân phối, quản lý)",
      "Định hình con đường quá độ lên CNXH, tiếp thu có chọn lọc tinh hoa nhân loại",
    ],
  },
  {
    id: "moc-2001-2005",
    year: "2001–2005",
    shortLabel: "Triển khai ĐH IX",
    title: "Quá trình triển khai Nghị quyết Đại hội IX",
    category: "ix",
    summary:
      "Giai đoạn thể chế hóa với hàng loạt nghị quyết đột phá về doanh nghiệp nhà nước (NQ 05), kinh tế tư nhân, đất đai, đại đoàn kết dân tộc và kiều bào (NQ 36).",
    keyPoints: [
      "24/9/2001: NQ 05-NQ/TW về sắp xếp, đổi mới và nâng cao hiệu quả doanh nghiệp nhà nước",
      "Hội nghị TW 5 & TW 7: Kinh tế tư nhân là bộ phận chiến lược; đất đai là tài nguyên đặc biệt",
      "12/3/2003: Bộ ba NQ TW 7 về đại đoàn kết toàn dân tộc, công tác dân tộc và tôn giáo",
      "26/3/2004: NQ 36-NQ/TW của Bộ Chính trị về cộng đồng người Việt Nam ở nước ngoài",
    ],
  },
  {
    id: "moc-2006",
    year: "2006",
    shortLabel: "Đại hội X",
    title: "Đại hội đại biểu toàn quốc lần thứ X",
    category: "x",
    summary:
      "Diễn ra từ 18–25/4/2006 tại Hà Nội. Đẩy mạnh toàn diện công cuộc đổi mới sau 20 năm, tổng kết 5 bài học lớn và cho phép đảng viên làm kinh tế tư nhân.",
    keyPoints: [
      "Chủ đề: Nâng cao năng lực lãnh đạo, phát huy sức mạnh dân tộc, đẩy mạnh toàn diện đổi mới",
      "Đột phá lý luận: Cho phép đảng viên làm kinh tế tư nhân, kể cả kinh tế tư bản tư nhân",
      "Bổ sung đặc trưng XHCN: 'Dân giàu, nước mạnh, dân chủ, công bằng, văn minh'",
    ],
  },
  {
    id: "moc-2006-2010",
    year: "2006–2010",
    shortLabel: "Triển khai ĐH X",
    title: "Quá trình triển khai Nghị quyết Đại hội X",
    category: "x",
    summary:
      "Xây dựng chỉnh đốn Đảng (NQ 04 về phòng chống tham nhũng), kiểm tra giám sát (NQ 14, 15), chăm lo công nhân (NQ 20), thanh niên (NQ 25) và trí thức (NQ 27).",
    keyPoints: [
      "21/8/2006: NQ 04-NQ/TW về tăng cường sự lãnh đạo của Đảng đối với phòng, chống tham nhũng, lãng phí",
      "30/7/2007: NQ 14-NQ/TW (kiểm tra, giám sát) & NQ 15-NQ/TW (đổi mới phương thức lãnh đạo)",
      "2008: NQ 20 (giai cấp công nhân), NQ 25 (thanh niên 25/7), NQ 27 (đội ngũ trí thức 6/8)",
      "NQ 21: Hoàn thiện thể chế kinh tế thị trường định hướng XHCN & giải quyết vấn đề tam nông",
    ],
  },
  {
    id: "moc-2007",
    year: "2007",
    shortLabel: "Chiến lược biển",
    title: "Nghị quyết 09-NQ/TW về Chiến lược biển Việt Nam đến năm 2020",
    category: "sea",
    summary:
      "Ban hành ngày 9/2/2007. Xác định mục tiêu đưa Việt Nam trở thành quốc gia mạnh về biển, làm giàu từ biển; song hành cùng dấu mốc gia nhập WTO (11/1/2007).",
    keyPoints: [
      "11/1/2007: Việt Nam chính thức là thành viên WTO; NQ 08-NQ/TW về phát triển kinh tế thời kỳ hội nhập",
      "9/2/2007: NQ 09-NQ/TW khẳng định biển là không gian sinh tồn và nguồn lực chiến lược",
      "Mục tiêu 2020: Kinh tế biển đóng góp 53–55% GDP và 55–60% kim ngạch xuất khẩu",
      "Kết hợp phát triển kinh tế với bảo đảm quốc phòng, an ninh và bảo vệ chủ quyền biển đảo",
    ],
  },
  {
    id: "moc-2010",
    year: "2010",
    shortLabel: "Tổng kết ĐH X",
    title: "Tổng kết giai đoạn thực hiện Nghị quyết Đại hội X",
    category: "x",
    summary:
      "Tăng trưởng GDP bình quân ~7%/năm, GDP/người đạt 1.168 USD, Việt Nam chính thức ra khỏi nhóm nước nghèo từ năm 2008.",
    keyPoints: [
      "GDP tăng trưởng bình quân ~7%/năm; FDI năm 2010 đạt 19,88 tỷ USD (gấp gần 3 lần năm 2005)",
      "Việt Nam ra khỏi nhóm nước nghèo từ năm 2008; mở rộng quan hệ với khoảng 230 quốc gia",
      "Nhìn nhận hạn chế về chất lượng tăng trưởng, mở đường cho giai đoạn đổi mới tiếp theo",
    ],
  },
];

export const ALL_ANCHORS = [
  ...TIMELINE_MILESTONES,
  {
    id: "so-sanh-danh-gia",
    year: "Đánh giá",
    shortLabel: "So sánh & Đánh giá",
    title: "So sánh và đánh giá hai kỳ Đại hội",
    category: "compare" as const,
    summary:
      "Đối chiếu những điểm kế thừa, những bước phát triển mới và vai trò của Nghị quyết 09-NQ/TW năm 2007.",
    keyPoints: [
      "Tính kế thừa vững chắc",
      "Đột phá lý luận của Đại hội X",
      "Vai trò chiến lược của NQ 09-NQ/TW",
    ],
  },
];

export function scrollToMilestone(id: string) {
  const element = document.getElementById(id);
  if (!element) return;
  const navbarOffset = 76; // 64px navbar + breathing room
  const bodyRect = document.body.getBoundingClientRect().top;
  const elementRect = element.getBoundingClientRect().top;
  const elementPosition = elementRect - bodyRect;
  const offsetPosition = elementPosition - navbarOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });

  if (window.history.pushState) {
    window.history.pushState(null, "", `#${id}`);
  }
}
