import { Link, useRouterState } from "@tanstack/react-router";
import { useState, useEffect, type ReactNode } from "react";
import {
  Menu, X, ShoppingBag, Mail, MapPin, Twitter, Facebook, Instagram, Linkedin,
  Home, Sparkles, Store, Download, FlaskConical, Newspaper, LifeBuoy, MessageCircle, Info, Shield,
} from "lucide-react";
import logoAsset from "@/assets/market360-logo.png.asset.json";

const navLinks = [
  { to: "/", label: "Home", Icon: Home },
  { to: "/features", label: "Features", Icon: Sparkles },
  { to: "/seller-solutions", label: "Sellers", Icon: Store },
  { to: "/download", label: "Download", Icon: Download },
  { to: "/tester", label: "Tester Program", Icon: FlaskConical },
  { to: "/news", label: "News", Icon: Newspaper },
  { to: "/help", label: "Help", Icon: LifeBuoy },
];

const mobileTiles = [
  { to: "/features", label: "Explore Features", desc: "Wallet, analytics, trust", Icon: Sparkles, accent: "from-emerald-100 to-emerald-50" },
  { to: "/seller-solutions", label: "Sell on Market360", desc: "Tools for stores", Icon: Store, accent: "from-green-100 to-emerald-50" },
  { to: "/download", label: "Get the App", desc: "iOS & Android", Icon: Download, accent: "from-lime-100 to-emerald-50" },
  { to: "/tester", label: "Tester Program", desc: "Shape the future", Icon: FlaskConical, accent: "from-teal-100 to-emerald-50" },
  { to: "/safety", label: "Trust & Safety", desc: "How we protect you", Icon: Shield, accent: "from-emerald-100 to-green-50" },
  { to: "/news", label: "News & Updates", desc: "Product changelog", Icon: Newspaper, accent: "from-emerald-50 to-white" },
  { to: "/help", label: "Help Center", desc: "FAQs & guides", Icon: LifeBuoy, accent: "from-green-50 to-white" },
  { to: "/about", label: "About Market360", desc: "Our story", Icon: Info, accent: "from-emerald-50 to-white" },
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

function PageLoader() {
  const [initialShow, setInitialShow] = useState(true);
  const isLoading = useRouterState({ select: (s) => s.isLoading || s.isTransitioning });
  const [routeShow, setRouteShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setInitialShow(false), 1000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    if (isLoading) {
      t = setTimeout(() => setRouteShow(true), 80);
    } else {
      setRouteShow(false);
    }
    return () => clearTimeout(t);
  }, [isLoading]);

  const show = initialShow || routeShow;
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-background/80 backdrop-blur-sm" aria-live="polite" aria-busy="true">
      <div className="page-spinner" />
    </div>
  );
}

function Header({ onOpen }: { onOpen: () => void }) {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="container-pro flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2.5 font-display font-bold text-lg">
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
          aria-label="Open menu"
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-secondary"
          onClick={onOpen}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}

function FullScreenMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex flex-col bg-background lg:hidden animate-fade-up overflow-y-auto">
      <div className="sticky top-0 flex items-center justify-between border-b border-border/60 bg-background/95 backdrop-blur-xl px-5 h-16">
        <Link to="/" onClick={onClose} className="flex items-center gap-2.5 font-display font-bold text-lg">
          <Logo className="h-9 w-9 rounded-xl" />
          <span>Market<span className="text-primary">360</span></span>
        </Link>
        <button
          aria-label="Close menu"
          onClick={onClose}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-secondary"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="flex-1 px-5 py-6">
        <p className="eyebrow"><Sparkles className="h-3.5 w-3.5" /> Menu</p>
        <h2 className="mt-3 text-2xl font-bold tracking-tight">Where do you want to go?</h2>
        <p className="mt-1 text-sm text-muted-foreground">Tap a tile to jump into Market360.</p>

        <div className="mt-6 grid grid-cols-2 gap-3">
          {mobileTiles.map(({ to, label, desc, Icon, accent }) => (
            <Link
              key={to}
              to={to}
              onClick={onClose}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-4 min-h-[140px] shadow-soft hover:shadow-elevated transition-all"
            >
              <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${accent} opacity-70`} />
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/70 backdrop-blur ring-1 ring-primary/15">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground leading-tight">{label}</p>
                <p className="mt-0.5 text-[11px] text-muted-foreground leading-snug">{desc}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 grid gap-3">
          <Link to="/download" onClick={onClose} className="btn-primary w-full justify-center">
            <Download className="h-4 w-4" /> Download the App
          </Link>
          <Link to="/contact" onClick={onClose} className="btn-ghost w-full justify-center">
            <MessageCircle className="h-4 w-4" /> Contact Sales
          </Link>
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">All pages</p>
          <ul className="mt-3 grid grid-cols-2 gap-y-2">
            {navLinks.map(({ to, label, Icon }) => (
              <li key={to}>
                <Link to={to} onClick={onClose} className="flex items-center gap-2 py-2 text-sm font-medium text-foreground">
                  <Icon className="h-4 w-4 text-primary" /> {label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/about" onClick={onClose} className="flex items-center gap-2 py-2 text-sm font-medium text-foreground">
                <Info className="h-4 w-4 text-primary" /> About
              </Link>
            </li>
            <li>
              <Link to="/safety" onClick={onClose} className="flex items-center gap-2 py-2 text-sm font-medium text-foreground">
                <Shield className="h-4 w-4 text-primary" /> Safety
              </Link>
            </li>
          </ul>
        </div>

        <div className="mt-8 flex gap-2 pb-10">
          {[Twitter, Facebook, Instagram, Linkedin].map((Icon, i) => (
            <a key={i} href="#" className="grid h-11 w-11 place-items-center rounded-full border border-border bg-secondary text-muted-foreground">
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </div>
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
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="flex min-h-dvh flex-col">
      <PageLoader />
      <Header onOpen={() => setMenuOpen(true)} />
      <FullScreenMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
