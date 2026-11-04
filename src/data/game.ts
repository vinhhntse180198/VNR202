import type { ImageKey } from "@/lib/assets";

/**
 * Dữ liệu trò chơi duy nhất của VNR202: đúng 10 câu hỏi, kéo thả sự kiện
 * vào đúng vị trí (mốc năm) trên dòng thời gian. Không trắc nghiệm ABCD.
 *
 * Toàn bộ mốc thời gian lấy từ tài liệu môn học VNR202 (VNR202.docx) và
 * văn kiện Đại hội IX, X – không tự bịa sự kiện lịch sử.
 */

export interface GameQuestion {
  id: string;
  eventTitle: string;
  eventDetail: string;
  photo: ImageKey;
  photoCaption: string;
  dateLabel: string;
  year: number;
  /** 4 mốc năm trên dòng thời gian, sắp tăng dần, đúng 1 mốc đúng */
  slotYears: number[];
  hint: string;
  explanation: string;
}

export const GAME_POINTS_FULL = 10;
export const GAME_POINTS_HINT = 7;

export const GAME_QUESTIONS: GameQuestion[] = [
  {
    id: "q1",
    eventTitle: "Đại hội đại biểu toàn quốc lần thứ IX của Đảng",
    eventDetail:
      "Tổng kết thế kỷ XX, thông qua Chiến lược phát triển kinh tế – xã hội 2001–2010, xác định nền kinh tế thị trường định hướng xã hội chủ nghĩa là mô hình kinh tế tổng quát.",
    photo: "congress_hall",
    photoCaption: "Hội trường Ba Đình, Hà Nội – nơi diễn ra Đại hội IX (ảnh tư liệu).",
    dateLabel: "19 – 22/4/2001",
    year: 2001,
    slotYears: [2001, 2006, 2018, 2020],
    hint: "Đại hội diễn ra khi Việt Nam bước vào thế kỷ XXI, sau đúng 15 năm thực hiện đường lối đổi mới.",
    explanation:
      "Đại hội IX diễn ra từ ngày 19 đến ngày 22/4/2001 tại Hà Nội, sau 15 năm thực hiện đường lối đổi mới.",
  },
  {
    id: "q2",
    eventTitle: "Nghị quyết số 05-NQ/TW về doanh nghiệp nhà nước",
    eventDetail:
      "Hội nghị Trung ương 3 khóa IX ban hành nghị quyết về tiếp tục sắp xếp, đổi mới, phát triển và nâng cao hiệu quả doanh nghiệp nhà nước.",
    photo: "modernization",
    photoCaption: "Thành phố Hà Nội hiện đại – hình ảnh gắn với công nghiệp hóa, hiện đại hóa.",
    dateLabel: "24/9/2001",
    year: 2001,
    slotYears: [2001, 2007, 2010, 2018],
    hint: "Nghị quyết được ban hành ngay trong năm Đại hội IX khai mạc, vào mùa thu.",
    explanation:
      "Ngày 24/9/2001, Hội nghị Trung ương 3 khóa IX ban hành Nghị quyết số 05-NQ/TW về tiếp tục sắp xếp, đổi mới, phát triển và nâng cao hiệu quả doanh nghiệp nhà nước.",
  },
  {
    id: "q3",
    eventTitle: "Đại hội đại biểu toàn quốc lần thứ X của Đảng",
    eventDetail:
      "Đẩy mạnh toàn diện công cuộc đổi mới sau 20 năm thực hiện đường lối đổi mới; thông qua Kế hoạch phát triển kinh tế – xã hội 2006–2010.",
    photo: "badinh_interior",
    photoCaption: "Hội trường Ba Đình, Hà Nội (nội thất) – nơi diễn ra Đại hội X (ảnh tư liệu).",
    dateLabel: "18 – 25/4/2006",
    year: 2006,
    slotYears: [2001, 2006, 2010, 2020],
    hint: "Đại hội diễn ra đúng 20 năm sau khi công cuộc đổi mới bắt đầu (1986).",
    explanation:
      "Đại hội X diễn ra từ ngày 18 đến ngày 25/4/2006 tại Hà Nội, trong bối cảnh Việt Nam đã trải qua 20 năm đổi mới.",
  },
  {
    id: "q4",
    eventTitle: "Đại hội X xác định chủ trương phát triển kinh tế biển toàn diện",
    eventDetail:
      "Đại hội xác định chủ trương xây dựng chiến lược phát triển kinh tế biển toàn diện, có trọng tâm, trọng điểm.",
    photo: "hero_halong",
    photoCaption: "Vịnh Hạ Long, Quảng Ninh – biểu tượng của biển Việt Nam.",
    dateLabel: "4/2006",
    year: 2006,
    slotYears: [2001, 2003, 2006, 2007],
    hint: "Chủ trương này được nêu ngay trong văn kiện Đại hội, trước khi được cụ thể hóa bằng Nghị quyết riêng một năm sau.",
    explanation:
      "Đại hội X (4/2006) xác định chủ trương xây dựng chiến lược phát triển kinh tế biển toàn diện; chủ trương này được cụ thể hóa tại Nghị quyết số 09-NQ/TW ngày 9/2/2007.",
  },
  {
    id: "q5",
    eventTitle: "Việt Nam chính thức trở thành thành viên WTO",
    eventDetail:
      "Tại Geneva (Thụy Sĩ), Đại Hội đồng WTO tổ chức trọng thể lễ kết nạp Việt Nam trở thành thành viên thứ 150 của Tổ chức Thương mại Thế giới.",
    photo: "wto_geneva",
    photoCaption:
      "Trụ sở WTO (Centre William Rappard) tại Geneva, Thụy Sĩ – nơi tổ chức lễ kết nạp Việt Nam (ảnh tư liệu: Wikimedia Commons, CC BY-SA 3.0).",
    dateLabel: "11/1/2007",
    year: 2007,
    slotYears: [2001, 2006, 2007, 2020],
    hint: "Việt Nam là thành viên thứ 150 của tổ chức thương mại toàn cầu, kết nạp ngay đầu năm.",
    explanation:
      "Ngày 11/1/2007, tại Geneva, Việt Nam chính thức trở thành thành viên thứ 150 của Tổ chức Thương mại Thế giới (WTO).",
  },
  {
    id: "q6",
    eventTitle: "Nghị quyết số 08-NQ/TW về phát triển kinh tế khi là thành viên WTO",
    eventDetail:
      "Hội nghị Trung ương 4 khóa X ban hành nghị quyết về những chủ trương, chính sách lớn để nền kinh tế phát triển nhanh và bền vững khi Việt Nam là thành viên WTO.",
    photo: "cargo",
    photoCaption: "Tàu container tại cảng – hình ảnh gắn với thương mại quốc tế.",
    dateLabel: "5/2/2007",
    year: 2007,
    slotYears: [2006, 2007, 2010, 2018],
    hint: "Nghị quyết được ban hành gần như ngay sau khi Việt Nam gia nhập WTO, chỉ vài ngày.",
    explanation:
      "Ngày 5/2/2007, Hội nghị Trung ương 4 khóa X ban hành Nghị quyết số 08-NQ/TW về những chủ trương, chính sách lớn để nền kinh tế phát triển nhanh và bền vững khi Việt Nam là thành viên WTO.",
  },
  {
    id: "q7",
    eventTitle: "Nghị quyết số 09-NQ/TW về Chiến lược biển Việt Nam đến năm 2020",
    eventDetail:
      "Hội nghị Trung ương 4 khóa X ban hành nghị quyết, xác định đưa Việt Nam trở thành quốc gia mạnh về biển, làm giàu từ biển.",
    photo: "map_vietnam",
    photoCaption: "Bản đồ địa hình Việt Nam – đường bờ biển dài hơn 3.260 km.",
    dateLabel: "9/2/2007",
    year: 2007,
    slotYears: [2001, 2006, 2007, 2018],
    hint: "Nghị quyết ban hành chỉ 4 ngày sau Nghị quyết số 08-NQ/TW, cùng do Hội nghị Trung ương 4 khóa X thông qua.",
    explanation:
      "Ngày 9/2/2007, Hội nghị Trung ương 4 khóa X ban hành Nghị quyết số 09-NQ/TW về Chiến lược biển Việt Nam đến năm 2020.",
  },
  {
    id: "q8",
    eventTitle: "Nghị quyết số 36-NQ/TW về chiến lược phát triển bền vững kinh tế biển",
    eventDetail:
      "Chiến lược phát triển bền vững kinh tế biển Việt Nam đến năm 2030, tầm nhìn đến năm 2045, tiếp tục định hướng xây dựng Việt Nam trở thành quốc gia biển mạnh.",
    photo: "sovereignty",
    photoCaption: "Đảo Trường Sa – biểu tượng của chủ quyền biển đảo Việt Nam.",
    dateLabel: "22/10/2018",
    year: 2018,
    slotYears: [2007, 2010, 2018, 2020],
    hint: "Nghị quyết được ban hành hơn 11 năm sau Chiến lược biển 2020, phát triển định hướng đến năm 2030 và tầm nhìn 2045.",
    explanation:
      "Nghị quyết số 36-NQ/TW ngày 22/10/2018 về Chiến lược phát triển bền vững kinh tế biển Việt Nam đến năm 2030, tầm nhìn đến năm 2045.",
  },
  {
    id: "q9",
    eventTitle: "Mục tiêu Chiến lược biển: kinh tế biển chiếm 53–55% GDP",
    eventDetail:
      "Mục tiêu của Nghị quyết số 09-NQ/TW: đến mốc này, kinh tế biển đóng góp khoảng 53–55% GDP và đạt 55–60% tổng kim ngạch xuất khẩu.",
    photo: "fishing",
    photoCaption: "Thuyền đánh cá tại cảng Mũi Né – một trong các ngành kinh tế biển chủ lực.",
    dateLabel: "đến năm 2020",
    year: 2020,
    slotYears: [2007, 2010, 2018, 2020],
    hint: "Đây là mốc mục tiêu trong tên gọi của Chiến lược biển do Nghị quyết số 09-NQ/TW đề ra.",
    explanation:
      "Nghị quyết số 09-NQ/TW xác định mục tiêu đến năm 2020: kinh tế biển đóng góp khoảng 53–55% GDP và đạt 55–60% tổng kim ngạch xuất khẩu.",
  },
  {
    id: "q10",
    eventTitle: "Mục tiêu Chiến lược biển: 55–60% tổng kim ngạch xuất khẩu",
    eventDetail:
      "Mục tiêu của Nghị quyết số 09-NQ/TW: đến mốc này, kinh tế biển đạt 55–60% tổng kim ngạch xuất khẩu của cả nước.",
    photo: "haiphong_port",
    photoCaption: "Cảng Hải Phòng – cụm cảng biển quan trọng của vùng Bắc Bộ.",
    dateLabel: "đến năm 2020",
    year: 2020,
    slotYears: [2001, 2010, 2018, 2020],
    hint: "Cùng mốc mục tiêu với câu trước – năm mà Chiến lược biển (Nghị quyết 09-NQ/TW) hướng tới.",
    explanation:
      "Nghị quyết số 09-NQ/TW xác định mục tiêu đến năm 2020: kinh tế biển đạt 55–60% tổng kim ngạch xuất khẩu.",
  },
];

export function getGameQuestion(id: string) {
  return GAME_QUESTIONS.find((q) => q.id === id);
}
