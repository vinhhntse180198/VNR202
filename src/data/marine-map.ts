import type { ImageKey } from "@/lib/assets";
export const MARINE_PLACES: {
  id: string;
  name: string;
  sector: string;
  text: string;
  image: ImageKey;
  slug: string;
  section: number;
}[] = [
  {
    id: "hai-phong",
    name: "Hải Phòng",
    sector: "Cảng biển · Vận tải",
    text: "Việt Nam đã hình thành một số cụm cảng biển quan trọng như Hải Phòng và Cái Mép – Thị Vải. Những cảng này có vai trò trong vận chuyển hàng hóa, thúc đẩy xuất nhập khẩu và kết nối Việt Nam với các tuyến thương mại quốc tế.",
    image: "haiphong_port",
    slug: "giai-phap-kinh-te-bien",
    section: 1,
  },
  {
    id: "ha-long",
    name: "Hạ Long",
    sector: "Du lịch biển",
    text: "Phú Quốc, Nha Trang, Đà Nẵng và Hạ Long phát triển nhiều loại hình du lịch biển, nghỉ dưỡng, du lịch sinh thái và dịch vụ.",
    image: "hero_halong",
    slug: "chien-luoc-bien",
    section: 3,
  },
  {
    id: "da-nang",
    name: "Đà Nẵng",
    sector: "Du lịch biển",
    text: "Sự phát triển của du lịch biển góp phần tạo việc làm, tăng nguồn thu từ dịch vụ và thúc đẩy phát triển các địa phương ven biển.",
    image: "danang",
    slug: "chien-luoc-bien",
    section: 3,
  },
  {
    id: "nha-trang",
    name: "Nha Trang",
    sector: "Du lịch biển · Dịch vụ",
    text: "Phát triển các sản phẩm du lịch sinh thái, nghỉ dưỡng và trải nghiệm văn hóa địa phương; kết hợp phát triển du lịch với bảo vệ môi trường, cảnh quan và hệ sinh thái biển.",
    image: "nhatrang",
    slug: "giai-phap-kinh-te-bien",
    section: 1,
  },
  {
    id: "phu-quoc",
    name: "Phú Quốc",
    sector: "Du lịch biển, đảo",
    text: "Các địa điểm như Phú Quốc, Nha Trang, Đà Nẵng và Hạ Long phát triển nhiều loại hình du lịch biển, nghỉ dưỡng, du lịch sinh thái và dịch vụ.",
    image: "phuquoc",
    slug: "chien-luoc-bien",
    section: 3,
  },
  {
    id: "ca-mau",
    name: "Cà Mau",
    sector: "Hệ sinh thái · Sinh kế",
    text: "Việc bảo vệ và phục hồi rừng ngập mặn tại Cà Mau có ý nghĩa trong hạn chế xói lở bờ biển, duy trì đa dạng sinh học và bảo vệ sinh kế của cộng đồng dân cư ven biển.",
    image: "mangrove",
    slug: "giai-phap-kinh-te-bien",
    section: 3,
  },
];
