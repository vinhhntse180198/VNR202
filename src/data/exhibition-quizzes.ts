export interface KnowledgeQuestion {
  id: string;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

// ─── Quiz Lịch sử: Đại hội IX & X ──────────────────────────────────────────
export const HISTORY_QUIZ: KnowledgeQuestion[] = [
  {
    id: "ix-time",
    question: "Đại hội đại biểu toàn quốc lần thứ IX diễn ra vào thời gian nào?",
    options: ["19–22/4/2001 tại Hà Nội", "18–25/4/2006 tại Hà Nội", "12–15/3/2003 tại TP.HCM"],
    answer: 0,
    explanation:
      "Đại hội IX diễn ra từ ngày 19 đến ngày 22/4/2001 tại Hà Nội, sau 15 năm thực hiện đường lối Đổi mới.",
  },
  {
    id: "ix-model",
    question: "Đại hội IX xác định mô hình kinh tế tổng quát nào của Việt Nam?",
    options: [
      "Kinh tế thị trường định hướng xã hội chủ nghĩa",
      "Kinh tế kế hoạch hóa tập trung",
      "Kinh tế hỗn hợp không có định hướng",
    ],
    answer: 0,
    explanation:
      "Đại hội IX xác định thực hiện nhất quán và lâu dài nền kinh tế thị trường định hướng xã hội chủ nghĩa là mô hình kinh tế tổng quát trong thời kỳ quá độ.",
  },
  {
    id: "ix-strategy",
    question:
      "Chiến lược phát triển kinh tế – xã hội 2001–2010 đặt mục tiêu GDP năm 2010 như thế nào?",
    options: [
      "Tăng gấp đôi so với năm 2000",
      "Tăng gấp ba so với năm 2000",
      "Bằng mức bình quân ASEAN",
    ],
    answer: 0,
    explanation:
      "Chiến lược 2001–2010 phấn đấu GDP năm 2010 tăng gấp đôi so với năm 2000, tạo nền tảng để đến 2020 cơ bản trở thành nước công nghiệp theo hướng hiện đại.",
  },
  {
    id: "x-time",
    question: "Đại hội đại biểu toàn quốc lần thứ X diễn ra vào năm nào?",
    options: ["2001", "2006", "2007"],
    answer: 1,
    explanation:
      "Đại hội X diễn ra từ ngày 18 đến 25/4/2006 tại Hà Nội, sau 20 năm đất nước thực hiện công cuộc Đổi mới (1986–2006).",
  },
  {
    id: "x-lessons",
    question: "Đại hội X tổng kết 20 năm Đổi mới và rút ra bao nhiêu bài học lớn?",
    options: ["3 bài học", "5 bài học", "7 bài học"],
    answer: 1,
    explanation:
      "Đại hội X tổng kết 5 bài học lớn, từ kiên định mục tiêu ĐLDT-CNXH đến nâng cao năng lực lãnh đạo của Đảng.",
  },
  {
    id: "wto",
    question: "Việt Nam chính thức gia nhập Tổ chức Thương mại Thế giới (WTO) vào ngày nào?",
    options: ["09/02/2007", "11/01/2007", "22/10/2018"],
    answer: 1,
    explanation:
      "Ngày 11/01/2007, Việt Nam chính thức trở thành thành viên WTO sau nhiều năm đàm phán, mở ra kỷ nguyên hội nhập kinh tế quốc tế toàn diện.",
  },
  {
    id: "nq09",
    question: "Nghị quyết 09-NQ/TW (ngày 9/2/2007) đề ra chiến lược gì?",
    options: [
      "Chiến lược phát triển nông nghiệp bền vững",
      "Chiến lược biển Việt Nam đến năm 2020",
      "Chiến lược phát triển công nghiệp đến 2020",
    ],
    answer: 1,
    explanation:
      "Nghị quyết số 09-NQ/TW ngày 9/2/2007 về Chiến lược biển Việt Nam đến năm 2020, phấn đấu kinh tế biển đóng góp 53–55% GDP vào năm 2020.",
  },
  {
    id: "gdp-2010",
    question: "Tốc độ tăng trưởng GDP bình quân giai đoạn 2006–2010 đạt khoảng bao nhiêu?",
    options: ["Khoảng 5%/năm", "Khoảng 7%/năm", "Khoảng 10%/năm"],
    answer: 1,
    explanation:
      "Tốc độ tăng trưởng GDP bình quân giai đoạn thực hiện Đại hội X đạt khoảng 7%/năm. GDP bình quân đầu người năm 2010 đạt khoảng 1.168 USD.",
  },
];

// ─── Quiz Kinh tế biển ───────────────────────────────────────────────────────
export const MARINE_QUIZ: KnowledgeQuestion[] = [
  {
    id: "coastline",
    question: "Việt Nam có đường bờ biển dài bao nhiêu km?",
    options: ["Hơn 1.500 km", "Hơn 3.260 km", "Hơn 5.000 km"],
    answer: 1,
    explanation:
      "Việt Nam có đường bờ biển dài hơn 3.260 km, nhiều đảo, quần đảo và vị trí địa lý chiến lược trên các tuyến hàng hải quốc tế.",
  },
  {
    id: "strategy",
    question:
      "Nghị quyết 09-NQ/TW đặt mục tiêu kinh tế biển đóng góp bao nhiêu % GDP vào năm 2020?",
    options: ["Khoảng 30–35%", "Khoảng 53–55%", "Khoảng 70–75%"],
    answer: 1,
    explanation:
      "Nghị quyết 09-NQ/TW phấn đấu đến năm 2020 kinh tế biển đóng góp khoảng 53–55% GDP và 55–60% tổng kim ngạch xuất khẩu.",
  },
  {
    id: "nq36",
    question: "Nghị quyết 36-NQ/TW (2018) đặt tầm nhìn phát triển kinh tế biển đến năm nào?",
    options: ["Năm 2030", "Năm 2045", "Cả hai: 2030 và tầm nhìn 2045"],
    answer: 2,
    explanation:
      "Nghị quyết 36-NQ/TW ngày 22/10/2018 xây dựng mục tiêu đến 2030 và tầm nhìn đến năm 2045, hướng Việt Nam trở thành quốc gia biển mạnh, phát triển bền vững.",
  },
  {
    id: "camaep",
    question: "Cụm cảng nào được nêu là ví dụ thực tiễn về đầu tư hạ tầng logistics biển đồng bộ?",
    options: [
      "Cảng Đà Nẵng và Cảng Quy Nhơn",
      "Cụm cảng Cái Mép – Thị Vải",
      "Cảng Hải Phòng và Cảng Nha Trang",
    ],
    answer: 1,
    explanation:
      "Cụm cảng Cái Mép – Thị Vải (Bà Rịa – Vũng Tàu) là ví dụ điển hình về cảng nước sâu có thể tiếp nhận tàu trọng tải lớn, kết nối thương mại quốc tế.",
  },
  {
    id: "environment",
    question: "Ví dụ thực tiễn nào được nêu về bảo vệ môi trường ven biển?",
    options: [
      "Phục hồi rừng ngập mặn tại Cà Mau",
      "Xây kè bờ biển tại Phú Quốc",
      "Lấp biển mở rộng đất tại Đà Nẵng",
    ],
    answer: 0,
    explanation:
      "Việc bảo vệ và phục hồi rừng ngập mặn tại Cà Mau giúp hạn chế xói lở, duy trì đa dạng sinh học và bảo vệ sinh kế cộng đồng dân cư ven biển.",
  },
  {
    id: "student",
    question: "Sinh viên có thể đóng góp cho sự nghiệp biển đảo bằng cách nào?",
    options: [
      "Chờ tốt nghiệp mới hành động",
      "Tuyên truyền thông tin chính xác, bảo vệ môi trường và học tập khoa học – công nghệ",
      "Chỉ cần tham gia biểu tình",
    ],
    answer: 1,
    explanation:
      "Sinh viên có thể hành động ngay: tìm hiểu chủ trương về biển đảo, nâng cao nhận thức, học KH-CN, bảo vệ môi trường biển và tuyên truyền thông tin chính xác.",
  },
];
