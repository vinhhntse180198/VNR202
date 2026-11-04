import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MARINE_PLACES } from "@/data/marine-map";
import { img } from "@/lib/assets";

export function MarineMap() {
  const [selected, setSelected] = useState("hai-phong");
  const place = MARINE_PLACES.find((p) => p.id === selected);
  if (!place) return null;
  const map = img("map_vietnam");
  const photo = img(place.image);
  return (
    <section
      aria-label="Bản đồ kinh tế biển Việt Nam"
      className="mt-12 border-y border-exhibition-teal/25 py-10"
    >
      <p className="flex items-center gap-2 text-xs font-semibold text-exhibition-teal">
        <MapPin className="h-4 w-4" /> KHÔNG GIAN KINH TẾ BIỂN
      </p>
      <h3 className="mt-3 font-display text-3xl font-bold">Việt Nam nhìn từ biển</h3>
      <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
        Hơn 3.260 km đường bờ biển, nhiều đảo, quần đảo và vị trí địa lý quan trọng trên các tuyến
        hàng hải quốc tế.
      </p>
      <div className="mt-8 grid items-start gap-8 md:grid-cols-2 lg:gap-12">
        <figure className="mx-auto w-full max-w-md">
          <div className="relative overflow-hidden rounded-lg border border-border">
            <img src={map.url} alt={map.alt} className="block h-auto w-full" />
            {MARINE_PLACES.map((p) => (
              <Button
                key={p.id}
                onClick={() => setSelected(p.id)}
                aria-pressed={selected === p.id}
                aria-label={`Xem ${p.name}`}
                title={p.name}
                data-place={p.id}
                className={`marine-pin absolute h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-card p-0 shadow-card ${selected === p.id ? "bg-history text-primary-foreground ring-4 ring-gold/50" : "bg-exhibition-teal text-primary-foreground hover:bg-sea-deep"}`}
              >
                <MapPin className="h-3.5 w-3.5" />
              </Button>
            ))}
            <span className="absolute right-4 top-1/3 font-display text-sm font-semibold text-sea-deep">
              Biển Đông
            </span>
          </div>
          <figcaption className="mt-3 text-xs leading-6 text-muted-foreground">
            Bản đồ địa hình; vị trí đánh dấu mang tính minh họa. Không thể hiện đầy đủ biển, đảo hay
            ranh giới chủ quyền.
          </figcaption>
        </figure>
        <div className="min-w-0">
          <div aria-label="Địa điểm kinh tế biển" className="flex flex-wrap gap-2">
            {MARINE_PLACES.map((p) => (
              <Button
                key={p.id}
                size="sm"
                variant={p.id === selected ? "default" : "outline"}
                onClick={() => setSelected(p.id)}
                aria-pressed={selected === p.id}
              >
                {p.name}
              </Button>
            ))}
          </div>
          <div aria-live="polite" className="mt-6">
            <p className="text-xs font-semibold text-exhibition-teal">{place.sector}</p>
            <h4 className="mt-2 font-display text-3xl font-bold">{place.name}</h4>
            <p className="mt-4 min-h-32 text-base leading-8 text-muted-foreground">{place.text}</p>
            <figure className="mt-5">
              <img
                src={photo.url}
                alt={photo.alt}
                loading="lazy"
                className="aspect-[16/10] w-full rounded-lg object-cover"
              />
              <figcaption className="mt-2 text-xs leading-6 text-muted-foreground">
                {photo.alt}
                {place.id === "ca-mau"
                  ? " — ảnh hệ sinh thái tương tự tại Cần Giờ, không phải ảnh Cà Mau."
                  : ""}
              </figcaption>
            </figure>
            <Button
              asChild
              variant="link"
              className="mt-4 h-auto whitespace-normal px-0 text-exhibition-teal"
            >
              <Link
                to="/learning/$slug"
                params={{ slug: place.slug }}
                hash={`muc-${place.section}`}
              >
                Khám phá ngành kinh tế biển <ArrowRight />
              </Link>
            </Button>
            <p className="mt-3 text-xs leading-6 text-muted-foreground">
              Tư liệu học phần VNR202 – Lịch sử Đảng Cộng sản Việt Nam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
