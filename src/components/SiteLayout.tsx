import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, ShoppingBag, Mail, MapPin, Twitter, Facebook, Instagram, Linkedin } from "lucide-react";
import logoAsset from "@/assets/market360-logo.png.asset.json";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/features", label: "Features" },
  { to: "/seller-solutions", label: "Sellers" },
  { to: "/download", label: "Download" },
  { to: "/tester", label: "Tester Program" },
  { to: "/news", label: "News" },
  { to: "/help", label: "Help" },
];

export function Logo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="Market360 logo"
      className={className}
      width={40}
      height={40}
      loading="eager"
      decoding="async"
    />
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="container-pro flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2.5 font-display font-bold text-lg" onClick={() => setOpen(false)}>
          <Logo className="h-9 w-9 rounded-xl" />
          <span>Market<span className="text-primary">360</span></span>
        </Link>
        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground rounded-md"
              activeProps={{ className: "text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-2">
          <Link to="/contact" className="btn-ghost text-sm py-2 px-4">Contact</Link>
          <Link to="/download" className="btn-primary text-sm py-2 px-4">Get the App</Link>
        </div>
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-secondary"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-up">
          <nav className="container-pro flex flex-col py-3" aria-label="Mobile">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-foreground border-b border-border/60 last:border-b-0"
              >
                {l.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-4 pb-2">
              <Link to="/contact" className="btn-ghost flex-1" onClick={() => setOpen(false)}>Contact</Link>
              <Link to="/download" className="btn-primary flex-1" onClick={() => setOpen(false)}>Get the App</Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function Footer() {
  const cols = [
    {
      title: "Product",
      links: [
        { to: "/features", label: "Features" },
        { to: "/seller-solutions", label: "Seller Solutions" },
        { to: "/download", label: "Download App" },
        { to: "/safety", label: "Marketplace Safety" },
      ],
    },
    {
      title: "Company",
      links: [
        { to: "/about", label: "About" },
        { to: "/news", label: "News & Updates" },
        { to: "/tester", label: "Become a Tester" },
        { to: "/contact", label: "Contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { to: "/help", label: "Help Center" },
        { to: "/safety", label: "Trust & Safety" },
      ],
    },
    {
      title: "Legal",
      links: [
        { to: "/privacy", label: "Privacy Policy" },
        { to: "/terms", label: "Terms of Service" },
      ],
    },
  ] as const;

  return (
    <footer className="border-t border-border bg-surface mt-16">
      <div className="container-pro py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <Link to="/" className="flex items-center gap-2.5 font-display font-bold text-lg">
              <Logo className="h-9 w-9 rounded-xl" />
              <span>Market<span className="text-primary">360</span></span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground leading-relaxed">
              The modern marketplace where buyers, sellers, and stores grow together — with built-in wallet, analytics, and trust at every step.
            </p>
            <div className="mt-5 space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> hello@market360.shop</p>
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> market360.shop</p>
            </div>
            <div className="mt-5 flex gap-2">
              {[
                { Icon: Twitter, label: "Twitter" },
                { Icon: Facebook, label: "Facebook" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: Linkedin, label: "LinkedIn" },
              ].map(({ Icon, label }) => (
                <a key={label} href="#" aria-label={label} className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:text-primary hover:border-primary/40">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h3 className="text-sm font-semibold text-foreground">{c.title}</h3>
              <ul className="mt-4 space-y-3">
                {c.links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2"><ShoppingBag className="h-3.5 w-3.5 text-primary" /> © {new Date().getFullYear()} Market360. All rights reserved.</p>
          <p>Built for buyers, sellers, and the future of commerce.</p>
        </div>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
