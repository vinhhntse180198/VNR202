/**
 * Toàn bộ ảnh là ảnh tư liệu lịch sử và thực tế chính thức (KHÔNG có ảnh tạo bằng AI).
 * Tệp được lưu trữ trực tiếp trong thư mục public/images/ của dự án để đảm bảo:
 * - Tải ngay lập tức (offline / localhost, 0ms trễ, không phụ thuộc mạng hay CDN).
 * - Không bao giờ bị lỗi 404 hoặc bị rate limit từ máy chủ bên thứ ba.
 * - Nguồn: Tư liệu ảnh TTXVN, Báo điện tử Chính phủ & Wikimedia Commons.
 */
export const IMAGES = {
  // ─── Lịch sử Đại hội IX & X (Ảnh tư liệu chính thức) ──────────────────────
  dai_hoi_ix: {
    url: "/images/dai_hoi_ix.jpg",
    alt: "Toàn cảnh Đại hội đại biểu toàn quốc lần thứ IX của Đảng Cộng sản Việt Nam (19–22/4/2001 tại Hà Nội)",
    credit: "Ảnh tư liệu lịch sử TTXVN / Báo điện tử Chính phủ",
  },
  dai_hoi_x: {
    url: "/images/dai_hoi_x.jpg",
    alt: "Toàn cảnh Đại hội đại biểu toàn quốc lần thứ X của Đảng Cộng sản Việt Nam (18–25/4/2006 tại Hà Nội)",
    credit: "Ảnh tư liệu lịch sử TTXVN / Báo điện tử Chính phủ",
  },
  badinh_hall: {
    url: "/images/badinh_hall.jpg",
    alt: "Hội trường Ba Đình, Hà Nội – nơi diễn ra các kỳ Đại hội toàn quốc lần thứ IX và X",
    credit: "Wikimedia Commons / Ảnh tư liệu lịch sử",
  },
  badinh_interior: {
    url: "/images/badinh_interior.jpg",
    alt: "Toàn cảnh nội thất Hội trường Ba Đình – nơi diễn ra Đại hội IX và Đại hội X",
    credit: "Wikimedia Commons / Ảnh tư liệu lịch sử",
  },
  congress_hall: {
    url: "/images/congress_hall.jpg",
    alt: "Hội trường Ba Đình – Trụ sở lịch sử tổ chức Đại hội Đảng toàn quốc",
    credit: "Wikimedia Commons / Ảnh tư liệu lịch sử",
  },

  // ─── Dấu mốc gia nhập WTO 2007 ─────────────────────────────────────────────
  wto_geneva: {
    url: "/images/wto_geneva.jpg",
    alt: "Trụ sở WTO – Centre William Rappard, Geneva, Thụy Sĩ (nơi Việt Nam chính thức gia nhập WTO 11/01/2007)",
    credit: "Wikimedia Commons / CC BY-SA",
  },

  // ─── Kinh tế biển – Vịnh Hạ Long ───────────────────────────────────────────
  hero_halong: {
    url: "/images/hero_halong.jpg",
    alt: "Vịnh Hạ Long, Quảng Ninh – Di sản thiên nhiên thế giới UNESCO",
    credit: "Wikimedia Commons / CC BY-SA",
  },

  // ─── Cảng biển & logistics ─────────────────────────────────────────────────
  haiphong_port: {
    url: "/images/haiphong_port.jpg",
    alt: "Cảng Chùa Vẽ, Cảng Hải Phòng – Cụm cảng biển quan trọng phía Bắc",
    credit: "Wikimedia Commons / CC BY-SA",
  },
  cargo: {
    url: "/images/cargo.jpg",
    alt: "Tàu container tại cảng biển – Vận tải hàng hải quốc tế",
    credit: "Wikimedia Commons / CC BY-SA",
  },

  // ─── Du lịch biển ─────────────────────────────────────────────────────────
  phuquoc: {
    url: "/images/phuquoc.jpg",
    alt: "Bãi biển Phú Quốc, Kiên Giang – Trung tâm du lịch biển đảo quốc tế",
    credit: "Wikimedia Commons / CC BY-SA",
  },
  nhatrang: {
    url: "/images/nhatrang.jpg",
    alt: "Vịnh Nha Trang, Khánh Hòa – Đô thị và vịnh biển du lịch",
    credit: "Wikimedia Commons / CC BY-SA",
  },
  danang: {
    url: "/images/danang.jpg",
    alt: "Bãi biển Mỹ Khê, Đà Nẵng – Bờ biển miền Trung Việt Nam",
    credit: "Wikimedia Commons / CC BY-SA",
  },

  // ─── Thủy sản ─────────────────────────────────────────────────────────────
  fishing: {
    url: "/images/fishing.jpg",
    alt: "Thuyền thúng và ngư dân khai thác thủy hải sản – Ngành kinh tế biển truyền thống",
    credit: "Wikimedia Commons / CC BY-SA",
  },
  aquaculture: {
    url: "/images/aquaculture.jpg",
    alt: "Trang trại nuôi tôm ven biển tại Nam Định – Nuôi trồng thủy sản công nghệ cao",
    credit: "Wikimedia Commons / CC BY",
  },

  // ─── Môi trường – Rừng ngập mặn ───────────────────────────────────────────
  mangrove: {
    url: "/images/mangrove.jpg",
    alt: "Rừng ngập mặn Cần Giờ – Lá chắn xanh bảo vệ bờ biển và hệ sinh thái ven biển",
    credit: "Wikimedia Commons / CC BY-SA",
  },

  // ─── Năng lượng tái tạo ────────────────────────────────────────────────────
  wind: {
    url: "/images/wind.jpg",
    alt: "Trang trại điện gió ven biển Bạc Liêu – Phát triển năng lượng tái tạo từ biển",
    credit: "Wikimedia Commons / CC BY-SA",
  },

  // ─── Chủ quyền biển đảo ────────────────────────────────────────────────────
  sovereignty: {
    url: "/images/sovereignty.jpg",
    alt: "Đảo Trường Sa Lớn – Biểu tượng chủ quyền biển đảo thiêng liêng của Tổ quốc",
    credit: "Wikimedia Commons / Ảnh tư liệu Trường Sa",
  },

  // ─── Đô thị hóa – Hiện đại hóa ────────────────────────────────────────────
  modernization: {
    url: "/images/modernization.jpg",
    alt: "Toàn cảnh đô thị hiện đại Hà Nội – Thành tựu thời kỳ đổi mới và công nghiệp hóa",
    credit: "Wikimedia Commons / CC BY-SA",
  },

  // ─── Bản đồ Việt Nam ───────────────────────────────────────────────────────
  map_vietnam: {
    url: "/images/map_vietnam.svg",
    alt: "Bản đồ Việt Nam với hơn 3.260 km bờ biển và các quần đảo Hoàng Sa, Trường Sa",
    credit: "Wikimedia Commons / CC BY-SA",
  },
} as const;

export type ImageKey = keyof typeof IMAGES;

export function img(key: ImageKey) {
  return IMAGES[key];
}
