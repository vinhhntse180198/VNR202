import { Link, useRouterState } from "@tanstack/react-router";
import { BookOpen, Gamepad2, Home, Menu, Waves, Flag, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { EXHIBITION_NAV, MARINE_LESSON_SLUGS } from "@/data/exhibition-navigation";
const icons = [Home, BookOpen, Waves, Gamepad2, Flag];
const NAV = EXHIBITION_NAV.map((item, i) => ({ ...item, icon: icons[i] ?? Home }));
function isActive(to: string, pathname: string) {
  const marine = MARINE_LESSON_SLUGS.some((slug) => pathname === `/learning/${slug}`);
  if (to === "/kinh-te-bien") return marine || pathname === to;
  if (to === "/learning") return !marine && pathname.startsWith(to);
  return to === "/" ? pathname === "/" : pathname.startsWith(to);
}

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="group flex items-center gap-3">
      <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-history to-history-deep shadow-card">
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 text-gold"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2l2.4 6.9H21l-5.3 4 2 6.9-5.7-4.3-5.7 4.3 2-6.9-5.3-4h6.6z" />
        </svg>
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-lg font-bold tracking-wide text-foreground">
            VNR<span className="text-history">202</span>
          </span>
          <span className="text-[11px] font-medium tracking-[0.18em] text-muted-foreground">
            HÀNH TRÌNH VIỆT NAM
          </span>
        </span>
      )}
    </Link>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Logo />
        <nav aria-label="Điều hướng chính" className="hidden items-center gap-1 md:flex">
          {NAV.map(({ to, label, icon: Icon }) => {
            const active = isActive(to, pathname);
            return (
              <Link
                key={to}
                to={to}
                aria-current={active ? "page" : undefined}
                className={`flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <Icon className="h-4 w-4" />
                {label}
              </Link>
            );
          })}
        </nav>
        <Button
          variant="outline"
          size="icon"
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-foreground md:hidden"
          aria-expanded={open}
          aria-label={open ? "Đóng menu" : "Mở menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>
      {open && (
        <div className="border-t border-border bg-background px-4 pb-4 pt-2 md:hidden">
          {NAV.map(({ to, label, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              aria-current={isActive(to, pathname) ? "page" : undefined}
              className={`flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium ${isActive(to, pathname) ? "bg-accent text-accent-foreground" : "text-foreground hover:bg-muted"}`}
            >
              <Icon className="h-4 w-4 text-history" />
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-history-deep bg-history-deep text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="font-display text-xl font-bold text-gold">VNR202</p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-primary-foreground/80">
              VNR202 – Triển lãm lịch sử số về các dấu mốc phát triển của Việt Nam.
            </p>
          </div>
          <nav className="flex flex-wrap gap-4 text-sm">
            {NAV.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="text-primary-foreground/80 transition-colors hover:text-gold"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-8 border-t border-primary-foreground/15 pt-5 text-center">
          <p className="font-display text-base italic tracking-wide text-gold">
            “Hiểu lịch sử – Vững tương lai – Phát triển Việt Nam”
          </p>
          <p className="mt-2 text-xs text-primary-foreground/60">
            Nội dung: Tài liệu môn học VNR202 · Hình ảnh: ảnh tư liệu thực tế từ Wikimedia Commons
            (giấy phép Creative Commons), không sử dụng ảnh tạo bằng AI · Chú thích và nguồn ảnh ghi
            tại từng bài học.
          </p>
        </div>
      </div>
    </footer>
  );
}
