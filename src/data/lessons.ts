import type { ImageKey } from "@/lib/assets";

export interface LessonSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  image?: ImageKey;
  imageCaption?: string;
  note?: string;
}

export interface LessonMilestone {
  date: string;
  text: string;
}

export interface Lesson {
  slug: string;
  title: string;
  subtitle: string;
  chapterLabel: string;
  heroImage: ImageKey;
  minutes: number;
  /** Phần tương ứng trong tài liệu môn học VNR202.docx */
  docSection: string;
  /** Các mốc thời gian quan trọng – lấy nguyên từ VNR202.docx */
  milestones: LessonMilestone[];
  sections: LessonSection[];
  keyFacts: string[];
}

export const COURSE_DOCUMENT =
  "Tài liệu môn học VNR202 – Phân tích nội dung cơ bản Đại hội đại biểu toàn quốc lần thứ IX (2001) và lần thứ X (2006) và quá trình triển khai thực hiện. Các giải pháp để đưa Việt Nam trở thành quốc gia mạnh về biển, giàu từ biển.";

export const LESSONS: Lesson[] = [
  {
    slug: "dai-hoi-ix",
    title: "Đại hội đại biểu toàn quốc lần thứ IX (2001)",
    subtitle: "Tổng kết thế kỷ XX, xác định phương hướng phát triển đất nước đầu thế kỷ XXI",
    chapterLabel: "Chủ đề 1",
    heroImage: "badinh_hall",
    minutes: 18,
    docSection:
      "Phần I – Đại hội đại biểu toàn quốc lần thứ IX (2001) và quá trình triển khai thực hiện",
    milestones: [
      { date: "1986", text: "Bắt đầu thực hiện đường lối đổi mới." },
      {
        date: "1991",
        text: "Đại hội VII thông qua Chiến lược ổn định và phát triển kinh tế – xã hội đến năm 2000.",
      },
      { date: "19 – 22/4/2001", text: "Đại hội đại biểu toàn quốc lần thứ IX diễn ra tại Hà Nội." },
      {
        date: "24/9/2001",
        text: "Hội nghị Trung ương 3 khóa IX ban hành Nghị quyết số 05-NQ/TW về doanh nghiệp nhà nước.",
      },
      {
        date: "12/3/2003",
        text: "Hội nghị Trung ương 7 khóa IX ban hành các Nghị quyết số 23, 24, 25-NQ/TW.",
      },
      {
        date: "26/3/2004",
        text: "Bộ Chính trị ban hành Nghị quyết số 36-NQ/TW về công tác đối với người Việt Nam ở nước ngoài.",
      },
    ],
    sections: [
      {
        heading: "Bối cảnh lịch sử của Đại hội IX",
        paragraphs: [
          "Đại hội đại biểu toàn quốc lần thứ IX của Đảng Cộng sản Việt Nam diễn ra từ ngày 19 đến ngày 22/4/2001 tại Hà Nội. Đại hội được tổ chức khi Việt Nam bước vào thế kỷ XXI, sau 15 năm thực hiện đường lối đổi mới và đứng trước những thời cơ, thách thức mới của quá trình công nghiệp hóa, hiện đại hóa đất nước.",
        ],
        image: "congress_hall",
        imageCaption:
          "Hội trường Ba Đình, Hà Nội – nơi diễn ra nhiều sự kiện trọng đại của Đảng và Nhà nước (ảnh tư liệu).",
      },
      {
        heading: "Bối cảnh quốc tế",
        paragraphs: [
          "Cuộc cách mạng khoa học – công nghệ phát triển mạnh mẽ, thúc đẩy sự hình thành và phát triển của kinh tế tri thức. Quá trình toàn cầu hóa ngày càng sâu rộng, tạo ra những thay đổi lớn trong quan hệ kinh tế, chính trị và hợp tác quốc tế.",
          "Khu vực châu Á – Thái Bình Dương trở thành một trong những khu vực có nhiều tiềm năng phát triển kinh tế, đồng thời vẫn tồn tại những nhân tố gây mất ổn định. Những biến đổi của tình hình quốc tế tạo điều kiện để Việt Nam mở rộng quan hệ hợp tác, thu hút vốn đầu tư, tiếp cận thành tựu khoa học – công nghệ và tham gia sâu hơn vào nền kinh tế thế giới.",
        ],
        note: "Tuy nhiên, quá trình hội nhập cũng làm gia tăng sức ép cạnh tranh giữa các quốc gia, đặc biệt đối với những nước đang phát triển như Việt Nam.",
      },
      {
        heading: "Bối cảnh trong nước",
        paragraphs: [
          "Sau 15 năm thực hiện đường lối đổi mới (1986–2001), Việt Nam đã đạt được những thành tựu quan trọng trong phát triển kinh tế – xã hội. Nền kinh tế từng bước chuyển sang vận hành theo cơ chế thị trường có sự quản lý của Nhà nước; đời sống vật chất và tinh thần của nhân dân được cải thiện, tình hình chính trị – xã hội cơ bản ổn định, quan hệ đối ngoại ngày càng mở rộng.",
          "Tuy nhiên, một số chỉ tiêu được đề ra tại Đại hội VIII chưa đạt. Nền kinh tế còn hạn chế về trình độ phát triển, chất lượng tăng trưởng, hiệu quả sử dụng nguồn lực và năng lực cạnh tranh.",
        ],
      },
      {
        heading: "Tổng kết thế kỷ XX và xác định phương hướng phát triển đất nước",
        paragraphs: [
          "Đại hội IX tiến hành tổng kết những biến đổi của tình hình thế giới và quá trình cách mạng Việt Nam trong thế kỷ XX, đánh giá những thành tựu, hạn chế và bài học kinh nghiệm.",
          "Đại hội tiếp tục khẳng định con đường phát triển của Việt Nam là độc lập dân tộc gắn liền với chủ nghĩa xã hội, đồng thời xác định rõ hơn nội dung tư tưởng Hồ Chí Minh.",
        ],
      },
      {
        heading: "Chiến lược phát triển kinh tế – xã hội 2001–2010",
        paragraphs: [
          "Đại hội IX thông qua Chiến lược phát triển kinh tế – xã hội 10 năm (2001–2010), kế thừa kết quả thực hiện Chiến lược ổn định và phát triển kinh tế – xã hội đến năm 2000 được thông qua tại Đại hội VII (1991), trong đó GDP năm 2000 đã tăng gấp đôi so với năm 1990.",
        ],
        bullets: [
          "Đưa Việt Nam ra khỏi tình trạng kém phát triển.",
          "Nâng cao đời sống vật chất và tinh thần của nhân dân.",
          "Phấn đấu GDP năm 2010 tăng gấp đôi so với năm 2000.",
          "Tạo nền tảng để đến năm 2020 Việt Nam cơ bản trở thành nước công nghiệp theo hướng hiện đại.",
        ],
        note: "Chiến lược này thể hiện bước chuyển từ nhiệm vụ chủ yếu ổn định kinh tế sang đẩy mạnh tăng trưởng và phát triển.",
      },
      {
        heading: "Con đường quá độ lên chủ nghĩa xã hội",
        paragraphs: [
          "Đại hội IX tiếp tục khẳng định con đường phát triển của Việt Nam là con đường lên chủ nghĩa xã hội, bỏ qua chế độ tư bản chủ nghĩa.",
          "Bỏ qua chế độ tư bản chủ nghĩa không có nghĩa là bỏ qua toàn bộ những thành tựu mà nhân loại đã đạt được. Việt Nam cần tiếp thu có chọn lọc các thành tựu về khoa học – công nghệ, quản lý và tổ chức sản xuất để phát triển lực lượng sản xuất.",
        ],
      },
      {
        heading: "Kinh tế thị trường định hướng xã hội chủ nghĩa – mô hình kinh tế tổng quát",
        paragraphs: [
          "Đại hội IX xác định thực hiện nhất quán và lâu dài nền kinh tế thị trường định hướng xã hội chủ nghĩa, coi đây là mô hình kinh tế tổng quát của Việt Nam trong thời kỳ quá độ lên chủ nghĩa xã hội.",
        ],
        bullets: [
          "Nhiều hình thức sở hữu.",
          "Nhiều thành phần kinh tế.",
          "Nhiều hình thức phân phối.",
          "Vận hành theo cơ chế thị trường có sự quản lý của Nhà nước, hướng đến các mục tiêu xã hội chủ nghĩa.",
        ],
        note: "Đây là một trong những nội dung quan trọng nhất của Đại hội IX, thể hiện bước phát triển trong nhận thức lý luận của Đảng.",
      },
      {
        heading: "Phát triển văn hóa, đại đoàn kết toàn dân tộc và mở rộng quan hệ đối ngoại",
        paragraphs: [
          "Đại hội IX xác định xây dựng nền văn hóa Việt Nam là nền tảng tinh thần của xã hội, vừa là mục tiêu, vừa là động lực thúc đẩy phát triển kinh tế – xã hội. Khối đại đoàn kết toàn dân tộc là nguồn lực quan trọng để thực hiện các nhiệm vụ phát triển kinh tế – xã hội và bảo vệ đất nước.",
          "Về đối ngoại, Đại hội khẳng định Việt Nam sẵn sàng là bạn, là đối tác tin cậy của các nước trong cộng đồng quốc tế, phấn đấu vì hòa bình, độc lập và phát triển.",
        ],
        image: "modernization",
        imageCaption:
          "Hà Nội hôm nay – kết quả của con đường phát triển mở ra từ công cuộc đổi mới.",
      },
      {
        heading: "Quá trình triển khai Nghị quyết Đại hội IX (2001–2005)",
        bullets: [
          "Ngày 24/9/2001, Hội nghị Trung ương 3 khóa IX ban hành Nghị quyết số 05-NQ/TW về tiếp tục sắp xếp, đổi mới, phát triển và nâng cao hiệu quả doanh nghiệp nhà nước.",
          "Hội nghị Trung ương 5 khóa IX thống nhất nhận thức về đổi mới kinh tế tập thể và khẳng định ba nội dung về kinh tế tư nhân: là bộ phận cấu thành quan trọng của nền kinh tế; phát triển kinh tế tư nhân là vấn đề chiến lược lâu dài; cần đổi mới cơ chế, chính sách để khuyến khích kinh tế tư nhân phát triển.",
          "Hội nghị Trung ương 7 khóa IX thống nhất nhận thức về đất đai: đất đai là tài nguyên quý giá, tư liệu sản xuất đặc biệt; quyền sử dụng đất là hàng hóa đặc biệt; đất đai thuộc sở hữu toàn dân; Nhà nước giao đất, cho thuê đất theo quy định.",
          "Ngày 12/3/2003, Hội nghị Trung ương 7 khóa IX ban hành ba nghị quyết: Nghị quyết số 23-NQ/TW (đại đoàn kết toàn dân tộc), Nghị quyết số 24-NQ/TW (công tác dân tộc) và Nghị quyết số 25-NQ/TW (công tác tôn giáo).",
          "Ngày 26/3/2004, Bộ Chính trị khóa IX ban hành Nghị quyết số 36-NQ/TW về công tác đối với người Việt Nam ở nước ngoài, xác định cộng đồng kiều bào là bộ phận không tách rời của cộng đồng dân tộc Việt Nam.",
        ],
        image: "map_vietnam",
        imageCaption:
          "Bản đồ địa hình Việt Nam – không gian phát triển kinh tế – xã hội của đất nước.",
      },
      {
        heading: "Kết quả, hạn chế và ý nghĩa của Đại hội IX",
        paragraphs: [
          "Kết quả: quá trình thực hiện đường lối Đại hội IX tạo ra những chuyển biến trong việc hoàn thiện nhận thức về nền kinh tế thị trường định hướng xã hội chủ nghĩa, đổi mới các thành phần kinh tế và thúc đẩy hội nhập quốc tế.",
          "Hạn chế: nền kinh tế vẫn còn những khó khăn về chất lượng tăng trưởng, hiệu quả sử dụng nguồn lực và năng lực cạnh tranh; việc hoàn thiện thể chế kinh tế thị trường cần tiếp tục được thực hiện đồng bộ.",
          "Ý nghĩa: Đại hội IX có ý nghĩa quan trọng trong việc phát triển nhận thức lý luận của Đảng về mô hình kinh tế và phương hướng xây dựng đất nước, tạo tiền đề để Đại hội X tiếp tục đẩy mạnh toàn diện công cuộc đổi mới.",
        ],
      },
    ],
    keyFacts: [
      "Đại hội IX diễn ra từ ngày 19/4 đến 22/4/2001 tại Hà Nội.",
      "GDP năm 2010 phấn đấu tăng gấp đôi so với năm 2000.",
      "Mục tiêu đến năm 2020 Việt Nam cơ bản trở thành nước công nghiệp theo hướng hiện đại.",
      "Kinh tế thị trường định hướng xã hội chủ nghĩa được xác định là mô hình kinh tế tổng quát.",
    ],
  },
  {
    slug: "dai-hoi-x",
    title: "Đại hội đại biểu toàn quốc lần thứ X (2006)",
    subtitle: "Đẩy mạnh toàn diện công cuộc đổi mới sau 20 năm thực hiện đường lối đổi mới",
    chapterLabel: "Chủ đề 2",
    heroImage: "badinh_interior",
    minutes: 18,
    docSection:
      "Phần II – Đại hội đại biểu toàn quốc lần thứ X (2006) và quá trình triển khai thực hiện",
    milestones: [
      { date: "18 – 25/4/2006", text: "Đại hội đại biểu toàn quốc lần thứ X diễn ra tại Hà Nội." },
      { date: "21/8/2006", text: "Nghị quyết số 04-NQ/TW về phòng, chống tham nhũng, lãng phí." },
      {
        date: "11/1/2007",
        text: "Việt Nam chính thức trở thành thành viên Tổ chức Thương mại Thế giới (WTO).",
      },
      {
        date: "5/2/2007",
        text: "Nghị quyết số 08-NQ/TW về phát triển kinh tế khi Việt Nam là thành viên WTO.",
      },
      {
        date: "9/2/2007",
        text: "Nghị quyết số 09-NQ/TW về Chiến lược biển Việt Nam đến năm 2020.",
      },
      {
        date: "30/7/2007",
        text: "Nghị quyết số 14-NQ/TW và 15-NQ/TW (Hội nghị Trung ương 5 khóa X).",
      },
      { date: "6/8/2008", text: "Nghị quyết số 27-NQ/TW về xây dựng đội ngũ trí thức." },
      { date: "2008", text: "Việt Nam ra khỏi nhóm nước nghèo." },
    ],
    sections: [
      {
        heading: "Bối cảnh lịch sử của Đại hội X",
        paragraphs: [
          "Đại hội đại biểu toàn quốc lần thứ X của Đảng diễn ra từ ngày 18 đến ngày 25/4/2006 tại Hà Nội, trong bối cảnh Việt Nam đã trải qua 20 năm thực hiện công cuộc đổi mới (1986–2006).",
          "Tình hình quốc tế diễn biến nhanh chóng, phức tạp và khó lường; quá trình toàn cầu hóa và hội nhập kinh tế quốc tế tiếp tục phát triển, tạo điều kiện mở rộng hợp tác nhưng đồng thời làm gia tăng sự cạnh tranh kinh tế.",
          "Trong nước, đất nước có sự thay đổi cơ bản và toàn diện: nền kinh tế tiếp tục phát triển, đời sống nhân dân được cải thiện, chính trị – xã hội cơ bản ổn định, thế và lực của đất nước được nâng cao. Tuy nhiên, nền kinh tế vẫn tồn tại những hạn chế về chất lượng tăng trưởng, hiệu quả hoạt động và sức cạnh tranh.",
        ],
      },
      {
        heading: "Chủ đề và mục tiêu Đại hội X",
        bullets: [
          "Nâng cao năng lực lãnh đạo và sức chiến đấu của Đảng.",
          "Phát huy sức mạnh toàn dân tộc.",
          "Đẩy mạnh toàn diện công cuộc đổi mới.",
          "Sớm đưa Việt Nam ra khỏi tình trạng kém phát triển.",
        ],
        paragraphs: [
          "Đại hội thông qua Báo cáo chính trị, Kế hoạch phát triển kinh tế – xã hội 5 năm 2006–2010 và bổ sung Điều lệ Đảng. Đồng chí Nông Đức Mạnh tiếp tục được bầu làm Tổng Bí thư.",
        ],
        image: "badinh_interior",
        imageCaption:
          "Hội trường Ba Đình, Hà Nội (nội thất) – nơi diễn ra Đại hội X, ngày 18 – 25/4/2006 (ảnh tư liệu: Wikimedia Commons, CC BY-SA 3.0).",
      },
      {
        heading: "Tổng kết 20 năm đổi mới – năm bài học kinh nghiệm lớn",
        bullets: [
          "Bài học thứ nhất: Kiên định mục tiêu độc lập dân tộc và chủ nghĩa xã hội trên nền tảng chủ nghĩa Mác – Lênin và tư tưởng Hồ Chí Minh.",
          "Bài học thứ hai: Đổi mới toàn diện, đồng bộ, có kế thừa, có bước đi, hình thức và cách làm phù hợp.",
          "Bài học thứ ba: Đổi mới phải vì lợi ích của nhân dân, dựa vào nhân dân, xuất phát từ thực tiễn và nhạy bén với cái mới.",
          "Bài học thứ tư: Phát huy nội lực, kết hợp với ngoại lực, sức mạnh dân tộc với sức mạnh thời đại trong điều kiện mới.",
          "Bài học thứ năm: Nâng cao năng lực lãnh đạo của Đảng, bảo đảm quyền lực thuộc về nhân dân.",
        ],
        note: "Năm bài học cho thấy công cuộc đổi mới phải được thực hiện đồng bộ, gắn với thực tiễn và lợi ích của nhân dân.",
      },
      {
        heading: "Bổ sung và phát triển nhận thức về chủ nghĩa xã hội",
        bullets: [
          "Xây dựng xã hội dân giàu, nước mạnh, công bằng, dân chủ, văn minh.",
          "Xã hội do nhân dân làm chủ.",
          "Phát triển lực lượng sản xuất hiện đại, xây dựng quan hệ sản xuất phù hợp với trình độ phát triển của lực lượng sản xuất.",
          "Xây dựng nền văn hóa tiên tiến, đậm đà bản sắc dân tộc.",
          "Bảo đảm con người có cuộc sống ấm no, tự do, hạnh phúc và phát triển toàn diện.",
          "Xây dựng Nhà nước pháp quyền xã hội chủ nghĩa của nhân dân, do nhân dân, vì nhân dân dưới sự lãnh đạo của Đảng.",
        ],
      },
      {
        heading: "Ba nhiệm vụ then chốt của Đại hội X",
        paragraphs: [
          "Thứ nhất – Xây dựng, chỉnh đốn Đảng: nâng cao năng lực lãnh đạo và sức chiến đấu của Đảng; đấu tranh chống tiêu cực, tham nhũng và suy thoái; cho phép đảng viên làm kinh tế tư nhân, kể cả kinh tế tư bản tư nhân, trên cơ sở tuân thủ Điều lệ Đảng và pháp luật của Nhà nước.",
          "Thứ hai – Phát huy sức mạnh toàn dân tộc: đoàn kết trên cơ sở mục tiêu độc lập dân tộc và chủ nghĩa xã hội; xóa bỏ mặc cảm, định kiến quá khứ; tôn trọng những ý kiến khác nhau không trái với lợi ích chung của quốc gia, dân tộc.",
          "Thứ ba – Đẩy mạnh toàn diện công cuộc đổi mới: hoàn thiện thể chế kinh tế thị trường định hướng xã hội chủ nghĩa; đẩy mạnh công nghiệp hóa, hiện đại hóa; phát triển kinh tế gắn với khoa học – công nghệ; chủ động và tích cực hội nhập kinh tế quốc tế.",
        ],
        image: "modernization",
        imageCaption:
          "Đổi mới toàn diện mở đường cho sự phát triển hiện đại của các đô thị Việt Nam.",
      },
      {
        heading: "Quá trình triển khai Nghị quyết Đại hội X (2006–2010)",
        bullets: [
          "Nghị quyết số 04-NQ/TW ngày 21/8/2006 (Hội nghị Trung ương 3 khóa X) về tăng cường sự lãnh đạo của Đảng đối với công tác phòng, chống tham nhũng, lãng phí.",
          "Nghị quyết số 14-NQ/TW và Nghị quyết số 15-NQ/TW ngày 30/7/2007 (Hội nghị Trung ương 5 khóa X) về tăng cường công tác kiểm tra, giám sát và đổi mới phương thức lãnh đạo của Đảng.",
          "Nghị quyết số 20-NQ/TW về tiếp tục xây dựng giai cấp công nhân; Nghị quyết số 25-NQ/TW ngày 25/7/2008 về công tác thanh niên; Nghị quyết số 27-NQ/TW ngày 6/8/2008 về xây dựng đội ngũ trí thức.",
          "Nghị quyết số 21-NQ/TW (Hội nghị Trung ương 6 khóa X) về tiếp tục hoàn thiện thể chế kinh tế thị trường định hướng xã hội chủ nghĩa; chủ trương giải quyết đồng bộ vấn đề nông nghiệp, nông dân và nông thôn.",
          "Ngày 11/1/2007, Việt Nam chính thức trở thành thành viên của Tổ chức Thương mại Thế giới (WTO).",
          "Ngày 5/2/2007, Hội nghị Trung ương 4 khóa X ban hành Nghị quyết số 08-NQ/TW về những chủ trương, chính sách lớn để nền kinh tế phát triển nhanh và bền vững khi Việt Nam là thành viên WTO.",
          "Ngày 9/2/2007, Hội nghị Trung ương 4 khóa X ban hành Nghị quyết số 09-NQ/TW về Chiến lược biển Việt Nam đến năm 2020.",
        ],
        image: "wto_geneva",
        imageCaption:
          "Trụ sở WTO (Centre William Rappard) tại Geneva, Thụy Sĩ – Việt Nam chính thức trở thành thành viên WTO ngày 11/01/2007 (ảnh tư liệu: Wikimedia Commons, CC BY-SA 3.0).",
      },
      {
        heading: "Kết quả thực hiện đường lối Đại hội X",
        bullets: [
          "Tốc độ tăng trưởng GDP bình quân đạt khoảng 7%/năm.",
          "GDP bình quân đầu người năm 2010 đạt khoảng 1.168 USD.",
          "Việt Nam ra khỏi nhóm nước nghèo từ năm 2008.",
          "Đến năm 2010, Việt Nam có quan hệ giao thương với khoảng 230 quốc gia và vùng lãnh thổ; Hoa Kỳ và Trung Quốc là hai đối tác thương mại lớn.",
          "Đầu tư trực tiếp nước ngoài tăng từ 6,84 tỷ USD năm 2005 lên 19,88 tỷ USD năm 2010.",
        ],
        note: "Bên cạnh các thành tựu, quá trình phát triển vẫn còn những hạn chế về chất lượng tăng trưởng, hiệu quả sử dụng nguồn lực và yêu cầu phát triển bền vững ngày càng cấp thiết.",
      },
    ],
    keyFacts: [
      "Đại hội X diễn ra từ ngày 18/4 đến 25/4/2006 tại Hà Nội.",
      "Đồng chí Nông Đức Mạnh tiếp tục được bầu làm Tổng Bí thư.",
      "Ngày 11/01/2007, Việt Nam chính thức trở thành thành viên WTO.",
      "Nghị quyết số 09-NQ/TW ngày 9/2/2007 về Chiến lược biển Việt Nam đến năm 2020.",
    ],
  },
  {
    slug: "chien-luoc-bien",
    title: "Chiến lược phát triển kinh tế biển Việt Nam",
    subtitle:
      "Tiềm năng biển, chủ trương của Đảng và Chiến lược biển Việt Nam – quốc gia mạnh về biển, giàu từ biển",
    chapterLabel: "Chủ đề 3",
    heroImage: "sovereignty",
    minutes: 16,
    docSection:
      "Phần III, mục 1–2 – Cơ sở, tầm quan trọng và thực trạng phát triển kinh tế biển Việt Nam",
    milestones: [
      {
        date: "4/2006",
        text: "Đại hội X xác định chủ trương xây dựng chiến lược phát triển kinh tế biển toàn diện, có trọng tâm, trọng điểm.",
      },
      {
        date: "9/2/2007",
        text: "Nghị quyết số 09-NQ/TW về Chiến lược biển Việt Nam đến năm 2020.",
      },
      {
        date: "22/10/2018",
        text: "Nghị quyết số 36-NQ/TW về Chiến lược phát triển bền vững kinh tế biển Việt Nam.",
      },
      {
        date: "2020",
        text: "Mục tiêu: kinh tế biển đóng góp khoảng 53–55% GDP, 55–60% tổng kim ngạch xuất khẩu.",
      },
      { date: "2030 – 2045", text: "Định hướng chiến lược đến năm 2030, tầm nhìn đến năm 2045." },
    ],
    sections: [
      {
        heading: "Tiềm năng và lợi thế biển Việt Nam",
        paragraphs: [
          "Việt Nam có đường bờ biển dài hơn 3.260 km, nhiều đảo, quần đảo và vị trí địa lý quan trọng trên các tuyến hàng hải quốc tế. Biển mang lại nhiều lợi thế trong phát triển kinh tế.",
        ],
        bullets: [
          "Vận tải biển và dịch vụ cảng biển.",
          "Du lịch biển, đảo.",
          "Khai thác, nuôi trồng và chế biến thủy sản.",
          "Khai thác dầu khí.",
          "Phát triển năng lượng tái tạo.",
          "Công nghiệp và các dịch vụ gắn với biển.",
        ],
        note: "Ngoài giá trị kinh tế, biển còn có vai trò chiến lược trong bảo vệ chủ quyền, quốc phòng, an ninh và mở rộng quan hệ quốc tế.",
        image: "map_vietnam",
        imageCaption: "Bản đồ địa hình Việt Nam – đường bờ biển dài hơn 3.260 km.",
      },
      {
        heading: "Chủ trương phát triển kinh tế biển của Đảng",
        paragraphs: [
          "Đại hội X (2006) xác định chủ trương xây dựng chiến lược phát triển kinh tế biển toàn diện, có trọng tâm, trọng điểm. Chủ trương này được cụ thể hóa tại Nghị quyết số 09-NQ/TW ngày 9/2/2007 (Hội nghị Trung ương 4 khóa X) về Chiến lược biển Việt Nam đến năm 2020.",
          "Nghị quyết số 09-NQ/TW xác định biển có vị trí địa chính trị và địa kinh tế cực kỳ quan trọng đối với sự phát triển của đất nước, với mục tiêu: phấn đấu đưa Việt Nam trở thành quốc gia mạnh về biển, làm giàu từ biển; đến năm 2020, kinh tế biển đóng góp khoảng 53–55% GDP và đạt 55–60% tổng kim ngạch xuất khẩu.",
          "Tiếp đó, Nghị quyết số 36-NQ/TW ngày 22/10/2018 về Chiến lược phát triển bền vững kinh tế biển Việt Nam đến năm 2030, tầm nhìn đến năm 2045 tiếp tục phát triển định hướng xây dựng Việt Nam trở thành quốc gia biển mạnh, phát triển bền vững, thịnh vượng, an ninh và an toàn.",
        ],
        image: "congress_hall",
        imageCaption:
          "Hội trường Ba Đình, Hà Nội – nơi tổ chức nhiều sự kiện trọng đại của Đảng và Nhà nước (ảnh tư liệu).",
      },
      {
        heading: "Thực trạng phát triển kinh tế biển – những kết quả đạt được",
        bullets: [
          "Hệ thống cảng biển và vận tải biển từng bước phát triển: hình thành các cụm cảng quan trọng như Hải Phòng và Cái Mép – Thị Vải, kết nối Việt Nam với các tuyến thương mại quốc tế.",
          "Du lịch biển trở thành lĩnh vực kinh tế có nhiều tiềm năng: Phú Quốc, Nha Trang, Đà Nẵng và Hạ Long phát triển nhiều loại hình du lịch biển, nghỉ dưỡng, du lịch sinh thái.",
          "Ngành thủy sản tiếp tục đóng vai trò quan trọng: khai thác, nuôi trồng và chế biến thủy sản tạo nguồn cung thực phẩm, việc làm và hàng xuất khẩu.",
          "Các ngành năng lượng biển có thêm cơ hội phát triển: dầu khí tiếp tục có vai trò, cùng tiềm năng năng lượng tái tạo, đặc biệt là điện gió ngoài khơi.",
        ],
        image: "haiphong_port",
        imageCaption:
          "Cụm cảng biển và vận tải hàng hải – động lực phát triển kinh tế biển Việt Nam.",
        image: "haiphong_port",
        imageCaption: "Cụm cảng biển và vận tải hàng hải – động lực phát triển kinh tế biển Việt Nam.",
      },
      {
        heading: "Những hạn chế và thách thức",
        bullets: [
          "Kết cấu hạ tầng chưa đồng bộ: giao thông, hệ thống cảng, logistics còn hạn chế ở một số vùng ven biển.",
          "Giá trị gia tăng của một số ngành kinh tế biển còn thấp, chủ yếu khai thác tài nguyên và nguyên liệu thô.",
          "Ô nhiễm môi trường và suy giảm tài nguyên biển: rác thải nhựa, nước thải, khai thác quá mức.",
          "Tác động của biến đổi khí hậu: nước biển dâng, xói lở bờ biển, bão và thời tiết cực đoan.",
          "Chất lượng nguồn nhân lực và trình độ công nghệ chưa đồng đều.",
          "Yêu cầu bảo vệ chủ quyền và bảo đảm an ninh trên biển ngày càng cao.",
        ],
        image: "mangrove",
        imageCaption:
          "Bảo vệ môi trường sinh thái biển và thích ứng với biến đổi khí hậu là thách thức cấp bách.",
        image: "mangrove",
        imageCaption: "Bảo vệ môi trường sinh thái biển và thích ứng với biến đổi khí hậu là thách thức cấp bách.",
      },
    ],
    keyFacts: [
      "Đường bờ biển Việt Nam dài hơn 3.260 km.",
      "Nghị quyết số 09-NQ/TW ban hành ngày 9/2/2007 về Chiến lược biển Việt Nam đến năm 2020.",
      "Mục tiêu đến năm 2020: kinh tế biển đóng góp khoảng 53–55% GDP, 55–60% tổng kim ngạch xuất khẩu.",
      "Nghị quyết số 36-NQ/TW ban hành ngày 22/10/2018 về Chiến lược phát triển bền vững kinh tế biển đến năm 2030, tầm nhìn 2045.",
    ],
  },
  {
    slug: "giai-phap-kinh-te-bien",
    title: "Sáu giải pháp phát triển kinh tế biển bền vững",
    subtitle: "Các giải pháp đưa Việt Nam trở thành quốc gia mạnh về biển, giàu từ biển",
    chapterLabel: "Chủ đề 4",
    heroImage: "cargo",
    minutes: 20,
    docSection:
      "Phần III, mục 3 – Các giải pháp đưa Việt Nam trở thành quốc gia mạnh về biển, giàu từ biển",
    milestones: [
      {
        date: "9/2/2007",
        text: "Nghị quyết số 09-NQ/TW đặt mục tiêu đưa Việt Nam trở thành quốc gia mạnh về biển, làm giàu từ biển.",
      },
      {
        date: "22/10/2018",
        text: "Nghị quyết số 36-NQ/TW định hướng phát triển bền vững kinh tế biển.",
      },
      {
        date: "2030 – 2045",
        text: "Xây dựng Việt Nam trở thành quốc gia biển mạnh, phát triển bền vững, thịnh vượng, an ninh và an toàn.",
      },
    ],
    sections: [
      {
        heading: "Giải pháp 1: Phát triển các ngành kinh tế biển có lợi thế",
        paragraphs: [
          "Việt Nam cần tập trung nguồn lực phát triển những ngành kinh tế biển có tiềm năng và khả năng tạo giá trị gia tăng cao.",
        ],
        bullets: [
          "Cảng biển và vận tải biển: đầu tư hiện đại hóa các cảng biển, đặc biệt là cảng nước sâu; phát triển các trung tâm logistics gần cảng biển; tăng cường kết nối cảng biển với đường bộ, đường sắt và các khu công nghiệp.",
          "Du lịch biển, đảo: đầu tư nâng cấp hạ tầng du lịch; phát triển du lịch sinh thái, nghỉ dưỡng và trải nghiệm văn hóa địa phương; kết hợp du lịch với bảo vệ môi trường, cảnh quan.",
          "Thủy sản: đẩy mạnh nuôi biển công nghệ cao; phát triển công nghiệp chế biến sâu; kiểm soát khai thác, bảo vệ nguồn lợi thủy sản; tăng cường truy xuất nguồn gốc.",
          "Năng lượng biển: khai thác hợp lý tài nguyên dầu khí; nghiên cứu và phát triển điện gió ngoài khơi; gắn phát triển năng lượng với bảo vệ môi trường biển.",
        ],
        image: "haiphong_port",
        imageCaption: "Cảng Hải Phòng – cụm cảng biển quan trọng phía Bắc Việt Nam.",
        note: "Ví dụ thực tiễn: Cụm cảng Cái Mép – Thị Vải có vai trò quan trọng trong vận tải hàng hóa và kết nối thương mại quốc tế. Việc đầu tư đồng bộ hạ tầng giao thông và logistics xung quanh cụm cảng giúp giảm chi phí logistics và thúc đẩy xuất nhập khẩu.",
      },
      {
        heading: "Giải pháp 2: Đẩy mạnh ứng dụng khoa học – công nghệ và chuyển đổi số",
        bullets: [
          "Ứng dụng trí tuệ nhân tạo và dữ liệu lớn trong quản lý tài nguyên biển.",
          "Sử dụng công nghệ giám sát hành trình tàu cá và quản lý hoạt động khai thác.",
          "Phát triển mô hình nuôi biển công nghệ cao.",
          "Nâng cao năng lực dự báo khí tượng, thủy văn và cảnh báo thiên tai.",
          "Nghiên cứu công nghệ năng lượng tái tạo.",
          "Chuyển đổi số trong quản lý cảng biển, vận tải biển và hoạt động logistics.",
        ],
        image: "wind",
        imageCaption: "Trang trại điện gió Bạc Liêu – hướng đi mới của năng lượng biển Việt Nam.",
      },
      {
        heading: "Giải pháp 3: Bảo vệ môi trường và phát triển kinh tế biển bền vững",
        bullets: [
          "Kiểm soát chặt chẽ các nguồn gây ô nhiễm biển.",
          "Giảm thiểu rác thải nhựa và chất thải từ hoạt động sản xuất, du lịch.",
          "Bảo vệ và phục hồi rừng ngập mặn, rạn san hô, thảm cỏ biển.",
          "Tăng cường quản lý các khu bảo tồn biển; ngăn chặn khai thác tài nguyên quá mức.",
          "Phát triển mô hình kinh tế tuần hoàn và du lịch xanh.",
          "Nâng cao khả năng thích ứng với biến đổi khí hậu tại các vùng ven biển.",
        ],
        image: "mangrove",
        imageCaption: "Rừng ngập mặn Cần Giờ – lá chắn xanh bảo vệ bờ biển và hệ sinh thái.",
        note: "Ví dụ thực tiễn: Việc bảo vệ và phục hồi rừng ngập mặn tại Cà Mau có ý nghĩa hạn chế xói lở bờ biển, duy trì đa dạng sinh học và bảo vệ sinh kế của cộng đồng ven biển.",
      },
      {
        heading: "Giải pháp 4: Phát triển nguồn nhân lực chất lượng cao",
        bullets: [
          "Tăng cường đào tạo nhân lực trong lĩnh vực hàng hải, logistics, thủy sản, du lịch và năng lượng biển.",
          "Đẩy mạnh hợp tác giữa trường đại học, viện nghiên cứu và doanh nghiệp.",
          "Nâng cao trình độ khoa học – công nghệ và kỹ năng nghề nghiệp; tăng cường đào tạo ngoại ngữ.",
          "Có chính sách hỗ trợ đào tạo nghề và chuyển đổi sinh kế cho người dân ven biển.",
          "Thu hút chuyên gia tham gia nghiên cứu, phát triển các ngành kinh tế biển.",
        ],
        image: "danang",
        imageCaption: "Ngư dân và thuyền thúng trên biển – nguồn nhân lực gắn bó lâu đời với biển.",
      },
      {
        heading: "Giải pháp 5: Hoàn thiện cơ chế, chính sách và tăng cường liên kết vùng",
        bullets: [
          "Hoàn thiện quy hoạch không gian biển và quy hoạch các ngành kinh tế biển.",
          "Xây dựng cơ chế thu hút đầu tư phù hợp; ưu tiên các ngành có giá trị gia tăng cao.",
          "Đầu tư đồng bộ hệ thống giao thông, cảng biển, năng lượng và logistics.",
          "Tăng cường liên kết giữa các địa phương ven biển; kết nối trung tâm kinh tế biển với các vùng kinh tế nội địa.",
          "Nâng cao hiệu quả quản lý và giám sát việc sử dụng tài nguyên biển.",
        ],
        image: "modernization",
        imageCaption: "Hạ tầng hiện đại của Hà Nội – ví dụ về phát triển hạ tầng đồng bộ.",
      },
      {
        heading:
          "Giải pháp 6: Kết hợp phát triển kinh tế biển với bảo vệ chủ quyền, quốc phòng, an ninh",
        bullets: [
          "Tăng cường năng lực quản lý và thực thi pháp luật trên biển.",
          "Xây dựng cơ sở hạ tầng kinh tế – xã hội tại các vùng ven biển, đảo.",
          "Hỗ trợ ngư dân hoạt động khai thác hợp pháp và an toàn.",
          "Tăng cường hợp tác quốc tế về biển trên cơ sở luật pháp quốc tế.",
          "Nâng cao nhận thức của cộng đồng về bảo vệ chủ quyền biển, đảo.",
          "Kết hợp phát triển kinh tế với củng cố tiềm lực quốc phòng, an ninh.",
        ],
        image: "sovereignty",
        imageCaption: "Đảo Trường Sa – biểu tượng của chủ quyền biển đảo Việt Nam.",
        note: "Phát triển kinh tế biển và bảo vệ chủ quyền có mối quan hệ gắn bó chặt chẽ: môi trường hòa bình, ổn định là điều kiện phát triển kinh tế; kinh tế biển phát triển góp phần củng cố tiềm lực quốc phòng và bảo vệ Tổ quốc.",
      },
    ],
    keyFacts: [
      "Sáu giải pháp: ngành có lợi thế – khoa học công nghệ – môi trường – nhân lực – cơ chế, chính sách – chủ quyền và quốc phòng, an ninh.",
      "Cụm cảng Cái Mép – Thị Vải là ví dụ thực tiễn về đầu tư hạ tầng và logistics đồng bộ.",
      "Rừng ngập mặn Cà Mau là ví dụ về phát triển bền vững và thích ứng biến đổi khí hậu.",
    ],
  },
  {
    slug: "trach-nhiem-sinh-vien",
    title: "Trách nhiệm của sinh viên trong bảo vệ và phát triển biển đảo Việt Nam",
    subtitle: "Hành động thiết thực vì mục tiêu quốc gia mạnh về biển, giàu từ biển",
    chapterLabel: "Chủ đề 5",
    heroImage: "phuquoc",
    minutes: 8,
    docSection:
      "Phần III, mục 4 – Trách nhiệm của sinh viên trong thực hiện mục tiêu phát triển kinh tế biển; Phần IV – Kết luận",
    milestones: [
      {
        date: "9/2/2007",
        text: "Nghị quyết số 09-NQ/TW về Chiến lược biển Việt Nam đến năm 2020.",
      },
      {
        date: "22/10/2018",
        text: "Nghị quyết số 36-NQ/TW – định hướng phát triển bền vững kinh tế biển đến năm 2030, tầm nhìn 2045.",
      },
    ],
    sections: [
      {
        heading: "Sinh viên với sự nghiệp biển, đảo",
        paragraphs: [
          "Sinh viên là lực lượng trẻ có khả năng tiếp thu tri thức, khoa học – công nghệ và đóng góp những sáng kiến trong phát triển đất nước. Để góp phần thực hiện mục tiêu đưa Việt Nam trở thành quốc gia mạnh về biển, giàu từ biển, sinh viên cần:",
        ],
        bullets: [
          "Chủ động tìm hiểu chủ trương của Đảng, chính sách và pháp luật của Nhà nước về biển, đảo.",
          "Nâng cao nhận thức về vai trò kinh tế, chính trị, quốc phòng và an ninh của biển.",
          "Tích cực học tập, nghiên cứu khoa học và phát triển kỹ năng ứng dụng công nghệ.",
          "Tham gia các hoạt động bảo vệ môi trường, làm sạch bãi biển và giảm thiểu rác thải nhựa.",
          "Tuyên truyền thông tin chính xác về biển, đảo Việt Nam.",
          "Có ý thức bảo vệ tài nguyên và môi trường khi tham gia các hoạt động du lịch biển.",
        ],
        image: "fishing",
        imageCaption: "Ngư dân Mũi Né hành nghề biển – những sinh kế cần được bảo vệ và gìn giữ.",
      },
      {
        heading: "Ý nghĩa của những hành động",
        paragraphs: [
          "Những hành động của sinh viên tuy có quy mô khác nhau nhưng góp phần nâng cao nhận thức cộng đồng, bảo vệ tài nguyên biển và phát triển nguồn nhân lực phục vụ kinh tế biển trong tương lai.",
          "Hiểu lịch sử và đường lối phát triển của đất nước chính là bước đầu để mỗi sinh viên trở thành một công dân có trách nhiệm với biển đảo quê hương.",
        ],
        image: "mangrove",
        imageCaption:
          "Rừng ngập mặn – môi trường sống của cộng đồng ven biển cần sự chung tay của thế hệ trẻ.",
      },
      {
        heading: "Kết luận",
        paragraphs: [
          "Đại hội đại biểu toàn quốc lần thứ IX (2001) và Đại hội đại biểu toàn quốc lần thứ X (2006) có vai trò quan trọng trong quá trình tiếp tục đổi mới, đẩy mạnh công nghiệp hóa, hiện đại hóa và hội nhập quốc tế của Việt Nam.",
          "Đại hội IX xác định rõ hơn con đường đi lên chủ nghĩa xã hội, khẳng định kinh tế thị trường định hướng xã hội chủ nghĩa là mô hình kinh tế tổng quát và thông qua Chiến lược phát triển kinh tế – xã hội 2001–2010.",
          "Trên cơ sở kế thừa những kết quả đó, Đại hội X tiếp tục đẩy mạnh toàn diện công cuộc đổi mới, chú trọng xây dựng, chỉnh đốn Đảng, phát huy sức mạnh toàn dân tộc, hoàn thiện thể chế kinh tế và thúc đẩy hội nhập quốc tế.",
          "Quá trình triển khai thực hiện Nghị quyết Đại hội X, đặc biệt là việc ban hành Nghị quyết số 09-NQ/TW năm 2007 về Chiến lược biển Việt Nam đến năm 2020, cho thấy vai trò ngày càng quan trọng của biển trong chiến lược phát triển kinh tế – xã hội và bảo vệ Tổ quốc.",
          "Để đưa Việt Nam trở thành quốc gia mạnh về biển, giàu từ biển, cần phát triển đồng bộ các ngành kinh tế biển, đẩy mạnh ứng dụng khoa học – công nghệ, bảo vệ môi trường, phát triển nguồn nhân lực chất lượng cao, hoàn thiện cơ chế quản lý và kết hợp chặt chẽ phát triển kinh tế với bảo đảm quốc phòng, an ninh.",
          "Việc thực hiện hiệu quả các giải pháp trên sẽ góp phần khai thác hợp lý tiềm năng, lợi thế biển, tạo động lực phát triển kinh tế và hướng đến mục tiêu phát triển bền vững, thịnh vượng trong tương lai.",
        ],
        image: "hero_halong",
        imageCaption:
          "Vịnh Hạ Long, Quảng Ninh – vẻ đẹp biển đảo Việt Nam cần được gìn giữ cho các thế hệ mai sau.",
      },
    ],
    keyFacts: [
      "Sáu trách nhiệm: tìm hiểu chủ trương – nâng cao nhận thức – học tập, nghiên cứu – bảo vệ môi trường – tuyên truyền thông tin chính xác – bảo vệ tài nguyên khi du lịch biển.",
    ],
  },
];

export function getLesson(slug: string) {
  return LESSONS.find((l) => l.slug === slug);
}
